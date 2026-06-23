---
name: teach
description: >
  Five-phase Socratic teaching loop: calibrate to the learner, teach at their level,
  test with 6 questions, fix only the gaps, then compress everything into a one-page keeper.
  Trigger: /teach
---

# /teach

A structured teaching workflow for any topic. Pass the topic as an argument (e.g. `/teach recursion`).
Works through five phases in one conversation: calibration, instruction, testing, gap-fixing, and a compressed reference the learner can save.

## Phase 1 — Calibrate

Before teaching anything, ask these three questions as a short numbered list, then **wait**. Do not begin teaching yet.

Use AskUserQuestion to collect:

1. What do you already know about {{topic}}? (So I can skip what you've got and build from there.)
2. Why do you want to learn it, and how will you use it?
3. How deep do you need to go — rough overview, or a solid working understanding?

Do not produce any teaching output until the user has answered all three.

## Phase 2 — Teach at Their Level

Based on their answers, teach {{topic}} at exactly the level they need — no more, no less.

Rules:
- Build on what they said they already know. Do not re-explain it.
- One concept at a time, in a logical order, each with a concrete example.
- Define every new term the first time you use it.
- Stop at the concepts that get them to their stated goal. Do not dump the whole field.

## Phase 3 — Test

After teaching, test whether it stuck. Do **not** re-explain anything first.

Ask 6 questions about what you just taught, **one at a time**, waiting for the user's answer before asking the next:
- Mix straight recall, "explain why," and one applied scenario question.
- After each answer, say right or wrong with a one-line correction if needed.

At the end, list the specific concepts the user clearly has not grasped.

## Phase 4 — Fix the Gaps

Re-teach **only** the concepts the user got wrong or was shaky on. Skip everything they understood.

For each gap:
- Explain it a different way than the first time — a new angle or analogy.
- Give one fresh example.
- Ask a single follow-up question to confirm it landed.

## Phase 5 — Compress into a Keeper

Produce a one-page reference the user can save and review later. Keep it tight enough to fit on one screen.

Include:
- **Core concepts** — short, plain-language bullets
- **Key examples** — briefly, one line each
- **Mistakes made** — written as "Remember: ..." reminders, drawn from Phase 3 errors
- **3 self-test questions** for reviewing in a week
