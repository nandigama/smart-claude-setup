---
name: py-clean-arch
description: Apply the pragmatic Clean Architecture pattern (four virtual layers — domain, application, infrastructure, serving) when scaffolding a new Python AI project (agents, workflows, LLM apps) or when reviewing existing Python AI code for structural problems. Trigger on requests to create, structure, organize, scaffold, or review the architecture of a Python agent/workflow/LLM project.
license: Personal use
---

# Python AI Architecture (Pragmatic Clean Architecture)

Source principle: Clean Architecture, adapted loosely for Python AI projects (agents, workflows, LLM apps). Treat the four layers below as **virtual concepts that govern dependency direction**, not as a mandatory folder hierarchy. Do not force every file into a rigid `domain/`, `application/`, `infrastructure/`, `interface/` folder set.

## The Four Virtual Layers

1. **Domain ("What")** — Entities (Pydantic models, e.g. `Article`, `Context`) and Nodes (self-contained units of AI logic, e.g. `ArticleWriterNode`, `ReviewerNode`). A node holds its prompt and logic but does not know which LLM, database, or API it will ultimately use. A node's prompt lives in the same file as the node class; if a prompt is shared across multiple nodes, put it in `nodes/prompts.py`. Never place a domain node's prompt inside `workflows/` — that creates an inward dependency from domain back to application.
2. **Application ("How")** — Orchestration. Workflows built with LangGraph, DBOS, Prefect, or plain Python that sequence domain nodes into a use case (e.g. "research, then write, then review"). This layer is isolated from how data is stored or how a user triggers it.
3. **Infrastructure ("External Dependencies")** — Concrete implementations: specific LLM providers (OpenAI, Gemini, Anthropic), databases (Postgres, SQLite, Qdrant), storage (local disk, S3), and observability/tracing.
4. **Serving ("Interface")** — How the outside world reaches the app: a CLI, a REST API, or an MCP server. `mcp/` in the structure below is one example serving module, not the only one — a project exposing a REST API instead (or in addition) should add `api/`, and a CLI-only project should use `cli/`. Group them under a `serving/` parent only if there are two or more; otherwise a single top-level module is fine.

### The Dependency Rule, concretely

Dependencies point inward only. Domain and application code must never import from infrastructure or serving. Infrastructure and serving may depend on application and domain.

```python
# Correct — domain depends on nothing external
# src/myapp/entities/article.py
from pydantic import BaseModel

class Article(BaseModel):
    title: str
    body: str
```

```python
# Violation — domain importing a concrete infrastructure class
# src/myapp/nodes/article_writer.py
from myapp.models import GeminiModel  # WRONG: depend on BaseLLM instead
```

Quick lint check: domain modules (`entities/`, `nodes/`) and application modules (`workflows/`, `evals/`) should never import from `models/`, `memory/`, `loaders/`, `mcp/`, or `api/`. A one-line grep to catch this:

```bash
grep -rn "from myapp.models\|from myapp.memory\|from myapp.loaders\|from myapp.mcp" src/myapp/entities/ src/myapp/nodes/ src/myapp/workflows/
```

This grep is a spot-check, not a CI gate — it misses `import myapp.models` (non-`from` form), relative imports, and dynamic imports. For an enforced gate, point the team at an AST-based tool such as `import-linter`; do not build that tooling inline in this skill.

### Allowed and Forbidden Imports (Including Within Domain)

```
Allowed:
  entities/                  -> utils/ (pure helpers only)
  nodes/                     -> entities/, utils/, base.py
  workflows/, evals/         -> entities/, nodes/, base.py, builders.py
  models/, memory/, loaders/ -> base.py, config.py
  mcp/, api/, cli/           -> workflows/, builders.py, config.py

Forbidden:
  entities/, nodes/          -> workflows/, models/, memory/, loaders/, mcp/, api/, cli/
  workflows/, evals/         -> models/, memory/, loaders/, mcp/, api/, cli/
```

**Polymorphism over hardcoding:** the application layer should depend on an interface (e.g. `BaseLLM`, `BaseLoader`, `BaseMemory`), never directly on a concrete class like `GeminiModel`. A **Builder** reads configuration, instantiates the concrete infrastructure, and injects it into the orchestrator. This is what allows swapping a live model for a fake one in tests, or a local file loader for an S3 loader, by changing configuration rather than code.

## Recommended Project Structure

