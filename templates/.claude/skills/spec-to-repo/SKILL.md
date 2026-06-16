---
name: spec-to-repo
description: Turn a specification, PRD, or feature description into a scaffolded repository plan — directory structure, key files, implementation sequence, and starter code. Trigger: /spec-to-repo
---

# /spec-to-repo

Takes a specification or PRD and produces a concrete repository plan — the folder structure,
key files with their responsibilities, implementation sequence, and starter scaffolding.
Bridges the gap between "we know what to build" and "we know how to start."

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Paste the spec, PRD, or feature description
2. What is the primary language and framework? (TypeScript/Node / Python/FastAPI / Go / other)
3. What type of project? (REST API / CLI tool / web app / library / data pipeline)
4. What already exists? (greenfield / extending existing repo / adding a module)
5. What is the team's deployment target? (cloud / serverless / containerized / bare metal)
6. What's the time horizon? (prototype in 1 week / MVP in 1 month / production in 3 months)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Repository Plan

### Directory Structure

```
project-name/
├── src/
│   ├── [module]/
│   │   ├── [file].ts        # [one-line responsibility]
│   │   └── [file].test.ts   # [what's tested here]
│   ├── [module]/
│   └── index.ts             # entry point
├── tests/
│   └── integration/
├── docs/
├── .github/workflows/
│   └── ci.yml
├── package.json / pyproject.toml
├── Dockerfile
└── README.md
```

Explain: why this structure, not another. What principle governs the module boundaries?

### File Responsibilities

For each non-trivial file, one sentence on what it owns and what it does NOT own:

| File | Owns | Does Not Own |
|---|---|---|
| `src/auth/handler.ts` | HTTP layer, request parsing | Business logic, database |
| `src/auth/service.ts` | Business rules, orchestration | HTTP, persistence |
| `src/auth/repository.ts` | Database queries | Business logic |

### Implementation Sequence

The order to build things — what must exist before what:

1. **[First thing]** — [why this is the foundation]
   - Acceptance criteria: [how you know it's done]
2. **[Second thing]** — [depends on: first thing]
3. **[Third thing]** — ...

Flag: the single biggest technical risk in this build and when it will be discovered.

### Starter Scaffolding

Produce runnable starter code for the most important files — not toy examples, but
the actual structure you'd hand to an engineer on day 1:

```typescript
// src/[module]/service.ts
export class [Name]Service {
  constructor(private readonly repo: [Name]Repository) {}

  async [primaryMethod](input: [InputType]): Promise<[OutputType]> {
    // TODO: implement
  }
}
```

### Key Dependencies

| Dependency | Why | Alternative |
|---|---|---|
| [package] | [specific use] | [what you'd use instead] |

## Step 3 — Implementation Kickoff

Ask: "Do you want me to implement the first module end-to-end — the one that everything else depends on?"
