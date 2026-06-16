# 4. Set Global Instructions Once

One setup. Every session benefits. Forever.

## What Global Instructions Do

Global Instructions are text that Claude reads at the start of every conversation —
regardless of which project or tool you're using.

They're the answer to: "Why do I have to re-explain who I am every time?"

**Without global instructions**: Every session starts from zero. You re-introduce yourself.
You re-explain your preferences. You re-list what Claude should never do.

**With global instructions**: Claude walks in knowing your role, your rules, and your format
preferences. Your prompts are immediately shorter and more precise.

## How to Set Them

Claude.ai → any conversation → your avatar (top right) → Settings → Edit Global Instructions

Paste your content. Done. It applies to every future session.

## What to Include

**Minimum (5 minutes of effort, permanent payoff)**:
1. Your role and company (2-3 sentences from `ABOUT_ME/role.md`)
2. Your format preferences (bullets vs prose, length, code conventions)
3. One rule about what Claude should never do

**Full setup (use the template)**:
The pre-built templates at `templates/global-instructions/` cover:
- Identity and expertise
- Working protocol (ask-before-act for developers, 4-question protocol for business users)
- Output format requirements
- Anti-patterns to avoid
- Current project context

## Developer vs Business User

The instructions are meaningfully different for each audience:

**Developers** need: ask-before-act protocol, code standards, file operation gates, technical depth calibration.

**Business users** need: the 4-question protocol (goal / audience / format / constraints), editing protocol, tone guidance.

Use the appropriate template from `templates/global-instructions/`:
- `developer.md` — for Claude Code users and technical workflows
- `business-user.md` — for Claude.ai Projects and document/communication workflows

## The Update Cycle

Update your global instructions when:
- Your role changes significantly
- A recurring annoyance makes you want to add a rule
- Your tech stack changes
- A project context shifts enough to matter globally

Don't over-update — most project-specific context belongs in `CLAUDE.md`, not global instructions.

## Test After Setting Up

Open a new Claude session. Ask a question that requires knowing your context.
If Claude answers without you providing that context, it's working.

If Claude still asks "Can you tell me about your role?" — your global instructions
may not have saved, or the session was opened before you saved them.
