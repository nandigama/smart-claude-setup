---
name: webapp-testing
description: Test a locally running web app using Playwright — verify UI functionality, debug behavior, capture screenshots, and identify broken flows. Trigger: /webapp-testing
---

# /webapp-testing

Tests a locally running web application using Playwright — navigates the UI, verifies
functionality, captures screenshots, and reports what's broken. Best for verifying a new
feature works end-to-end before shipping, or debugging a UI issue you can't reproduce manually.

## Prerequisites

Playwright must be installed and your app must be running locally.

```bash
# Install Playwright (one-time)
pip install playwright
playwright install chromium

# Or via npm
npm install -D @playwright/test
npx playwright install chromium
```

Your app should be running at a known local URL (e.g., `http://localhost:3000`) before invoking this skill.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What URL is your app running at? (e.g., `http://localhost:3000`)
2. What do you want to test? (a specific flow / a page / regression test / "just explore and find broken things")
3. What browser should Playwright use? (chromium / firefox / webkit — default: chromium)
4. Are there any credentials needed to log in?
5. What should a successful test look like? (element visible, no error messages, specific text on page, etc.)

Do not produce any output until the user answers all questions.

## Step 2 — Test Execution

### Reconnaissance First

Before testing the target flow, do a quick recon pass:
1. Open the URL
2. Screenshot the landing/home state
3. Check browser console for existing errors
4. Report: what's visible, any immediate errors

**Show the screenshot and console output before testing deeper.**

### Test the Target Flow

Write and run Playwright code that:
1. Navigates to the relevant page
2. Performs the actions in the flow (click, fill, submit)
3. Asserts the expected outcome (element visible, text matches, no error state)
4. Screenshots before and after each major action

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    page.goto("http://localhost:3000")
    page.screenshot(path="screenshots/01-initial.png")

    # [flow-specific actions here]

    page.screenshot(path="screenshots/02-after-action.png")
    browser.close()
```

Run the script and report:
- What passed (with screenshot evidence)
- What failed (with the specific error, line, and screenshot of the failure state)
- Any console errors caught during the flow

### Failure Analysis

For each failure:
- What was expected vs. what happened
- The DOM state at failure (relevant element attributes, visible text)
- Most likely cause (missing element, timing issue, wrong selector, broken API call)
- Suggested fix (specific code change or investigation step)

## Step 3 — Regression Sweep

After the targeted test, ask:
"Do you want me to run a broader sweep — navigate all visible links, check for console errors, and screenshot each page? This catches regressions beyond the specific flow you tested."

If yes: systematically visit each reachable page, collect errors, and produce a summary table of pass/fail by page.
