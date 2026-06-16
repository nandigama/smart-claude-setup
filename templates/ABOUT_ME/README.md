# ABOUT_ME/

This folder is the single most important thing you can set up for Claude.

Once Claude knows who you are, your prompts shrink from 50 words to 10.

## What Goes Here

| File | Purpose |
|---|---|
| `role.md` | Your job title, team, expertise, and what you own |
| `goals.md` | Your current projects and quarterly objectives |
| `rules.md` | How you want Claude to behave — your personal working rules |
| `writing-samples/` | 3 examples of writing in your voice (for voice-matching) |

## How to Use It

**Option A — Claude.ai Projects**
Upload the contents of this folder to your Project's knowledge base.
Claude will read it automatically on every conversation.

**Option B — Claude Code**
Add this to your `CLAUDE.md`:
```
@ABOUT_ME/role.md
@ABOUT_ME/goals.md
@ABOUT_ME/rules.md
```

**Option C — Global Instructions**
Paste the content of `role.md` + `goals.md` into Settings → Global Instructions.
Shorter but always-present across every session.

## Fill In Order

1. `role.md` first — this unlocks the biggest prompt reduction
2. `rules.md` — stops Claude from doing things that annoy you
3. `goals.md` — gives Claude context for prioritization
4. `writing-samples/` — add when you want voice-matched output
