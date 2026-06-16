---
name: weekly-review
description: Structured weekly review connecting your week's work to your goals. Surfaces wins, gaps, patterns, and next-week priorities. Best run every Friday afternoon or Monday morning. Trigger: /weekly-review
---

# /weekly-review

Runs a structured weekly review that connects your work to your goals,
surfaces what slipped and why, and produces a clear plan for the week ahead.

## Step 1 — Gather This Week's Data

Use AskUserQuestion to collect (ask all in one message):

1. What did you finish this week? (list anything, even small things)
2. What did NOT get done that you planned to do?
3. What surprised you this week — good or bad?
4. What is weighing on you going into next week?
5. What are your top 3 priorities for next week?

Do not produce any output until the user answers all five questions.

## Step 2 — Produce the Review

Output these four sections in order:

### Wins (This Week)
List finished items as concrete achievements, not tasks.
Write "Shipped the auth redesign" not "Worked on auth."
Write "Closed the Acme contract" not "Had a good call with Acme."
If the user has shared their goals (in ABOUT_ME/goals.md or CLAUDE.md), connect wins
to those goals explicitly where relevant.

### Gaps & Causes
For each unfinished item: one sentence naming the cause.
No editorializing. No advice. Just the cause.
Example: "Didn't finish API docs — blocked waiting for the schema to stabilize."
If a gap recurs from prior weeks (if the user mentions it), flag it:
"This is the second week this slipped — worth addressing directly."

### Patterns
2-3 observations about the week as a whole.
Look for: what took longer than expected, what was interrupted, what energized vs drained,
what external factors affected the week.
If the user has shared their goals, check whether the week's work was aligned.
A misaligned week — where everything got done but none of it moved the goals forward — is worth naming.

### Next Week Plan
The three priorities as a ranked list.
Under each priority: one "definition of done" sentence.
Example:
1. Finish the API rate-limiting implementation
   Done when: deployed to staging and load-tested at 10k req/min

## Step 3 — Optional Deep Dive

After the review, ask:
"Do you want to dig into any of the gaps or plan one of next week's priorities in detail?"

If yes, focus there.
- For a gap: run a short root-cause analysis (5 Whys format)
- For a priority: break it into a concrete day-by-day plan
- For an interpersonal issue: offer to run /negotiation-prep

Keep the deep dive focused — it should sharpen one thing, not become another full review.
