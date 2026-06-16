# 7. Turn Repeat Workflows Into Skills

If you've asked Claude the same type of question more than three times, turn it into a skill.

## What Skills Are

Skills are reusable workflow definitions stored as markdown files in `.claude/skills/`.
You invoke them with a slash command: `/weekly-review`, `/client-brief`, `/negotiation-prep`.

One line. Claude pulls all the context it needs, asks the right questions, and produces
the right output — without you re-explaining the format every time.

## Pre-Built Skills in This Repo

Five skills are ready to install:

| Skill | What It Does |
|---|---|
| `/negotiation-prep` | Full prep package: position, their position, 3-move sequence, objection responses, roleplay option |
| `/weekly-review` | Structured weekly reflection: wins, gaps, patterns, next-week plan |
| `/client-brief` | Client-facing brief: exec summary, approach, deliverables, timeline, next steps |
| `/model-select` | Interactive model picker: task type → exact model ID + parameters |
| `/ask-first` | Activates ask-before-act mode for the session |

## How to Install Pre-Built Skills

**Option 1 — CLI**:
```bash
npx create-claude-project add-skill weekly-review
```

**Option 2 — Manual**: Copy the `SKILL.md` from `templates/.claude/skills/<skill-name>/` into `.claude/skills/<skill-name>/SKILL.md` in your project.

## How to Write Your Own Skill

Create `.claude/skills/my-workflow/SKILL.md`:

```markdown
---
name: my-workflow
description: What this skill does. Trigger: /my-workflow
---

# /my-workflow

[2-3 sentences describing what this skill produces]

## Step 1 — Gather Context

Use AskUserQuestion to collect:
1. [Question 1]
2. [Question 2]

Do not produce output until the user answers.

## Step 2 — Produce the Output

[Detailed format instructions for the output]
```

**The one non-negotiable rule**: Step 1 must always be AskUserQuestion.
Skills that guess produce polished outputs for the wrong goal.

## The Skill Format Reference

See [Skill Format Reference](/reference/skill-format) for the complete specification,
including frontmatter fields, step structure, and examples.

## When to Create a New Skill

Create a skill when:
- You've invoked the same workflow ≥3 times
- The workflow has a consistent structure (gather context → produce output)
- You want to share it with a team

Don't create a skill for one-off tasks. Skills are for recurring patterns.
