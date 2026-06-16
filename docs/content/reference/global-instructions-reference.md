# Global Instructions Reference

Everything you need to write effective Claude global instructions.

## What They Are

Global instructions are text Claude reads at the start of every conversation.
They persist across all projects, sessions, and tools.

**How to set them**: Claude.ai → Settings → Edit Global Instructions

## Structure

The most effective global instructions follow this order:

```
1. Identity       Who you are — role, company, expertise
2. Protocol       How Claude should behave before acting
3. Format         How Claude should structure output
4. Context        What's happening in your work right now
5. Never-list     What Claude should never do
```

## Identity Section

Tell Claude who you are in a way that changes how it answers.

**Minimum viable identity** (takes 5 minutes, lasts years):
```markdown
## Who I Am
Senior Product Engineer at Acme Corp (B2B SaaS, Series B, 150-person company).
I own the platform API and developer integrations.

Deep expertise: distributed systems, TypeScript/Node.js, API design
Comfortable with: PostgreSQL, AWS, Docker
Still learning: Rust, ML pipelines — explain these carefully
```

The "still learning" line is one of the highest-value things you can add.
It stops Claude from pitching a concept you already know and starts giving you the depth
you need in areas where you don't.

## Protocol Section

**For developers** — ask-before-act:
```markdown
## Before Acting on Files
1. State what you plan to do (one sentence)
2. Ask: "Should I proceed?"
3. Wait for my yes before executing

This applies to: creating files, modifying files, running shell commands, external requests.
```

**For business users** — 4-question protocol:
```markdown
## Before Producing Any Output
Ask me these four questions first:
1. What is the goal of this output?
2. Who is the audience?
3. What format should it be?
4. Are there any constraints?

Do not start until I answer all four.
```

## Format Section

**Common format preferences**:
```markdown
## Output Format
- Bullet points for lists, short prose for explanations
- Lead with the answer, then the reasoning
- Code blocks: always include the filename at the top
- When uncertain: say "I'm not sure" — don't hedge while guessing
- Responses should be as long as the question requires, no longer
```

## Context Section

```markdown
## Current Work
Primary project: [one sentence]
Key constraint: [the most important constraint Claude should know]
Stack: [your tech stack, if relevant]
```

Update this when your focus shifts. Stale context is worse than no context.

## Never-List

The most common things worth adding:
```markdown
## Never Do
- Start a response with "Great question!" or any filler opener
- Add unsolicited caveats or warnings
- Create files I didn't ask for
- Refactor code outside the scope of the task
- Provide multiple alternatives when I asked for a recommendation
- Summarize what you just did at the end of a response
```

## Template Files

Use the pre-built templates as a starting point:

- `templates/global-instructions/developer.md` — for Claude Code users
- `templates/global-instructions/business-user.md` — for Claude.ai Projects users

Run `npm create claude-project` to generate a version pre-filled with your details.

## Maintenance

**When to update**:
- Your role changes significantly
- A recurring annoyance makes you want to add a rule
- Your tech stack changes
- A project context shifts enough to matter globally

**What NOT to put here**:
- Project-specific context (belongs in `.claude/CLAUDE.md` per project)
- Information that changes weekly (belongs in `ABOUT_ME/goals.md`)
- Instructions only relevant to one task (put them in the prompt instead)

## Length

Shorter is better. Every instruction Claude has to "read past" to get to the relevant part
reduces the effectiveness of the instructions that follow.

A tight 200-word global instruction set outperforms a comprehensive 1000-word one.
If you find yourself writing sections that start "In some cases you might...",
cut them and write the rule for the most common case instead.

## Testing Your Instructions

Open a new session. Ask Claude a question that requires knowing your context.
If Claude answers as if it knows you: working.
If Claude asks who you are: not working — check that you saved and that the session is new.
