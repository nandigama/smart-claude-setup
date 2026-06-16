---
name: seo-audit
description: SEO audit of a page or site — on-page elements, technical issues, content quality, E-E-A-T signals, and keyword alignment. Produces prioritized fixes with expected impact. Trigger: /seo-audit
---

# /seo-audit

SEO audit across on-page, technical, content quality, and E-E-A-T dimensions.
Produces prioritized findings based on impact, not just a checklist.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What are you auditing? (paste URL / paste page content / describe the site)
2. What is the target keyword or search intent? (what should this page rank for?)
3. What is the current ranking position for this keyword? (if known)
4. What is the search volume and competition level? (if known)
5. Who is the target audience for this page?
6. What is the page's goal? (rank for keyword / convert visitors / both)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the SEO Audit

### Keyword Alignment

**Target keyword**: [stated keyword]
**Search intent**: Informational / Navigational / Commercial / Transactional

**Intent match**: Does this page actually serve the search intent?
If someone searches [keyword] and lands here, will they get what they came for?
If not — this is the most important thing to fix before anything else.

**Keyword placement check**:
| Element | Contains Keyword? | Notes |
|---|---|---|
| Title tag | Yes / No / Partial | [current title] |
| H1 | Yes / No / Partial | [current H1] |
| First 100 words | Yes / No | |
| URL | Yes / No | |
| Meta description | Yes / No | |
| Image alt text | Yes / No | |

### On-Page Elements

**Title tag**: [current] → [recommended]
- Length: [character count] (target: 50-60 chars)
- Contains primary keyword: Y/N
- Compelling to click: Y/N

**Meta description**: [current] → [recommended]
- Length: [character count] (target: 150-160 chars)
- Contains keyword: Y/N
- Includes a reason to click: Y/N

**Heading structure**:
- H1 count: [should be exactly 1]
- H2/H3 structure: [logical hierarchy Y/N]
- Keyword in headings: Y/N

**Content quality**:
- Word count: [X] (for this keyword's intent, typical top results are [Y] words)
- Reading level: appropriate for audience Y/N
- Content depth: does it thoroughly cover the topic? Gaps: [list]

### Technical Issues

| Issue | Severity | Fix |
|---|---|---|
| Page speed (Core Web Vitals) | H/M/L | [specific fix] |
| Missing canonical tag | H/M/L | [fix] |
| Not mobile-friendly | H/M/L | [fix] |
| Missing schema markup | M/L | [fix] |
| Internal links: too few | M | Add links from [relevant pages] |
| Images without alt text | M | [fix] |

### E-E-A-T Signals
(Experience, Expertise, Authoritativeness, Trustworthiness)

For content that requires trust (health, finance, legal, reviews):
- Author credentials: visible Y/N
- Publication date + last updated: visible Y/N
- Sources cited: Y/N
- About page / contact: exists Y/N
- External links to authoritative sources: Y/N

### Priority Fixes

| Fix | Impact | Effort | Do This First? |
|---|---|---|---|
| [fix] | H/M/L | H/M/L | Yes / No |

**The one fix with highest ROI**: [specific action]

## Step 3 — Optimized Content

Ask: "Do you want me to rewrite the title tag, meta description, and H1 — optimized for the target keyword while remaining compelling to click?"
