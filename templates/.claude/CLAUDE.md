# Claude Project Instructions

This file ties together the Right Claude Use setup for this project.
It is read automatically by Claude Code at the start of every session.

---

## Who I Am

@ABOUT_ME/role.md
@ABOUT_ME/goals.md

---

## My Rules

@ABOUT_ME/rules.md

---

## This Project

<!-- Fill in: project-specific context that isn't already in your ABOUT_ME files -->

**What this project is**: [One sentence]
**Primary outputs**: [What Claude should be helping you produce]
**Key files**: [Any files Claude should always be aware of]
**Off-limits**: [Files or systems Claude should never touch without explicit permission]

---

## Available Skills

The following slash commands are available in this project:

| Command | What It Does |
|---|---|
| `/negotiation-prep` | Prepare for any negotiation or difficult conversation |
| `/weekly-review` | Run a structured weekly review against your goals |
| `/client-brief` | Generate a client-facing project brief |
| `/model-select` | Choose the right Claude model for your current task |
| `/ask-first` | Enable ask-before-act mode for this session |

---

## Output Convention

Save all deliverables to `CLAUDE_OUTPUTS/` with the naming format:
`YYYY-MM-DD-[type]-[topic].md`

Example: `2026-06-16-brief-q3-security-audit.md`

---

## Reminder

Read `ABOUT_ME/` before starting any task that requires knowing my context, goals, or voice.
If you're writing anything I'll send externally, read `ABOUT_ME/writing-samples/` first.
