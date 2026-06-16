---
name: capture
description: Offload everything in your head into a structured action list. Brain-dump freely — Claude organises it into tasks, decisions, and follow-ups. Trigger: /capture
---

# /capture

Turns a raw mental download — scattered thoughts, half-formed ideas, anxiety spirals,
or anything you're holding in your head — into a clean, actionable list.

Use this at the end of a frantic day, at the start of a week, or whenever your head is full.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Just dump everything. What's in your head right now? (stream of consciousness — no structure needed)
2. What time horizon are you thinking about? (today / this week / this month / all of the above)
3. Any areas of your life or work to focus on? (work / personal / both)

Do not produce any output until the user answers.

## Step 2 — Produce the Structured Capture

Sort everything the user dumped into four buckets:

### Tasks (things to do)
Concrete, actionable items. Each one starts with a verb.
Add a suggested time estimate (15m / 1h / half-day) for anything substantial.
Flag anything that's blocking something else with ⚠️.

| Task | Time | Priority |
|---|---|---|
| [verb + specific action] | [estimate] | High / Med / Low |

### Decisions (things to decide)
Items that are stuck because a choice hasn't been made.
For each: name the decision, the options (even if rough), and what's blocking it.

### Waiting On (things delegated or pending)
Items the user can't act on yet — waiting for someone else, a response, an event.
Who, what, by when (if known).

### Someday / Park (not urgent, not forgotten)
Ideas and intentions that don't need action now but shouldn't be lost.

---

After sorting, surface the **top 3 actions** for today:
> "Based on what you shared, here are the 3 things most worth doing first: ..."

## Step 3 — Next Actions

Ask: "Do you want me to turn any of these into a time-blocked plan for today or this week?"

If yes: produce a simple schedule — morning / afternoon / evening blocks, or Mon–Fri.
Don't over-optimize; leave breathing room.
