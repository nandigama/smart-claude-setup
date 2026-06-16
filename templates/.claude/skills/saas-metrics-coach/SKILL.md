---
name: saas-metrics-coach
description: SaaS metrics analysis and coaching — MRR/ARR, churn, CAC, LTV, NRR, quick ratio, and Rule of 40. Diagnoses what's healthy, what's broken, and what to fix. Trigger: /saas-metrics-coach
---

# /saas-metrics-coach

Analyzes your SaaS metrics, explains what they mean, benchmarks them against the right
comparables, and tells you what to fix — not just what the numbers are.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Provide your current metrics (whatever you have — more is better):
   - MRR / ARR
   - New MRR, Expansion MRR, Churned MRR (for the last period)
   - Gross revenue churn rate
   - Net revenue retention (NRR)
   - CAC (customer acquisition cost)
   - Payback period
   - Gross margin
2. What stage are you at? (pre-revenue / seed / Series A / growth / public)
3. What is your sales motion? (PLG / inbound / outbound / enterprise / channel)
4. What's the strategic question? (are we growing efficiently? / what metric is most broken? / preparing for fundraise?)

Do not produce any output until the user answers all questions.

## Step 2 — Metrics Analysis

### Health Dashboard

| Metric | Your Number | Benchmark (your stage) | Status |
|---|---|---|---|
| MRR Growth (MoM) | [%] | 15-20% (Seed), 10-15% (A), 5-10% (B) | 🟢/🟡/🔴 |
| Gross Revenue Churn | [%] | < 1% monthly (best), < 2% (good) | 🟢/🟡/🔴 |
| Net Revenue Retention | [%] | > 120% (best-in-class), > 110% (good) | 🟢/🟡/🔴 |
| CAC Payback Period | [months] | < 12 mo (good), < 18 mo (acceptable) | 🟢/🟡/🔴 |
| LTV:CAC | [X]× | > 3× (rule of thumb) | 🟢/🟡/🔴 |
| Gross Margin | [%] | > 70% SaaS, > 80% best-in-class | 🟢/🟡/🔴 |
| Rule of 40 | [growth% + margin%] | > 40 = efficient | 🟢/🟡/🔴 |
| Quick Ratio | [new+expansion / churn] | > 4 (best), > 2 (healthy) | 🟢/🟡/🔴 |

### MRR Bridge

Visualize growth quality:

```
Starting MRR: $[X]
+ New MRR:       +$[X]    [% of start]
+ Expansion MRR: +$[X]    [% of start]
- Churned MRR:   -$[X]    [% of start — this is gross churn]
- Contraction:   -$[X]
= Ending MRR:    $[X]     [net growth %]
```

**Growth quality**: if expansion > churn, you have a self-reinforcing revenue engine.
If new logo MRR is > 50% of total new revenue, you're dependent on new sales — churn will compound.

### Diagnosis

**Biggest issue**: [the one metric most at risk of compounding into a bigger problem]
**Root cause hypothesis**: [why is this metric where it is]
**The 90-day fix**: [specific operational change with expected impact]

### Fundraise Readiness (if relevant)

What investors at your next round will focus on:
- Series A: growth rate, NRR, CAC efficiency
- Series B: NRR, gross margin, Rule of 40
- Growth: Rule of 40, efficient growth, path to profitability

Which of your metrics are the strongest narrative for the fundraise? Which will get scrutinized?

## Step 3 — Investor Narrative

Ask: "Do you want me to draft the metrics narrative for your pitch deck — framing your numbers in the most compelling way while being accurate?"
