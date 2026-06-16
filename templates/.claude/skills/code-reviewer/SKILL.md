---
name: code-reviewer
description: Structured code review across four dimensions — correctness, security, performance, and maintainability. Produces prioritized findings with specific line-level feedback. Trigger: /code-reviewer
---

# /code-reviewer

Performs a thorough code review across correctness, security, performance, and maintainability.
Produces prioritized, actionable findings — not a style lecture.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Paste the code (or provide the file path if Claude Code has file access)
2. What language and framework?
3. What is this code supposed to do? (one sentence — the intent)
4. What are you most concerned about? (bugs / security / performance / readability / all)
5. Is this going to production? (yes / staging / prototype)
6. Any constraints I should know? (legacy compatibility, specific performance targets, team conventions)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Code Review

Review the code across four dimensions. For each finding, specify:
- Severity: 🔴 Critical / 🟠 High / 🟡 Medium / 🟢 Low
- Location: line number or function name
- Finding: what's wrong
- Why it matters: the actual risk or impact
- Fix: specific corrected code, not just advice

---

### Correctness

Trace through the logic:
- Does the code do what it claims to do?
- Are there edge cases that are not handled? (empty input, null, zero, max values)
- Are there off-by-one errors, incorrect conditionals, or wrong operators?
- Does error handling actually handle errors, or just catch and swallow them?
- Are async operations awaited correctly? Are race conditions possible?

### Security

Check for:
- Injection vectors (SQL, command, XSS, SSRF) — any user input reaching a sink unvalidated?
- Authentication and authorization gaps — is access control enforced at the right layer?
- Secrets in code (API keys, passwords, tokens hardcoded or logged)
- Insecure deserialization, path traversal, prototype pollution
- Overly permissive CORS, missing rate limiting, missing input length limits

### Performance

Identify:
- N+1 query patterns (database calls inside loops)
- Missing indexes on frequently queried columns
- Unnecessary work inside hot paths (repeated computation, redundant fetches)
- Memory leaks (event listeners not removed, large objects held in closure)
- Synchronous blocking calls in async contexts

### Maintainability

Flag:
- Functions doing more than one thing (violates SRP)
- Magic numbers and hardcoded strings that should be constants
- Dead code, commented-out code, TODO blocks older than their context
- Names that don't communicate intent
- Missing or misleading comments on non-obvious logic

---

### Summary

| Severity | Count |
|---|---|
| 🔴 Critical | [n] |
| 🟠 High | [n] |
| 🟡 Medium | [n] |
| 🟢 Low | [n] |

**Top priority**: the single most important thing to fix before this code ships.

## Step 3 — Revised Code

Ask: "Do you want me to produce a corrected version of the code with all Critical and High findings fixed?"

If yes: rewrite only what needs changing. Do not refactor beyond the findings. Show a diff summary of what changed.
