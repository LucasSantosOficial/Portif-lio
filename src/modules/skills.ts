import { skills } from "@/data/skills"

export function renderSkills() {
  const grid = document.getElementById("stack-grid")
  if (!grid) return

  const fragment = document.createDocumentFragment()

  skills.forEach((skill, index) => {
    const item = document.createElement("li")
    item.className = "skill-chip"
    item.dataset.reveal = ""
    item.dataset.revealDelay = String(index * 40)
    item.dataset.level = skill.level
    item.setAttribute("role", "listitem")

    item.innerHTML = `
      <span class="skill-chip__glyph" aria-hidden="true">${skill.glyph}</span>
      <span class="skill-chip__name">${skill.name}</span>
      <span class="skill-chip__meta">${skill.category} · ${skill.level}</span>
    `

    fragment.appendChild(item)
  })

  grid.appendChild(fragment)
}
