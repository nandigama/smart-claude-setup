import path from 'path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import { ensureDir } from '../utils/file-writer.js';
import chalk from 'chalk';

export type SkillName =
  | 'a11y-audit'
  | 'agent-designer'
  | 'andreessen'
  | 'ask-first'
  | 'capture'
  | 'changelog-generator'
  | 'client-brief'
  | 'code-reviewer'
  | 'code-to-prd'
  | 'competitive-ads-extractor'
  | 'competitive-teardown'
  | 'content-humanizer'
  | 'content-research-writer'
  | 'content-strategy'
  | 'customer-success-manager'
  | 'email-pair'
  | 'email-triage'
  | 'experiment-designer'
  | 'file-organizer'
  | 'financial-analyst'
  | 'handoff'
  | 'internal-comms'
  | 'invoice-organizer'
  | 'jira-manager'
  | 'knowledge-ops'
  | 'langsmith-fetch'
  | 'lead-research-assistant'
  | 'lit-review'
  | 'mcp-builder'
  | 'meeting-insights-analyzer'
  | 'model-select'
  | 'negotiation-prep'
  | 'observability-designer'
  | 'page-cro'
  | 'patent-research'
  | 'performance-profiler'
  | 'playwright-pro'
  | 'pr-review-expert'
  | 'process-mapper'
  | 'product-manager'
  | 'rag-architect'
  | 'reflect'
  | 'research-pulse'
  | 'revenue-operations'
  | 'saas-metrics-coach'
  | 'sales-engineer'
  | 'scrum-master'
  | 'security-guidance'
  | 'senior-architect'
  | 'senior-pm'
  | 'seo-audit'
  | 'skill-creator'
  | 'spec-to-repo'
  | 'tailored-resume-generator'
  | 'tdd-guide'
  | 'tech-debt-tracker'
  | 'tech-stack-evaluator'
  | 'ux-researcher'
  | 'vendor-management'
  | 'webapp-testing'
  | 'weekly-review';

