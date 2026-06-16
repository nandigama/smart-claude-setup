# 5. Force It to Ask Before It Acts

The most common failure mode in Claude usage isn't wrong answers.
It's right answers in the wrong format, for the wrong audience, at the wrong moment.

## The Protocol

Add this to every prompt for tasks with ambiguous requirements:

> "Use AskUserQuestion before executing."

Or install the `/ask-first` skill and invoke it at the start of a session.

## Why This Works

Claude is fast. Speed is usually a feature. But when the task has:
- An unclear goal
- A specific audience whose preferences matter
- A format constraint you haven't specified
- A decision that can't easily be reversed

...speed without a question becomes waste. You get a polished output you have to redo.

The "ask first" discipline turns Claude from a guessing machine into a clarifying partner.

## The Four Questions (Business Users)

For any document, communication, or deliverable:

1. **Goal** — What is this output for? (Not "write an email" — *why* does this email need to exist?)
2. **Audience** — Who reads it? Their role, what they care about, what they know.
3. **Format** — Email or slide? Bullets or prose? One page or five?
4. **Constraints** — Deadline, word limit, things to avoid, stakeholder sensitivities.

Put this in your global instructions and Claude will ask these four questions before producing
any document. Not because you reminded it — because it's trained to.

## The Two-Step Protocol (Developers)

For any file operation or code change in Claude Code:

1. Claude states: "I'm about to [action] — [why]."
2. Claude asks: "Should I proceed?"
3. Claude waits.

This is implemented in the `/ask-first` skill and in the developer global instructions template.

## What This Doesn't Cover

"Ask first" is for tasks with real ambiguity. Don't apply it to:
- Simple questions ("what does this function do?")
- Clearly specified tasks ("fix the null check on line 47")
- Exploratory analysis ("summarize this document")

The discipline is about consequential, ambiguous tasks — not every interaction.

## The Skill

The `/ask-first` skill activates this protocol for the current session:

```
/ask-first
```

Claude will confirm activation and then gate every file operation and external action
behind a stated plan + explicit confirmation. Type "auto-approve this session" to disable
it during a flow where you want Claude to run freely.
