---
name: research-pulse
description: Quick literature pulse on a topic — what's known, what's debated, key papers, and open questions. 15-minute deep-dive that surfaces the research landscape without a full literature review. Trigger: /research-pulse
---

# /research-pulse

A rapid research pulse on any academic or technical topic — surfaces what's established,
what's contested, the key papers you should read, and the questions the field hasn't answered.

Faster than a full literature review; deeper than a Google search.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What topic do you want a pulse on? (be specific — "transformer attention mechanisms" not "AI")
2. What is your purpose? (understand the field / prepare for a project / evaluate a claim / write a paper)
3. What is your background in this area? (novice / familiar / domain expert)
4. What do you already know or have read?
5. Any specific sub-questions within the topic?

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Research Pulse

### What's Established (High Consensus)

3-5 claims in this field that are broadly accepted across the literature, with supporting evidence.
For each: the claim, the evidence basis, and the key researchers/papers associated with it.

### What's Contested (Active Debate)

2-3 questions or claims where the field is actively divided.
For each: what the disagreement is, the main camps, and what evidence each side uses.
Flag if the debate is methodological (how to measure) vs. substantive (what the answer is).

### Key Papers to Read

5-7 papers that anyone working in this area should know:

| Paper | Authors | Year | Why It Matters |
|---|---|---|---|
| [title] | [authors] | [year] | [one sentence — why seminal or relevant] |

Prioritize: seminal papers that established the field, recent papers that shifted the consensus, and papers most relevant to the user's specific purpose.

### Open Questions

2-3 questions the field has not answered — where the research is thin, inconclusive, or hasn't been done yet.
These are opportunities: for original research, for novel applications, or for competitive advantage.

### Practical Implications

Given the user's purpose: what does this research pulse mean for what they're doing?
3-5 concrete implications, not abstract observations.

### Calibration

How confident should the user be in this pulse?
- Coverage: [how much of the field this represents]
- Recency: [knowledge cutoff context — fast-moving fields may have moved since]
- Limitations: [what a full literature review would add]

## Step 3 — Literature Review

Ask: "Do you want a full systematic literature review — with search strategy, inclusion criteria, synthesis table, and gaps analysis? That's a deeper output built for academic or formal research purposes."
