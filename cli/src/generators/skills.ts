import path from 'path';
import fs from 'fs-extra';
import { ensureDir } from '../utils/file-writer.js';
import chalk from 'chalk';

export type SkillName = 'negotiation-prep' | 'weekly-review' | 'client-brief' | 'model-select' | 'ask-first';

export const SKILL_DESCRIPTIONS: Record<SkillName, string> = {
  'negotiation-prep': 'Prepare for any negotiation or difficult conversation',
  'weekly-review': 'Structured weekly review against your goals',
  'client-brief': 'Generate client-facing project briefs',
  'model-select': 'Interactive model selection guide',
  'ask-first': 'Enable ask-before-act mode for a session',
};

// Skills are stored in the templates directory relative to this package's root.
// At runtime (after npm publish), they're in dist/../templates — but during dev
// they're found relative to the repo root.
function getTemplatesRoot(): string {
  // Walk up from cli/ to repo root, then into templates/
  const repoRoot = path.resolve(new URL(import.meta.url).pathname, '..', '..', '..', '..');
  return path.join(repoRoot, 'templates');
}

export async function generateSkills(outputDir: string, skills: SkillName[]): Promise<void> {
  if (skills.length === 0) return;

  const skillsDir = path.join(outputDir, '.claude', 'skills');
  await ensureDir(skillsDir);

  const templatesRoot = getTemplatesRoot();

  for (const skill of skills) {
    const src = path.join(templatesRoot, '.claude', 'skills', skill, 'SKILL.md');
    const dest = path.join(skillsDir, skill, 'SKILL.md');

    if (await fs.pathExists(src)) {
      await fs.copy(src, dest, { overwrite: false });
      console.log(chalk.green(`  created  .claude/skills/${skill}/SKILL.md`));
    } else {
      console.log(chalk.yellow(`  missing  skill source: ${skill} (skipped)`));
    }
  }
}
