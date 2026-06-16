---
name: code-to-prd
description: Reverse-engineer a PRD from existing code, a prototype, or a deployed feature. Produces requirements documentation for something that was built without them. Trigger: /code-to-prd
---

# /code-to-prd

Reads existing code or a feature description and produces the PRD that should have
been written before it was built. Useful for: legacy documentation, handoffs,
compliance requirements, or capturing tribal knowledge before it walks out the door.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What are you documenting? (paste code / describe the feature / provide file paths)
2. What does it do? (brief description of intent — even if incomplete)
3. Who uses it? (the user type or persona)
4. What problem does it solve? (even if you're guessing — we'll validate from the code)
5. Are there known edge cases, limitations, or "gotchas" the team knows about?
6. Who is the audience for this PRD? (engineers / product / stakeholders / compliance)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Reverse-Engineered PRD

### Inferred Problem Statement

Based on the code, describe the problem this feature appears to solve.
Flag assumptions: "This appears to be solving [X] — confirm this is correct before sharing the PRD."

### Observed Behavior (What It Actually Does)

Document what the code/feature does as implemented:

**Happy path**: [the normal flow from input to output]
**Edge cases handled**: [what happens with empty input, errors, boundary values]
**Edge cases NOT handled**: [what would break this — important for the PRD to acknowledge]
**Dependencies**: [external services, data sources, other features it relies on]

### Inferred Requirements

From the implementation, reverse-engineer the requirements:

**Must Have (P0)** — behaviors the code clearly implements:
- [specific, testable requirement derived from code]

**Should Have (P1)** — behaviors partially implemented or implied:
- [requirement + note on current implementation gap]

**Known Gaps** — behaviors missing from current implementation:
- [thing the code doesn't handle that it probably should]

### API / Interface Documentation (if applicable)

```
Endpoint: [method + path]
Input: [parameters with types]
Output: [response shape]
Error states: [error codes and what causes them]
```

### Data Model (if applicable)

| Field | Type | Description | Nullable |
|---|---|---|---|
| [field] | [type] | [what it represents] | Y/N |

### Success Metrics (inferred)

Based on the feature's purpose, what metrics would indicate it's working?
These may need to be validated with the original team.

## Step 3 — Gap Analysis

Ask: "Do you want me to identify what testing, monitoring, or documentation is still missing for this feature to be considered production-complete?"
