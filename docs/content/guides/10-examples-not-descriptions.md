# 10. Feed It Examples, Not Descriptions

Paste 3 posts you wrote. Say: "Write like this."

Claude copies your voice faster from 3 examples than from 500 words trying to describe it.

## Why Examples Beat Descriptions

Descriptions of voice are imprecise:
- "Write formally but warmly" — what does that mean?
- "Use a conversational tone" — how conversational?
- "Be direct but not blunt" — where's the line?

Three real samples are unambiguous. Claude sees the actual cadence, sentence length,
vocabulary choices, paragraph structure, and tone. It doesn't need to interpret your words
about your writing — it sees your writing.

## What to Share

**Three samples from different contexts** (don't pick all similar things):

1. An internal message (Slack, email to a colleague) — shows your natural register
2. An external communication (client email, LinkedIn post) — shows your professional voice
3. A longer piece (proposal, report, doc) — shows your structure choices

Each sample should be at least 150 words. Longer is better.

## How to Use Them

**Option 1 — Add to writing-samples/**

Store them in `ABOUT_ME/writing-samples/` and reference them in your global instructions:
```
When writing anything I'll send externally, read @ABOUT_ME/writing-samples/ first.
Match my style.
```

**Option 2 — Paste inline when needed**

For one-off tasks:
```
Write this announcement. Match the style of this sample:

[paste sample]

Now write: [your request]
```

**Option 3 — Upload to Claude.ai Project**

Add writing samples to your Project's knowledge base.
Every conversation in that Project can reference them.

## The Instruction

Once samples are in place, the prompt is simple:

> "Write like the samples in my writing-samples folder."

Or even shorter, once you've established the convention:

> "In my voice."

## Voice Drift

If Claude starts drifting from your voice over a long conversation:
- Reference the samples again: "Check my writing-samples and course-correct"
- Or start a new session with the samples already in context

Long conversations accumulate context that can dilute the original voice instruction.
New sessions start fresh.

## For Technical Writing

The same principle applies to code style and documentation:
- Paste 3 functions you wrote → "Write new functions like these"
- Paste a README you're proud of → "Document this module in this style"
- Paste an architecture decision record → "Write an ADR for [decision] following this format"
