---
name: skill-creator
description: Design and write a new Claude Code skill from scratch. Guides you from a rough idea to a production-ready SKILL.md file following the Right Claude Use format spec. Trigger: /skill-creator
---

# /skill-creator

Helps you turn a repeating workflow into a production-ready Claude Code skill.
Covers: naming, frontmatter, the AskUserQuestion step, output structure, and optional follow-up.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What workflow do you want to turn into a skill? (describe what you currently have to explain every time)
2. Who will use this skill? (yourself / your team / public distribution)
3. What information does Claude need before it can produce a good output?
   (list the questions Claude should ask the user)
4. What should the output look like? (sections, format, length)
5. Is there a follow-up action that would add value after the main output? (optional)
6. What should the slash command be called? (e.g. `/my-workflow-name` — lowercase, hyphens only)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the SKILL.md

Apply the Right Claude Use skill format spec:

### Frontmatter

```yaml
---
name: <slug from question 6>
description: >
  <one sentence: what it does + when to use it>.
  Trigger: /<slug>
---
```

The description is what users see when browsing skills. Make it informative enough
that someone who's never seen the skill knows exactly what it produces.

### Body

```markdown
# /<slug>

[2-3 sentences: what this skill produces, who it's for, when to use it]

## Step 1 — Gather Context

Use AskUserQuestion to collect:
[numbered list from question 3 — rewrite as clear, specific questions]

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Output

[Detailed instructions for the output based on question 4]
[Section headers with specific formatting rules]
[Any rules about what to include/exclude]

## Step 3 — [Optional Follow-Up from question 5]

Ask: "[offer the follow-up option]"
[Instructions for the follow-up]
```

**Quality checks applied to every skill**:
- Step 1 must use AskUserQuestion — never produce output by guessing
- Output format must be specific enough that two runs of the skill produce consistent structure
- Step 3 must offer something that extends the value of Step 2, not just repeat it
- The slash command name should be the shortest name that's unambiguous

Output the complete SKILL.md ready to paste into `.claude/skills/<name>/SKILL.md`.

## Step 3 — Installation Instructions

After producing the SKILL.md, output the installation steps:

```bash
mkdir -p .claude/skills/<name>
# Paste the SKILL.md content into:
# .claude/skills/<name>/SKILL.md
```

Then ask: "Do you want me to test this skill by running it immediately? I'll invoke it with a sample input so you can see if the output matches what you expected."

If yes: invoke the new skill with a realistic example and note anything that should be refined.
