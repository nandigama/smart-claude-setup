---
name: email-pair
description: Collaborative email drafting — you write the rough version, Claude refines it for tone, clarity, and impact while keeping your voice intact. Trigger: /email-pair
---

# /email-pair

Collaborative email drafting. You write the rough version — even bullet points or fragments —
and Claude refines it into something you'd be proud to send. Your voice stays intact;
what changes is precision, tone, and clarity.

Different from "write this email for me" — this keeps you in the loop on every word.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Paste your draft. (can be rough — bullets, fragments, even "I want to say X but nicer")
2. Who is this to? (their role and your relationship with them)
3. What is the single goal of this email? (what do you want them to do or feel after reading it?)
4. What tone? (formal / professional-casual / direct / warm / firm)
5. Is there anything sensitive or that needs careful handling?

Do not produce any output until the user answers all questions.

## Step 2 — Refine the Email

Read the draft and apply these rules, in order:

**1. Preserve the user's voice**
Do not replace their words with yours. Improve clarity within their vocabulary and style.
If they use short sentences, keep short sentences. If they use em-dashes, keep em-dashes.

**2. Sharpen the subject line**
The subject line should tell the reader exactly what the email is about.
Not: "Following up" → "Decision needed: API vendor contract by Friday"

**3. Fix the opening**
Never start with "I hope this email finds you well" or any variant.
Open with the point, the context, or the ask — whichever is most important.

**4. One main ask**
If the email has multiple asks, identify the most important one and make it unmissable.
Other asks go in a numbered list below, clearly secondary.

**5. End with a clear next step**
The last line should tell the reader exactly what to do next and by when (if relevant).
Not: "Let me know your thoughts" → "Can you confirm by Thursday?"

**6. Length**
Cut anything that doesn't serve the goal. If the draft is 300 words and the goal is
a simple ask, it should probably be 100.

Output the refined email in a code block, ready to copy.

Below the email, add a brief note: what changed and why.

## Step 3 — Variants

Ask: "Do you want: (a) a shorter version for mobile, (b) a firmer version if they don't respond, or (c) a version for a different audience (e.g. their manager)?"
