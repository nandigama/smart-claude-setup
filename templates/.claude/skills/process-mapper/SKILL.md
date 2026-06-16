---
name: process-mapper
description: Document and analyze a business process — map the current state, identify bottlenecks and waste, and design the improved future state. Trigger: /process-mapper
---

# /process-mapper

Maps a business process from current state to optimized future state — surfaces where
time is wasted, where handoffs break down, and what the improved version looks like.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What process are you mapping? (describe it in one sentence)
2. What triggers the process? (customer request / internal event / scheduled / ad-hoc)
3. Walk through it step by step — who does what, in what order?
4. What is the desired outcome when the process works perfectly?
5. Where does it break down or slow down today?
6. Who are the stakeholders (roles, not names) involved?

Do not produce any output until the user answers all questions.

## Step 2 — Process Map and Analysis

### Current State Map

Document the process as a numbered sequence:

| Step | Who | Action | Input | Output | Typical Time | Pain Points |
|---|---|---|---|---|---|---|
| 1 | [role] | [action] | [what they receive] | [what they produce] | [time] | [friction] |

**Total cycle time**: [sum of step times]
**Handoffs**: [count — each handoff is a risk point]

### Waste Analysis

Identify waste in the current process:

| Waste Type | Where It Occurs | Impact |
|---|---|---|
| **Waiting** | [step where work sits idle] | [time wasted] |
| **Rework** | [step where errors create loops] | [cost] |
| **Handoff gaps** | [step where context is lost between people] | [errors + delays] |
| **Manual steps** | [steps that could be automated] | [time + error rate] |
| **Unclear ownership** | [steps where nobody knows who's responsible] | [delays] |

**Bottleneck**: the one step that constrains the whole process.

### Future State Design

Proposed improved process:

| Step | Who | Action | Change from Current |
|---|---|---|---|
| 1 | [role] | [action] | [new / removed / automated / simplified] |

**Changes made**:
- Eliminated: [steps removed and why]
- Automated: [steps that can be automated + suggested tool]
- Resequenced: [steps moved and why]
- Consolidated: [steps merged]

**Expected improvement**: [time saved / error rate reduction / handoff reduction]

### Implementation Plan

| Change | Effort | Owner | Timeline |
|---|---|---|---|
| [specific change] | H/M/L | [role] | [weeks] |

## Step 3 — Process Documentation

Ask: "Do you want me to write this up as a formal SOP (Standard Operating Procedure) — the document you'd hand to someone new to the process with enough detail to execute it correctly?"
