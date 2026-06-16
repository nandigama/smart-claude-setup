---
name: competitive-ads-extractor
description: Research and analyze competitor ad campaigns from public ad libraries — extract messaging patterns, creative approaches, and positioning strategies to inform your own campaigns. Trigger: /competitive-ads-extractor
---

# /competitive-ads-extractor

Analyzes competitor ads from public ad libraries (Meta Ad Library, Google Ads Transparency,
LinkedIn Ad Library) to understand their messaging, creative patterns, and positioning —
so you can identify gaps, borrow what's working, and differentiate where it matters.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Who are the competitors you want to research? (list 2-5 company names)
2. Which ad platform(s) are you researching? (Meta / Google / LinkedIn / all)
3. What is YOUR product and target audience? (needed to frame the competitive analysis)
4. What do you want to learn?
   - What messaging/value props they're leading with
   - What creative formats they're using (video / static / carousel)
   - What problems they're speaking to
   - Whether they're running promotions or urgency tactics
5. Do you have screenshots or ad content to paste in, or do you need research guidance?

Do not produce any output until the user answers all questions.

## Step 2 — Research and Analysis

### Where to Find the Ads

If the user doesn't have screenshots, guide them to the right sources:

**Meta Ad Library**: `https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q=[company-name]`
**Google Ads Transparency**: `https://adstransparency.google.com/`
**LinkedIn Ad Library**: Search the company page → "Posts" → filter by "Ads"

Instruct: "Screenshot or copy-paste the ad headlines, body copy, and describe the creative for 5-10 ads per competitor."

### Analysis Framework

For each competitor's ad set, analyze:

**Messaging Analysis**
- Primary value proposition (what's the #1 claim?)
- Pain points addressed (what problem are they speaking to?)
- Target audience signals (who does the copy seem aimed at — role, industry, stage?)
- Proof points used (testimonials, stats, customer logos, awards)
- Call to action (free trial / demo / learn more / buy now)

**Creative Patterns**
- Dominant format (video, static image, carousel, text-only)
- Visual style (product screenshots, lifestyle, abstract, people)
- Brand voice (authoritative, conversational, technical, emotional)

**Positioning**
- Category claim (how do they describe the category they're in?)
- Differentiator (what do they say makes them different?)
- Competitive language (do they reference alternatives or "the old way"?)

### Comparative Table

| Competitor | Primary Message | Pain Point | CTA | Format | Proof Type |
|---|---|---|---|---|---|
| [Co A] | [...] | [...] | [...] | [...] | [...] |
| [Co B] | [...] | [...] | [...] | [...] | [...] |

### Pattern Report

**What everyone is saying** (table stakes — your messaging must include this or you seem incomplete):
- [pattern found across all competitors]

**What no one is saying** (potential white space):
- [angle or pain point underserved in their advertising]

**What's working** (most repeated, likely highest-performing approaches):
- [specific headline patterns, formats, or claims appearing frequently]

**What to avoid** (overused, likely fatigued):
- [messaging that's saturated across the space]

## Step 3 — Your Ad Brief

Ask: "Do you want me to write an ad brief for your campaign based on this competitive analysis — positioning, messaging angle, creative direction, and 3 headline options?"

If yes: produce a one-page brief using the white space and differentiation opportunities identified above.
Do not copy competitor messaging. Use the analysis to find your distinct angle.
