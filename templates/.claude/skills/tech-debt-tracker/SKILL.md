---
name: tech-debt-tracker
description: Identify, categorize, and prioritize technical debt in a codebase or system. Produces a debt register with effort/impact scores and a sequenced paydown plan. Trigger: /tech-debt-tracker
---

# /tech-debt-tracker

Produces a structured technical debt register from a codebase, architecture description,
or engineering team's known pain points. Prioritizes by impact-to-effort ratio —
not just by what's oldest or most annoying.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What's the source material?
   - Paste code / architecture description / ADRs
   - Describe pain points the team talks about
   - Provide a list of known issues (however rough)
2. What type of system is this? (monolith / microservices / data pipeline / mobile / other)
3. What are the team's top complaints? ("deploys take 45 minutes", "we're afraid to touch auth", etc.)
4. What is the business context? (shipping velocity priority / reliability priority / upcoming rewrite?)
5. Rough team size and capacity? (how many engineers, how much time per sprint for debt)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Debt Register

For each debt item identified, assess:

| Item | Category | Impact | Effort | Priority | Notes |
|---|---|---|---|---|---|
| [description] | [type] | H/M/L | H/M/L | [score] | [specific risk or context] |

**Categories**:
- **Architecture** — structural decisions that now constrain velocity (monolith coupling, wrong abstraction)
- **Code quality** — complexity, duplication, poor naming, missing tests
- **Infrastructure** — outdated dependencies, manual processes, fragile CI/CD
- **Data** — schema issues, missing indexes, inconsistent models
- **Security** — known vulnerabilities, missing controls, outdated auth patterns
- **Observability** — missing logs, alerts, or tracing that make production incidents hard

**Priority score** (impact × urgency):
- **P1** — High impact, currently causing problems (fix now)
- **P2** — High impact, not yet causing problems (fix this quarter)
- **P3** — Medium impact (schedule into backlog)
- **P4** — Low impact (park or accept)

### Paydown Plan

Group P1 and P2 items into a sequenced plan:

**Sprint 1 (quick wins — high impact, low effort)**
- [item]: [what to do, expected outcome]

**Sprint 2-3 (structural changes)**
- [item]: [what to do, dependencies]

**Quarter goal**
- [the one big debt item that, if addressed, unlocks the most velocity]

### The Debt That Pays for Itself

Identify one item where the cost of addressing it is recovered in saved engineering time
within one quarter. Make the ROI case explicitly.

## Step 3 — Backlog Tickets

Ask: "Do you want me to draft Jira / Linear tickets for the P1 and P2 items — with acceptance criteria, effort estimate, and links between dependent items?"
