import path from 'path';
import { writeFile } from '../utils/file-writer.js';
import { render } from '../utils/template-engine.js';

interface GlobalInstructionsVars extends Record<string, string | undefined> {
  role: string;
  company: string;
  expertise: string;
  stack?: string;
}

const developerTemplate = `# Global Instructions — Developer

> Paste this into Claude → Settings → Global Instructions. Fill in the bracketed sections.

---

## Who I Am

**Role**: {{role}} at {{company}}
**Stack**: {{stack}}
**Expertise**: {{expertise}}
**Still learning**: [Areas where you want more explanation]

---

## How I Work With Claude Code

I use Claude Code CLI for writing and refactoring code, architecture decisions,
debugging, and technical writing.

---

## Ask Before Acting

Before any action that creates, modifies, or deletes files:
1. State what you plan to do (one sentence)
2. Ask: "Should I proceed?"
3. Wait for my explicit yes before executing

---

## Code Standards

- No comments unless the WHY is non-obvious
- No boilerplate I didn't ask for
- No files I didn't explicitly request
- No refactoring outside the scope of the task

---

## Output Format

- Code blocks: always include the filename at the top
- Explanations: bullet points, not paragraphs
- Uncertainty: say "I'm not sure" explicitly
- Lead with the answer, then the reasoning

---

## Anti-Patterns to Avoid

- "Great question!" or any filler opener
- Unsolicited caveats
- Summarizing what you just did
- Multiple alternatives when I asked for a recommendation
`;

const businessUserTemplate = `# Global Instructions — Business User

> Paste this into Claude → Settings → Global Instructions. Fill in the bracketed sections.

---

## Who I Am

**Role**: {{role}} at {{company}}
**Expertise**: {{expertise}}
**What I need help with**: Drafting, analysis, research, preparing for meetings

---

## Before You Produce Any Output — Ask Me Four Questions

Every task, without exception:
1. What is the **goal** of this output?
2. Who is the **audience**?
3. What **format** should it be in?
4. Are there any **constraints**?

Do not start writing until I answer all four.

---

## What I Want in Every Output

- Lead with the conclusion
- Include a "Next Steps" section at the end
- Use concrete examples and numbers, not generalities
- No filler — if it doesn't add information, cut it

---

## Editing Protocol

When I ask you to edit: edit in place. Do not rewrite from scratch.
Do not summarize what you changed — just show me the result.

---

## What I Never Want to See

- "Great question!" or any filler opener
- Unsolicited alternatives ("Here are three approaches...")
- Excessive caveats
- Bullet lists when I asked for prose, or prose when I asked for bullets
`;

export async function generateGlobalInstructions(
  outputDir: string,
  audience: 'developer' | 'business-user' | 'both',
  vars: GlobalInstructionsVars
): Promise<void> {
  const dir = path.join(outputDir, 'global-instructions');

  if (audience === 'developer' || audience === 'both') {
    await writeFile(
      path.join(dir, 'developer.md'),
      render(developerTemplate, { ...vars, stack: vars.stack ?? '[Your tech stack]' })
    );
  }
  if (audience === 'business-user' || audience === 'both') {
    await writeFile(path.join(dir, 'business-user.md'), render(businessUserTemplate, vars));
  }
}
