# 8. Pick the Right Model for the Job

Running everything on one model is like using a chef's knife to open mail.

## The Three Models

| Model | ID | Best For |
|---|---|---|
| **Opus 4.8** | `claude-opus-4-8` | Hard reasoning, complex coding, long-running agents |
| **Sonnet 4.6** | `claude-sonnet-4-6` | Drafts, standard code, balanced tasks — the right default |
| **Haiku 4.5** | `claude-haiku-4-5-20251001` | Bulk processing, classification, extraction at scale |

## The Decision

**Start here**: What type of task is this?

```
Hard reasoning, architecture, strategy, complex debugging
→ claude-opus-4-8

Drafts, code generation, standard analysis, Q&A
→ claude-sonnet-4-6   ← right default for most things

Classification, tagging, extraction at high volume
→ claude-haiku-4-5-20251001

Long-running agent workflows (multiple tool calls, autonomous)
→ claude-opus-4-8 (effort: xhigh)
```

When uncertain: **Sonnet 4.6**. It's the right middle ground.

## The Effort Levels

Within Opus 4.8 and Sonnet 4.6, you can set the effort level:

| Effort | When to Use |
|---|---|
| `low` | Simple lookups, conversational replies |
| `medium` | Standard drafts, routine code generation (default) |
| `high` | Complex tasks, architecture decisions |
| `xhigh` | Coding agents, long multi-step tasks |
| `max` | The hardest unsolved problems (use sparingly) |

## The Cost Reality

Higher quality costs more. But the cost of re-doing a wrong output is also real.

| Task | Haiku 4.5 | Sonnet 4.6 | Opus 4.8 |
|---|---|---|---|
| Simple Q&A | $0.001 | $0.003 | $0.010 |
| 5-page document | not recommended | $0.05 | $0.15 |
| 100 classifications | $0.02 (batch) | $0.06 | $0.20 |
| Architecture review | not recommended | $0.10 | $0.30–1.00 |

*Rough estimates. Actual costs depend on token usage.*

**The real cost question**: What does it cost when the output is wrong?

For a throwaway draft: use Sonnet, accept a few iterations.
For a board presentation: use Opus, get it right the first time.

## Changing Models

**Claude.ai**: Use the model selector in the chat window.

**Claude Code**: Set in your project's `.claude/settings.json`:
```json
{
  "model": "claude-sonnet-4-6"
}
```

**API**: Pass the `model` parameter in your request.

## The Shortcut

Run `/model-select` in Claude Code for an interactive guide that outputs the exact model ID
and parameters for your specific task.

See [Model Decision Matrix](/reference/model-decision-matrix) for the complete decision logic.
