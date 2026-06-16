/**
 * Simple {{VAR}} substitution engine.
 * Intentionally dependency-free — one function, zero runtime cost.
 */
export function render(template: string, vars: Record<string, string | undefined>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? `{{${key}}}`);
}

export function renderFile(content: string, vars: Record<string, string | undefined>): string {
  return render(content, vars);
}
