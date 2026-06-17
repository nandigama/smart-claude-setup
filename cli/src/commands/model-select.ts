import * as p from '@clack/prompts';
import chalk from 'chalk';

export async function runModelSelect(): Promise<void> {
  p.intro(chalk.bold.cyan('Claude Model Selector'));

  const taskType = await p.select({
    message: 'What type of task is this?',
    options: [
      { value: 'reasoning', label: 'Hard reasoning / architecture / strategy' },
      { value: 'draft', label: 'Drafts / code generation / analysis' },
      { value: 'bulk', label: 'Bulk processing / classification / extraction' },
      { value: 'agent', label: 'Agentic / long-running / multi-step' },
    ],
  });

  if (p.isCancel(taskType)) return p.cancel('Cancelled.');

  const qualityVsCost = await p.select({
    message: 'What matters more for this task?',
    options: [
      { value: 'quality', label: 'Quality', hint: 'get the best result' },
      { value: 'balance', label: 'Balanced', hint: 'good result at reasonable cost' },
      { value: 'cost', label: 'Cost / speed', hint: 'fast, cheap, good enough' },
    ],
  });

  if (p.isCancel(qualityVsCost)) return p.cancel('Cancelled.');

  const extendedThinking =
    taskType === 'reasoning'
      ? await p.confirm({
          message: 'Is this a proof, strategic decision, or complex debugging scenario?',
          initialValue: true,
        })
      : false;

  if (p.isCancel(extendedThinking)) return p.cancel('Cancelled.');

  console.log('\n' + chalk.bold('Recommendation') + '\n');

  const rec = getRecommendation(
    taskType as string,
    qualityVsCost as string,
    Boolean(extendedThinking)
  );

  console.log(chalk.cyan('Model:'), chalk.bold(rec.model));
  console.log(chalk.cyan('Why:'), rec.why);
  console.log(chalk.cyan('Parameters:'));
  console.log(chalk.dim(JSON.stringify(rec.params, null, 2)));
  console.log(chalk.cyan('Estimated cost:'), rec.cost);

  if (rec.alternative) {
    console.log(chalk.dim('\nAlternative: ' + rec.alternative));
  }

  p.outro('');
}

interface Recommendation {
  model: string;
  why: string;
  params: Record<string, unknown>;
  cost: string;
  alternative?: string;
}

function getRecommendation(
  taskType: string,
  quality: string,
  extendedThinking: boolean
): Recommendation {
  if (taskType === 'bulk') {
    return {
      model: 'claude-haiku-4-5',
      why: 'Fastest and most cost-effective for high-volume processing. Use the Batches API for an additional 50% cost reduction.',
      params: { model: 'claude-haiku-4-5', max_tokens: 1024 },
      cost: '< $0.01 per request; < $0.02 per 100 at batch pricing',
    };
  }

  if (taskType === 'agent') {
    return {
      model: 'claude-opus-4-8',
      why: 'Long-horizon agentic tasks require adaptive thinking and sustained context. Opus 4.8 is built for this.',
      params: { model: 'claude-opus-4-8', thinking: { type: 'adaptive' }, output_config: { effort: 'xhigh' } },
      cost: '~$0.20–$1.00 per long run depending on turns',
    };
  }

  if (taskType === 'reasoning') {
    if (quality === 'cost') {
      return {
        model: 'claude-sonnet-4-6',
        why: 'Sonnet 4.6 with high effort covers 80% of reasoning tasks at ~60% of Opus cost. Use Opus when this falls short.',
        params: { model: 'claude-sonnet-4-6', output_config: { effort: 'high' } },
        cost: '~$0.05–$0.15 per task',
        alternative: 'claude-opus-4-8 (thinking: adaptive, effort: high) for the hardest problems',
      };
    }
    return {
      model: 'claude-opus-4-8',
      why: 'Complex reasoning and strategy problems benefit from adaptive thinking. Opus 4.8 produces the highest-quality output for hard problems.',
      params: {
        model: 'claude-opus-4-8',
        thinking: { type: 'adaptive' },
        output_config: { effort: extendedThinking ? 'high' : 'medium' },
      },
      cost: '~$0.15–$0.50 per complex task',
      alternative: quality === 'balance' ? 'claude-sonnet-4-6 (effort: high) covers 80% of reasoning tasks at ~60% of the cost' : undefined,
    };
  }

  if (quality === 'cost') {
    return {
      model: 'claude-haiku-4-5',
      why: 'Fastest and cheapest for simple drafts and routine Q&A when quality requirements are flexible.',
      params: { model: 'claude-haiku-4-5' },
      cost: '< $0.005 per request',
      alternative: 'claude-sonnet-4-6 if you need higher quality output',
    };
  }

  // Default: Sonnet for drafts, code, and balanced tasks
  return {
    model: 'claude-sonnet-4-6',
    why: 'Best speed/quality balance for drafts, code generation, and standard analysis. The right default for most tasks.',
    params: { model: 'claude-sonnet-4-6', output_config: { effort: quality === 'quality' ? 'high' : 'medium' } },
    cost: '~$0.01–$0.05 per task',
    alternative: taskType === 'reasoning' ? 'claude-opus-4-8 (thinking: adaptive) for significantly harder problems' : undefined,
  };
}
