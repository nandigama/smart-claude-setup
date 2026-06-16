# 9. Extended Thinking for Hard Problems

Claude runs an internal monologue before it answers. The output quality is not the same.

## What Extended Thinking Does

Extended thinking gives Claude time to reason through a problem before producing output.
Instead of answering immediately, Claude works through the problem step by step — considering
alternatives, checking assumptions, and building toward a more carefully reasoned conclusion.

The visible response is the same. The invisible work behind it is substantially more.

## When to Turn It On

**Turn ON** for:
- Mathematical or logical proofs
- Architecture decisions with long-term consequences (the wrong call today costs months)
- Strategic decisions with many competing tradeoffs
- Debugging a non-obvious bug in complex, nested code
- Research synthesis across conflicting or ambiguous sources
- High-stakes negotiation preparation
- Any problem where you'd want a smart colleague to "think before you answer"

**Keep OFF** for:
- Conversational replies
- Simple code edits or formatting
- Routine lookups and summaries
- Tasks where speed matters more than a perfect answer

**The test**: Would you be annoyed if a person answered this question in 3 seconds?
If yes, extended thinking is appropriate.

## How to Enable It

**Claude.ai**: Model selector → Opus 4.8 → toggle Extended Thinking on.

**Claude Code / API**: Use adaptive thinking (automatically adjusts based on task complexity):
```json
{
  "model": "claude-opus-4-8",
  "thinking": { "type": "adaptive" },
  "output_config": { "effort": "high" }
}
```

For maximum depth on the hardest problems:
```json
{
  "output_config": { "effort": "max" }
}
```

## Extended Thinking + Model Selection

Extended thinking is available on Opus 4.8 and Sonnet 4.6.
For hard reasoning tasks, use Opus 4.8 — its larger capacity produces meaningfully better
results on complex problems even compared to Sonnet with extended thinking.

See [Guideline 8: Model Selection](/guides/08-model-selection) for the full decision logic.

## The Practical Impact

Extended thinking helps most with problems that have a "right answer" that requires
working through multiple steps or tradeoffs.

It helps less with creative tasks, conversational tasks, or tasks where the bottleneck
is information (what you tell Claude) rather than reasoning depth.

When you're about to ask Claude something hard — something you'd genuinely think about for
10 minutes yourself before answering — that's when extended thinking earns its cost.
