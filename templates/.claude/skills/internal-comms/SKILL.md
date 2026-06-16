---
name: internal-comms
description: Write polished internal communications — company updates, status reports, incident summaries, team announcements, and all-hands content. Structures the message for the right audience and format. Trigger: /internal-comms
---

# /internal-comms

Produces polished internal communications for any audience within an organization —
from a 3-line Slack update to a full company newsletter section. Gets the format, tone,
and level of detail right for the specific internal audience.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What type of communication is this?
   - Project/status update
   - Incident report or post-mortem summary
   - Company or team announcement
   - All-hands or town hall content
   - Internal newsletter section
   - Other (describe)
2. Who is the audience? (your immediate team / cross-functional stakeholders / whole company / leadership/exec)
3. What is the core message in one sentence? (what do they need to know or do?)
4. What tone is appropriate? (formal / professional-casual / urgent / celebratory)
5. What format is needed? (Slack message / email / doc section / slide bullets / plain text)
6. Are there any sensitive details to handle carefully? (layoffs, incidents, org changes, financial results)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Communication

Apply these rules based on the audience:

**Exec/leadership audience**:
- Lead with the decision or recommendation, not the background
- Put numbers and timelines in the first paragraph
- Risk and mitigation before details

**Cross-functional stakeholders**:
- State impact on their work in the first sentence
- Keep context brief — they don't need the full history
- End with a clear ask or next step

**Whole company**:
- Plain language — no internal acronyms without explanation
- One main message — don't bury the lede in context
- Warm but not informal

**Immediate team**:
- Directness is fine; less ceremony needed
- More detail is acceptable because they have context
- Action items should be explicit

**Format rules**:
- Slack: lead with the key point, use bold for actions, keep to 5-8 lines max
- Email: subject line that states the topic clearly, short paragraphs, clear CTA at the end
- Doc section: headers, not walls of text
- Slide bullets: 6 words per bullet, no full sentences

**For incident reports / post-mortems**, always include:
1. What happened (plain language, no blame)
2. Impact (who/what was affected and for how long)
3. Root cause (brief, factual)
4. What we did to resolve it
5. What we're doing to prevent it

**For announcements**, always end with: what this means for the reader specifically.

## Step 3 — Variants

After producing the draft, ask:
"Do you want: (a) a shorter version for a different channel, (b) a version adapted for a different audience (e.g., the exec version of a team update), or (c) a FAQ to anticipate follow-up questions?"
