---
name: changelog-generator
description: Generate a user-facing changelog from git commit history. Transforms technical commits into customer-friendly release notes, categorized by features, improvements, fixes, and breaking changes. Trigger: /changelog-generator
---

# /changelog-generator

Analyzes git commit history and produces a polished, user-facing changelog —
the kind you'd publish in a release, app store update, or product announcement.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What is the version or release name? (e.g. v2.3.0, "June Release", "Summer Update")
2. What date range or git range should be covered? (e.g. "since last Friday", "v2.2.0..HEAD", "last 30 commits")
3. Who is the audience for this changelog? (developers reading release notes / customers reading a product update / app store reviewers)
4. Are there any commits or categories to exclude? (e.g. "skip internal tooling changes", "hide security fix details")
5. What format is needed? (Markdown / plain text / app store character limit ~4000 chars)

Do not produce any output until the user answers all questions.

## Step 2 — Generate the Changelog

First, read the git log for the specified range:
```bash
git log <range> --oneline --no-merges
```

Analyze each commit and categorize it:

| Category | What belongs here |
|---|---|
| **New Features** | New capabilities users can do something with |
| **Improvements** | Enhancements to existing features (faster, easier, more reliable) |
| **Bug Fixes** | Things that were broken and now work |
| **Breaking Changes** | Anything that requires users to change their setup or workflow |
| **Security** | Security patches (keep details vague unless already public) |

**Writing rules**:
- Write for the audience, not the codebase. "Invoices now load 3× faster" not "Optimized SQL query in InvoiceController"
- Start each item with a verb: Added, Fixed, Improved, Removed, Updated
- One line per item. No technical jargon unless the audience is developers
- Skip: merge commits, dependency bumps, internal tooling, typo fixes, test-only changes
- Breaking changes go first, always

**Output format**:

```markdown
## [version] — [date]

### Breaking Changes
- [item]

### New Features
- [item]

### Improvements
- [item]

### Bug Fixes
- [item]
```

Omit any empty sections.

## Step 3 — Optional Formats

After producing the changelog, ask:
"Do you want this reformatted as: (a) an app store update description under 4000 chars, (b) a Slack announcement, or (c) a customer email?"

If yes, reformat without rewriting the content — same information, different structure and tone.
