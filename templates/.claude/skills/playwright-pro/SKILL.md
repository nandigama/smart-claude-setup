---
name: playwright-pro
description: Write production-grade Playwright tests — reliable selectors, page object models, fixtures, parallel execution, and CI integration. Goes beyond basic test recording to tests that survive refactors. Trigger: /playwright-pro
---

# /playwright-pro

Writes production-grade Playwright tests that survive UI refactors, run reliably in CI,
and catch real regressions — not brittle selector-based snapshots that break every sprint.

## Prerequisites

```bash
npm install -D @playwright/test
npx playwright install
```

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What are you testing? (user flow, component, full page, API + UI)
2. Describe the user journey in plain English. (e.g., "User logs in, navigates to settings, changes email, sees success message")
3. What's the target URL or component? (local dev / staging / production)
4. Do you need authentication? (describe the login flow or if a stored auth state exists)
5. What already exists? (no tests / basic Playwright / page objects / other test framework)
6. What CI environment? (GitHub Actions / GitLab CI / Jenkins / other)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Test Suite

### Selector Strategy

Use role-based and semantic selectors first — they survive markup changes:

```typescript
// Prefer (survives markup refactors)
page.getByRole('button', { name: 'Submit' })
page.getByLabel('Email address')
page.getByTestId('checkout-form')

// Acceptable fallback
page.locator('[data-testid="submit-btn"]')

// Avoid (brittle)
page.locator('.btn-primary > span:nth-child(2)')
```

### Page Object Model

For any flow with more than 3 steps, produce a Page Object:

```typescript
// pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.page.getByLabel('Email').fill(email)
    await this.page.getByLabel('Password').fill(password)
    await this.page.getByRole('button', { name: 'Log in' }).click()
    await this.page.waitForURL('**/dashboard')
  }
}
```

### Test File

```typescript
import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'

test.describe('[feature]', () => {
  test.beforeEach(async ({ page }) => {
    // Setup: navigate, authenticate, seed state
  })

  test('[happy path]', async ({ page }) => {
    // Arrange
    // Act
    // Assert — use specific, meaningful assertions
    await expect(page.getByRole('heading', { name: 'Success' })).toBeVisible()
  })

  test('[error case]', async ({ page }) => {
    // ...
  })
})
```

### Fixtures for Auth

```typescript
// fixtures.ts
export const test = base.extend<{ authedPage: Page }>({
  authedPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: 'auth.json' })
    await use(await context.newPage())
    await context.close()
  },
})
```

### CI Configuration (GitHub Actions)

```yaml
- name: Run Playwright tests
  run: npx playwright test
  env:
    BASE_URL: ${{ secrets.STAGING_URL }}

- uses: actions/upload-artifact@v4
  if: failure()
  with:
    name: playwright-report
    path: playwright-report/
```

### `playwright.config.ts`

```typescript
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [['html'], ['github']],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
})
```

## Step 3 — Debugging Flaky Tests

Ask: "Are any existing tests flaky or timing out? Paste the test and I'll identify the root cause and fix it — usually a missing wait, wrong selector, or race condition."
