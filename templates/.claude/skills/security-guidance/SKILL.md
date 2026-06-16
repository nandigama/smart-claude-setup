---
name: security-guidance
description: Security review for code, architecture, or infrastructure — identifies vulnerabilities, assesses risk, and provides specific remediation. Covers OWASP Top 10, cloud misconfigurations, and supply chain risks. Trigger: /security-guidance
---

# /security-guidance

Security review across code, architecture, and infrastructure. Identifies real vulnerabilities
with specific remediation — not a checklist of theoretical concerns.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What are you reviewing? (paste code / describe architecture / share infrastructure config)
2. What is the system's threat model? (who are the potential attackers and what do they want?)
3. What data does this system handle? (PII / financial / health / credentials / proprietary)
4. What compliance requirements apply? (SOC 2 / HIPAA / GDPR / PCI / none)
5. What is the deployment environment? (cloud provider / on-premise / SaaS / open source)
6. What has already been reviewed or is known to be secure?

Do not produce any output until the user answers all questions.

## Step 2 — Security Review

Review across these categories. For each finding:
- Severity: 🔴 Critical / 🟠 High / 🟡 Medium / 🟢 Low
- CVSS-like assessment: Exploitability × Impact
- Location: specific file, line, or component
- Remediation: specific code or config fix

### Injection (OWASP A03)
- SQL injection: user input reaching queries without parameterization
- Command injection: user input reaching shell execution
- XSS: unsanitized content rendered in browser
- SSRF: user-controlled URLs fetched server-side

### Broken Authentication (OWASP A07)
- Weak or missing session management
- Password stored in plaintext or weak hash
- Missing MFA for sensitive operations
- Predictable tokens or insecure token storage

### Sensitive Data Exposure (OWASP A02)
- Secrets hardcoded or logged
- Sensitive data transmitted without TLS
- PII in URLs (query params, path variables)
- Over-permissive API responses returning unnecessary data

### Access Control (OWASP A01)
- Missing authorization checks at the function level
- Horizontal privilege escalation (user A accessing user B's data)
- Admin functionality reachable by non-admin roles
- IDOR (insecure direct object references)

### Security Misconfiguration (OWASP A05)
- Default credentials in use
- Unnecessary ports, services, or permissions exposed
- Missing security headers (CSP, HSTS, X-Frame-Options)
- Overly permissive CORS
- Cloud IAM: roles with wildcard permissions

### Supply Chain (OWASP A06)
- Outdated dependencies with known CVEs
- Unverified package checksums
- Overly broad transitive dependencies

### Summary Table

| Finding | Severity | Component | Remediation Complexity |
|---|---|---|---|
| [finding] | 🔴/🟠/🟡/🟢 | [location] | H/M/L |

**Critical path**: the attack chain that would cause the most damage if exploited.

## Step 3 — Remediation Code

Ask: "Do you want me to produce: (a) the fixed code for Critical and High findings, (b) a security checklist for the team going forward, or (c) a threat model document?"
