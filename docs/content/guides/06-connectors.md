# 6. Use Connectors

Claude can read your actual data — not a copy you pasted.

## What Connectors Do

Connectors give Claude live access to external tools and services:

| Connector | What Claude Can Read |
|---|---|
| Slack | Messages, threads, channel history |
| Gmail | Emails, threads, labels |
| Google Drive | Docs, Sheets, Slides |
| Notion | Pages, databases |
| Figma | Design files, comments |

## The Before/After

**Without connectors**:
1. You open Slack
2. You find the relevant thread
3. You copy the messages
4. You paste them into Claude
5. You explain the context
6. Claude responds

**With connectors**:
1. You say: "Read the #product-feedback channel from this week and summarize the top themes"
2. Claude responds

## How to Set Up Connectors

1. Go to Claude.ai
2. Start a conversation in a Project
3. Click the Connectors icon (plug icon in the chat input)
4. Authenticate with the service you want to connect
5. Reference it in your prompt: "Check my Gmail for emails from Acme Corp this week"

Connectors are per-Project. Set them up once in your main work project.

## Practical Use Cases

**Slack + weekly review**: "Read #engineering from this week and add the key decisions to my weekly review draft"

**Gmail + client brief**: "Read the email thread with [client] and draft a brief based on what they asked for"

**Notion + project planning**: "Read the product spec in Notion at [page title] and break it into a development task list"

**Google Drive + analysis**: "Read the Q2 sales data in the spreadsheet called [name] and identify the top 3 trends"

## What Connectors Aren't

Connectors read data; they don't write back to those tools (with exceptions — check current
connector capabilities on claude.ai, as this changes over time).

They also don't index everything automatically. Claude reads what you point at, not
a full crawl of your workspace.

## The Real Benefit

The real benefit isn't time saved copying data. It's that Claude responds to the actual,
current state of things — not a snapshot you pasted two days ago.

Decisions made on current data are better than decisions made on stale context.
