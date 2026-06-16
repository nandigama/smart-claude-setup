#!/usr/bin/env node
import { runInit } from './commands/init.js';
import { runAddSkill } from './commands/add-skill.js';
import { runModelSelect } from './commands/model-select.js';

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'add-skill':
    await runAddSkill(args[1]);
    break;
  case 'model-select':
    await runModelSelect();
    break;
  case undefined:
  default:
    await runInit();
    break;
}
