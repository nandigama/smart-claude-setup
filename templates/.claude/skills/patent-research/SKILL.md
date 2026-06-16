---
name: patent-research
description: Patent landscape analysis — prior art search, freedom-to-operate assessment, competitor patent monitoring, and patent claim analysis. Trigger: /patent-research
---

# /patent-research

Patent research across three use cases: prior art search (before filing), freedom-to-operate
analysis (before shipping a product), and competitor patent landscape mapping.

**Note**: This skill provides research and analysis to inform decisions. It is not a substitute
for a registered patent attorney for formal legal opinions.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What type of analysis do you need?
   - **Prior art search** — is there existing IP that might block a patent application?
   - **Freedom to operate (FTO)** — can we build/sell this without infringing existing patents?
   - **Competitor landscape** — what patents does a competitor hold in a specific area?
   - **Claim analysis** — what does a specific patent actually cover?
2. Describe the technology, product, or invention (as specifically as you can)
3. What jurisdiction matters most? (US / EU / global)
4. Who are the key players in this space? (competitors, large tech companies filing in the area)
5. What databases do you have access to? (Google Patents / USPTO / Espacenet / Lens.org — all free)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Patent Research

### Search Strategy

**Recommended databases**:
- Google Patents: `https://patents.google.com` — best for global search, cited-by analysis
- USPTO Patent Full-Text: `https://www.uspto.gov/patents/search` — US patents, detailed claims
- Lens.org: `https://www.lens.org` — open, good for landscape analysis

**Search approach**:

Classification codes to search (CPC/IPC):
- [Code] — [description of what it covers]
- [Code] — [description]

Keyword queries:
- `([key term] OR [synonym]) AND ([key term] OR [synonym])`
- Boolean refinements for jurisdiction, date, assignee

**Assignees to monitor**: [list of companies most likely to hold relevant IP]

### Prior Art Analysis

For each relevant patent or publication found:

| Patent | Assignee | Filed | Priority | Relevance | Distinguishing Features |
|---|---|---|---|---|---|
| [number] | [company] | [date] | [date] | H/M/L | [what makes it different from the invention] |

**Prior art risk assessment**:
- 🔴 High: directly anticipates the claimed invention
- 🟠 Medium: covers similar ground — may limit claim scope
- 🟡 Low: tangentially related — addressable through claim differentiation
- 🟢 Clear: no material prior art found in this search

### FTO Analysis

For the identified patents:

**Claims analysis**: which claims are relevant to the product/feature?
(Focus on independent claims — they define the broadest scope)

| Patent | Claim # | Relevant Element | Does Your Product Have This Element? |
|---|---|---|---|
| [number] | [claim] | [element] | Yes / No / Unclear |

**Risk summary**:
A patent is infringed only if your product practices EVERY element of a claim.
Identify any element where your product clearly doesn't infringe → that claim doesn't apply.

**Design-around options**: if infringement risk exists, how to modify the product to avoid it.

### Competitor Landscape

**Patent portfolio summary by company**:

| Company | Patent Count (area) | Filing Trend | Key Technology Areas |
|---|---|---|---|
| [company] | [n] | Increasing / Stable / Declining | [areas] |

**White space**: technology areas with few patents — potential opportunity or simply under-developed.

## Step 3 — Attorney Brief

Ask: "Do you want me to prepare a brief summarizing the research findings for a patent attorney — organized to efficiently use their time for a formal FTO opinion?"
