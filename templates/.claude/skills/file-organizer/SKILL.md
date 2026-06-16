---
name: file-organizer
description: Analyze a messy folder, identify duplicates, propose a clean structure, and organize files with a clear plan before touching anything. Trigger: /file-organizer
---

# /file-organizer

Helps you organize a messy folder — Downloads, a project directory, a shared drive,
or any folder that's grown chaotic. Proposes a structure and gets your approval
before moving or renaming anything.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What folder needs organizing? (path, or describe it)
2. What kind of files are in it? (documents / code / images / mixed / all of the above)
3. What's your goal?
   - Clean up Downloads / a temporary dump folder
   - Reorganize a project directory
   - Find and remove duplicates
   - Create a permanent filing system I'll maintain
4. Are there any files or folders that should NOT be touched?
5. What naming convention do you prefer? (kebab-case / Title Case / dates-first like YYYY-MM-DD / existing convention)

Do not produce any output until the user answers all questions.

## Step 2 — Analysis and Proposal

**Do not move or rename any files until the user explicitly approves the plan.**

### Current State Analysis

List Claude's understanding of what's in the folder:
- Total files and approximate breakdown by type
- Obvious duplicates or near-duplicates (same name, similar names, same size)
- Files that look like they belong somewhere else
- Anything that stands out as stale (old dates, temp files, drafts)

### Proposed Structure

Present the new folder structure as a tree:

```
folder-name/
├── category-1/
│   ├── subcategory/
│   └── file-name.ext
├── category-2/
│   └── ...
└── archive/        ← files older than [X] that aren't actively used
```

Explain the logic behind each category in 1 sentence.

### Rename Suggestions

For files with unclear names, propose renames:

| Current Name | Proposed Name | Reason |
|---|---|---|
| `doc_final_v3_REAL.pdf` | `2024-06-project-brief.pdf` | Date-first, descriptive |

### Duplicates Found

List any duplicates with a recommendation (keep which one, delete which):

| Files | Recommendation |
|---|---|
| `report.pdf`, `report (1).pdf`, `report-copy.pdf` | Keep `report.pdf`, delete the others |

**Stop and ask**: "Does this structure make sense? Any categories to rename, merge, or split before I proceed?"

Do not make any changes until the user confirms.

## Step 3 — Execution Plan

After approval, output the exact commands to execute the reorganization:

```bash
# Create new structure
mkdir -p folder/category-1/subcategory

# Move files
mv "old/path/file.ext" "new/path/file.ext"

# Rename files
mv "old-name.pdf" "new-name.pdf"
```

Ask: "Should I run these commands, or would you prefer to review and run them yourself?"

If the user says run: execute each command one at a time, confirming success before the next.
If the user says review: output the full script for them to run.
