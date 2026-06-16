---
name: vendor-management
description: Vendor evaluation, contract review, renewal negotiation, and performance tracking. Makes vendor decisions defensible and vendor relationships productive. Trigger: /vendor-management
---

# /vendor-management

Manages the full vendor lifecycle — from evaluation through contract to renewal.
Produces decision-ready analysis and negotiation-ready documentation.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What do you need? (select one)
   - **Vendor evaluation** — compare vendors for a new purchase
   - **Contract review** — review terms before signing
   - **Renewal negotiation** — prepare to renegotiate at renewal
   - **Performance review** — assess a vendor's delivery against SLA
2. What is the vendor / category? (software / service / infrastructure / other)
3. What is the annual spend or contract value?
4. What is the business problem this vendor is solving?
5. What are your top 3 requirements from this vendor?

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Vendor Management Output

### Vendor Evaluation Scorecard

For each vendor being evaluated:

| Criterion | Weight | Vendor A | Vendor B | Vendor C |
|---|---|---|---|---|
| Fits requirements | 30% | /5 | /5 | /5 |
| Total cost of ownership | 20% | /5 | /5 | /5 |
| Implementation complexity | 15% | /5 | /5 | /5 |
| Vendor stability / longevity | 15% | /5 | /5 | /5 |
| Support quality | 10% | /5 | /5 | /5 |
| Contract flexibility | 10% | /5 | /5 | /5 |
| **Weighted total** | | [score] | [score] | [score] |

**Recommendation**: [vendor] — [2-sentence rationale including the key risk accepted]

### Contract Review

Flag these categories in the contract:

🔴 **Blockers** (must change before signing):
- Auto-renewal clauses (without notice period — minimum 60 days)
- Unilateral price increase rights
- Data ownership ambiguity
- Unlimited liability exposure

🟠 **Negotiate** (push back, accept if needed):
- SLA credits (are they meaningful? Typically 10% of monthly fee for downtime is too low)
- Data portability on termination (you must be able to export your data)
- Notice periods (minimum 30 days for termination)
- IP ownership of custom work

🟡 **Note** (understand, flag for legal):
- Governing law and jurisdiction
- Limitation of liability caps
- Indemnification scope

### Renewal Negotiation Prep

**Your leverage**:
- Usage volume / growth in their product
- Reference value (would you reference them?)
- Competitive alternatives (name them if real)
- Switching cost (both sides know it)

**Your asks** (prioritized):
1. [Primary ask — price / terms / seats / features]
2. [Secondary ask — what you'd trade for primary]
3. [Walk-away condition]

**Concessions you can offer**:
- [Longer commitment term in exchange for better rate]
- [Case study / reference]
- [Expansion commitment]

**Negotiation script opener**: [first thing to say when renewal discussion starts]

### Vendor Performance Review

| SLA Metric | Committed | Actual | Status |
|---|---|---|---|
| Uptime | [%] | [%] | 🟢/🟡/🔴 |
| Response time | [hours] | [hours] | 🟢/🟡/🔴 |
| [custom metric] | [...] | [...] | 🟢/🟡/🔴 |

**Overall rating**: meeting / partially meeting / not meeting expectations
**Escalation needed**: [yes/no — and to whom]
**Action required from vendor**: [specific, time-bound ask]

## Step 3 — Vendor Communication

Ask: "Do you want me to draft the email to the vendor — renewal negotiation opener, performance concern, or contract redline request?"
