import * as p from '@clack/prompts';
import path from 'path';
import chalk from 'chalk';
import fs from 'fs-extra';
import { generateAboutMe } from '../generators/about-me.js';
import { generateGlobalInstructions } from '../generators/global-instructions.js';
import { generateSkills, SKILL_DESCRIPTIONS, type SkillName } from '../generators/skills.js';
import { generateClaudeMd } from '../generators/claude-md.js';
import { ensureDir, writeFile } from '../utils/file-writer.js';

export async function runInit(): Promise<void> {
  p.intro(chalk.bold.cyan('Create Claude Project'));
  console.log(chalk.dim('Scaffold the Smart Claude Setup in under 60 seconds.\n'));

  const audience = await p.select({
    message: 'Who are you setting this up for?',
    options: [
      { value: 'developer', label: 'Developer', hint: 'Claude Code CLI + technical workflows' },
      { value: 'business-user', label: 'Business user', hint: 'Claude.ai Projects + docs/comms workflows' },
      { value: 'both', label: 'Both', hint: 'Mixed team — get both global instruction templates' },
    ],
  });

  if (p.isCancel(audience)) return p.cancel('Cancelled.');

  const role = await p.text({
    message: 'What is your role?',
    placeholder: 'e.g. Senior Engineer at Acme Corp',
    validate: (v) => (!v.trim() ? 'Required' : undefined),
  });

  if (p.isCancel(role)) return p.cancel('Cancelled.');

  const company = await p.text({
    message: 'What is your company?',
    placeholder: 'e.g. Acme Corp',
    validate: (v) => (!v.trim() ? 'Required' : undefined),
  });

  if (p.isCancel(company)) return p.cancel('Cancelled.');

  const industry = await p.text({
    message: 'What industry?',
    placeholder: 'e.g. SaaS, Fintech, Healthcare',
  });

  if (p.isCancel(industry)) return p.cancel('Cancelled.');

  const expertise = await p.text({
    message: 'What is your area of expertise?',
    placeholder: 'e.g. distributed systems, enterprise sales, B2B marketing',
    validate: (v) => (!v.trim() ? 'Required' : undefined),
  });

  if (p.isCancel(expertise)) return p.cancel('Cancelled.');

  const goals = await p.text({
    message: 'What is your top goal right now?',
    placeholder: 'e.g. Ship the v2 API before Q3, Close 3 enterprise accounts',
    validate: (v) => (!v.trim() ? 'Required' : undefined),
  });

  if (p.isCancel(goals)) return p.cancel('Cancelled.');

  const stack =
    audience === 'developer' || audience === 'both'
      ? await p.text({
          message: 'What is your primary tech stack?',
          placeholder: 'e.g. TypeScript/Node.js, Python, PostgreSQL, AWS',
        })
      : undefined;

  if (p.isCancel(stack)) return p.cancel('Cancelled.');

  const skillOptions = (Object.entries(SKILL_DESCRIPTIONS) as [SkillName, string][]).map(
    ([value, hint]) => ({ value, label: `/${value}`, hint })
  );

  const selectedSkills = await p.multiselect({
    message: 'Which pre-built skills do you want to install?',
    options: skillOptions,
    required: false,
  });

  if (p.isCancel(selectedSkills)) return p.cancel('Cancelled.');

  const outputDir = await p.text({
    message: 'Output directory?',
    placeholder: './my-claude-setup',
    defaultValue: './my-claude-setup',
  });

  if (p.isCancel(outputDir)) return p.cancel('Cancelled.');

  const resolvedOutput = path.resolve(String(outputDir));

  if (await fs.pathExists(resolvedOutput)) {
    const overwrite = await p.confirm({
      message: `${resolvedOutput} already exists. Continue and skip existing files?`,
      initialValue: true,
    });
    if (p.isCancel(overwrite) || !overwrite) return p.cancel('Cancelled.');
  }

  const spinner = p.spinner();
  spinner.start('Generating your Claude setup...');

  try {
    const vars = {
      role: String(role),
      company: String(company),
      industry: String(industry ?? ''),
      expertise: String(expertise),
      goals: String(goals),
      stack: typeof stack === 'string' ? stack : undefined,
    };

    await ensureDir(resolvedOutput);
    await generateAboutMe(resolvedOutput, vars);
    await generateGlobalInstructions(resolvedOutput, audience as 'developer' | 'business-user' | 'both', vars);

    const skills = selectedSkills as SkillName[];
    await generateSkills(resolvedOutput, skills);
    await generateClaudeMd(resolvedOutput, skills, audience as 'developer' | 'business-user' | 'both');

    // Create TEMPLATES/ and CLAUDE_OUTPUTS/
    await ensureDir(path.join(resolvedOutput, 'TEMPLATES'));
    await writeFile(
      path.join(resolvedOutput, 'TEMPLATES', 'README.md'),
      getTemplatesReadme()
    );
    await ensureDir(path.join(resolvedOutput, 'CLAUDE_OUTPUTS'));
    await writeFile(
      path.join(resolvedOutput, 'CLAUDE_OUTPUTS', 'README.md'),
      getOutputsReadme()
    );

    spinner.stop('Done!');
  } catch (err) {
    spinner.stop('Failed.');
    console.error(err);
    process.exit(1);
  }

  const installedSkills = selectedSkills as SkillName[];
  p.outro(
    chalk.bold('\nYour Claude setup is ready. Next steps:\n') +
    `  1. Open ${chalk.cyan('ABOUT_ME/role.md')} and fill in your details\n` +
    `  2. Copy ${chalk.cyan('global-instructions/')} content into Claude → Settings → Global Instructions\n` +
    (installedSkills.length > 0
      ? `  3. In Claude Code, type ${chalk.cyan('/' + installedSkills[0])} to try your first skill\n`
      : '')
  );
}

function getTemplatesReadme(): string {
  return `# TEMPLATES/

Reusable prompt patterns for your most common Claude tasks.
Add your own prompt templates here as Markdown files.
`;
}

function getOutputsReadme(): string {
  return `# CLAUDE_OUTPUTS/

Where Claude's deliverables land.

Naming convention: \`YYYY-MM-DD-[type]-[topic].md\`
Example: \`2026-06-16-brief-q3-security-audit.md\`
`;
}
