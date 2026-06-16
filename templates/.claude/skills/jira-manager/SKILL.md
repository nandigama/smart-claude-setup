---
name: jira-manager
description: Jira workflow management — create well-structured epics and stories, groom the backlog, write JQL queries, and design board configurations. Trigger: /jira-manager
---

# /jira-manager

Jira workflow management — produces well-structured Jira content and helps you use Jira
as a tool for team clarity, not a ticket-filing system.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What do you need? (select one)
   - **Create epic + stories** — structure a feature into Jira-ready tickets
   - **Groom backlog** — clarify and improve existing tickets
   - **JQL query** — build a Jira Query Language query for a specific view
   - **Board setup** — design workflow columns and swimlanes
   - **Report** — produce a sprint or project status from Jira data
2. Describe the feature, project, or data you're working with
3. What is your team's workflow? (board type: Scrum / Kanban; statuses used)
4. Who is the intended audience for the output? (engineers / PMs / stakeholders)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Jira Output

### Epic + Stories Structure

**Epic**:
```
Summary: [Feature Name] — [one-line outcome]
Description:
  ## Why
  [Business context — why this matters and what problem it solves]

  ## What
  [What we're building at a high level]

  ## Success Criteria
  - [ ] [Measurable outcome 1]
  - [ ] [Measurable outcome 2]

  ## Out of Scope
  - [Explicitly excluded]
```

**Stories** (one per distinct user behavior):
```
Summary: As a [role], I can [action] so that [benefit]

Description:
  ## Context
  [Why this story matters in the context of the epic]

  ## Acceptance Criteria
  - Given [state], when [action], then [result]
  - Given [state], when [action], then [result]

  ## Technical Notes
  [Implementation hints, API endpoints, edge cases to handle]

  ## Definition of Done
  - [ ] Unit tests written and passing
  - [ ] Code reviewed
  - [ ] QA sign-off
  - [ ] Deployed to staging

Story Points: [estimate]
Labels: [relevant labels]
Links: Belongs to Epic [epic-key]
```

### Backlog Grooming

For each ticket provided, assess and improve:
- Is the summary actionable and specific? (rewrite if not)
- Are acceptance criteria present and testable? (add if missing)
- Is it the right size? (flag if > 5 story points — suggest splitting)
- Are dependencies identified?

Return a before/after for each ticket.

### JQL Queries

Common queries built to spec:

```jql
-- All open items in current sprint assigned to me
project = PROJECT AND sprint in openSprints() AND assignee = currentUser() AND status != Done

-- Bugs created in last 7 days, unresolved
project = PROJECT AND issuetype = Bug AND created >= -7d AND resolution = Unresolved ORDER BY priority DESC

-- Stories in epics with no estimates
project = PROJECT AND issuetype = Story AND "Story Points" is EMPTY AND status != Done

-- Blocked items
project = PROJECT AND labels = blocked AND status != Done
```

Build the specific query for the user's stated need with the JQL explained line by line.

### Board Configuration

**Recommended workflow columns** for a standard engineering team:
`Backlog → To Do → In Progress → In Review → QA → Done`

**Swimlane options**:
- By Epic (good for feature-focused teams)
- By Assignee (good for capacity visibility)
- By Priority (good for support/bug teams)

## Step 3 — Automation Rules

Ask: "Do you want Jira automation rule suggestions — common rules that reduce manual ticket updates (auto-transition on PR merge, auto-assign on status change, auto-close resolved bugs after 7 days)?"
