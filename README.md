# Murali's  Claude Use Guide


> Stop using Claude like Google. Start using it like a staff engineer who knows your context.

This repo is the **paved road** — three things you can use right now to get 10× more out of Claude:

| | What it gives you |
|---|---|
| **[Template Repo](#template-repo)** | Pre-built `ABOUT_ME/`, `TEMPLATES/`, `CLAUDE_OUTPUTS/` folders + 5 Skills + global instructions templates. Clone and fill in your details. |
| **[CLI Tool](#cli-tool)** | `npm create claude-project` — interactive scaffolding that generates the full setup in under 60 seconds. |
| **[Documentation](#documentation)** | One guide per guideline, plus a model decision matrix and skill format reference. |

Built from the 12-guideline framework: *Chat, Projects, Code, Cowork, Skills, Connectors — all six tools, used correctly.*

---

## Template Repo

The `templates/` folder contains everything you need to set up a Claude project correctly:

```
templates/
├── ABOUT_ME/          ← Drop in your role, goals, writing samples, rules
├── TEMPLATES/         ← Reusable prompt patterns for recurring workflows
├── CLAUDE_OUTPUTS/    ← Where deliverables land
├── .claude/
│   ├── CLAUDE.md      ← Project-level instructions
│   └── skills/        ← 5 pre-built slash commands
└── global-instructions/
    ├── developer.md   ← Paste into Claude Settings (for devs)
    └── business-user.md ← Paste into Claude Settings (for biz users)
```

**To use**: Copy the `templates/` folder into your project, fill in the `<!-- Fill in: ... -->` placeholders, and paste `global-instructions/developer.md` (or `business-user.md`) into Claude → Settings → Global Instructions.

---

## CLI Tool

```bash
npm create claude-project
```

Asks you 5 questions. Generates the full folder structure with your details pre-filled. Done.

**Other commands:**
```bash
npx create-claude-project add-skill weekly-review   # add a single skill to an existing project
npx create-claude-project model-select              # run the interactive model picker
```

See [cli/README.md](cli/README.md) for full documentation.

---

## Documentation

- **Quick Start** — get set up in 10 minutes
- **12 Guides** — one actionable guide per guideline
- **Reference** — model decision matrix, skill format spec, global instructions reference

---

## The 12 Guidelines

| # | Guideline | Implemented As |
|---|---|---|
| 1 | Claude is 6 tools, not 1 | Guide |
| 2 | Create an ABOUT ME folder first | `templates/ABOUT_ME/` |
| 3 | Build 3 folders in your project | `templates/` structure |
| 4 | Set global instructions once | `templates/global-instructions/` |
| 5 | Force it to ask before it acts | `/ask-first` skill |
| 6 | Use Connectors | Guide |
| 7 | Turn repeat workflows into Skills | 5 pre-built skills |
| 8 | Pick the right model | `/model-select` skill + reference |
| 9 | Extended Thinking for hard problems | Guide + model reference |
| 10 | Feed examples, not descriptions | Guide + `writing-samples/` folder |
| 11 | Use Cowork for anything serious | Guide |
| 12 | Install and use plugins | Guide |

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
