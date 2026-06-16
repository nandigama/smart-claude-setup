# 12. Install and Use Plugins

Each plugin adds specialized skills and slash commands.
Type `/` in chat to see everything unlocked.

## What Plugins Are

Plugins extend Claude with domain-specific capabilities built by third parties.
They add new slash commands, connect to specialized APIs, and give Claude knowledge
and tools it doesn't have by default.

## Finding Plugins

Browse available plugins at [claude.ai/plugins](https://claude.ai/plugins).

Categories include:
- **Sales** — CRM integrations, deal analysis, outreach workflows
- **Marketing** — Campaign planning, content generation, analytics
- **Legal** — Contract review, compliance checking, document analysis
- **Finance** — Financial modeling, reporting, market data
- **Data** — Database queries, visualization, analysis pipelines
- **Product** — Roadmap tools, user research synthesis
- **Support** — Ticket analysis, response drafting

## How to Install

1. Go to claude.ai/plugins
2. Find a plugin for your use case
3. Click Install and follow the authentication flow
4. Type `/` in any conversation to see your installed plugins' commands

## Using Plugin Commands

Once installed, plugins add new slash commands alongside your custom skills:

```
/salesforce-opportunity-summary
/linear-sprint-review
/looker-pull-dashboard-data
```

These are invoked exactly like your custom skills — one line, Claude handles the rest.

## The Signal to Install a Plugin

The right time to install a plugin is when you find yourself repeatedly:
1. Copying data from a tool into Claude
2. Formatting the same type of output for a specific destination
3. Running the same workflow that requires external data

If you're doing step 1 more than twice a week, there's probably a plugin that eliminates it.

## Plugins vs Connectors vs Skills

| | What It Does |
|---|---|
| **Connector** | Reads data from an external service (Slack, Gmail, Drive, Notion) |
| **Plugin** | Adds specialized commands and capabilities built by a third party |
| **Skill** | A custom workflow you define and maintain for your own use |

They complement each other. A plugin might give you `/crm-deal-analysis`;
a Connector gives Claude access to your Gmail; your Skill `/client-brief` combines both.

## The Real Limit

The bottleneck is still setup. Plugins that take 30 minutes to configure and 5 minutes
to use weekly are still worth installing — but you have to do the 30 minutes first.

Start with one plugin for the tool you use most often. Get value from it. Then expand.
