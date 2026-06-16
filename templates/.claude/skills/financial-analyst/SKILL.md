---
name: financial-analyst
description: Financial analysis toolkit — DCF valuation, budget vs. actuals, scenario planning, and financial model review. Produces analysis you can defend to a CFO. Trigger: /financial-analyst
---

# /financial-analyst

Financial analysis for business decisions — from unit economics to scenario planning
to full DCF valuation. Grounded in numbers, structured for communication.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What do you need? (select one)
   - **DCF valuation** — value a company or investment
   - **Budget vs. actuals** — variance analysis and explanation
   - **Scenario analysis** — model best/base/worst cases
   - **Unit economics** — CAC, LTV, payback, margin analysis
   - **Financial model review** — review an existing model for errors and assumptions
2. Paste or describe the financial data you have
3. What decision will this analysis support?
4. Who is the audience? (CFO / investors / board / internal team)
5. What timeframe? (historical analysis / current period / 3-5 year projection)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Financial Analysis

### DCF Valuation

**Key assumptions** (state these explicitly — a model is only as good as its assumptions):
- Revenue growth rate: [%]
- EBITDA margin trajectory: [% path]
- Discount rate (WACC): [%]
- Terminal growth rate: [%]
- Projection period: [years]

**Valuation output**:

| Scenario | Revenue CAGR | Terminal Multiple | Enterprise Value |
|---|---|---|---|
| Bear | [%] | [X]× | $[M] |
| Base | [%] | [X]× | $[M] |
| Bull | [%] | [X]× | $[M] |

**Sensitivity table** (EV across discount rate × growth rate):

| Discount Rate → | 8% | 10% | 12% |
|---|---|---|---|
| 15% growth | $[M] | $[M] | $[M] |
| 20% growth | $[M] | $[M] | $[M] |
| 25% growth | $[M] | $[M] | $[M] |

**Implied multiples**: [EV/Revenue, EV/EBITDA vs. comparable public companies]

### Budget vs. Actuals

| Line Item | Budget | Actual | Variance ($) | Variance (%) | Explanation |
|---|---|---|---|---|---|
| Revenue | $[X] | $[X] | $[±X] | [±%] | [root cause] |
| COGS | $[X] | $[X] | $[±X] | [±%] | [root cause] |
| Gross Profit | $[X] | $[X] | $[±X] | [±%] | |

**Material variances** (> 5% or > $[threshold]):
For each: what happened, whether it's one-time or recurring, and the revised forecast implication.

**Revised full-year forecast**: [adjusted based on YTD performance]

### Scenario Analysis

| Assumption | Bear | Base | Bull |
|---|---|---|---|
| [key driver] | [low] | [mid] | [high] |
| [key driver] | [low] | [mid] | [high] |

**Output**: [metric] across scenarios with probability weights if estimable.

**Decision implication**: under what scenario does the decision change? That's the critical assumption to stress-test.

## Step 3 — Executive Summary

Ask: "Do you want a one-page executive summary of this analysis — the key finding, the assumption it rests on, and the recommended action — formatted for a board or CFO audience?"
