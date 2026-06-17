// Simple {{VAR}} substitution. Leaves unknown tokens as-is so callers can spot missing vars.
export function render(template: string, vars: Record<string, string | undefined>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? `{{${key}}}`);
}
