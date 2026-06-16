---
name: invoice-organizer
description: Organize invoices and receipts for tax preparation or expense reconciliation. Reads files, extracts key data, renames consistently, sorts into folders, and exports a CSV summary. Trigger: /invoice-organizer
---

# /invoice-organizer

Processes a folder of invoices and receipts — extracts the vendor, amount, date, and category
from each file; renames them to a consistent format; sorts them into tax-ready folders;
and produces a CSV summary for your accountant or expense report.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. Where are your invoices/receipts? (folder path, or describe what you have)
2. What file types are they? (PDF / images / email forwards / mixed)
3. What time period do you need to cover? (specific year / quarter / date range)
4. What expense categories matter for your purposes?
   (common: Software/SaaS, Travel, Meals, Hardware, Office Supplies, Contractors, Marketing, Other)
5. What's the output for? (personal taxes / business taxes / expense reimbursement / accounting)
6. Do you need a CSV, a renamed/sorted folder, or both?

Do not produce any output until the user answers all questions.

## Step 2 — Process and Organize

**Do not rename or move files until the user approves the plan.**

### Extraction

For each file Claude can read, extract:
- **Vendor**: Company or person the invoice is from
- **Amount**: Total due or paid (include currency)
- **Date**: Invoice or receipt date
- **Category**: Match to the user's category list from Step 1
- **Confidence**: High (clearly legible) / Low (unclear — flagged for review)

### Summary Table

Present findings before doing anything:

| File | Vendor | Date | Amount | Category | Confidence |
|---|---|---|---|---|---|
| `receipt_001.pdf` | Notion | 2024-03-15 | $16.00 | Software | High |
| `img_2847.jpg` | [unclear] | 2024-03-? | $47.23 | [unclear] | Low — needs review |

Flag low-confidence items prominently. Do not guess category for ambiguous receipts.

**Stop and ask**: "Does this look right? Correct any misclassifications before I rename and sort."

### Renaming Convention

After approval, apply this naming format:
`YYYY-MM-DD_[VENDOR]_[AMOUNT].[ext]`

Example: `2024-03-15_Notion_$16.00.pdf`

### Folder Structure

```
invoices-organized/
├── 2024/
│   ├── software/
│   ├── travel/
│   ├── meals/
│   ├── contractors/
│   └── other/
└── needs-review/   ← low-confidence items
```

## Step 3 — CSV Export

Produce a CSV summary ready for accounting software or a tax preparer:

```csv
Date,Vendor,Amount,Category,File,Notes
2024-03-15,Notion,16.00,Software,2024-03-15_Notion_$16.00.pdf,
2024-03-20,Unknown Restaurant,47.23,Meals,needs-review/img_2847.jpg,Flagged for review
```

Then ask: "Do you want totals by category added as a summary row at the bottom?"

If yes: sum each category and add a total row — ready to paste into a tax return or send to an accountant.
