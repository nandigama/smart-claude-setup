---
name: a11y-audit
description: Accessibility audit of a web page or component — WCAG 2.1 compliance check, screen reader issues, keyboard navigation, and specific remediation code. Trigger: /a11y-audit
---

# /a11y-audit

Audits a web page or component for accessibility issues — WCAG 2.1 AA compliance,
screen reader behavior, keyboard navigation, color contrast, and focus management.
Produces prioritized findings with specific code fixes.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Paste the HTML/JSX/TSX (or provide file path if Claude Code has access)
2. What framework? (React / Vue / Angular / plain HTML / other)
3. What WCAG level are you targeting? (A / AA / AAA — default AA)
4. What assistive technologies should it support? (screen readers / keyboard-only / voice control)
5. Is there a specific page or component type? (form / modal / navigation / data table / image gallery)

Do not produce any output until the user answers all questions.

## Step 2 — Accessibility Audit

Review against WCAG 2.1 AA criteria. For each issue:
- Criterion violated (e.g., WCAG 1.1.1 Non-text Content)
- Severity: 🔴 Blocker / 🟠 Critical / 🟡 Major / 🟢 Minor
- Who is affected (screen reader users / keyboard users / low vision / cognitive)
- Current code (the problematic snippet)
- Fixed code (the remediation)

### Perceivable

**Images and non-text content** (1.1.1):
- `<img>` missing `alt` or has empty `alt` when content is meaningful
- Icon buttons with no accessible label
- Decorative images without `alt=""`

**Color contrast** (1.4.3 / 1.4.11):
- Text contrast ratio < 4.5:1 (normal text) or < 3:1 (large text / UI components)
- State changes communicated by color alone

**Text alternatives for media** (1.2.x):
- Videos without captions
- Audio without transcripts

### Operable

**Keyboard navigation** (2.1.1):
- Interactive elements not reachable by Tab
- Custom widgets not implementing keyboard patterns (arrow keys for menus/tabs)
- Keyboard traps (focus cannot escape a component)

**Focus management** (2.4.3 / 2.4.7):
- Focus not visible (`:focus { outline: none }` without replacement)
- Modal dialogs not trapping/restoring focus correctly
- Focus sent to wrong place after dynamic content changes

**Skip links** (2.4.1):
- Missing "Skip to main content" link for keyboard users

### Understandable

**Form labels** (1.3.1 / 3.3.2):
- `<input>` without associated `<label>` or `aria-label`
- Error messages not programmatically associated with the field
- Required fields not indicated

**ARIA usage** (4.1.2):
- `role`, `aria-*` attributes used incorrectly
- Interactive elements missing `role` or `aria-label`
- Live regions missing for dynamic content

### Summary Table

| Issue | Criterion | Severity | Users Affected |
|---|---|---|---|
| [issue] | WCAG [x.x.x] | 🔴/🟠/🟡/🟢 | [who] |

## Step 3 — Remediated Component

Ask: "Do you want me to produce the fully remediated version of the component with all Blocker and Critical issues fixed, annotated with the changes made?"
