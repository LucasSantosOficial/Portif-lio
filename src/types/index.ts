export type Theme = "light" | "dark"

export interface Project {
  id: string
  title: string
  description: string
  url: string
  tags: string[]
  highlight?: boolean
}

export interface SkillItem {
  name: string
  level: "explorando" | "produtivo" | "avançado"
  category: "Front-end" | "Back-end" | "Ferramentas" | "Design"
  glyph: string
}
