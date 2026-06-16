---
name: senior-pm
description: Senior project management toolkit — project plans, stakeholder maps, risk registers, status reports, and escalation paths. For PMs running complex cross-functional projects. Trigger: /senior-pm
---

# /senior-pm

Senior project management toolkit for complex cross-functional projects — from initial
planning through delivery. Produces PM artifacts that actually get used.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What do you need? (select one)
   - **Project plan** — timeline, milestones, workstreams
   - **Stakeholder map** — who matters, what they want, how to manage them
   - **Risk register** — identify, score, and plan for project risks
   - **Status report** — weekly/biweekly project status for stakeholders
   - **Escalation** — prepare to escalate a project issue
2. Describe the project: what it is, why it matters, what done looks like
3. What is the timeline and key deadline?
4. Who are the main teams or stakeholders involved?
5. What is the current status or biggest challenge?

Do not produce any output until the user answers all questions.

## Step 2 — Produce the PM Artifact

### Project Plan

**Project brief** (the document that gets everyone aligned):
```
Project: [name]
Owner: [name]
Status: [planning / in progress / at risk / blocked]
Target completion: [date]
Why this matters: [one sentence — business impact]
```

**Milestone timeline**:

| Milestone | Owner | Target Date | Status | Dependencies |
|---|---|---|---|---|
| [milestone] | [team/person] | [date] | Not started / In progress / Done / At risk | [what must happen first] |

**Critical path**: [the sequence of tasks where any delay = project delay]

**Open decisions**: [decisions that must be made before the project can proceed]

### Stakeholder Map

| Stakeholder | Role | Interest | Influence | Engagement Level Needed | Current Sentiment |
|---|---|---|---|---|---|
| [name/role] | [their role in the project] | [what they care about] | H/M/L | Inform / Consult / Collaborate / Lead | Supportive / Neutral / Resistant |

**Manage closely** (high influence, any sentiment):
- [stakeholder] — [specific engagement approach]

**Communication plan**: who gets what, how often, through which channel.

### Risk Register

| Risk | Probability | Impact | Score | Owner | Mitigation | Trigger |
|---|---|---|---|---|---|---|
| [description] | H/M/L | H/M/L | [P×I] | [who owns it] | [what to do proactively] | [what signals this risk is materializing] |

**Top risk**: [highest score] — [one sentence on why it matters most and the mitigation plan]

### Status Report

```markdown
## [Project Name] — Status Report [date]

**Overall Status**: 🟢 On Track / 🟡 At Risk / 🔴 Off Track

### This Period
- [Completed milestone or progress]
- [Completed milestone or progress]

### Next Period
- [Planned milestone]
- [Decision needed from: stakeholder by: date]

### Risks & Issues
| Issue | Impact | Owner | Resolution |
|---|---|---|---|

### Help Needed
[Specific asks — who needs to do what by when to keep the project moving]
```

## Step 3 — Escalation Document

Ask: "Do you want to prepare the escalation — the brief you'd bring to your sponsor or leadership to get a decision, unblock a dependency, or re-scope the project?"
