---
name: product-manager
description: Full PM toolkit — write PRDs, prioritize with RICE, build roadmaps, or translate strategy into sprint-ready stories. Specify the output type and Claude produces it. Trigger: /product-manager
---

# /product-manager

Product management toolkit covering the full PM workflow — from strategy to execution.
Specify what you need and Claude produces it at PM-level quality.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What do you need? (select one)
   - **PRD** — product requirements document for a feature
   - **RICE prioritization** — score and rank a set of initiatives
   - **Roadmap** — quarter or annual roadmap from a set of initiatives
   - **User story** — sprint-ready story with acceptance criteria
   - **Strategy doc** — problem definition + opportunity sizing + approach
2. Describe the feature, initiative, or problem. (as much detail as you have)
3. Who is the user or customer affected?
4. What is the business objective? (revenue / retention / efficiency / growth)
5. What constraints apply? (team size, timeline, dependencies, non-goals)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Output

### PRD Format

```markdown
# [Feature Name] — Product Requirements Document

**Status**: Draft | Review | Approved
**Author**: [name]
**Last updated**: [date]

## Problem Statement
[The user pain or business problem this solves. Why now?]

## Goals
- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]

## Non-Goals
- [Explicitly out of scope]

## User Stories
As a [persona], I want to [action] so that [benefit].

## Requirements

### Must Have (P0)
- [Specific, testable requirement]

### Should Have (P1)
- [...]

### Nice to Have (P2)
- [...]

## Success Metrics
| Metric | Baseline | Target | Timeline |
|---|---|---|---|

## Open Questions
- [ ] [Question] — owner: [name], due: [date]

## Dependencies
- [System / team] — [what's needed from them]
```

### RICE Prioritization

For each initiative provided:

| Initiative | Reach | Impact | Confidence | Effort | RICE Score |
|---|---|---|---|---|---|
| [name] | [users/quarter] | [0.25/0.5/1/2/3] | [%] | [person-weeks] | [R×I×C÷E] |

Sort by RICE score descending. Flag any initiative where confidence is below 50% — assumptions need validation before committing.

### User Story Format

```
Title: [short descriptive title]

As a [specific user type],
I want to [specific action],
So that [specific benefit or outcome].

Acceptance Criteria:
- Given [context], when [action], then [result]
- Given [context], when [action], then [result]

Definition of Done:
- [ ] Unit tests written
- [ ] QA sign-off
- [ ] Analytics event fired
- [ ] Docs updated (if applicable)

Story Points: [estimate]
Dependencies: [other stories or systems]
```

## Step 3 — Stakeholder Communication

Ask: "Do you want me to draft a stakeholder brief summarizing this for an exec or cross-functional review — one page, decision-focused?"
