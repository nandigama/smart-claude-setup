# 2. Create an ABOUT ME Folder First

This is the highest-ROI thing you can do. Do it before anything else.

## What It Does

Claude cannot help you effectively if it doesn't know who you are. Every time you paste context
("I'm a senior engineer at a fintech startup and I need..."), you're paying a tax that you already
paid the last time.

The ABOUT ME folder pays that tax once, permanently.

## What Goes In It

Four files. Fill them in order:

### `role.md` (Start Here)
Your job title, team, company, and expertise.

**Minimum viable version** (takes 5 minutes):
```markdown
# My Role
Senior Engineer at Acme Corp (B2B SaaS, Series B)

## Expertise
Deep: distributed systems, TypeScript/Node.js, PostgreSQL
Familiar: React, AWS, Terraform
Learning: Rust, ML pipelines (explain these carefully)

## What I Own
The platform API and developer tooling. 12-person team.
```

### `goals.md` (Update Monthly)
Your current projects and quarterly objectives. Stale goals confuse Claude more than no goals.

### `rules.md` (Set Once, Tweak Over Time)
How you want Claude to behave. The things it does by default that annoy you. The format you prefer.

### `writing-samples/` (Add When Needed)
Three examples of writing in your voice. Claude learns your voice from examples 10× faster
than from descriptions like "write formally but warmly."

## How to Use the Files

**Claude Code**: Add to your `CLAUDE.md`:
```
@ABOUT_ME/role.md
@ABOUT_ME/goals.md
@ABOUT_ME/rules.md
```
These are read at the start of every session. Update the files; Claude sees the changes automatically.

**Claude.ai Projects**: Upload the folder to your Project knowledge base.
Every conversation in that Project inherits the context.

**Global Instructions**: Paste a condensed version into Settings → Global Instructions.
This persists across ALL sessions, not just one project.

## The Test

After setting up ABOUT ME, your next prompt should be shorter than your last.

If you're still writing "I'm a [role] at [company]..." — your ABOUT ME isn't wired up correctly.

## Template

The pre-built templates are in `templates/ABOUT_ME/`. Fill in the `<!-- Fill in: ... -->` sections.
Or run `npm create claude-project` to generate them with your details pre-filled.
