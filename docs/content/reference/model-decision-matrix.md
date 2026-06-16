# Model Decision Matrix

Complete decision logic for picking the right Claude model and parameters.

## Primary Decision: Task Type

```
┌─────────────────────────────────────────────────────────────────┐
│ HARD REASONING                                                    │
│ Architecture · Strategy · Complex debugging · Proofs             │
│ → claude-opus-4-8                                                 │
│   thinking: { type: "adaptive" }                                  │
│   output_config: { effort: "high" }                               │
├─────────────────────────────────────────────────────────────────┤
│ DRAFTS & GENERATION                                               │
│ Writing · Code generation · Analysis · Standard Q&A              │
│ → claude-sonnet-4-6   ← right default for most tasks             │
│   output_config: { effort: "medium" }                             │
│   (use effort: "high" for complex code or multi-step analysis)    │
├─────────────────────────────────────────────────────────────────┤
│ BULK PROCESSING                                                    │
│ Classification · Tagging · Extraction · High-volume pipelines     │
│ → claude-haiku-4-5                                                │
│   Use Batches API for 50% cost reduction                          │
│   max_tokens: 256 (classification) to 1024 (extraction)           │
├─────────────────────────────────────────────────────────────────┤
│ AGENTIC LOOPS                                                     │
│ Long-running · Multi-step · Autonomous · Multiple tool calls      │
│ → claude-opus-4-8                                                 │
│   thinking: { type: "adaptive" }                                  │
│   output_config: { effort: "xhigh" }                              │
└─────────────────────────────────────────────────────────────────┘
```

## Secondary Decision: Extended Thinking

Extended thinking gives Claude time to reason before responding.
The output quality on hard problems is substantially better.

**Turn ON** (`thinking: { type: "adaptive" }`):
- Mathematical or logical proof
- Architecture decision with long-term consequences
- Strategic decision with many competing tradeoffs
- Debugging a non-obvious bug in complex, nested code
- Research synthesis across conflicting sources
- High-stakes negotiation or decision preparation

**Keep OFF** (omit `thinking` parameter):
- Conversational replies
- Simple code edits or formatting
- Direct lookups and summaries
- Tasks where speed matters more than perfection

## Effort Levels

| Level | When to Use |
|---|---|
| `low` | Simple lookups, conversational replies |
| `medium` | Standard drafts, routine code generation **(default)** |
| `high` | Complex tasks, architecture decisions, long documents |
| `xhigh` | Agentic loops, coding agents, long multi-step work |
| `max` | The hardest unsolved problems (expensive — use sparingly) |

## Model Reference

| Model | Exact ID | Context | Best For |
|---|---|---|---|
| Opus 4.8 | `claude-opus-4-8` | 1M tokens | Hard reasoning, agents, complex code |
| Sonnet 4.6 | `claude-sonnet-4-6` | 1M tokens | Drafts, standard code, balanced tasks |
| Haiku 4.5 | `claude-haiku-4-5` | 200K tokens | Bulk processing, speed, cost |

## Cost Guide (Approximate)

| Task | Haiku 4.5 | Sonnet 4.6 | Opus 4.8 |
|---|---|---|---|
| Simple Q&A (200 tokens) | $0.001 | $0.003 | $0.010 |
| Standard code task | $0.004 | $0.015 | $0.050 |
| 5-page document | — | $0.05 | $0.15 |
| 100 classifications | $0.02 (batch) | $0.06 | $0.20 |
| Architecture review + thinking | — | $0.10 | $0.30–$1.00 |

*Costs are approximate and change as pricing updates. Always check official pricing for budget-sensitive decisions.*

## Example API Parameters

**Hard reasoning with extended thinking**:
```json
{
  "model": "claude-opus-4-8",
  "thinking": { "type": "adaptive" },
  "output_config": { "effort": "high" },
  "max_tokens": 4096
}
```

**Standard draft (Sonnet default)**:
```json
{
  "model": "claude-sonnet-4-6",
  "output_config": { "effort": "medium" },
  "max_tokens": 2048
}
```

**Bulk classification (Haiku + Batch API)**:
```json
{
  "model": "claude-haiku-4-5",
  "max_tokens": 256
}
```

**Long-running agent**:
```json
{
  "model": "claude-opus-4-8",
  "thinking": { "type": "adaptive" },
  "output_config": { "effort": "xhigh" }
}
```

## Interactive Guide

Run `/model-select` in Claude Code for an interactive version that walks through
the decision tree and outputs parameters for your specific task.
