---
name: tailored-resume-generator
description: Tailor your resume to a specific job description — highlights relevant experience, optimizes for ATS keyword matching, and strengthens impact statements. Trigger: /tailored-resume-generator
---

# /tailored-resume-generator

Adapts your existing resume to a specific job description — surfacing the most relevant
experience, rewriting bullet points to match the role's language, and optimizing for
Applicant Tracking Systems (ATS) that filter resumes before a human sees them.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Paste your current resume (or describe the file path if Claude can read it)
2. Paste the full job description
3. What is your main concern with your current resume for this role?
   - My experience doesn't obviously match the JD
   - My bullet points are weak / don't show impact
   - I need it ATS-optimized (keywords)
   - All of the above
4. Is there anything you want to keep unchanged? (formatting, specific achievements you're proud of)
5. What stage is this for? (initial application / final round where they'll read it carefully / both)

Do not produce any output until the user provides their resume and the job description.

## Step 2 — Produce the Tailored Resume

### Analysis First

Before rewriting, output a brief gap analysis:
- **Strong matches**: experience/skills that directly map to the JD
- **Weak matches**: required skills where your resume is thin (with suggestions)
- **Missing keywords**: terms in the JD that aren't in your resume but apply to your experience
- **ATS risk**: any formatting issues that ATS systems commonly reject (tables, headers, graphics in text)

**Stop and ask**: "Does this analysis look accurate? Anything you'd correct before I rewrite?"

### Resume Rewrite

Rewrite the resume with these rules:

**Headline / Summary**:
- Mirror the job title or a close variant in the headline
- 2-3 sentences that speak directly to what the JD is asking for
- Include 2-3 of the most important keywords from the JD

**Experience bullets**:
- Lead with an action verb that matches the JD's language (if they say "drove", use "drove" not "led")
- Follow with the impact: what changed, by how much, for whom
- Format: [Verb] + [What you did] + [Result/Impact with metric where possible]
- Remove or compress bullets that have zero relevance to this role

**Skills section**:
- Add any relevant skills from the JD that you have but didn't list
- Remove skills that are not relevant to this role (ATS reads density, not length)

**ATS rules**:
- Use the exact job title from the JD somewhere in the document
- Spell out abbreviations once (ML / Machine Learning)
- Standard section headers only: Experience, Education, Skills (not creative names)

Output the full rewritten resume in clean Markdown.

## Step 3 — Cover Letter Option

After the resume, ask:
"Do you want a tailored cover letter for this role? I'll write it to complement the resume — not repeat it — focusing on one specific reason you're the right person for this job."

If yes: write a 3-paragraph cover letter.
- Para 1: Why this company specifically (not generic enthusiasm)
- Para 2: One concrete story that proves the most important thing the JD is asking for
- Para 3: What you'd bring in the first 90 days + clear CTA
