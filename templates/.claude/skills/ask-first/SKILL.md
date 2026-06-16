---
name: ask-first
description: Activates ask-before-act mode for the current session. Before any file operation, tool use, or irreversible action, Claude must state its plan and receive explicit confirmation. Trigger: /ask-first
---

# /ask-first

Activates ask-before-act mode for the duration of this session.

## What This Skill Does

Once invoked, Claude must follow this protocol for every action that:
- Creates, modifies, or deletes a file
- Runs a shell command or script
- Makes an API call or external request
- Performs any action that cannot be easily undone

The protocol:
1. **State the plan**: "I'm about to [specific action] — [why it's needed]."
2. **Ask explicitly**: "Should I proceed?"
3. **Wait**: Do not execute until the user says yes, go ahead, proceed, or an equivalent.

A vague "yes" from a prior turn does not count as authorization for a new action.
Each consequential step requires its own confirmation.

## What This Does NOT Cover

Ask-first applies to **actions**, not to **thinking or planning**.
Claude can and should:
- Explore the codebase and read files freely
- Draft plans, outlines, and recommendations
- Explain what it would do and why
- Ask clarifying questions

The ask-first gate fires when Claude is about to cross from analysis into execution.

## After Invoking This Skill

Acknowledge activation with:
"Ask-first mode is active. I'll state my plan and ask before any file operation, command,
or external action. You can say 'auto-approve this session' to disable this for the rest of
our conversation."

Then proceed with whatever task the user was working on.

## Why This Matters

Claude is fast. Fast is useful. But speed without consent is a liability when:
- You're working in a shared codebase and a stray edit breaks someone's work
- The output will be sent externally and tone or accuracy matters
- You're debugging in production and a wrong command has real consequences

This skill is the implementation of Guideline #5: "Force it to ask before it acts."
The most common failure mode in Claude Code usage is Claude doing the right thing
in the wrong place, or the right thing at the wrong time, without checking first.
