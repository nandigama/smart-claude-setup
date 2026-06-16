# CLAUDE_OUTPUTS/

This folder is where Claude's deliverables land.

## Why This Matters

Having a dedicated output folder:
- Keeps deliverables separate from prompts and context files
- Makes it easy to version or share outputs
- Prevents Claude from scattering files across your project

## How to Use It

Tell Claude (in your rules.md or project CLAUDE.md):
```
Save all deliverables — documents, reports, drafts — to CLAUDE_OUTPUTS/
Name files clearly: [date]-[type]-[topic].md
Example: 2026-06-16-brief-q3-security-audit.md
```

## Suggested Sub-Folders

As outputs accumulate, organize by type:
```
CLAUDE_OUTPUTS/
├── briefs/
├── reports/
├── drafts/
├── analyses/
└── code/
```

## What Doesn't Belong Here

- Prompt templates → `TEMPLATES/`
- Context files → `ABOUT_ME/`
- Working notes → keep in your editor, not here

---

> This folder starts empty. That's correct — it fills up as you work.
