import path from 'path';
import { writeFile } from '../utils/file-writer.js';
import type { SkillName } from './skills.js';

const SKILL_TABLE_HEADER = `| Command | What It Does |
|---|---|`;

const SKILL_TABLE_ROWS: Record<SkillName, string> = {
  'negotiation-prep': '| `/negotiation-prep` | Prepare for any negotiation or difficult conversation |',
  'weekly-review': '| `/weekly-review` | Run a structured weekly review against your goals |',
  'client-brief': '| `/client-brief` | Generate a client-facing project brief |',
  'model-select': '| `/model-select` | Choose the right Claude model for your current task |',
  'ask-first': '| `/ask-first` | Enable ask-before-act mode for this session |',
};

export async function generateClaudeMd(outputDir: string, skills: SkillName[]): Promise<void> {
  const skillTable =
    skills.length > 0
      ? `## Available Skills\n\n${SKILL_TABLE_HEADER}\n${skills.map((s) => SKILL_TABLE_ROWS[s]).join('\n')}`
      : '';

  const content = `# Claude Project Instructions

This file is read automatically by Claude Code at the start of every session.

---

## Who I Am

@ABOUT_ME/role.md
@ABOUT_ME/goals.md

---

## My Rules

@ABOUT_ME/rules.md

---

## This Project

<!-- Fill in: project-specific context -->
**What this project is**: [One sentence]
**Primary outputs**: [What Claude should be helping you produce]
**Off-limits**: [Files or systems Claude should never touch without explicit permission]

---

${skillTable}

---

## Output Convention

Save all deliverables to \`CLAUDE_OUTPUTS/\` with the naming format:
\`YYYY-MM-DD-[type]-[topic].md\`
`;

  await writeFile(path.join(outputDir, '.claude', 'CLAUDE.md'), content);
}
