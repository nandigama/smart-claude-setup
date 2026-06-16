# 1. Claude Is 6 Tools, Not 1

Most people use only the chat window. The real power is everywhere else.

## The 6 Tools

| Tool | What It's For |
|---|---|
| **Chat** | Quick questions, one-off tasks. The starting point, not the ending point. |
| **Projects** | Persistent context across conversations. Everything in a project shares the same knowledge base. |
| **Claude Code** | Your terminal, your files, your codebase. For developers who want Claude working on real code in real repositories. |
| **Cowork** | Async, long-running tasks. Claude works for minutes while you do something else. |
| **Skills** | Reusable workflows invoked with a slash command. `/weekly-review`, `/client-brief`, `/negotiation-prep`. |
| **Connectors** | Live access to Slack, Gmail, Drive, Notion, Figma. No copy-paste. No context switching. |

## The Common Pattern

People who get exceptional results from Claude don't use chat for everything.

- **Ongoing work** → Projects (shared context, one place, everything Claude needs to know)
- **Code and files** → Claude Code (works on actual files, not chat windows)
- **Repetitive tasks** → Skills (turn workflows into one-line invocations)
- **External data** → Connectors (read from Slack or Notion mid-conversation)
- **Long-running work** → Cowork (set it up, walk away, come back to the result)

## What This Means Practically

Before you paste something into chat:

1. Does Claude already have this context in a Project? → Don't paste it again
2. Is this a recurring workflow? → Turn it into a Skill
3. Is this data sitting in Slack or Drive? → Use a Connector
4. Will this take more than a few minutes? → Use Cowork

The bottleneck isn't Claude. It's the setup.

## Next Step

Set up a Project for your main work context. Every conversation in that Project inherits
everything you put in the knowledge base — and your prompts shrink accordingly.

See [Guideline 3: Project Structure](/guides/03-project-structure) for the three folders that every Project needs.
