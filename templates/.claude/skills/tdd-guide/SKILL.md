---
name: tdd-guide
description: Guide test-driven development for a specific piece of functionality — write failing tests first, then implement to make them pass. Red → Green → Refactor. Trigger: /tdd-guide
---

# /tdd-guide

Guides the TDD cycle for a specific function, module, or feature — starting with tests
that define the expected behavior before a line of implementation is written.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What are you implementing? (function, class, API endpoint, or feature — describe the intended behavior)
2. What language and test framework? (Jest / Pytest / Vitest / RSpec / Go testing / other)
3. What are the key behaviors to cover?
   - Happy path (normal input → expected output)
   - Edge cases (empty, null, boundary values)
   - Error cases (invalid input, external failures)
4. Do you have any existing code to work around? (paste it or describe dependencies)

Do not produce any output until the user answers all questions.

## Step 2 — TDD Cycle

### RED — Write Failing Tests First

Write tests for all specified behaviors. Each test:
- Has a descriptive name: `it('returns empty array when input is null')`
- Follows the Arrange / Act / Assert pattern
- Tests one thing only
- Would fail right now (no implementation yet)

```typescript
// Example structure
describe('[unit under test]', () => {
  describe('[behavior group]', () => {
    it('[specific behavior]', () => {
      // Arrange
      const input = [...]

      // Act
      const result = functionUnderTest(input)

      // Assert
      expect(result).toEqual([...])
    })
  })
})
```

Output all tests first. Confirm: "These tests should all fail before we write any implementation. Run them to verify."

### GREEN — Minimal Implementation

Write the simplest implementation that makes all tests pass.
**Resist the urge to add anything not required by a test.** If there's no test for it, don't write it.

```typescript
// Minimal implementation
export function functionUnderTest(input: ...) {
  // only what's needed to pass the tests
}
```

### REFACTOR — Clean Up

Now that tests pass:
- Remove duplication
- Improve naming
- Simplify logic
- Tests must still pass after every change

Present the refactored version with a brief note on what changed and why.

### Coverage Review

After the full cycle:
- List behaviors covered by tests
- Identify any behaviors not yet tested that should be
- Flag any tests that test implementation details (a smell — tests should test behavior, not internals)

## Step 3 — Next Feature

Ask: "Ready to TDD the next behavior? Describe what you want to add and we'll write the failing test first."

Keep the cycle tight — one behavior at a time.
