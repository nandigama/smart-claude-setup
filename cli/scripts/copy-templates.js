import { cpSync } from 'node:fs';
cpSync('../templates', 'templates', { recursive: true });
