---
name: pr-review-expert
description: Full pull request review — diff analysis, risk assessment, test coverage check, and a clear approve / request-changes verdict with specific inline feedback. Trigger: /pr-review-expert
---

# /pr-review-expert

Reviews a pull request as a senior engineer would — not just "does the code look right?"
but "is this safe to merge, and what will it cost us if we're wrong?"

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Paste the PR diff, or provide the PR URL / file paths if Claude Code has access
2. What is this PR supposed to do? (the intent — what problem does it solve?)
3. Is there a linked issue, spec, or design doc? (paste it or describe it)
4. What is the risk profile of this change?
   - **High** — touches auth, payments, data migrations, core infrastructure
   - **Medium** — new feature, significant refactor
   - **Low** — bug fix, docs, test addition
5. What has already been reviewed or tested?

Do not produce any output until the user answers all questions.

## Step 2 — Produce the PR Review

### Change Summary

In 3-5 sentences: what this PR does, what it changes architecturally, and what it doesn't do that might be expected.

### Risk Assessment

**Blast radius**: if this change fails in production, what breaks? How many users are affected? Is it reversible?

**Rollback plan**: can this be reverted cleanly? Are there database migrations that can't be rolled back?

### Code Findings

Apply the four-dimension review (/code-reviewer framework):
- 🔴 **Critical**: must fix before merge
- 🟠 **High**: should fix before merge
- 🟡 **Medium**: nice to fix, or address in follow-up
- 🟢 **Low**: optional, style preference

For each finding: location (file + line), what's wrong, why it matters, suggested fix.

### Test Coverage

- Does the PR include tests for new behavior?
- Are edge cases covered?
- Are there changes to existing behavior that existing tests would catch?
- What test cases are missing that should be added?

### Review of the PR Description

- Is the description accurate? Does it explain the "why" not just the "what"?
- Are there missing screenshots for UI changes?
- Is the migration path documented if needed?

### Verdict

**APPROVE** — ready to merge as-is
**APPROVE WITH NITS** — safe to merge after minor fixes (list them)
**REQUEST CHANGES** — do not merge until specific items are addressed (list them)
**NEEDS DISCUSSION** — architectural concern that should be talked through before more code is written

## Step 3 — Review Comment Drafts

Ask: "Do you want me to draft the inline PR comments as GitHub-formatted review comments, ready to paste into the PR?"

If yes: format each finding as:
```
[file.ts, line N]
[Finding text written as constructive feedback, not a complaint]
[Suggested fix or alternative]
```
