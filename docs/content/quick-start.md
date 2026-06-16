# Quick Start

Get the full setup running in 10 minutes.

## Option 1 — CLI (Fastest)

```bash
npm create claude-project
```

Answer 5 questions. Done.

## Option 2 — Template Repo

1. Clone or fork this repo
2. Copy the `templates/` folder into your project
3. Fill in the `<!-- Fill in: ... -->` placeholders in `ABOUT_ME/`
4. Paste `global-instructions/developer.md` (or `business-user.md`) into Claude → Settings → Global Instructions

## What You Get

After either option, you'll have:

```
your-project/
├── ABOUT_ME/               ← Claude learns who you are
├── TEMPLATES/              ← Reusable prompt patterns
├── CLAUDE_OUTPUTS/         ← Where deliverables land
├── .claude/
│   ├── CLAUDE.md           ← Project-level instructions
│   └── skills/             ← Slash commands
└── global-instructions/    ← Paste into Claude Settings
```

## First Things First

**Do these in order:**

1. **Fill in `ABOUT_ME/role.md`** — this single file cuts your prompt length in half
2. **Paste your global instructions** — copy `global-instructions/developer.md` or `business-user.md` into Claude → Settings → Edit Global Instructions
3. **Test a skill** — open Claude Code and type `/model-select` to verify skills are working

## The Most Common Mistake

People set this up and then keep writing long prompts anyway.

Once your global instructions are in place, trust them. Your prompts should get shorter:
- Before: "I'm a senior engineer at a fintech startup and I need to review this PR for security issues..."
- After: "Review this PR for security issues"

Claude already knows who you are. Stop re-introducing yourself.

## Next Steps

- Read [Guideline 2: ABOUT ME Folder](/guides/02-about-me) to understand what to put in each file
- Read [Guideline 8: Pick the Right Model](/guides/08-model-selection) before your next hard task
- Browse [all 12 guidelines](/guides/01-six-tools) at your own pace