// Single source of truth for all skill metadata.
// Adding a skill: add it to SkillName above, add an entry here, add SKILL.md to templates/.
export const SKILLS: Record<SkillName, string> = {
  'a11y-audit': 'Accessibility audit of a web page or component — WCAG 2.1 compliance check, screen reader issues, keyboard navigation, and specific remediation code.',
  'agent-designer': 'Design an AI agent architecture from scratch — roles, tools, memory, orchestration pattern, and failure modes. Produces a complete agent spec ready for implementation.',
  'andreessen': "Apply Marc Andreessen's market-first investment framework to a decision, opportunity, or strategy. Reframes the question from \"is this good?\" to \"is the market right?\"",
  'ask-first': 'Activates ask-before-act mode for the current session. Before any file operation, tool use, or irreversible action, Claude must state its plan and receive explicit confirmation.',
  'capture': 'Offload everything in your head into a structured action list. Brain-dump freely — Claude organises it into tasks, decisions, and follow-ups.',
  'changelog-generator': 'Generate a user-facing changelog from git commit history. Transforms technical commits into customer-friendly release notes, categorized by features, improvements, fixes, and breaking changes.',
  'client-brief': 'Generate a polished client-facing project brief from raw inputs. Collects context via structured questions, then produces an exec summary, challenge, approach, deliverables, timeline, and next steps.',
  'code-reviewer': 'Structured code review across four dimensions — correctness, security, performance, and maintainability. Produces prioritized findings with specific line-level feedback.',
  'code-to-prd': 'Reverse-engineer a PRD from existing code, a prototype, or a deployed feature. Produces requirements documentation for something that was built without them.',
  'competitive-ads-extractor': 'Research and analyze competitor ad campaigns from public ad libraries — extract messaging patterns, creative approaches, and positioning strategies to inform your own campaigns.',
  'competitive-teardown': 'Deep product competitive analysis — positioning, feature gaps, pricing, ICP overlap, and strategic differentiation opportunities. Goes beyond ads to the product itself.',
  'content-humanizer': 'Transform AI-generated or overly formal content into writing that sounds authentically human — natural rhythm, concrete specifics, and genuine voice.',
  'content-research-writer': 'Write high-quality long-form content through collaborative outlining, research, citations, and section-by-section drafting. Matches your voice and ensures claims are sourced.',
  'content-strategy': 'Content strategy planning — content pillars, editorial calendar, channel strategy, and content-to-pipeline mapping. Builds a system, not just a list of topics.',
  'customer-success-manager': 'CSM toolkit — health scoring, QBR preparation, churn risk assessment, expansion playbooks, and customer communication.',
  'email-pair': 'Collaborative email drafting — you write the rough version, Claude refines it for tone, clarity, and impact while keeping your voice intact.',
  'email-triage': 'Triage an overloaded inbox or set up inbox rules that prevent it from getting overloaded again. Works for Gmail and Outlook.',
  'experiment-designer': 'Design a rigorous A/B test or experiment — hypothesis, metrics, sample size, test duration, and analysis plan. Prevents the most common experimentation mistakes before you run the test.',
  'file-organizer': 'Analyze a messy folder, identify duplicates, propose a clean structure, and organize files with a clear plan before touching anything.',
  'financial-analyst': 'Financial analysis toolkit — DCF valuation, budget vs. actuals, scenario planning, and financial model review. Produces analysis you can defend to a CFO.',
  'handoff': 'Summarize the current Claude Code session into a compact handoff document so the next session can pick up exactly where this one left off — with full context and zero re-explanation.',
  'internal-comms': 'Write polished internal communications — company updates, status reports, incident summaries, team announcements, and all-hands content. Structures the message for the right audience and format.',
  'invoice-organizer': 'Organize invoices and receipts for tax preparation or expense reconciliation. Reads files, extracts key data, renames consistently, sorts into folders, and exports a CSV summary.',
  'jira-manager': 'Jira workflow management — create well-structured epics and stories, groom the backlog, write JQL queries, and design board configurations.',
  'knowledge-ops': 'Build and maintain a team knowledge base — structure, templates, content strategy, and the process to keep it alive. Turns scattered knowledge into findable, trusted documentation.',
  'langsmith-fetch': 'Debug LangChain or LangGraph agents by fetching execution traces from LangSmith — analyze tool calls, intermediate steps, errors, and performance.',
  'lead-research-assistant': 'Identify and prioritize high-quality leads by defining your ICP, discovering target companies, scoring fit, and producing a contact strategy. For sales, BizDev, and partnership teams.',
  'lit-review': 'Systematic literature review — search strategy, inclusion criteria, paper synthesis, and gaps analysis. Structured for academic or formal research purposes.',
  'mcp-builder': 'Design and implement an MCP (Model Context Protocol) server that connects Claude to an external API or data source. Covers planning, implementation in Python or TypeScript, review, and testing.',
  'meeting-insights-analyzer': 'Analyze a meeting transcript to uncover behavioral patterns, speaking dynamics, key decisions, and communication growth areas. Paste a transcript and get actionable insights.',
  'model-select': 'Interactive decision guide for choosing the right Claude model and parameters for any task. Outputs the exact model ID, API parameters, and reasoning.',
  'negotiation-prep': 'Prepare for any negotiation, contract discussion, or difficult conversation. Gathers context via structured questions, then produces a full prep package with your position, their likely position, 3-move sequence, objection responses, and optional roleplay.',
  'observability-designer': 'Design a logging, metrics, tracing, and alerting strategy for a system. Produces an observability spec with specific instrumentation points, alert thresholds, and runbook hooks.',
  'page-cro': 'Conversion rate optimization for a landing page or key funnel step — analyze friction, identify drop-off causes, and produce specific copy and UX improvements.',
  'patent-research': 'Patent landscape analysis — prior art search, freedom-to-operate assessment, competitor patent monitoring, and patent claim analysis.',
  'performance-profiler': 'Analyze application performance — identify bottlenecks, prioritize optimizations by impact, and produce a concrete improvement plan with before/after targets.',
  'playwright-pro': 'Write production-grade Playwright tests — reliable selectors, page object models, fixtures, parallel execution, and CI integration. Goes beyond basic test recording to tests that survive refactors.',
  'pr-review-expert': 'Full pull request review — diff analysis, risk assessment, test coverage check, and a clear approve / request-changes verdict with specific inline feedback.',
  'process-mapper': 'Document and analyze a business process — map the current state, identify bottlenecks and waste, and design the improved future state.',
  'product-manager': 'Full PM toolkit — write PRDs, prioritize with RICE, build roadmaps, or translate strategy into sprint-ready stories. Specify the output type and Claude produces it.',
  'rag-architect': 'Design a retrieval-augmented generation (RAG) pipeline — chunking strategy, embedding model, vector store, retrieval pattern, and evaluation approach. Produces an implementable RAG spec.',
  'reflect': 'Guided reflection session — clarify what you\'re feeling, what\'s working, and what decision or situation is weighing on you. Produces insight, not just summary.',
  'research-pulse': 'Quick literature pulse on a topic — what\'s known, what\'s debated, key papers, and open questions. 15-minute deep-dive that surfaces the research landscape without a full literature review.',
  'revenue-operations': 'RevOps toolkit — pipeline analysis, funnel metrics, forecasting review, and revenue health dashboards. Surfaces what\'s working, what\'s broken, and what to fix.',
  'saas-metrics-coach': 'SaaS metrics analysis and coaching — MRR/ARR, churn, CAC, LTV, NRR, quick ratio, and Rule of 40. Diagnoses what\'s healthy, what\'s broken, and what to fix.',
  'sales-engineer': 'Technical pre-sales toolkit — demo preparation, POC scoping, technical objection handling, and solution architecture for a prospect.',
  'scrum-master': 'Agile ceremony facilitation — sprint planning, daily standup, sprint review, and retrospective. Produces agendas, facilitation guides, and outputs for each ceremony.',
  'security-guidance': 'Security review for code, architecture, or infrastructure — identifies vulnerabilities, assesses risk, and provides specific remediation. Covers OWASP Top 10, cloud misconfigurations, and supply chain risks.',
  'senior-architect': 'System design consultancy — trade-off analysis, architecture decision records, and design recommendations from a senior architect perspective.',
  'senior-pm': 'Senior project management toolkit — project plans, stakeholder maps, risk registers, status reports, and escalation paths. For PMs running complex cross-functional projects.',
  'seo-audit': 'SEO audit of a page or site — on-page elements, technical issues, content quality, E-E-A-T signals, and keyword alignment. Produces prioritized fixes with expected impact.',
  'skill-creator': 'Design and write a new Claude Code skill from scratch. Guides you from a rough idea to a production-ready SKILL.md file following the Smart Claude Setup format spec.',
  'spec-to-repo': 'Turn a specification, PRD, or feature description into a scaffolded repository plan — directory structure, key files, implementation sequence, and starter code.',
  'tailored-resume-generator': 'Tailor your resume to a specific job description — highlights relevant experience, optimizes for ATS keyword matching, and strengthens impact statements.',
  'tdd-guide': 'Guide test-driven development for a specific piece of functionality — write failing tests first, then implement to make them pass. Red → Green → Refactor.',
  'tech-debt-tracker': 'Identify, categorize, and prioritize technical debt in a codebase or system. Produces a debt register with effort/impact scores and a sequenced paydown plan.',
  'tech-stack-evaluator': 'Evaluate and compare technology choices with a structured trade-off analysis — framework, database, cloud provider, language, or any architectural decision. Produces a scored comparison and a clear recommendation.',
  'ux-researcher': 'User research workflows — interview guide design, synthesis, insight extraction, and persona development. Produces research artifacts ready to share with product and design teams.',
  'vendor-management': 'Vendor evaluation, contract review, renewal negotiation, and performance tracking. Makes vendor decisions defensible and vendor relationships productive.',
  'webapp-testing': 'Test a locally running web app using Playwright — verify UI functionality, debug behavior, capture screenshots, and identify broken flows.',
  'weekly-review': "Structured weekly review connecting your week's work to your goals. Surfaces wins, gaps, patterns, and next-week priorities. Best run every Friday afternoon or Monday morning.",
};

