import path from 'path';
import { writeFile } from '../utils/file-writer.js';
import { SKILLS, type SkillName } from './skills.js';

export async function generateClaudeMd(
  outputDir: string,
  skills: SkillName[],
  audience: 'developer' | 'business-user' | 'both'
): Promise<void> {
  const globalInstructionsRef =
    audience === 'both'
      ? '@global-instructions/developer.md\n@global-instructions/business-user.md'
      : `@global-instructions/${audience}.md`;

  const skillTable =
    skills.length > 0
      ? [
          '## Available Skills\n',
          '| Command | What It Does |',
          '|---|---|',
          ...skills.map((s) => `| \`/${s}\` | ${SKILLS[s]} |`),
        ].join('\n')
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

## My Instructions

${globalInstructionsRef}

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
