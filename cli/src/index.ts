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
    await runInit();
    break;
  case '--help':
  case '-h':
    console.log('Usage: create-smart-claude [command]\n');
    console.log('Commands:');
    console.log('  (none)         Scaffold a new Claude project interactively');
    console.log('  add-skill      Add a single skill to an existing project');
    console.log('  model-select   Interactive guide for choosing the right Claude model');
    break;
  default:
    console.error(`Unknown command: ${command}`);
    console.error('Run create-smart-claude --help for usage.');
    process.exit(1);
}
