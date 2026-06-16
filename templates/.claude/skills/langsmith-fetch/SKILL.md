---
name: langsmith-fetch
description: Debug LangChain or LangGraph agents by fetching execution traces from LangSmith — analyze tool calls, intermediate steps, errors, and performance. Trigger: /langsmith-fetch
---

# /langsmith-fetch

Fetches execution traces from LangSmith Studio and analyzes them to debug agent behavior —
why a tool call failed, why the agent took an unexpected path, where latency is coming from,
or why the final output is wrong.

For LangChain and LangGraph agents instrumented with LangSmith tracing.

## Prerequisites

```bash
# Install LangSmith CLI
pip install langsmith

# Set required environment variables
export LANGSMITH_API_KEY="your-api-key"
export LANGSMITH_PROJECT="your-project-name"   # the project name in LangSmith Studio
```

Your agent must be running with LangSmith tracing enabled:
```python
import os
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = "your-api-key"
```

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What are you trying to debug? (wrong output / unexpected tool call / error / slow performance / infinite loop)
2. How do you want to identify the run to fetch?
   - Run ID (from LangSmith Studio URL)
   - "Latest run in my project"
   - A specific time range
3. What is the agent supposed to do? (brief description of the expected behavior)
4. What actually happened? (what went wrong)

Do not produce any output until the user answers all questions.

## Step 2 — Fetch and Analyze the Trace

### Fetch the Run

```python
from langsmith import Client

client = Client()

# Fetch by run ID
run = client.read_run("<run-id>")

# Or fetch latest run in project
runs = list(client.list_runs(
    project_name="your-project",
    limit=1,
    order="desc"
))
run = runs[0]
```

Extract and display:
- **Run ID** and **start/end time**
- **Total latency** (ms)
- **Input** (what was passed to the agent)
- **Output** (what the agent returned)
- **Error** (if any, full traceback)

### Trace Tree Analysis

Walk the full trace tree — each step, tool call, and LLM call:

```
Root: agent_executor [2.4s]
├── llm_call [0.8s] → "I should use search_tool"
├── tool: search_tool [1.1s]
│   ├── input: {"query": "..."}
│   └── output: {"results": [...]}
├── llm_call [0.4s] → "Based on results..."
└── final_output [0.1s]
```

For each step, report:
- Name, type, duration
- Input and output (truncated if large)
- Any error or unexpected result

### Root Cause Analysis

Based on the trace, identify:
- **Where it went wrong**: the specific step that produced the wrong result
- **Why**: the most likely cause (bad prompt, wrong tool selected, hallucinated tool input, API error, context overflow)
- **Evidence**: the specific trace data that supports this diagnosis

### Fix Recommendation

For the identified root cause, suggest:
1. The specific change to make (prompt edit / tool description update / retry logic / parameter fix)
2. How to verify the fix worked (what to look for in the next trace)

## Step 3 — Comparative Analysis

Ask: "Do you want to compare this failed run against a successful run to pinpoint exactly what's different?"

If yes: fetch a reference run and produce a diff of:
- LLM prompts at each step
- Tool selection decisions
- Intermediate outputs

This is the fastest way to isolate whether the problem is the input, the prompt, or the tool.
