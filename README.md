<div align="center">

# Lucas Santos — Portfólio

Site pessoal e portfólio profissional. Construído como SPA estática com **Vite + TypeScript**, deploy automático em **GitHub Pages**.

[**Ver online →**](https://lucassantosoficial.github.io/Portif-lio/)

![License](https://img.shields.io/badge/license-MIT-49AA26?style=flat-square)
![TypeScript](https://img.shields.io/badge/typescript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Deploy](https://img.shields.io/badge/deploy-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

</div>

---

## Stack

- **Vite 5** — bundler moderno, HMR instantâneo, build em milissegundos.
- **TypeScript** em modo `strict` — segurança de tipos em todas as camadas.
- **CSS modular** com tokens de design, `@import` e variáveis customizadas (suporte a tema claro/escuro).
- **Web APIs nativas** — `IntersectionObserver`, `matchMedia`, Canvas 2D, `requestAnimationFrame`.
- **ESLint + Prettier** com configuração própria.
- **GitHub Actions** para CI/CD em GitHub Pages.

## Recursos

- Tema claro/escuro persistido em `localStorage` (atalho **T**).
- Scroll suave com destaque automático da seção ativa.
- Reveal-on-scroll usando `IntersectionObserver`.
- Background animado em canvas com partículas conectadas.
- Cards de projeto com tilt 3D acompanhando o cursor.
- Efeito de digitação no hero.
- Glow seguindo o cursor (apenas em pointer fino).
- SEO completo: OpenGraph, Twitter Cards, JSON-LD `Person`.
- PWA-ready: `manifest.webmanifest`, ícones e meta `theme-color`.
- `sitemap.xml` e `robots.txt` configurados.
- Acessibilidade: `prefers-reduced-motion`, `skip-link`, ARIA, foco visível, navegação por teclado.

## Estrutura

```
Portif-lio/
├── public/                  # assets estáticos copiados como estão
│   ├── figma/assets/        # imagens originais do design
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── data/                # fonte de verdade dos projetos e skills
│   ├── modules/             # cada feature isolada
│   │   ├── background.ts    # canvas com partículas
│   │   ├── counters.ts      # animação dos números
│   │   ├── cursor.ts        # glow seguindo o cursor
│   │   ├── nav.ts           # smooth scroll + seção ativa
│   │   ├── projects.ts      # render dos cards
│   │   ├── reveal.ts        # animações ao rolar
│   │   ├── skills.ts        # render do grid de stack
│   │   ├── theme.ts         # toggle de tema
│   │   └── typewriter.ts    # efeito de digitação
│   ├── styles/              # design system em CSS
│   │   ├── components/
│   │   ├── tokens.css       # variáveis (cores, espaços, easing)
│   │   ├── reset.css
│   │   ├── base.css
│   │   ├── animations.css
│   │   └── main.css         # entry de imports
│   ├── types/               # tipos compartilhados
│   └── main.ts              # bootstrap da aplicação
├── .github/workflows/deploy.yml
├── index.html
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
└── package.json
```

## Como rodar localmente

> Requer Node 18+ (recomendado 20).

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com HMR. |
| `npm run build` | `tsc --noEmit` + build de produção em `dist/`. |
| `npm run preview` | Serve a build de produção localmente. |
| `npm run typecheck` | Verifica tipos sem emitir arquivos. |
| `npm run lint` | Lint com ESLint. |
| `npm run format` | Formata o código com Prettier. |

## Deploy

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`) sempre que houver push em `master` ou `main`.

Para que funcione, em **Settings → Pages** do repositório, defina:

- **Source**: `GitHub Actions`.

A action faz o build com `npm run build` e publica o conteúdo de `dist/`.

## Personalização

- **Projetos**: edite `src/data/projects.ts`.
- **Stack**: edite `src/data/skills.ts`.
- **Cores e tipografia**: edite `src/styles/tokens.css`.
- **Texto do hero / sobre**: edite `index.html`.

## Licença

MIT — fique à vontade para usar como referência.
