# 3. Build 3 Folders in Your Project

Three folders. One place for everything. Maintained once.

## The Three Folders

```
your-project/
├── ABOUT_ME/          ← identity and context
├── TEMPLATES/         ← reusable prompt patterns
└── CLAUDE_OUTPUTS/    ← deliverables
```

## Why This Structure Works

**It separates input from output.**

Without structure: your prompts, Claude's outputs, your notes, and your files all mix together.
You end up copy-pasting the same context every time, losing outputs in chat history,
and spending 10 minutes finding the brief Claude wrote last Tuesday.

With structure: every file has a place. Claude knows where to look. You know where to look.

## ABOUT_ME/ — Identity and Context

Everything Claude needs to know about you: role, goals, rules, writing samples.

See [Guideline 2](/guides/02-about-me) for details.

## TEMPLATES/ — Reusable Prompt Patterns

Store your most common workflows here as structured prompts.

**Example — `TEMPLATES/weekly-review-template.md`**:
```markdown
# Weekly Review
This week I finished: [list]
Didn't finish: [list]
Top 3 for next week: [list]

Output:
1. Wins (achievements, not tasks)
2. Gaps & causes
3. Patterns
4. Next week plan with definitions of done
```

When you need a weekly review: "Use the template in TEMPLATES/weekly-review-template.md."
One sentence. No re-explaining.

Or use the `/weekly-review` skill — which is the same thing, invokable with a slash command.

## CLAUDE_OUTPUTS/ — Deliverables

Where Claude saves files you'll actually use.

In your CLAUDE.md, add:
```
Save all deliverables to CLAUDE_OUTPUTS/ with the naming format:
YYYY-MM-DD-[type]-[topic].md
```

Example: `2026-06-16-brief-q3-security-audit.md`

Searching for that brief three weeks later takes one second instead of scrolling through chat history.

## Setting It Up

**Option 1**: Run `npm create smart-claude` — generates all three folders automatically.

**Option 2**: Copy `templates/` from this repo, then fill in the placeholders.

**Option 3**: Create the folders manually and reference the templates for file content.

## The Maintenance Rule

Update `ABOUT_ME/goals.md` monthly. That's the only maintenance required.
Everything else in this structure is set once and stays useful indefinitely.
