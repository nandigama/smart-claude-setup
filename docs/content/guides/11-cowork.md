# 11. Use Cowork for Anything Serious

Set it up. Walk away. Come back to the result.

## What Cowork Is

Cowork is Claude's async, long-running mode. Instead of waiting for a response in chat,
you describe the task, Claude works on it for minutes (sometimes longer), and you come back
to a complete result.

It reads your local files. It creates documents. It can run for as long as the task requires.

## When to Use It

**Right for Cowork:**
- Writing a comprehensive first draft of a long document
- Analyzing a large dataset or codebase and producing a structured report
- Researching a topic across multiple sources and synthesizing findings
- Generating a complete project plan from a requirements brief
- Any task where you'd tell a human "work on this for an hour and show me what you have"

**Not right for Cowork:**
- Tasks where you need to give feedback mid-way through
- Quick questions with one-sentence answers
- Iterative tasks where each step depends on your input

## How to Set Up a Good Cowork Task

A bad Cowork prompt: "Write a proposal for the new pricing strategy."

A good Cowork prompt:
```
Write a 10-page proposal for the new pricing strategy.

Context:
- We're moving from per-seat to usage-based pricing
- Target audience: the board (financial sophistication, low product detail tolerance)
- Key argument: usage-based removes the ceiling on our ACV for large accounts
- Risks to address: customer uncertainty about unpredictable bills

Output requirements:
- Executive summary (1 page)
- Current state and why we're changing (2 pages)
- Proposed model with examples (3 pages)
- Financial projections (2 pages, use conservative estimates)
- Risk mitigation (1 page)
- Recommended next steps (1 page)

Save the output to CLAUDE_OUTPUTS/2026-06-16-proposal-pricing-strategy.md
```

Specificity is the difference between a draft you can use and one you have to rewrite.

## File Access

Cowork reads your local files when you grant access. This means:
- You can point it at a spec document and say "implement the first module"
- You can share a data file and say "analyze this and write the findings"
- You can provide existing code and say "write tests for all the public functions"

## The Mindset Shift

Chat is interactive. Cowork is delegation.

When you delegate to a person, you don't watch over their shoulder for an hour.
You brief them well, you specify what success looks like, and you let them work.

Cowork is the same. Invest 5 minutes in a precise brief. Get back an hour of work.
