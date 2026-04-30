import { projects } from "@/data/projects"

export function renderProjects() {
  const grid = document.getElementById("projects-grid")
  if (!grid) return

  const fragment = document.createDocumentFragment()

  projects.forEach((project, index) => {
    const card = document.createElement("a")
    card.className = "project-card"
    card.href = project.url
    card.target = "_blank"
    card.rel = "noopener noreferrer"
    card.setAttribute("role", "listitem")
    card.dataset.reveal = ""
    card.dataset.revealDelay = String(index * 60)
    if (project.highlight) card.classList.add("project-card--highlight")

    card.innerHTML = `
      <div class="project-card__top">
        <span class="project-card__index">${String(index + 1).padStart(2, "0")}</span>
        <span class="project-card__arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" /></svg>
        </span>
      </div>
      <h3 class="project-card__title">${project.title}</h3>
      <p class="project-card__desc">${project.description}</p>
      <ul class="project-card__tags" role="list">
        ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
    `

    card.addEventListener("mousemove", handleTilt)
    card.addEventListener("mouseleave", resetTilt)

    fragment.appendChild(card)
  })

  grid.appendChild(fragment)
}

function handleTilt(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  const rotateY = (x - 0.5) * 8
  const rotateX = (0.5 - y) * 8
  card.style.setProperty("--tilt-x", `${rotateX}deg`)
  card.style.setProperty("--tilt-y", `${rotateY}deg`)
  card.style.setProperty("--mx", `${x * 100}%`)
  card.style.setProperty("--my", `${y * 100}%`)
}

function resetTilt(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement
  card.style.setProperty("--tilt-x", `0deg`)
  card.style.setProperty("--tilt-y", `0deg`)
}
