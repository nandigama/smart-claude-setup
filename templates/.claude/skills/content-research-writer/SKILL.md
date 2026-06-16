---
name: content-research-writer
description: Write high-quality long-form content through collaborative outlining, research, citations, and section-by-section drafting. Matches your voice and ensures claims are sourced. Trigger: /content-research-writer
---

# /content-research-writer

Guides you through writing a well-researched, properly cited piece of long-form content —
blog post, article, newsletter, technical doc, or whitepaper. Works collaboratively:
outlines first, researches, then drafts section by section so you can redirect before
Claude writes 2000 words in the wrong direction.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What are you writing? (blog post / article / newsletter / whitepaper / technical doc)
2. What is the core argument or main point in one sentence?
3. Who is the audience? (their role, what they already know, what they want to learn)
4. Roughly how long should it be? (word count or "short / medium / long")
5. Do you have a voice or style reference? (paste a sample, link an example, or describe it)
6. Are there specific sources, data, or claims you want included?
7. What outcome do you want the reader to have? (understand X / do Y / believe Z)

Do not produce any output until the user answers all questions.

## Step 2 — Collaborative Drafting

### Phase A — Outline

Produce a structured outline:
- Working title
- Hook / lede approach (one sentence on how to open)
- 3-6 main sections with one-sentence descriptions
- Conclusion approach

**Stop and ask**: "Does this outline match what you had in mind? Any sections to add, remove, or reorder?"
Do not proceed to drafting until the user confirms or adjusts the outline.

### Phase B — Research Pass

For each section in the approved outline, identify:
- What claim or point needs to be supported?
- What evidence, data, or example would make it credible?
- Flag any claim that needs a source the user must provide

Present this as a brief research plan: "Section 2 needs a stat on X. Do you have one, or should I use general knowledge?"

### Phase C — Draft

Draft section by section. After each section:
- Show the draft
- Ask: "Does this section hit the mark? Any changes before I continue?"

This prevents rewriting 1500 words when the first 300 went in the wrong direction.

**Voice rules** (apply throughout):
- Match the sample or description from Step 1
- Lead with the point; save caveats for the end
- Use concrete examples over abstractions
- Cut any sentence that doesn't add information

### Phase D — Final Assembly

Combine all approved sections. Add:
- A strong opening hook
- Transitions between sections
- A conclusion that ends on the core argument, not a summary

## Step 3 — Polish Pass

After assembly, ask:
"Do you want a: (a) headline/title options, (b) SEO meta description, (c) social post to promote this, or (d) all three?"

Produce whichever the user requests. Keep promotional copy accurate to the article — no overpromising.
