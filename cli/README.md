# create-smart-claude

Scaffold a Claude project the right way in under 60 seconds.

## Usage

```bash
npm create smart-claude
```

No install required. Answers a few questions, then generates:
- `ABOUT_ME/` with role, goals, rules, and writing-samples folder
- `TEMPLATES/` with reusable prompt patterns
- `CLAUDE_OUTPUTS/` for deliverables
- `.claude/CLAUDE.md` with your selected skills listed
- `.claude/skills/` with your chosen slash commands installed
- `global-instructions/` ready to paste into Claude Settings

## Other Commands

```bash
# Add a single skill to an existing project
npx create-smart-claude add-skill weekly-review

# Run the interactive model selection guide
npx create-smart-claude model-select
```

## Available Skills (61)

Install any skill with `npx create-smart-claude add-skill <skill-name>`.

### Productivity

| Skill | What It Does |
|---|---|
| `/capture` | Brain-dump to structured action list |
| `/reflect` | Guided reflection for clarity on a decision or situation |
| `/handoff` | Summarize the current session for seamless resumption |
| `/email-triage` | Design inbox rules and triage an overloaded inbox |
| `/email-pair` | Collaborative email drafting: you write rough, Claude refines |
| `/andreessen` | Market-first decision framework for evaluating opportunities |

### Workflow

| Skill | What It Does |
|---|---|
| `/negotiation-prep` | Full prep package: position, moves, objections, roleplay |
| `/weekly-review` | Structured weekly reflection: wins, gaps, patterns, next-week plan |
| `/client-brief` | Client-facing brief: exec summary, deliverables, timeline |
| `/meeting-insights-analyzer` | Analyze transcripts: participation, decisions, action items |
| `/internal-comms` | Write company/team communications: updates, incidents, announcements |
| `/file-organizer` | Reorganize a folder — proposes plan before touching anything |
| `/invoice-organizer` | Organize invoices for tax prep: extract, rename, sort, CSV export |
| `/ask-first` | Activates ask-before-act mode for the session |

### Professional

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
| `/vendor-management` | Vendor eval, contract review, renewal negotiation |
| `/knowledge-ops` | Build and maintain a team knowledge base that stays alive |
| `/senior-pm` | PM toolkit: project plans, stakeholder maps, risk registers |
| `/scrum-master` | Agile ceremonies: sprint planning, standup, review, retrospective |
| `/jira-manager` | Jira epics, stories, JQL queries, board configuration |

### Research & Product

| Skill | What It Does |
|---|---|
| `/research-pulse` | Quick literature pulse: what's known, debated, key papers |
| `/lit-review` | Systematic literature review: search strategy, synthesis, gaps |
| `/patent-research` | Patent landscape, prior art, FTO analysis |
| `/product-manager` | PM toolkit: PRDs, RICE, roadmaps, user stories |
| `/experiment-designer` | A/B test design: hypothesis, sample size, duration, analysis plan |
| `/ux-researcher` | Interview guides, synthesis, insight reports, personas |
| `/code-to-prd` | Reverse-engineer a PRD from existing code |
| `/spec-to-repo` | Turn a spec into a scaffolded repository plan |

### Developer

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

## Development

```bash
cd cli
npm install
npm run dev        # run CLI locally
npm run build      # build for publish
npm run typecheck  # type-check without building
```
