---
name: experiment-designer
description: Design a rigorous A/B test or experiment — hypothesis, metrics, sample size, test duration, and analysis plan. Prevents the most common experimentation mistakes before you run the test. Trigger: /experiment-designer
---

# /experiment-designer

Designs a rigorous experiment before you run it — because the most expensive mistake
in experimentation is running a test that can't answer the question you're asking.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What change do you want to test? (describe the variant — what's different from control)
2. What is the hypothesis? ("We believe [change] will cause [outcome] because [reason]")
3. What is the primary metric? (the ONE metric that defines success)
4. What secondary metrics matter? (guardrail metrics you don't want to move in the wrong direction)
5. What is your current baseline? (current conversion rate, click rate, or whatever the primary metric is)
6. What minimum effect size would be meaningful? (e.g., "we only care if it moves >5%")
7. What is your weekly traffic or sample volume to the area being tested?

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Experiment Design

### Hypothesis Statement

Rewrite the hypothesis in a testable form:

> "If we [specific change], then [primary metric] will [increase / decrease] by at least [minimum detectable effect] for [target audience], because [mechanism]."

A hypothesis is only useful if it can be falsified. If it can't, flag it.

### Sample Size Calculation

Using standard statistical parameters (adjust if user specifies different):
- Significance level (α): 0.05
- Statistical power (1-β): 0.80
- Minimum detectable effect: [from user input]
- Baseline conversion: [from user input]

Required sample size per variant: **[N]**

If the user's traffic can't reach this, state it clearly: "At your current volume of X visits/week, you need Y weeks. If that's too long, consider [alternative: increase MDE / reduce variants / focus on higher-traffic page]."

### Test Duration

**Minimum duration**: [calculated based on sample size ÷ weekly traffic]
**Recommended duration**: [minimum × 2 weeks to capture day-of-week effects]

Never stop a test early because you see a significant result — this is called "peeking" and produces false positives. Set an end date before starting.

### Variant Specification

| Element | Control | Variant |
|---|---|---|
| [what changes] | [current state] | [new state] |
| [what stays the same] | [same] | [same] |

Anything not listed in this table should be identical between control and variant.

### Metrics Plan

| Metric | Type | Direction | Why it matters |
|---|---|---|---|
| [primary metric] | Primary | ↑ | [what this proves] |
| [guardrail 1] | Guardrail | Must not ↓ | [what breaking this means] |
| [secondary metric] | Informational | Track | [what this tells us] |

### Pre-Mortem

Name the 3 most likely reasons this experiment fails to detect an effect:
1. [e.g., "Not enough traffic — test runs 8 weeks, team loses patience at 4"]
2. [e.g., "Implementation bug in variant — feature flag not applied to mobile"]
3. [e.g., "Novelty effect — users click because it's new, not because it's better"]

### Rollout Plan

- **Ramp**: start at 10% traffic split, monitor for errors 24h, then 50/50
- **Stop conditions**: if [guardrail metric] drops by >X%, stop immediately
- **Decision criteria**: at end date, if primary metric shows ≥ [MDE] at p < 0.05 → ship; otherwise → don't ship (or iterate)

## Step 3 — Analysis Plan

Ask: "Do you want a post-experiment analysis template — the exact queries and statistical tests to run when the experiment ends?"
