import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

export async function writeFile(
  filePath: string,
  content: string,
  options: { overwrite?: boolean } = {}
): Promise<void> {
  const exists = await fs.pathExists(filePath);
  if (exists && !options.overwrite) {
    console.log(chalk.yellow(`  skipped  ${path.relative(process.cwd(), filePath)} (already exists)`));
    return;
  }
  await fs.outputFile(filePath, content, 'utf-8');
  console.log(chalk.green(`  created  ${path.relative(process.cwd(), filePath)}`));
}

export async function copyDir(src: string, dest: string): Promise<void> {
  await fs.copy(src, dest, { overwrite: false, errorOnExist: false });
}

export async function ensureDir(dirPath: string): Promise<void> {
  await fs.ensureDir(dirPath);
}
