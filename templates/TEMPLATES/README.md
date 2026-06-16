# TEMPLATES/

Reusable prompt patterns for your most common Claude tasks.

Instead of writing the same setup context from scratch every time, store it here and invoke it
with a single sentence.

## How It Works

Each file is a "prompt template" — a structured starting point you paste or reference.

In Claude.ai Projects: upload these to your project knowledge base and say
"Use the weekly-review-template.md format."

In Claude Code: turn any template into a `/skill` so it's available as a slash command.
See `templates/.claude/skills/` for the pre-built skill versions of these templates.

## Included Templates

| File | What It Does |
|---|---|
| `weekly-review-template.md` | Structures a weekly reflection against goals |
| `client-brief-template.md` | Generates a client-facing project brief |
| `negotiation-prep-template.md` | Prepares for negotiations and difficult conversations |

## Adding Your Own

Copy any of these files, rename it, and adapt the sections. Good templates:
- Start with a context-gathering step ("Tell Claude what you need")
- Specify the exact output format
- Include an example of what good output looks like