// Backwards-compatible alias — used by init.ts to populate the multiselect hint text.
export const SKILL_DESCRIPTIONS = SKILLS;

function getTemplatesRoot(): string {
  const thisFile = fileURLToPath(import.meta.url);
  // When bundled (dist/index.js), package root is 2 levels up.
  // When running from source (src/generators/skills.ts), repo root is 4 levels up.
  const normalized = thisFile.replace(/\\/g, '/');
  const levels = normalized.includes('/dist/') ? 2 : 4;
  return path.resolve(thisFile, ...Array(levels).fill('..'), 'templates');
}

export async function generateSkills(outputDir: string, skills: SkillName[]): Promise<void> {
  if (skills.length === 0) return;

  const skillsDir = path.join(outputDir, '.claude', 'skills');
  await ensureDir(skillsDir);

  const templatesRoot = getTemplatesRoot();

  await Promise.all(
    skills.map(async (skill) => {
      const src = path.join(templatesRoot, '.claude', 'skills', skill, 'SKILL.md');
      const dest = path.join(skillsDir, skill, 'SKILL.md');

      if (await fs.pathExists(src)) {
        await fs.copy(src, dest, { overwrite: false });
        console.log(chalk.green(`  created  .claude/skills/${skill}/SKILL.md`));
      } else {
        console.log(chalk.yellow(`  missing  skill source: ${skill} (skipped)`));
      }
    })
  );
}
