---
name: client-brief
description: Generate a polished client-facing project brief from raw inputs. Collects context via structured questions, then produces an exec summary, challenge, approach, deliverables, timeline, and next steps. Trigger: /client-brief
---

# /client-brief

Generates a polished client-facing brief from raw inputs — suitable for exec review,
procurement, or project kick-off. Works for consulting engagements, project proposals,
scope-of-work documents, and status updates.

## Step 1 — Gather Context

Use AskUserQuestion to collect (ask all in one message):

1. Who is the client? (name and one sentence about who they are)
2. What is their problem or goal? (the pain or opportunity driving this)
3. What is your proposed solution? (what you're delivering)
4. What is the timeline? (start date, key milestones, end date)
5. What are the success criteria? (how you'll both know this worked)
6. Who is the audience for this brief? (exec / procurement / project team / all three)
7. What tone should it have? (formal / collaborative / technical / persuasive)
8. Anything to avoid or sensitive context? (competitors, internal politics, open negotiations)

Do not produce any output until the user answers all eight questions.

## Step 2 — Produce the Brief

Output these six sections in order:

### Executive Summary
Exactly 3 sentences. No more.
Sentence 1: The client's situation and the problem it creates.
Sentence 2: Your proposed solution and how it addresses the problem.
Sentence 3: The key outcome and timeline.
Executives stop reading after the third sentence. Make all three count.

### The Challenge
One paragraph (4-6 sentences) covering:
- The client's current situation
- What is at stake if the problem isn't solved
- Why now (the urgency or opportunity window)
No jargon. No filler. Write as if the reader has 90 seconds.

### Our Approach
3-5 bullet points covering the key elements of the solution.
Each bullet: one sentence, concrete, client-outcome focused.
Avoid internal process language ("we will coordinate with stakeholders to...").
Focus on what changes for the client, not what you'll do internally.

### Deliverables
Numbered list. Each item is a noun, not a verb.
Good: "A 20-page security audit report with prioritized findings"
Bad: "Audit the security systems and report on findings"
Include: format, length or scope where relevant, and who receives it.

### Timeline

| Milestone | Deliverable | Date |
|---|---|---|
| Kick-off | [First deliverable or meeting] | [Date] |
| [Mid-point] | [Deliverable] | [Date] |
| [Final delivery] | [All deliverables complete] | [Date] |

Keep to 3-5 rows. More rows imply more project management than most briefs need.

### Next Steps
Always the last section. Always three items.
Format: [Name or role] will [action] by [date].
Example: "Sarah (client) will share access to the staging environment by June 20."
Never say "the team" — name the person or role.

## Step 3 — Optional Formats

After producing the brief, ask:
"Do you want this formatted as: (a) a one-page email, (b) a slide outline (5 bullets per slide),
or (c) a formal proposal with a cover page section?"

If the user selects one, reformat the content accordingly without starting from scratch.
