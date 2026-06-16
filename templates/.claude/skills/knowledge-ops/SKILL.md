---
name: knowledge-ops
description: Build and maintain a team knowledge base — structure, templates, content strategy, and the process to keep it alive. Turns scattered knowledge into findable, trusted documentation. Trigger: /knowledge-ops
---

# /knowledge-ops

Designs and populates a team knowledge base — starting with the structure, then the
templates, then the process that keeps it from going stale in 6 months.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What do you need? (select one)
   - **Design the KB** — structure and information architecture from scratch
   - **Write a doc** — create a specific knowledge base document
   - **Audit the KB** — assess what's missing, stale, or hard to find
   - **Maintenance system** — build the process to keep the KB alive
2. What team or domain is this for? (engineering / product / sales / company-wide / other)
3. What questions does the team currently have to ask each other that should be answered in a doc?
4. What tools are you using or open to? (Notion / Confluence / Coda / Slab / plain Markdown)
5. What's the biggest knowledge gap today?

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Knowledge Ops Output

### KB Structure Design

Recommended information architecture based on team type:

**Engineering KB:**
```
Engineering Wiki/
├── Getting Started/        ← onboarding path (30 min to productive)
├── Architecture/           ← system design, ADRs, diagrams
├── How-To Guides/          ← step-by-step for common tasks
├── Runbooks/               ← incident response procedures
├── API & Services/         ← internal API docs, service inventory
└── Team Processes/         ← PR process, release process, on-call
```

**Business KB:**
```
Team Wiki/
├── Company & Mission/      ← for new hires and alignment
├── Processes/              ← how we do recurring work
├── Templates/              ← copy-paste starting points
├── Decisions/              ← why we do things this way
└── Projects/               ← active project docs
```

**Design principle**: someone new should be productive in one day using only the KB.

### Document Template

```markdown
# [Document Title]

**Last updated**: [date] | **Owner**: [name/role] | **Status**: Current / Outdated / Archived

## TL;DR
[2-3 sentences: what this doc covers, who it's for, what they should do after reading it]

## When to Use This
[Specific situations where this document applies]

## [Main Content Sections]

## Related Docs
- [link to related doc]

## Questions?
[Who to ask / where to discuss]
```

### Content Priority List

Based on the user's answers, rank what to write first:

**P1 — Write this week** (asked ≥3× by different people):
- [topic] — [why it's highest priority]

**P2 — Write this month** (asked sometimes, currently tribal knowledge):
- [topic]

**P3 — Write eventually** (nice to have, not blocking anyone):
- [topic]

### KB Maintenance System

**Ownership**: every doc has an owner. No owner = no accountability = goes stale.

**Review cadence**:
- High-traffic docs (onboarding, runbooks): quarterly
- Process docs: semi-annually
- Architecture/decision docs: on change

**The "make it someone's job" rule**:
One person on the team has KB health as a stated responsibility. Rotating quarterly works.

**Staleness detection**:
- Flag docs not updated in 6+ months
- Add "last verified" dates to procedural docs
- Remove or archive docs that no longer reflect reality

## Step 3 — First Document

Ask: "Do you want me to write the first document for your KB? Tell me the most-asked question your team gets that should have a written answer."
