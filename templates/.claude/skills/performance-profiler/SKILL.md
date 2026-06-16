---
name: performance-profiler
description: Analyze application performance — identify bottlenecks, prioritize optimizations by impact, and produce a concrete improvement plan with before/after targets. Trigger: /performance-profiler
---

# /performance-profiler

Analyzes performance problems systematically — from symptoms to root cause to fix.
Works with profiler output, slow query logs, APM dashboards, or just a description
of the problem. Avoids premature optimization by focusing on measured bottlenecks.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What is the performance symptom? (slow page load / high latency API / memory growth / CPU spike / throughput limit)
2. What data do you have?
   - Profiler output (paste or describe)
   - Slow query log
   - APM traces (Datadog, New Relic, etc.)
   - Just a description of what's slow and when
3. What is the system? (web app / API / data pipeline / background job / database)
4. What are your performance targets? (p99 latency < X ms / throughput > Y req/s / memory < Z MB)
5. Current baseline measurements? (what's the actual number today)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Performance Analysis

### Symptom → Hypothesis → Evidence

For each performance problem identified:

**Symptom**: [what users/monitoring observe]
**Hypothesis**: [most likely root cause based on the data]
**Evidence**: [specific data points that support this hypothesis]
**Confidence**: High / Medium / Low

### Bottleneck Hierarchy

Performance problems usually stack. Identify the primary constraint:

```
Primary bottleneck → Secondary bottleneck → ...
(fix primary first; secondary may not matter until primary is resolved)
```

Common patterns to check:
- **N+1 queries**: ORM generating a query per row in a loop
- **Missing index**: full table scans on frequently filtered columns
- **Serialization**: JSON encode/decode in hot paths
- **Memory allocation**: GC pressure from large allocations or leaks
- **I/O blocking**: synchronous calls to external services in critical path
- **CPU-bound work**: non-parallelized computation that could be batched or cached
- **Network round-trips**: chatty microservice calls that could be aggregated

### Optimization Plan

| Fix | Expected Impact | Effort | Risk | Measure With |
|---|---|---|---|---|
| [specific change] | [X% latency reduction / Y% throughput gain] | H/M/L | H/M/L | [metric + tool] |

Order by: highest impact per unit of effort, lowest risk first.

**The one fix**: if the user can do only one thing, which optimization gives the most return?

### Before/After Targets

| Metric | Current | Target | Fix That Gets You There |
|---|---|---|---|
| [e.g., p99 latency] | [Xms] | [Yms] | [specific optimization] |

## Step 3 — Implementation

Ask: "Do you want me to write the optimized code for the highest-impact fix, or produce a load test script to measure the before/after delta?"
