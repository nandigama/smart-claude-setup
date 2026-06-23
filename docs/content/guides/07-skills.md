# 7. Turn Repeat Workflows Into Skills

If you've asked Claude the same type of question more than three times, turn it into a skill.

## What Skills Are

Skills are reusable workflow definitions stored as markdown files in `.claude/skills/`.
You invoke them with a slash command: `/weekly-review`, `/client-brief`, `/negotiation-prep`.

One line. Claude pulls all the context it needs, asks the right questions, and produces
the right output — without you re-explaining the format every time.

## Pre-Built Skills in This Repo

62 skills are ready to install across six categories:

### Productivity (for everyone)

| Skill | What It Does |
|---|---|
| `/capture` | Brain-dump to structured action list — offload your head |
| `/reflect` | Guided reflection for clarity on a decision, situation, or week |
| `/handoff` | Summarize the current session for seamless resumption |
| `/email-triage` | Design inbox rules and triage an overloaded inbox |
| `/email-pair` | Collaborative email drafting: you write rough, Claude refines |
| `/andreessen` | Market-first decision framework for evaluating opportunities |
| `/teach` | Five-phase Socratic teaching loop: calibrate, teach, test, fix gaps, compress into a keeper |

### Workflow (for everyone)

| Skill | What It Does |
|---|---|
| `/negotiation-prep` | Full prep package: position, moves, objections, roleplay |
| `/weekly-review` | Structured weekly reflection: wins, gaps, patterns, next-week plan |
| `/client-brief` | Client-facing brief: exec summary, deliverables, timeline, next steps |
| `/meeting-insights-analyzer` | Analyze transcripts: participation, decisions, conflict, action items |
| `/internal-comms` | Write company/team communications: updates, incidents, announcements |
| `/file-organizer` | Reorganize a folder — proposes plan before touching anything |
| `/invoice-organizer` | Organize invoices for tax prep: extract, rename, sort, CSV export |
| `/ask-first` | Activates ask-before-act mode for the session |

### Professional (career, sales, content, finance)

| Skill | What It Does |
|---|---|
| `/content-research-writer` | Long-form content: outline → research → section-by-section draft |
| `/tailored-resume-generator` | Tailor resume to a JD with ATS optimization |
| `/lead-research-assistant` | ICP → target companies → scored leads → outreach drafts |
| `/competitive-ads-extractor` | Analyze competitor ads: messaging, positioning, white space |
| `/competitive-teardown` | Deep product competitive analysis: positioning, gaps, vulnerabilities |
| `/customer-success-manager` | CSM toolkit: health scoring, QBRs, churn save, expansion plays |
| `/sales-engineer` | Technical pre-sales: demo prep, POC scope, objection handling |
| `/revenue-operations` | RevOps: pipeline health, funnel conversion, forecast review |
| `/financial-analyst` | DCF, budget vs. actuals, scenario analysis, unit economics |
| `/saas-metrics-coach` | MRR, churn, CAC, LTV, NRR, Rule of 40 — diagnose and fix |

### Business Operations

| Skill | What It Does |
|---|---|
| `/process-mapper` | Document and optimize business processes: current → future state |
| `/vendor-management` | Vendor eval, contract review, renewal negotiation, performance review |
| `/knowledge-ops` | Build and maintain a team knowledge base that stays alive |
| `/senior-pm` | PM toolkit: project plans, stakeholder maps, risk registers, status reports |
| `/scrum-master` | Agile ceremonies: sprint planning, standup, review, retrospective |
| `/jira-manager` | Jira epics, stories, JQL queries, board configuration |

### Research & Product

| Skill | What It Does |
|---|---|
| `/research-pulse` | Quick literature pulse: what's known, debated, key papers, open questions |
| `/lit-review` | Systematic literature review: search strategy, synthesis, gaps |
| `/patent-research` | Patent landscape, prior art, FTO analysis |
| `/product-manager` | PM toolkit: PRDs, RICE, roadmaps, user stories |
| `/experiment-designer` | A/B test design: hypothesis, sample size, duration, analysis plan |
| `/ux-researcher` | Interview guides, synthesis, insight reports, personas |
| `/code-to-prd` | Reverse-engineer a PRD from existing code |
| `/spec-to-repo` | Turn a spec into a scaffolded repository plan |

### Developer Skills

| Skill | What It Does |
|---|---|
| `/changelog-generator` | Transform git commits into user-facing release notes |
| `/model-select` | Interactive model picker: exact model ID + parameters |
| `/skill-creator` | Design and write a new SKILL.md from a workflow idea |
| `/agent-designer` | Design AI agent architectures: roles, tools, memory, orchestration |
| `/rag-architect` | Design RAG pipelines: chunking, embedding, retrieval, evaluation |
| `/code-reviewer` | Code review: correctness, security, performance, maintainability |
| `/pr-review-expert` | Full PR review: diff analysis, risk, test coverage, verdict |
| `/tech-debt-tracker` | Identify and prioritize tech debt with a paydown plan |
| `/performance-profiler` | Analyze bottlenecks and produce a prioritized optimization plan |
| `/observability-designer` | Design logging, metrics, tracing, and alerting strategy |
| `/security-guidance` | Security review: OWASP, cloud misconfigs, supply chain |
| `/senior-architect` | System design: trade-off analysis, ADRs, recommendations |
| `/tdd-guide` | Test-driven development: red → green → refactor cycle |
| `/a11y-audit` | WCAG 2.1 accessibility audit with remediation code |
| `/tech-stack-evaluator` | Scored trade-off analysis of technology choices |
| `/playwright-pro` | Production-grade Playwright tests: POM, fixtures, CI integration |
| `/mcp-builder` | Design and implement an MCP server for an external API |
| `/webapp-testing` | Test a local web app with Playwright |
| `/langsmith-fetch` | Debug LangChain/LangGraph agents via LangSmith traces |

### Marketing

| Skill | What It Does |
|---|---|
| `/content-strategy` | Content pillars, editorial calendar, channel strategy |
| `/seo-audit` | On-page, technical, E-E-A-T audit with prioritized fixes |
| `/page-cro` | Landing page CRO: friction audit, copy rewrites, A/B test design |
| `/content-humanizer` | Transform AI-written or formal content into authentic human voice |

## How to Install Pre-Built Skills

**Option 1 — CLI**:
```bash
npx create-smart-claude add-skill weekly-review
```

**Option 2 — Manual**: Copy the `SKILL.md` from `templates/.claude/skills/<skill-name>/` into `.claude/skills/<skill-name>/SKILL.md` in your project.

## How to Write Your Own Skill

Create `.claude/skills/my-workflow/SKILL.md`:

```markdown
---
name: my-workflow
description: What this skill does. Trigger: /my-workflow
---

# /my-workflow

[2-3 sentences describing what this skill produces]

## Step 1 — Gather Context

Use AskUserQuestion to collect:
1. [Question 1]
2. [Question 2]

Do not produce output until the user answers.

## Step 2 — Produce the Output

[Detailed format instructions for the output]
```

**The one non-negotiable rule**: Step 1 must always be AskUserQuestion.
Skills that guess produce polished outputs for the wrong goal.

## The Skill Format Reference

See [Skill Format Reference](/reference/skill-format) for the complete specification,
including frontmatter fields, step structure, and examples.

## When to Create a New Skill

Create a skill when:
- You've invoked the same workflow ≥3 times
- The workflow has a consistent structure (gather context → produce output)
- You want to share it with a team

Don't create a skill for one-off tasks. Skills are for recurring patterns.
