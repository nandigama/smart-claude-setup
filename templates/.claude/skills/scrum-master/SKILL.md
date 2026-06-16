---
name: scrum-master
description: Agile ceremony facilitation — sprint planning, daily standup, sprint review, and retrospective. Produces agendas, facilitation guides, and outputs for each ceremony. Trigger: /scrum-master
---

# /scrum-master

Facilitates Agile ceremonies with structure that keeps them useful and short.
Produces agendas, facilitation prompts, and ceremony outputs.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Which ceremony do you need? (select one)
   - **Sprint planning** — plan the next sprint
   - **Standup** — structure a daily standup
   - **Sprint review** — review completed work with stakeholders
   - **Retrospective** — surface what to improve
   - **Backlog refinement** — groom upcoming stories
2. What is the team size and sprint length?
3. What is the sprint goal or current focus area?
4. What's the team's biggest challenge right now? (velocity / quality / communication / scope creep)
5. Any specific issues to address in this ceremony?

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Ceremony Output

### Sprint Planning (2-4 hours for 2-week sprint)

**Pre-work** (before the meeting):
- [ ] Product backlog refined and prioritized
- [ ] Team velocity established (last 3 sprints average)
- [ ] Definition of Done agreed and visible
- [ ] Capacity confirmed (who's out, part-time, etc.)

**Agenda**:
1. **Sprint goal** (15 min): PO presents the sprint goal — what value are we delivering?
2. **Backlog selection** (60 min): team pulls from top of backlog; questions and clarifications
3. **Task breakdown** (60 min): team breaks stories into tasks; surface dependencies
4. **Commitment** (15 min): confirm sprint goal and commitment

**Facilitation prompts**:
- "Does everyone understand what done looks like for this story?"
- "What could prevent us from completing this?"
- "Are there any dependencies on other teams?"

**Output template**:
```
Sprint [N] Goal: [one sentence]
Committed Stories: [list with story points]
Capacity: [N] points | Committed: [N] points
Team Confidence: [1-10]
```

### Daily Standup (15 min max)

**Structure** (per person, 2 min each):
1. What did I complete yesterday that advances the sprint goal?
2. What will I do today toward the sprint goal?
3. Any impediment? (yes/no — discuss after standup)

**Anti-patterns to avoid**:
- Status reports to the Scrum Master (it's for the team)
- Solving problems during standup (take it offline)
- Discussion of work outside the sprint

**Impediment board**: capture blockers in real-time; Scrum Master owns resolution.

### Sprint Review (1 hour)

**Agenda**:
1. Sprint goal recap (5 min) — did we achieve it?
2. Demo (30 min) — show working software; stakeholders try it
3. Metrics review (10 min) — velocity, burndown, quality
4. Stakeholder feedback (10 min) — open questions
5. Backlog preview (5 min) — what's next

**Facilitation**: demo by the team member who built it, not the PO. Show real usage, not slides.

### Retrospective (60-90 min)

**Format** (rotate formats to keep it fresh):

**Option 1 — Start / Stop / Continue**:
- What should we start doing?
- What should we stop doing?
- What's working that we should continue?

**Option 2 — Sailboat**:
- Wind (what's helping us go faster?)
- Anchor (what's slowing us down?)
- Rocks ahead (risks on the horizon)

**Option 3 — 4Ls**:
- Liked / Learned / Lacked / Longed for

**Facilitation rules**:
- Anonymous input first (everyone writes, then share)
- Vote on themes to prioritize
- Commit to ≤3 actionable improvements with owners and due dates

**Output**: 3 action items maximum. If you commit to 10, you deliver 0.

## Step 3 — Team Health Check

Ask: "Do you want a team health survey template — a quick pulse check on team dynamics, clarity, and morale you can run monthly?"