Use `uv` for environment and dependency management (`pyproject.toml`), a `Makefile` for command shortcuts, a `configs/` directory for YAML configuration, and an `inputs/` directory for guidance or research documents. Use the `src/<package_name>/` layout so the code installs as a proper package. Keep CLI entry points in `scripts/`, exploration in `notebooks/`, and tests in `tests/` — these import the package and contain no business logic of their own.

Inside `src/<package_name>/`, keep a **flat** structure, one folder per concern, with no nested layer folders:

```
src/<package_name>/
├── entities/       # Domain: Pydantic data models
├── nodes/          # Domain: actionable AI units (prompt + logic)
├── workflows/      # Application: orchestrators
├── evals/          # Application: evaluation logic
├── models/         # Infrastructure: LLM provider implementations
├── memory/         # Infrastructure: storage implementations
├── observability/  # Infrastructure: monitoring and tracing
├── mcp/            # Serving: MCP server (swap/add api/, cli/ as needed)
├── utils/          # Shared utility functions
├── base.py         # Interfaces: abstract base classes
├── builders.py     # Application: dependency injection
├── loaders.py      # Infrastructure: file/data loaders
└── config.py       # Configuration
```

**Two axes, not a contradiction:** flat *across layers* (no `domain/`, `application/`, `infrastructure/` wrapper folders), but nested *by feature* within a layer when a feature has multiple files that change together:

```
src/<package_name>/
└── workflows/
    ├── code_reviewer/
    │   ├── prompts.py
    │   ├── nodes.py
    │   └── workflow.py
    └── code_generator/
        ├── prompts.py
        ├── nodes.py
        └── workflow.py
```

Rule of thumb: if you cannot copy-paste a single feature folder into another project and have it still make sense, the feature is too scattered — consolidate it.

### Naming and Size Notes

- **`models/` means LLM provider clients (API wrappers like `GeminiModel`), not machine learning model weights or Pydantic schemas.** Pydantic schemas live in `entities/`. If a project has actual ML model artifacts in addition to LLM provider clients, give those their own folder (e.g. `weights/` or `artifacts/`) rather than overloading `models/`.
- **`utils/` is a known dumping-ground anti-pattern — keep it narrow.** A function only belongs in `utils/` if it has no side effects, imports nothing else from the package, and is used by more than one module. If a helper is used by only one module, it lives in that module, not in `utils/`.
- **`base.py` holds interfaces only, and should stay small.** If it exceeds roughly 150 lines or four distinct interfaces, split into separate files (`base_llm.py`, `base_memory.py`, etc.) at the package root — do not nest these under an `interfaces/` folder unless there are five or more.
- **`loaders.py` starts as a single file.** Promote it to a `loaders/` package, following the same threshold as `builders.py`, once there are two or more loader implementations (e.g. local disk and S3).

## Configuration and Secrets

`configs/` holds YAML/JSON configuration files, one per environment if needed. `config.py` defines the schema (e.g. via `pydantic-settings`) and is infrastructure-adjacent.

**Rule:** domain and application code never call `os.environ` or read files directly. They receive configuration as an injected object, via the builder.

```python
# builders.py
from myapp.config import AppConfig
from myapp.models import GeminiModel

def build_llm(config: AppConfig) -> BaseLLM:
    return GeminiModel(api_key=config.llm_api_key, model=config.llm_model)
```

## The Builder Pattern, concretely

`builders.py` is the one place allowed to know about concrete classes. A minimal builder selects an implementation based on config:

```python
# builders.py
from myapp.config import AppConfig
from myapp.base import BaseLLM, BaseMemory
from myapp.models import GeminiModel, OpenAIModel
from myapp.memory import ChromaMemory, InMemoryMemory

class AppBuilder:
    def __init__(self, config: AppConfig):
        self.config = config

    def build_llm(self) -> BaseLLM:
        if self.config.llm_provider == "gemini":
            return GeminiModel(api_key=self.config.llm_api_key)
        return OpenAIModel(api_key=self.config.llm_api_key)

    def build_memory(self) -> BaseMemory:
        if self.config.env == "test":
            return InMemoryMemory()
        return ChromaMemory(path=self.config.memory_path)
```

If `builders.py` grows past roughly 200 lines, split by infrastructure concern (`llm_builders.py`, `memory_builders.py`) rather than letting it become a single god-file — but keep the split files in the same flat directory, not in nested subfolders.

## Evaluation Boundaries (`evals/`)

`evals/` contains evaluation harnesses that treat the workflow as a black box: given inputs, assert on outputs. Eval code imports from `workflows/` and `entities/`, never from `models/` or `memory/` directly. If a node needs to be evaluated in isolation, expose it through the workflow's interface rather than importing the node class directly into an eval script — otherwise the eval silently bypasses the orchestration it is meant to validate.

