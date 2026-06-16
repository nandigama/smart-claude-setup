---
name: lead-research-assistant
description: Identify and prioritize high-quality leads by defining your ICP, discovering target companies, scoring fit, and producing a contact strategy. For sales, BizDev, and partnership teams. Trigger: /lead-research-assistant
---

# /lead-research-assistant

Builds a prioritized lead list from scratch — starting with your Ideal Customer Profile (ICP),
finding companies and contacts that match it, scoring them, and providing specific outreach
strategies for the top targets.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What are you selling or offering? (product, service, or partnership — one sentence)
2. Describe your best current customer. What makes them a great fit?
   (industry, company size, tech stack, team structure, pain they have)
3. What problem do you solve for them?
4. What's your target deal size or relationship type? (SMB / mid-market / enterprise / strategic)
5. Do you have existing leads or accounts to research, or do you need net-new discovery?
6. What information do you have access to? (LinkedIn, company websites, CRM data, public financial info)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Lead Research Package

### ICP Definition

Synthesize the user's answers into a clear ICP:

**Firmographic signals** (company-level):
- Industry / vertical
- Company size range (headcount, revenue if known)
- Stage (startup / growth / enterprise / public)
- Geography

**Technographic signals** (what tools/stack they use):
- Tech signals that indicate fit or readiness

**Behavioral signals** (what they're doing that suggests they need you):
- Hiring patterns, recent funding, new products, public pain points

**Disqualifiers** (who to immediately skip):
- Signals that indicate a bad fit

### Target Company List

Based on the ICP, identify 10-15 target companies using available signals.
For each company:

| Company | Why They Fit | Signal/Evidence | Priority |
|---|---|---|---|
| [name] | [2-sentence fit rationale] | [specific signal] | High/Med/Low |

Score priority as:
- **High**: 3+ ICP signals match; clear pain point evident
- **Medium**: 2 signals match; fit plausible but less obvious
- **Low**: 1 signal; worth pursuing if higher-priority list is exhausted

### Contact Strategy (Top 5)

For the 5 highest-priority companies, provide a specific outreach approach:

**[Company Name]**
- Best entry point: [role/title to target first]
- Personalization hook: [specific reason to reach out that's about them, not you]
- Channel: [LinkedIn cold message / warm intro / email / event / other]
- Opening line: [one sentence they'd actually want to read]
- What to avoid: [anything that would make this feel like a mass outreach]

## Step 3 — Outreach Drafts

Ask: "Do you want me to draft outreach messages for the top 3 targets — LinkedIn DMs, cold emails, or both?"

If yes: write each as if it's the only message this person will receive today.
- Reference something specific to them (their company, their role, a recent event)
- One sentence on the problem you solve
- One soft CTA (not "book a 30-minute call" — ask a question instead)
- Under 100 words
