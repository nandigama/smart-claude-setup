---
name: customer-success-manager
description: CSM toolkit — health scoring, QBR preparation, churn risk assessment, expansion playbooks, and customer communication. Trigger: /customer-success-manager
---

# /customer-success-manager

Customer success workflows for CSMs — health scoring, QBR preparation, churn risk detection,
and expansion plays. Produces outputs you can use directly with customers.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What do you need? (select one)
   - **Health score** — assess a customer's health and risk level
   - **QBR prep** — prepare for a quarterly business review
   - **Churn risk** — analyze signals and build a save plan
   - **Expansion play** — identify and build the case for upsell/expansion
   - **Customer comms** — draft a specific customer-facing communication
2. Describe the customer: company, size, contract value, how long they've been a customer
3. What is their use case? (what problem are they solving with your product)
4. What signals do you have? (login frequency, feature adoption, support tickets, NPS, recent conversations)
5. What's the relationship like? (champion engaged / sponsor changed / going cold / strong advocate)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the CSM Output

### Health Score

Assess across four dimensions:

| Dimension | Signal | Score (1-5) | Notes |
|---|---|---|---|
| **Adoption** | Feature usage, login frequency | | |
| **Outcomes** | Are they getting value? Do they know it? | | |
| **Relationship** | Engagement with CSM, exec access | | |
| **Commercial** | Renewal timing, expansion signal | | |

**Overall health**: 🟢 Healthy / 🟡 At Risk / 🔴 Critical

**Primary risk factor**: the single thing most likely to cause churn.
**Recommended action**: the one thing to do in the next 2 weeks.

### QBR Prep Package

**Agenda** (45-60 min):
1. Their goals for the period (start with them, not you)
2. Progress against those goals (with your data)
3. What's worked / what's been hard
4. Roadmap items relevant to their use case
5. Goals for next quarter
6. Commercial discussion (if renewal timing is right)

**Data to pull**: [specific metrics to bring — tied to their stated goals, not generic platform stats]

**Champion talking points**: [what to say to keep your champion looking good to their boss]

**Risk items to address proactively**: [don't wait for them to bring it up]

### Churn Risk & Save Plan

**Risk assessment**: what signals indicate churn risk, and how severe?

**Root cause hypothesis**: why are they at risk? (not getting value / internal champion left / competitor / price / product gap)

**Save plan**:
- Immediate action (this week): [specific outreach or intervention]
- 30-day plan: [concrete steps with owners]
- Success criteria: [how you'll know the relationship is back on track]
- Escalation trigger: [if X happens, escalate to VP CS / CEO]

### Expansion Play

**Opportunity**: [what product / tier / seats / module]
**Business case for them**: [the ROI or outcome they'd get]
**Internal champion**: [who to sell to internally at the customer]
**Timing**: [why now is the right moment]
**Objections to anticipate**: [what they'll push back on]

## Step 3 — Customer Email

Ask: "Do you want me to draft the customer-facing email or Slack message for the next step in this playbook?"
