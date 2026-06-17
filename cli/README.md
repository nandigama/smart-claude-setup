# create-smart-claude

Scaffold a Claude project the right way in under 60 seconds.

## Usage

```bash
npm create smart-claude
```

No install required. Asks 5-7 questions, then generates:
- `ABOUT_ME/` with role, goals, rules, and writing-samples folder
- `TEMPLATES/` with reusable prompt patterns
- `CLAUDE_OUTPUTS/` for deliverables
- `.claude/CLAUDE.md` with your selected skills listed
- `.claude/skills/` with your chosen slash commands installed
- `global-instructions/` ready to paste into Claude Settings

## Other Commands

```bash
# Add a single skill to an existing project
npx create-smart-claude add-skill weekly-review

# Run the interactive model selection guide
npx create-smart-claude model-select
```

## Available Skills

| Skill | Command | What It Does |
|---|---|---|
| `/negotiation-prep` | `add-skill negotiation-prep` | Full prep package for any negotiation |
| `/weekly-review` | `add-skill weekly-review` | Structured weekly reflection |
| `/client-brief` | `add-skill client-brief` | Client-facing project brief |
| `/model-select` | `add-skill model-select` | Interactive model picker |
| `/ask-first` | `add-skill ask-first` | Ask-before-act mode |

## Development

```bash
cd cli
npm install
npm run dev        # run CLI locally
npm run build      # build for publish
npm run typecheck  # type-check without building
```
