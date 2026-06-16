---
name: observability-designer
description: Design a logging, metrics, tracing, and alerting strategy for a system. Produces an observability spec with specific instrumentation points, alert thresholds, and runbook hooks. Trigger: /observability-designer
---

# /observability-designer

Designs a complete observability stack for a system — what to log, what to measure,
where to add traces, and which alerts to set up. Grounded in the three pillars:
logs, metrics, traces. Output is a spec you can hand to an engineer and implement.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Describe the system. (architecture, main components, traffic volume)
2. What observability do you currently have? (nothing / some logs / full APM / other)
3. What has gone wrong recently that you couldn't diagnose fast enough?
4. What is your SLA or SLO target? (e.g., 99.9% uptime, p99 < 200ms)
5. What tooling are you using or open to? (Datadog / Grafana + Prometheus / CloudWatch / OpenTelemetry / other)
6. Who responds to incidents? (on-call engineer / SRE team / everyone / no on-call yet)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Observability Design

### Instrumentation Map

For each major component, specify what to instrument:

**[Component Name]** (e.g., API Gateway)

*Logs* — what to log at each level:
- ERROR: [events that need human attention now]
- WARN: [degraded state, not yet broken]
- INFO: [key business events — request received, order created]
- DEBUG: [diagnostic detail, off in production]

*Metrics* — what to measure:
- Request rate (requests/second)
- Error rate (% of requests returning 5xx)
- Latency (p50, p95, p99)
- [business-specific: orders/minute, cache hit rate, etc.]

*Traces* — where to add spans:
- Entry point (HTTP handler or message consumer)
- Database calls
- External API calls
- Expensive internal operations

### SLI/SLO Definition

| SLI | Measurement | SLO Target |
|---|---|---|
| Availability | % of requests returning non-5xx | 99.9% over 30 days |
| Latency | p99 response time | < 200ms |
| Error rate | % of requests with errors | < 0.1% |

### Alert Thresholds

| Alert | Condition | Severity | Action |
|---|---|---|---|
| High error rate | error_rate > 1% for 5 min | P1 — page on-call | Check logs for error pattern |
| Latency spike | p99 > 500ms for 3 min | P2 — notify | Check DB slow queries |
| Service down | health check failing | P1 — page on-call | Restart + escalate |

### Runbook Hooks

For each P1 alert, define the first 3 steps an on-call engineer takes:

**[Alert Name]**
1. Check: [what dashboard or query to look at first]
2. Diagnose: [how to narrow down the cause]
3. Mitigate: [immediate action to restore service]

### Log Correlation Pattern

Ensure every log entry and trace includes:
- `trace_id` — links logs to the distributed trace
- `request_id` — correlates all events for a single request
- `user_id` / `account_id` — for customer impact assessment
- `service_name` + `environment` — for multi-service filtering

## Step 3 — Implementation Scaffold

Ask: "Do you want me to produce: (a) OpenTelemetry instrumentation code for the primary component, (b) Prometheus alert rules in YAML, or (c) a Datadog dashboard JSON template?"
