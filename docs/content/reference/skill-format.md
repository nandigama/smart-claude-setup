# Skill Format Reference

Complete specification for writing SKILL.md files.

## File Location

```
.claude/skills/<skill-name>/SKILL.md
```

Each skill lives in its own directory. The directory name matches the skill name.

## Frontmatter

```yaml
---
name: skill-name            # slug, no spaces, matches directory name
description: >              # shown in skill discovery list
  One-line description of what the skill does.
  Always end with: Trigger: /skill-name
---
```

**Required fields**: `name`, `description`

The `description` field is what users see when browsing available skills.
Make it informative: "what it does" + "when to use it" + "Trigger: /skill-name".

## Body Structure

Every skill should follow this three-step pattern:

```markdown
# /skill-name

[2-3 sentences describing what this skill produces and when to use it]

## Step 1 — Gather Context

Use AskUserQuestion to collect:
1. [Question 1]
2. [Question 2]
3. [Question 3]

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Output

[Detailed format instructions]
[Section headers]
[Example content if helpful]

## Step 3 — Optional Follow-Up

[Offer to refine, extend, or reformat — optional]
```

## The Non-Negotiable Rule

**Step 1 must always be AskUserQuestion.**

Skills that produce output before gathering context produce polished output for the wrong goal.
The most common skill failure mode is guessing what the user needs instead of asking.

## AskUserQuestion

Use `AskUserQuestion` to present a structured form to the user before producing output.

Include all required context questions in a single AskUserQuestion call.
Ask for: goal, audience, constraints, and any domain-specific context the output requires.

Wait for answers before proceeding to Step 2.

## Output Format Instructions

Be specific about format. Vague instructions produce variable output.

**Good**:
```markdown
Output three sections:

### My Opening Position
2-3 sentences the user could say verbatim. Clear. Non-defensive.

### Their Likely Position
Bullet list of 3-5 items covering their interests, not just their stated position.

### My 3 Moves
| Move | What I Say | What I Trade |
|---|---|---|
```

**Bad**:
```markdown
Write a helpful negotiation summary.
```

## Step 3 — Optional Follow-Up

Always offer a follow-up that extends the value of the output:
- Roleplay (for negotiation, interview prep)
- Deep dive on a specific section
- Reformat (email, slide, one-pager)
- Integration with another skill

Make the follow-up optional: "Would you like to [action]?"

## Complete Example

```markdown
---
name: meeting-prep
description: >
  Prepare for any meeting: agenda, talking points, questions to ask, and desired outcomes.
  Trigger: /meeting-prep
---

# /meeting-prep

Prepares you for any meeting — internal, client, executive, or difficult conversation.

## Step 1 — Gather Context

Use AskUserQuestion to collect:
1. What is this meeting about?
2. Who will be there and what do they want from it?
3. What do YOU want to achieve by the end?
4. What do you need to say that you haven't said yet?
5. What's the risk if this meeting goes badly?

Do not produce any output until the user answers all five questions.

## Step 2 — Produce the Prep Package

Output four sections:

### Desired Outcome
One sentence: what does success look like when you walk out?

### Agenda (Suggested)
Bullet list of talking points in the order that serves your desired outcome.
Each bullet: one sentence. No more than 5 items.

### Your Key Messages
3 things you need the other people to understand by the end.
Phrase each as a sentence they could repeat accurately.

### Questions to Ask
3-5 questions that either advance your goal or give you information you need.
Include one "difficult" question you've been avoiding.

## Step 3 — Roleplay Option

Ask: "Do you want to roleplay the opening 5 minutes? I'll play the other participants."
If yes: start immediately and be realistic about pushback.
```

## Skill Discovery

In Claude Code, users can see all available skills by typing `/`.
The `description` field is what appears in the list — write it for someone who doesn't know what the skill does yet.
