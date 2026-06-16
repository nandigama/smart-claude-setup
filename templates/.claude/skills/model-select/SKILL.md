---
name: model-select
description: Interactive decision guide for choosing the right Claude model and parameters for any task. Outputs the exact model ID, API parameters, and reasoning. Trigger: /model-select
---

# /model-select

Helps you choose the right Claude model and parameters for any task.
Outputs the exact model ID, the parameters to use, and why — so you can set it directly
in Claude Code settings or your API call.

## Step 1 — Describe the Task

Use AskUserQuestion to ask:

1. Describe the task in one sentence. (What are you asking Claude to do?)
2. How often will you run this? (Once / Recurring / High volume / Automated pipeline)
3. What matters more for this task — quality or cost/speed?
4. Is the task interactive (you'll respond) or fire-and-forget (automated output)?

Do not produce any output until the user answers all four questions.

## Step 2 — Run the Decision Tree

Apply this logic to the user's answers:

```
TASK TYPE → MODEL

Hard reasoning, architecture, strategy, complex debugging, proof-writing
→ claude-opus-4-8
  thinking: { type: "adaptive" }
  effort: "high" (use "xhigh" for long-running agent loops, "max" for the hardest unsolved problems)

Writing drafts, code generation, analysis, summaries, standard Q&A
→ claude-sonnet-4-6
  effort: "medium" (use "high" for complex code or multi-step analysis)

Classification, tagging, extraction at high volume, batching
→ claude-haiku-4-5
  Use Batches API for 50% cost reduction
  max_tokens: 256 (classification) to 1024 (extraction)

Multi-step agentic work (long-running, autonomous, multiple tool calls)
→ claude-opus-4-8
  effort: "xhigh"
  Managed Agents or Claude Code

Default (uncertain task type)
→ claude-sonnet-4-6
  effort: "medium"
```

**Extended Thinking — When to Enable**

Turn ON (`thinking: { type: "adaptive" }`):
- Mathematical or logical proofs
- Architecture decisions with long-term consequences
- Strategic decisions with many competing tradeoffs
- Debugging a non-obvious bug in complex, nested code
- Research synthesis across conflicting or ambiguous sources
- Preparation for high-stakes negotiations or decisions

Keep OFF:
- Conversational replies
- Simple code edits or formatting
- Lookups, summaries, routine Q&A
- Any task where you need a fast response over a perfect one

## Step 3 — Output the Recommendation

Produce this output:

**Recommended Model**: `[exact model ID]`

**Why**: [2 sentences connecting the task to the model's strengths]

**Parameters to use**:
```json
{
  "model": "[exact-model-id]",
  "thinking": { "type": "adaptive" },
  "output_config": { "effort": "[low|medium|high|xhigh|max]" },
  "max_tokens": [number if relevant]
}
```
*(Omit `thinking` if not applicable. Omit `max_tokens` for open-ended tasks.)*

**Cost estimate**: [rough estimate — e.g., "< $0.01 per request" or "~$0.05 per run"]

**Alternative**: If there's a meaningfully cheaper option that covers 90% of the use case,
mention it here in one sentence. Do not offer more than one alternative.

## Reference: All Current Models

| Model | ID | Best For |
|---|---|---|
| Opus 4.8 | `claude-opus-4-8` | Hard reasoning, agents, complex coding |
| Sonnet 4.6 | `claude-sonnet-4-6` | Drafts, standard code, balanced tasks |
| Haiku 4.5 | `claude-haiku-4-5` | Bulk processing, classification, speed |
