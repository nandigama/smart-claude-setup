---
name: handoff
description: Summarize the current Claude Code session into a compact handoff document so the next session can pick up exactly where this one left off — with full context and zero re-explanation. Trigger: /handoff
---

# /handoff

Produces a structured handoff document from the current session — capturing what was decided,
what was built, what's still open, and exactly what to tell Claude next time to resume without
losing context.

Use this before ending a long session, before switching machines, or when the context window
is getting full and you want a clean restart.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What was the goal of this session? (one sentence — what were you trying to accomplish?)
2. Anything the summary should definitely capture that might not be obvious from the conversation?
3. Where are you picking this up next? (same day / tomorrow / handing off to someone else)

Do not produce any output until the user answers.

## Step 2 — Produce the Handoff Document

Read the current session context thoroughly, then produce:

---

```markdown
# Session Handoff — [date]

## Goal
[What this session was trying to accomplish]

## What Was Done
[Bulleted list of concrete things completed — files created/edited, decisions made, problems solved]

## Current State
[Where things stand right now — what's working, what's partial, what's broken]

## Key Decisions Made
[Decisions that affect future work, with brief rationale]
- Decision: [what was decided]
- Reason: [why]

## Open Items
[Things that were started but not finished, or explicitly deferred]
- [ ] [item] — [why it's open / what's blocking it]

## What to Do Next
[The single most important thing to do when resuming]

## Resume Prompt
[A ready-to-paste prompt for the next Claude session that provides full context]

> "We're working on [project]. Last session we [2-sentence summary of what was done].
> The current state is [state]. We need to [next action].
> Key context: [any critical constraints or decisions the next session must know]."
```

---

Save this to `CLAUDE_OUTPUTS/handoff-[date].md` if Claude Code file access is enabled.

## Step 3 — Resume Validation

Ask: "Do you want me to test the resume prompt by reading it back as if I were starting fresh — so you can confirm it captures enough context?"

If yes: read only the Resume Prompt section and respond as if starting a new session.
Note any missing context that would cause confusion.
