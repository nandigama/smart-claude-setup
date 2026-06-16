---
name: agent-designer
description: Design an AI agent architecture from scratch — roles, tools, memory, orchestration pattern, and failure modes. Produces a complete agent spec ready for implementation. Trigger: /agent-designer
---

# /agent-designer

Designs a complete AI agent architecture — from the problem it solves through the specific
tools it needs, memory strategy, orchestration pattern, and how it fails safely.
Output is an implementable spec, not a vague diagram.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What should this agent do? (describe the task it must accomplish end-to-end)
2. What inputs does it receive? (user message / file / API event / scheduled trigger / other)
3. What output or action does it produce? (text response / file / API call / database write / notification)
4. What external tools or systems must it interact with? (databases, APIs, file systems, browsers)
5. Does it need memory across sessions? (yes — state matters / no — each run is independent)
6. Will multiple agents coordinate, or is this a single agent? (single / multi-agent with orchestration)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Agent Spec

### Agent Profile

**Name**: [descriptive name]
**Purpose**: [one sentence — what it does and for whom]
**Trigger**: [what starts the agent running]
**Success condition**: [how you know it worked]

### Tool Inventory

For each tool the agent needs:

| Tool | Type | Purpose | Input | Output |
|---|---|---|---|---|
| [name] | [read / write / execute / search] | [why the agent needs it] | [what it passes in] | [what it gets back] |

### Memory Strategy

Choose the appropriate pattern:

- **No memory** — each invocation is stateless; all context comes from the input
- **Short-term (in-context)** — conversation history maintained within the session
- **Long-term (external store)** — key facts persisted to a database, retrieved via embeddings
- **Episodic** — recent actions stored and surfaced as context for similar future tasks

Specify: what gets stored, when, and how it's retrieved.

### Orchestration Pattern

Select the appropriate pattern with justification:

| Pattern | When to use |
|---|---|
| **ReAct (reason + act loop)** | Open-ended tasks where the agent must plan and adapt |
| **Plan-then-Execute** | Tasks with a predictable sequence of steps |
| **Supervisor + Workers** | Multi-agent: one planner, N specialized executors |
| **Parallel fan-out** | Independent subtasks that can run concurrently |
| **Critique loop** | Output requires self-evaluation before delivery |

### Failure Modes and Guardrails

| Failure Mode | Likelihood | Guardrail |
|---|---|---|
| [e.g., tool call returns empty] | High / Med / Low | [specific handling] |
| [e.g., LLM hallucinates a tool argument] | Med | [validation step] |
| [e.g., infinite loop on ambiguous task] | Low | [max iterations + fallback] |

### Implementation Notes

Recommended model per role:
- Orchestrator: `claude-opus-4-8` (adaptive thinking, effort: xhigh)
- Specialized workers: `claude-sonnet-4-6` (effort: medium)
- Classification / routing: `claude-haiku-4-5`

Recommended framework: Claude Code (native MCP tool support) or bare API with tool_use.

## Step 3 — Implementation Kickoff

Ask: "Do you want me to scaffold the implementation? I can produce: (a) the system prompt for the orchestrator, (b) tool definitions in JSON schema, or (c) a starter Python/TypeScript file with the agent loop."
