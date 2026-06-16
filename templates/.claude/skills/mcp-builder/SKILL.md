---
name: mcp-builder
description: Design and implement an MCP (Model Context Protocol) server that connects Claude to an external API or data source. Covers planning, implementation in Python or TypeScript, review, and testing. Trigger: /mcp-builder
---

# /mcp-builder

Guides you through building a production-quality MCP server — from defining what tools to expose,
through implementation in Python (FastMCP) or TypeScript (MCP SDK), to testing it with Claude.

MCP servers let Claude call external APIs, read databases, query services, and take actions —
making Claude genuinely useful in your specific workflow rather than in isolation.

## Prerequisites

**Python path** (FastMCP — recommended for new servers):
```bash
pip install fastmcp
```

**TypeScript path** (MCP SDK):
```bash
npm install @modelcontextprotocol/sdk
```

Claude Code must be running with MCP server support enabled.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What external system do you want Claude to connect to? (API, database, file system, service)
2. What should Claude be able to DO with it? (read data / write data / trigger actions / search / all)
3. List the 3-5 specific operations that matter most (e.g., "get user by ID", "create a GitHub issue", "query the orders table")
4. Do you have API credentials or access already? (yes / no / partial)
5. What language do you prefer? (Python with FastMCP / TypeScript with MCP SDK)
6. Will this server be used just by you, or shared with a team?

Do not produce any output until the user answers all questions.

## Step 2 — Build the MCP Server

### Phase A — Design (get approval before coding)

Produce a tool specification:

```
Server name: [name]-mcp
Tools:

1. get_[resource]
   Input: { id: string }
   Output: { resource object }
   Description: Fetch a single [resource] by ID

2. list_[resources]
   Input: { limit?: number, filter?: string }
   Output: { items: [...], total: number }
   Description: List [resources] with optional filtering

3. create_[resource]
   Input: { field1: string, field2: string }
   Output: { id: string, created: boolean }
   Description: Create a new [resource]
```

**Stop and ask**: "Does this tool design cover what you need? Add, remove, or rename tools before I write the code."

### Phase B — Implementation

**Python (FastMCP)**:

```python
from fastmcp import FastMCP
import httpx

mcp = FastMCP("[server-name]")

@mcp.tool()
async def get_resource(resource_id: str) -> dict:
    """Fetch a [resource] by ID."""
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"https://api.example.com/resources/{resource_id}",
            headers={"Authorization": f"Bearer {API_KEY}"}
        )
        response.raise_for_status()
        return response.json()

if __name__ == "__main__":
    mcp.run()
```

**TypeScript (MCP SDK)**:

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({ name: "[server-name]", version: "1.0.0" });

server.tool("get_resource", { resourceId: z.string() }, async ({ resourceId }) => {
  const res = await fetch(`https://api.example.com/resources/${resourceId}`);
  const data = await res.json();
  return { content: [{ type: "text", text: JSON.stringify(data) }] };
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

Implement all approved tools with:
- Proper error handling (API errors → meaningful messages, not stack traces)
- Input validation before making external calls
- A brief docstring on each tool (Claude reads these to decide when to use them)

### Phase C — Configuration

Produce the Claude Code configuration to register the server:

```json
// .claude/settings.json
{
  "mcpServers": {
    "[server-name]": {
      "command": "python",
      "args": ["path/to/server.py"],
      "env": {
        "API_KEY": "${API_KEY}"
      }
    }
  }
}
```

## Step 3 — Test with Claude

After implementation, produce a test checklist:

- [ ] Server starts without errors: `python server.py` (or `npx ts-node server.ts`)
- [ ] Registered in Claude Code: restart Claude Code and check MCP server list
- [ ] Each tool callable: ask Claude to call each tool with a test input
- [ ] Error cases handled: try invalid IDs, missing auth, bad inputs

Ask: "Do you want me to write a test script that calls each tool directly, outside of Claude, to verify the implementation before connecting it?"
