import * as p from '@clack/prompts';
import path from 'path';
import chalk from 'chalk';
import fs from 'fs-extra';
import { generateSkills, SKILL_DESCRIPTIONS, type SkillName } from '../generators/skills.js';

export async function runAddSkill(skillArg?: string): Promise<void> {
  let skill: SkillName;

  if (skillArg && skillArg in SKILL_DESCRIPTIONS) {
    skill = skillArg as SkillName;
  } else {
    const selected = await p.select({
      message: 'Which skill do you want to add?',
      options: (Object.entries(SKILL_DESCRIPTIONS) as [SkillName, string][]).map(
        ([value, hint]) => ({ value, label: `/${value}`, hint })
      ) as any[],
    });
    if (p.isCancel(selected)) return p.cancel('Cancelled.');
    skill = selected as SkillName;
  }

  const outputDir = await p.text({
    message: 'Project directory?',
    placeholder: '.',
    defaultValue: '.',
  });

  if (p.isCancel(outputDir)) return p.cancel('Cancelled.');

  const dest = path.join(path.resolve(String(outputDir)), '.claude', 'skills', skill, 'SKILL.md');
  if (await fs.pathExists(dest)) {
    console.log(chalk.yellow(`/${skill} is already installed at ${dest}`));
    return;
  }

  await generateSkills(path.resolve(String(outputDir)), [skill]);
  console.log(chalk.green(`\n✓ Installed /${skill}`));
  console.log(chalk.dim(`  Invoke it in Claude Code with: /${skill}`));
}
