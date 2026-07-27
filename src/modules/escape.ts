/**
 * Escapa texto para injeção segura via innerHTML.
 *
 * Sem isso, valores com `<` ou `>` (ex.: o glyph `</>` do HTML5) são lidos
 * como marcação pelo parser e somem da tela.
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
