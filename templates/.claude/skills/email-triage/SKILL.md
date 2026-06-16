---
name: email-triage
description: Triage an overloaded inbox or set up inbox rules that prevent it from getting overloaded again. Works for Gmail and Outlook. Trigger: /email-triage
---

# /email-triage

Either triages an inbox that's already out of control, or designs the rules and filters
to prevent it from happening again. The goal: inbox zero is not about reading everything —
it's about making the inbox a to-do list, not a filing cabinet.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What's the problem? (inbox is out of control / I get too many emails / I miss important ones / I need a system)
2. What email client? (Gmail / Outlook / Apple Mail / other)
3. Who sends you email that always matters? (names, domains, or roles — e.g. "my CEO", "clients", "@acme.com")
4. What can be automatically archived without reading? (newsletters / notifications / automated reports)
5. How much time do you want to spend on email per day? (5 min / 15 min / 30 min)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the Triage System

### VIP Rules (set these first)
Emails that should always land in your inbox and be flagged:

| From / Contains | Action | Why |
|---|---|---|
| [sender/domain] | Star + keep in inbox | Always matters |

Provide the exact filter syntax for their email client.

**Gmail**:
```
from:(ceo@company.com OR @importantclient.com)
Action: Star, Mark as important, Never send to spam
```

**Outlook**:
```
From: [sender] → Move to: Focused Inbox, Flag
```

### Archive Rules (noise reduction)
Emails that can be skipped without reading:

| Pattern | Action |
|---|---|
| [newsletter domains, no-reply, notifications] | Skip inbox, apply label/folder, mark read |

### The Triage Protocol (for manual sessions)
A repeatable 15-minute process:

1. **Delete first** (30 sec): anything obviously irrelevant — delete without opening
2. **Archive second** (2 min): anything read or actioned — out of inbox
3. **Respond fast** (5 min): anything that takes under 2 minutes to reply — reply and archive
4. **Flag for action** (3 min): emails that need real work — star/flag, move to a "To Action" label
5. **Schedule** (2 min): pick one time today to handle the flagged items

### Inbox Setup
Recommended folder/label structure:

```
Inbox (only unread / unactioned)
├── To Action       ← needs real work from you
├── Waiting         ← sent, waiting on reply
├── Reference       ← important to keep, done acting on
└── Newsletters     ← auto-routed, read when you have time
```

## Step 3 — One-Time Cleanup

Ask: "Do you want a plan to clear the existing backlog? I can suggest a batch-delete strategy for emails older than [X] days from low-priority senders."

If yes: provide specific search queries to find and bulk-archive or delete old low-priority mail.

**Gmail**: `older_than:30d label:newsletters is:read` → Select all → Archive
**Outlook**: Filter by date + sender → Select all → Archive folder
