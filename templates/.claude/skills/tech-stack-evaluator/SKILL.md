---
name: tech-stack-evaluator
description: Evaluate and compare technology choices with a structured trade-off analysis — framework, database, cloud provider, language, or any architectural decision. Produces a scored comparison and a clear recommendation. Trigger: /tech-stack-evaluator
---

# /tech-stack-evaluator

Evaluates competing technology options using a structured framework — not opinion,
but a scored analysis against dimensions that actually matter for your context.
Produces a recommendation you can defend to your team.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What decision are you making? (framework / database / cloud / language / messaging system / other)
2. What are the options you're considering? (list 2-5 — we'll add obvious alternatives if any are missing)
3. What are your top 3 constraints? (e.g., "team knows Python", "must be self-hostable", "< $500/month infra cost")
4. What does the system need to do? (scale, data model, query patterns, team size, longevity)
5. What's the risk of getting this wrong? (can pivot in 3 months / hard to change / locked in for years)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Evaluation

### Scoring Matrix

Weight each dimension based on the user's constraints (1–5 scale for each option):

| Dimension | Weight | Option A | Option B | Option C |
|---|---|---|---|---|
| Team familiarity | [1-3×] | /5 | /5 | /5 |
| Ecosystem maturity | [1-3×] | /5 | /5 | /5 |
| Performance at target scale | [1-3×] | /5 | /5 | /5 |
| Operational complexity | [1-3×] | /5 | /5 | /5 |
| Cost (infra + licensing) | [1-3×] | /5 | /5 | /5 |
| Community + longevity | [1-3×] | /5 | /5 | /5 |
| Fits constraints | [1-3×] | /5 | /5 | /5 |
| **Weighted total** | | **[n]** | **[n]** | **[n]** |

### Per-Option Narrative

For each option, in 3-5 sentences: the core strength, the key weakness, and the specific scenario where it wins.

### Recommendation

State the recommendation directly:

> "Choose [Option X]. The weighted score reflects [primary reason]. The main thing you're accepting is [trade-off], which is manageable because [context]."

**Red flags to watch for**: if you choose X, these are the early warning signs it's not working — and the trigger to reconsider.

**What would change this recommendation**: specific conditions that would flip the answer (e.g., "if your team is >20 engineers, the operational overhead of Y becomes worth it").

## Step 3 — Migration Path

Ask: "Do you want a migration plan — how to move from your current stack to the recommended option with minimal disruption?"
