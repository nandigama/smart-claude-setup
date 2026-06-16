# Writing Samples

Paste 3 examples of writing in your voice into this folder.

Claude learns your voice from examples **10× faster** than from descriptions.
("Write formally" tells Claude little. Three actual emails shows it everything.)

---

## What to Add

Create one file per sample. Name them clearly:

```
writing-samples/
├── sample-slack-message.md
├── sample-client-email.md
└── sample-weekly-update.md
```

## What Makes a Good Sample

- **Real output you produced**, not something you aspired to write
- **Different contexts** — one internal, one external, one long-form
- **Representative length** — don't pick your shortest or your most formal outlier
- At least 150 words each so Claude has enough signal

## How to Tell Claude to Use Them

Add to your Global Instructions or CLAUDE.md:

```
Match my writing style. Examples are in @ABOUT_ME/writing-samples/.
When writing anything I'll send externally, read those samples first.
```

Or just say in any prompt: "Write like the samples in my writing-samples folder."

---

> You don't need to add samples on day one. The rest of ABOUT_ME/ already helps a lot.
> Add these when you start using Claude for communication and notice it doesn't sound like you.
