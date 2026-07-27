import type { SkillItem } from "@/types"

/**
 * Mantenha esta lista alinhada com as stacks declaradas em `data/experience.ts`.
 * Uma tecnologia citada num case e ausente aqui passa impressão de stack inflada.
 */
export const skills: SkillItem[] = [
  // Front-end
  { name: "TypeScript", level: "produtivo", category: "Front-end", glyph: "TS" },
  { name: "JavaScript", level: "avançado", category: "Front-end", glyph: "JS" },
  { name: "HTML5", level: "avançado", category: "Front-end", glyph: "</>" },
  { name: "CSS3 / Tailwind", level: "avançado", category: "Front-end", glyph: "#" },
  { name: "React", level: "produtivo", category: "Front-end", glyph: "⚛" },
  { name: "React Query", level: "produtivo", category: "Front-end", glyph: "RQ" },
  { name: "Chakra UI", level: "produtivo", category: "Front-end", glyph: "CH" },
  { name: "Acessibilidade", level: "produtivo", category: "Front-end", glyph: "a11y" },

  // Back-end
  { name: "Node.js", level: "produtivo", category: "Back-end", glyph: "N" },
  { name: "NestJS", level: "produtivo", category: "Back-end", glyph: "Nest" },
  { name: "PostgreSQL", level: "produtivo", category: "Back-end", glyph: "PG" },
  { name: "TypeORM", level: "produtivo", category: "Back-end", glyph: "ORM" },
  { name: "Redis", level: "explorando", category: "Back-end", glyph: "RD" },
  { name: "Socket.io", level: "produtivo", category: "Back-end", glyph: "WS" },
  { name: "REST APIs", level: "produtivo", category: "Back-end", glyph: "{ }" },
  { name: "Webhooks", level: "produtivo", category: "Back-end", glyph: "↯" },
  { name: "Python", level: "explorando", category: "Back-end", glyph: "Py" },

  // Ferramentas
  { name: "n8n", level: "produtivo", category: "Ferramentas", glyph: "n8n" },
  { name: "Vite", level: "produtivo", category: "Ferramentas", glyph: "⚡" },
  { name: "Git / GitHub", level: "avançado", category: "Ferramentas", glyph: "⎇" },

  // Design
  { name: "Figma", level: "produtivo", category: "Design", glyph: "F" },
]
