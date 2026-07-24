import { experience } from "@/data/experience"
import type { ExperienceCase, ExperienceLink } from "@/types"

const LINK_ICONS: Record<ExperienceLink["kind"], string> = {
  repo: `<svg viewBox="0 0 24 24"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20"/></svg>`,
  pr: `<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M6 8.5v7M18 15.5V10a3 3 0 0 0-3-3h-4"/><path d="M13 4.5 10.5 7 13 9.5"/></svg>`,
  demo: `<svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg>`,
  video: `<svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="m10 9.5 5 2.5-5 2.5z"/></svg>`,
}

const LOCK_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`

export function renderExperience() {
  const grid = document.getElementById("experience-grid")
  if (!grid) return

  const fragment = document.createDocumentFragment()

  experience.forEach((item, index) => {
    fragment.appendChild(buildCard(item, index))
  })

  grid.appendChild(fragment)
  buildDialog()
}

function buildCard(item: ExperienceCase, index: number): HTMLElement {
  const card = document.createElement("article")
  card.className = "case-card"
  card.setAttribute("role", "listitem")
  card.dataset.reveal = ""
  card.dataset.revealDelay = String(index * 70)
  if (item.featured) card.classList.add("case-card--featured")

  card.innerHTML = `
    ${item.featured ? buildMedia(item) : ""}
    <div class="case-card__body">
      <div class="case-card__meta">
        <span class="case-card__company">${item.company}</span>
        <span class="case-card__dot" aria-hidden="true"></span>
        <span class="case-card__period">${item.period}</span>
      </div>
      <h3 class="case-card__title">
        ${item.title}
        <span class="case-card__subtitle">${item.subtitle}</span>
      </h3>
      <p class="case-card__role">${item.role}</p>
      <p class="case-card__summary">${item.summary}</p>
      <ul class="case-card__stack" role="list">
        ${item.stack.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
      <button class="case-card__more" type="button" data-case="${item.id}">
        Ver detalhes
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    </div>
  `

  const button = card.querySelector<HTMLButtonElement>(".case-card__more")
  button?.addEventListener("click", () => openDialog(item))

  return card
}

function buildMedia(item: ExperienceCase): string {
  if (!item.image) return ""
  return `
    <figure class="case-card__media">
      <img
        src="${item.image}"
        alt="${item.imageAlt ?? `Captura de tela do projeto ${item.title}`}"
        loading="lazy"
        decoding="async"
        onerror="this.closest('.case-card__media').dataset.fallback = 'true'; this.remove()"
      />
      <figcaption class="case-card__media-fallback" aria-hidden="true">
        ${item.title}
      </figcaption>
    </figure>
  `
}

/* ---------- Detalhe ---------- */

function buildDialog() {
  if (document.getElementById("case-dialog")) return

  const dialog = document.createElement("dialog")
  dialog.id = "case-dialog"
  dialog.className = "case-dialog"
  dialog.setAttribute("aria-labelledby", "case-dialog-title")
  dialog.innerHTML = `
    <button class="case-dialog__close" type="button" aria-label="Fechar detalhes">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
    </button>
    <div class="case-dialog__content" id="case-dialog-content"></div>
  `

  dialog.querySelector(".case-dialog__close")?.addEventListener("click", () => dialog.close())

  // Clique no backdrop fecha; clique dentro do conteúdo não.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close()
  })

  document.body.appendChild(dialog)
}

function openDialog(item: ExperienceCase) {
  const dialog = document.getElementById("case-dialog") as HTMLDialogElement | null
  const content = document.getElementById("case-dialog-content")
  if (!dialog || !content) return

  content.innerHTML = `
    <div class="case-dialog__meta">
      <span class="case-dialog__company">${item.company}</span>
      <span class="case-card__dot" aria-hidden="true"></span>
      <span>${item.period}</span>
    </div>

    <h3 class="case-dialog__title" id="case-dialog-title">
      ${item.title} <span>${item.subtitle}</span>
    </h3>
    <p class="case-dialog__role">${item.role}</p>

    ${item.image ? buildMedia(item) : ""}

    <div class="case-dialog__block">
      <h4>O problema</h4>
      <p>${item.problem}</p>
    </div>

    <div class="case-dialog__block">
      <h4>O que eu fiz</h4>
      <p>${item.solution}</p>
    </div>

    <div class="case-dialog__block">
      <h4>Destaques técnicos</h4>
      <ul class="case-dialog__highlights" role="list">
        ${item.highlights.map((line) => `<li>${line}</li>`).join("")}
      </ul>
    </div>

    <div class="case-dialog__block">
      <h4>Stack</h4>
      <ul class="case-card__stack" role="list">
        ${item.stack.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
    </div>

    ${buildLinks(item)}
  `

  dialog.showModal()
}

function buildLinks(item: ExperienceCase): string {
  if (!item.links?.length) return ""

  const hasRestricted = item.links.some((link) => link.restricted)

  return `
    <div class="case-dialog__block">
      <h4>Referências</h4>
      <ul class="case-links" role="list">
        ${item.links
          .map(
            (link) => `
          <li>
            <a
              href="${link.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="case-links__item${link.restricted ? " case-links__item--restricted" : ""}"
            >
              <span class="case-links__icon" aria-hidden="true">${LINK_ICONS[link.kind]}</span>
              ${link.label}
              ${link.restricted ? `<span class="case-links__lock" aria-hidden="true">${LOCK_ICON}</span>` : ""}
            </a>
          </li>`,
          )
          .join("")}
      </ul>
      ${
        hasRestricted
          ? `<p class="case-links__note">
              <span aria-hidden="true">${LOCK_ICON}</span>
              Repositório privado da empresa. Os links exigem autorização de acesso —
              posso apresentar o código e as decisões técnicas em uma conversa.
            </p>`
          : ""
      }
    </div>
  `
}
