import path from 'path';
import { writeFile } from '../utils/file-writer.js';
import { render } from '../utils/template-engine.js';

interface AboutMeVars extends Record<string, string | undefined> {
  role: string;
  company: string;
  industry: string;
  expertise: string;
  goals: string;
}

const roleTemplate = `# My Role

**Title**: {{role}}
**Company**: {{company}}
**Industry**: {{industry}}

---

## What I Own

<!-- Fill in: The systems, products, or outcomes you're responsible for -->
- [Add your first responsibility]
- [Add your second responsibility]

---

## What I Do Daily

<!-- Fill in: 3-5 bullet points of your actual recurring tasks -->
- [Add a daily task]
- [Add a daily task]

---

## My Expertise

**Deep expertise in**: {{expertise}}
**Solid working knowledge of**: [Add areas]
**Still learning**: [Add areas — Claude will explain these more carefully]

---

## My Context

- **Team size**: [Fill in]
- **Stack**: [Fill in]
- **Key constraint**: [Fill in]
`;

const goalsTemplate = `# My Goals

> Keep this updated — stale goals are worse than no goals.

---

## This Quarter

**Goal 1**: {{goals}}
- Success looks like: [Define it concretely]
- Current status: [Where you are now]

**Goal 2**: [Add a second goal]
- Success looks like: [Define it]
- Current status: [Where you are]

---

## Active Projects

| Project | What it is | Where I'm stuck |
|---|---|---|
| [Project name] | [One sentence] | [Blocker or open question] |

---

## What I'm Trying to Avoid

<!-- Fill in: Failure modes, risks, things that would set you back -->
- [Add a risk or failure mode]
`;

const rulesTemplate = `# My Rules for Claude

---

## Always Do

- Ask clarifying questions before starting any ambiguous task
- State your plan before executing (especially for file operations)
- Lead with the answer, then the reasoning
- [Add your own rule]

---

## Never Do

- Start a response with "Great question!" or any filler phrase
- Add unsolicited caveats
- Create new files without explicit permission
- Refactor code beyond the scope of what I asked
- [Add your own rule]

---

## Output Format

**Default format**: Bullet points for lists, prose for explanations
**Code**: Always include the filename at the top of a code block
**Length**: Match the complexity of the question
**Uncertainty**: Say "I'm not sure" explicitly — don't hedge while still answering

---

## Escalation Triggers

- When a task would touch production configuration
- When you're about to delete or overwrite something
- When generating content to be sent externally
`;

export async function generateAboutMe(outputDir: string, vars: AboutMeVars): Promise<void> {
  const aboutMeDir = path.join(outputDir, 'ABOUT_ME');
  const samplesDir = path.join(aboutMeDir, 'writing-samples');

  await writeFile(path.join(aboutMeDir, 'README.md'), getAboutMeReadme());
  await writeFile(path.join(aboutMeDir, 'role.md'), render(roleTemplate, vars));
  await writeFile(path.join(aboutMeDir, 'goals.md'), render(goalsTemplate, vars));
  await writeFile(path.join(aboutMeDir, 'rules.md'), rulesTemplate);
  await writeFile(path.join(samplesDir, 'README.md'), getWritingSamplesReadme());
}

function getAboutMeReadme(): string {
  return `# ABOUT_ME/

This folder is the most important thing you can set up for Claude.
Once Claude knows who you are, your prompts shrink from 50 words to 10.

## Fill In Order

1. \`role.md\` — unlocks the biggest prompt reduction
2. \`rules.md\` — stops Claude from doing things that annoy you
3. \`goals.md\` — gives context for prioritization
4. \`writing-samples/\` — add when you want voice-matched output

## How to Use It

**Claude Code**: Add to your CLAUDE.md:
\`\`\`
@ABOUT_ME/role.md
@ABOUT_ME/goals.md
@ABOUT_ME/rules.md
\`\`\`

**Claude.ai Projects**: Upload this folder to your Project knowledge base.
`;
}

function getWritingSamplesReadme(): string {
  return `# Writing Samples

Paste 3 examples of your writing into this folder.
Name them clearly: \`sample-slack-message.md\`, \`sample-client-email.md\`, etc.

Claude learns your voice from examples 10× faster than from descriptions.
Each sample should be at least 150 words and represent your actual writing style.

Once added, tell Claude: "Match my writing style. See @ABOUT_ME/writing-samples/."
`;
}
