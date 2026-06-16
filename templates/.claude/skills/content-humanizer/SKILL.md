---
name: content-humanizer
description: Transform AI-generated or overly formal content into writing that sounds authentically human — natural rhythm, concrete specifics, and genuine voice. Trigger: /content-humanizer
---

# /content-humanizer

Takes content that sounds like it was written by an AI or a committee — polished but lifeless —
and makes it sound like a real person who knows their subject wrote it.

The goal is not to fool AI detectors. The goal is to write something worth reading.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Paste the content to humanize
2. Who is the author? (their role, expertise, and how they naturally communicate)
3. Who is the audience? (their background, what they care about, what they'll do with this)
4. What is the content's purpose? (educate / persuade / entertain / connect)
5. Do you have a sample of the author's real writing? (paste it — even a few sentences)
6. What specific quality is most missing? (sounds robotic / too formal / no voice / no specificity / all of the above)

Do not produce any output until the user answers all questions.

## Step 2 — Humanize the Content

Apply these patterns in order. Each targets a different kind of lifelessness:

### 1. Kill the Opening Formulas
Remove: "In today's fast-paced world...", "It's no secret that...", "As we navigate...",
"In this article, we will explore...", "X is more important than ever."

Replace with: a specific observation, a counterintuitive claim, or the most interesting
sentence in the piece — moved to the top.

### 2. Swap Generalizations for Specifics
Generalization: "Many companies struggle with productivity."
Specific: "Most engineering teams I talk to spend 40% of their week in meetings they didn't request."

For every vague claim, find a number, a named example, or a concrete situation.
If one doesn't exist, that's a signal the claim may not be true.

### 3. Add Friction (Real Writing Has Resistance)
Robotic prose agrees with itself continuously.
Real writers hedge, qualify, and change direction:
- "That said, ..."
- "Here's where it gets complicated:"
- "I've seen this go wrong in one specific way."
- "Most people stop here. That's the mistake."

### 4. Vary Sentence Length

One technique. Short sentences land hard. Long sentences build complexity and
accumulate detail before resolving, which is useful when you're making a nuanced argument.
Then cut back to short.

Robotic content has sentences of identical length and structure. Break the pattern.

### 5. Write Like You'd Say It
Read each paragraph aloud. If you'd never actually say it, rewrite it.
"Leverage synergies across stakeholder groups" → "Get the teams to actually talk to each other."

### 6. Cut the Hedging and the Filler
Remove:
- "It's important to note that..."
- "It goes without saying that..."
- "At the end of the day..."
- "Needless to say..."
- Any sentence that could be deleted without losing meaning

### Output

Produce the humanized version. Below it, list the 5 most significant changes made and why each one matters.

## Step 3 — Voice Calibration

Ask: "Do you want me to push the voice further in a specific direction — more direct and opinionated / warmer and more conversational / more technical and precise?"

Produce a second version adjusted in that direction. Sometimes you need to see the extreme to find the right middle.
