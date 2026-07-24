export type Theme = "light" | "dark"

export interface Project {
  id: string
  title: string
  description: string
  url: string
  tags: string[]
  highlight?: boolean
}

export type ExperienceLinkKind = "repo" | "pr" | "demo" | "video"

export interface ExperienceLink {
  label: string
  url: string
  kind: ExperienceLinkKind
  /** Repositório/PR privado: o card avisa antes do clique em vez de entregar um 404. */
  restricted?: boolean
}

export interface ExperienceCase {
  id: string
  title: string
  subtitle: string
  company: string
  period: string
  role: string
  /** Frase curta exibida no card. */
  summary: string
  problem: string
  solution: string
  /** Bullets técnicos exibidos no detalhe. */
  highlights: string[]
  stack: string[]
  image?: string
  imageAlt?: string
  links?: ExperienceLink[]
  featured?: boolean
}

export interface SkillItem {
  name: string
  level: "explorando" | "produtivo" | "avançado"
  category: "Front-end" | "Back-end" | "Ferramentas" | "Design"
  glyph: string
}
