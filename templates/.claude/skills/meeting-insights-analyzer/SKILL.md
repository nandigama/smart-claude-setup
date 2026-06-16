---
name: meeting-insights-analyzer
description: Analyze a meeting transcript to uncover behavioral patterns, speaking dynamics, key decisions, and communication growth areas. Paste a transcript and get actionable insights. Trigger: /meeting-insights-analyzer
---

# /meeting-insights-analyzer

Analyzes meeting transcripts to surface what actually happened beneath the surface —
who drove the conversation, what was left unresolved, where conflict was avoided, and
what communication patterns are worth changing.

Useful after important meetings: 1:1s, team standups, client calls, exec presentations,
difficult conversations.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Paste the meeting transcript (or describe where it is if it's a file Claude can read)
2. What was the meeting's purpose? (standup / 1:1 / client call / exec review / difficult conversation)
3. What is your role in this meeting? (facilitator / participant / observer / presenter)
4. What do you most want to understand? (select all that apply)
   - Who dominated the conversation
   - Whether the goal was actually achieved
   - Where conflict or tension surfaced and how it was handled
   - Action items and ownership
   - Communication patterns worth changing

Do not produce any output until the user provides the transcript and answers the questions.

## Step 2 — Produce the Analysis

### Participation Dynamics

Speaking ratio by participant (approximate % of words/turns if names are identifiable).
Flag: anyone who said nothing for long stretches, anyone who was interrupted frequently,
anyone whose contributions were acknowledged vs. talked over.

### Goal Achievement

State the meeting's purpose. Then: was it achieved? One of:
- **Fully** — the objective was met, decisions were made
- **Partially** — progress was made but key items remain open
- **Not achieved** — the meeting ended without meeting its purpose

Explain in 2-3 sentences what specifically was or wasn't resolved.

### Key Decisions Made

Bullet list of explicit decisions with clear ownership:
- Decision: [what was decided]
- Owner: [who is responsible]
- Deadline: [if stated]

If no decisions were made when they should have been, flag it.

### Tension and Conflict Patterns

Identify moments where:
- Disagreement was avoided or softened ("that's interesting" when someone means "I disagree")
- Someone backed down without resolution
- The same issue was raised but not resolved
- Passive language was used to avoid ownership ("it would be good if..." instead of "I will...")

For each: quote the moment and name the pattern.

### Action Items

| Who | What | By When |
|---|---|---|
| [name] | [specific action] | [deadline or "not specified"] |

Flag any action items where ownership was vague or unconfirmed.

### Communication Patterns

2-3 observations about communication style, specific to the user's role:
- What worked (clear questions, good summaries, confident advocacy)
- What to improve (talking over others, hedging, not following up on unresolved points)
- One specific thing to try differently next time

## Step 3 — Optional Deep Dive

Ask: "Do you want to: (a) roleplay a follow-up conversation to address something unresolved, (b) draft follow-up email with decisions and action items, or (c) dig into one specific pattern?"

If a: use /negotiation-prep framing to prepare for the follow-up.
If b: draft a clean, professional follow-up that doesn't reopen debates — just captures what was agreed.
If c: run a short analysis focused on that pattern with 2-3 concrete alternatives to try.
