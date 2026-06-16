---
name: ux-researcher
description: User research workflows — interview guide design, synthesis, insight extraction, and persona development. Produces research artifacts ready to share with product and design teams. Trigger: /ux-researcher
---

# /ux-researcher

Produces user research artifacts — interview guides, synthesis frameworks, insight reports,
and personas — grounded in what you already know about your users.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What research output do you need?
   - **Interview guide** — questions for user interviews
   - **Synthesis** — make sense of interviews you've already run
   - **Insight report** — distill findings into shareable insights
   - **Persona** — build a user persona from research data
2. What is the research question? (what do you need to understand about your users?)
3. Who is the user? (role, context, what they're trying to accomplish)
4. What do you already know? (assumptions, hypotheses, prior research)
5. What decisions will this research inform? (what will the team do differently based on findings?)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Research Artifact

### Interview Guide

Structure: 60 minutes / 10-12 questions / 4 sections

**Opening (5 min)**
- Rapport building: "Tell me about your role and what a typical day looks like."
- Context setting: ground them in the specific domain before asking about the product

**Background (10 min)**
- Understand the user's workflow and context before the product enters the picture
- Questions about their process, not about the product: "Walk me through how you currently handle [task]."

**Core Research Questions (30 min)**
For each key research question, write 2-3 questions:
- Start broad, get specific: "Can you tell me about a time when..."
- Probe for behavior, not opinion: "What did you do?" not "What would you do?"
- Follow-up probes: "What made that difficult?" / "What happened next?" / "Who else was involved?"

**Closing (15 min)**
- "If you could change one thing about how you [task area], what would it be?"
- "Is there anything I didn't ask that you think is important?"
- "Who else should I talk to?"

**Interviewer notes**: avoid leading questions, embrace silence after answers, don't pitch the product.

### Synthesis Framework

After running interviews, use affinity clustering:

**Step 1 — Dump**: one observation per sticky note (digital or physical)
**Step 2 — Group**: cluster by theme without naming the clusters yet
**Step 3 — Name**: give each cluster a name that captures the insight, not just the topic

Output clusters as:

**Theme: [Name]**
Evidence: [3-5 direct quotes or observations]
Insight: [what this means for design/product]
Frequency: [how many participants showed this / how strongly]

### Insight Report

```markdown
# Research Findings: [Topic]

**Method**: [interviews / usability tests / survey]
**Participants**: [N users, ICP description]
**Date**: [date range]

## Key Findings

### Finding 1: [Insight headline — active voice, specific]
[2-3 sentence explanation]
Evidence: "[direct quote]" — [participant descriptor]

### Finding 2: ...

## Implications

| Finding | Implication for Product | Priority |
|---|---|---|
| [finding] | [what to do or avoid] | H/M/L |

## Open Questions
[What we still don't know — next research to run]
```

### Persona

```markdown
# [Persona Name] — [Archetype Label]

**"[Quote that captures their worldview]"**

## Who They Are
[Role, company type, 2-3 sentences about their context]

## Goals
- [Primary goal]
- [Secondary goal]

## Frustrations
- [Specific pain point]
- [Specific pain point]

## Behaviors
- [How they currently solve the problem]
- [Tools they use]
- [How they make decisions]

## What Makes Them Successful
[The conditions under which they thrive]
```

## Step 3 — Stakeholder Presentation

Ask: "Do you want a 5-slide research readout deck outline — finding per slide, with the supporting evidence and product implication formatted for a leadership audience?"
