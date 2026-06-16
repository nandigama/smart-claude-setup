---
name: lit-review
description: Systematic literature review — search strategy, inclusion criteria, paper synthesis, and gaps analysis. Structured for academic or formal research purposes. Trigger: /lit-review
---

# /lit-review

Conducts a systematic literature review — from defining the research question through
search strategy, paper evaluation, synthesis, and identification of gaps in the literature.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What is your research question? (the specific question the review will answer)
2. What databases or sources will you search? (PubMed / Google Scholar / Semantic Scholar / Web of Science / specific journals)
3. What are your inclusion criteria?
   - Date range (e.g., 2015–2025)
   - Study types (RCTs / observational / systematic reviews / all empirical)
   - Language (English only / multilingual)
   - Population / domain restrictions
4. What are your exclusion criteria?
5. Is this for publication, a grant, or internal use?
6. Do you have papers already, or are you starting from search?

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Literature Review

### PICO Framework (for clinical/empirical reviews)

If applicable, frame the research question with:
- **P**opulation: who / what is being studied
- **I**ntervention / exposure: what is being done or compared
- **C**omparison: against what
- **O**utcome: what is measured

### Search Strategy

Recommended search strings for each database:

**PubMed**: `([term1] OR [synonym]) AND ([term2] OR [synonym]) AND ([date range])`
**Google Scholar**: `"[exact phrase]" [term] site:scholar.google.com`

Recommended MeSH terms if applicable.

### Screening Protocol

**Phase 1 — Title/abstract screening**:
Include if: [criteria]
Exclude if: [criteria]

**Phase 2 — Full-text screening**:
Include if: [more specific criteria]
Exclude if: [quality threshold / out of scope]

### Synthesis Table

For each included paper:

| Study | Authors | Year | Design | N | Key Finding | Quality | Relevance |
|---|---|---|---|---|---|---|---|
| [title] | [...] | [...] | [RCT/obs/etc] | [...] | [1-2 sentences] | H/M/L | H/M/L |

### Narrative Synthesis

Organize findings by theme:

**Theme 1: [name]**
Summary of evidence, direction of effect, consistency across studies, quality of evidence.

**Theme 2: ...**

**Areas of Agreement**: what the literature consistently shows
**Areas of Disagreement**: where studies conflict and possible reasons why
**Heterogeneity**: sources of variation across studies (population, methods, context)

### Gaps Analysis

What the literature does NOT tell us — the unanswered questions:
- [gap] — why it matters, what study design would fill it
- [gap]

### GRADE Assessment (if clinical)

For each key outcome: quality of evidence (High / Moderate / Low / Very Low) and reason for downgrade.

## Step 3 — Write-Up

Ask: "Do you want me to draft the Methods section and Results section in academic prose, formatted for a specific journal style (APA / AMA / Vancouver)?"
