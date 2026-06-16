---
name: revenue-operations
description: RevOps toolkit — pipeline analysis, funnel metrics, forecasting review, and revenue health dashboards. Surfaces what's working, what's broken, and what to fix. Trigger: /revenue-operations
---

# /revenue-operations

Revenue operations analysis — pipeline health, funnel conversion, forecast accuracy,
and the operational root causes of revenue gaps. Produces findings and fixes, not just charts.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What do you need? (select one)
   - **Pipeline review** — assess pipeline health and coverage
   - **Funnel analysis** — identify conversion drop-offs
   - **Forecast review** — validate and improve forecast accuracy
   - **RevOps audit** — broad health check of your revenue engine
2. Paste or describe your data: (metrics, CRM export, or dashboard screenshots)
3. What is your current ARR / MRR and growth target?
4. What is your sales motion? (PLG / outbound / inbound / enterprise / mixed)
5. What's broken? (what does leadership keep asking about that you don't have a clean answer for?)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the RevOps Analysis

### Pipeline Health

**Pipeline coverage ratio**: pipeline / quota = [X]×
Healthy benchmark: 3-4× for SMB, 4-6× for enterprise, 5-8× for early-stage

**Pipeline age analysis**:
- Deals > 90 days without movement: [% of pipeline]
- Deals with no next step logged: [% of pipeline]
- Stage distribution: [% by stage vs. historical benchmark]

**Quality flags** (deals at risk of not closing as forecast):
| Flag | Impact on Forecast | Action |
|---|---|---|
| [e.g., No economic buyer identified] | [deal value at risk] | [specific step] |

### Funnel Conversion

| Stage | Volume | Conversion to Next | Benchmark | Gap |
|---|---|---|---|---|
| MQL → SQL | [n] | [%] | [%] | [Δ%] |
| SQL → Opp | [n] | [%] | [%] | [Δ%] |
| Opp → Close | [n] | [%] | [%] | [Δ%] |

**Biggest drop-off**: [stage] — [diagnosis + likely cause]
**Highest-leverage fix**: [the one change that most improves total funnel output]

### Key SaaS Metrics

| Metric | Current | Target | Status |
|---|---|---|---|
| CAC | $[X] | $[Y] | 🟢/🟡/🔴 |
| CAC Payback Period | [months] | < 12 mo | 🟢/🟡/🔴 |
| LTV:CAC | [X]× | > 3× | 🟢/🟡/🔴 |
| Churn (gross) | [%] | < [%] | 🟢/🟡/🔴 |
| NRR | [%] | > 110% | 🟢/🟡/🔴 |

**The one metric most at risk**: [metric] — [root cause] — [recommended fix]

### Forecast Review

For commit, best case, and pipeline forecast:
- What assumptions is each tier resting on?
- What is the historical accuracy of each rep's forecast?
- What deals are in commit that have warning signs?

**Forecast call recommendation**: [number + confidence range + key risks]

## Step 3 — Executive Summary

Ask: "Do you want a one-page revenue health summary formatted for the board or leadership team — the key metrics, what's working, what's not, and what we're doing about it?"