## Observability Boundaries

Domain and application code emit structured log events or domain events (e.g. `logger.info("article.generated", extra={"article_id": ...})`) and nothing more. The `observability/` infrastructure module owns the sinks — OpenTelemetry, LangSmith, Weights & Biases, or similar. Domain nodes and application workflows never import a tracing or experiment-tracking SDK directly; that import belongs in `observability/`, wired in through the builder like any other infrastructure dependency.

## Testing Strategy

- Unit tests for `entities/` and `nodes/`, using fakes injected via the builder.
- Integration tests for `workflows/`, using test memory and a cheap or fake LLM.
- End-to-end tests in `tests/e2e/` that exercise the serving layer (CLI, API, or MCP) against real infrastructure in a sandbox environment.
- Rule: tests never import from `models/` or `memory/` directly — they request implementations from a builder constructed with test configuration, the same path production code uses.

To avoid duplicating builder setup across test files, share one fixture in `tests/conftest.py`:

```python
# tests/conftest.py
import pytest
from myapp.config import AppConfig
from myapp.builders import AppBuilder

@pytest.fixture
def test_builder() -> AppBuilder:
    return AppBuilder(AppConfig(env="test", llm_provider="fake"))
```

Every test requests implementations through `test_builder`, never by importing a concrete class directly.

## When Scaffolding a New Project

1. Confirm the package name and the primary serving interface (CLI, REST API, or MCP server) before generating files.
2. Create `pyproject.toml` (uv-managed), `Makefile`, `configs/`, `inputs/`, `scripts/`, `notebooks/`, `tests/`, and `src/<package_name>/`.
3. Inside the package, create the flat folders above, scoped to what the project actually needs — do not pre-create every folder if a layer is not yet in use.
4. Define interfaces (`base.py`) before concrete implementations, so nodes and workflows depend on the interface, not the implementation.
5. Write `builders.py` (or split builder modules) so it is the only place that imports concrete infrastructure classes.
6. Wire `config.py` and `configs/` before writing any node or workflow that needs settings — never let a node reach for `os.environ` directly.

## When Reviewing Existing Python AI Code

Work through this in order; stop at the first violation type found in a given file and flag it before checking the next:

```
Is this file in entities/, nodes/, workflows/, or evals/?
  -> Does it import from models/, memory/, loaders/, mcp/, or api/?
      YES -> Violation: inward dependency. Introduce/restore an interface in base.py.
      NO  -> Does it instantiate a concrete infra class itself (e.g. GeminiModel(...))?
          YES -> Violation: hardcoded infrastructure. Route through builders.py.
          NO  -> Does it call os.environ or read a config file directly?
              YES -> Violation: config leak. Inject config via the builder instead.
              NO  -> Check folder structure (below).
```

Folder-structure violations, independent of the import check above:

1. **Rigid layer folders.** Top-level `domain/`, `application/`, `infrastructure/`, `interface/` directories that force every file into one bucket, especially where this creates circular imports or ambiguous placement (e.g., a `User` model with database annotations — does it belong to `domain` or `infrastructure`?). Recommend flattening into concern-named folders instead.
2. **Folder-per-type ("organize by actionability" violation).** Separate `/prompts`, `/nodes`, `/chains` folders where a single feature's logic is scattered across all three. Detect by checking whether the same feature name appears as a file in three different top-level folders — if so, the feature is scattered. Recommend consolidating each feature into one self-contained module or package.
3. **Eval bypass.** An eval script importing a node or model class directly instead of going through the workflow interface (see Evaluation Boundaries above).
4. **Observability leak.** A node or workflow importing `langsmith`, `wandb`, or `opentelemetry` directly instead of going through `observability/`.
5. **Over-engineering.** Abstractions built for infrastructure that will never realistically be swapped (e.g., a generic ORM abstraction layer when there is no plan to leave Postgres). Real, but lower priority than violations 1 through 4 — flag as a simplification opportunity, not a structural defect. Apply the Pragmatism Rule below before flagging this.

## The Pragmatism Rule

Decouple (introduce an interface and a builder) when any of the following hold:

- Two or more concrete implementations already exist or are about to.
- Swapping the implementation is on the roadmap within roughly six months.
- The component needs to be replaced with a fake or mock for unit testing.

Do not decouple when none of the above hold — for example, a project committed to Postgres indefinitely does not need a generic database abstraction just in case. Python is not Java; prioritize a system that is easy to change, easy to test, and easy to understand over one that is architecturally "pure."
