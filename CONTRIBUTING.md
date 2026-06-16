# Contributing

## What belongs here

- New or improved Skill templates (`templates/.claude/skills/`)
- Improvements to global instruction templates
- New TEMPLATES/ prompt patterns
- Documentation fixes or additions
- CLI improvements

## What doesn't belong

- Opinions on which AI tool is best
- Generic "productivity tips" not specific to Claude
- Content that requires a paid plan to use

## How to contribute

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-skill-name`
3. Make your changes
4. Open a PR with a description covering: what it adds, who it's for, how to test it

## Skill contributions

New skills must follow the SKILL.md format documented in `docs/content/reference/skill-format.md`.
The first step of every skill must use `AskUserQuestion` — do not produce output before collecting context.

## Reporting issues

Open a GitHub issue. Include: what you expected, what happened, which guideline it relates to.
