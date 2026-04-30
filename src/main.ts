import { initTheme } from "@/modules/theme"
import { initReveal } from "@/modules/reveal"
import { initTypewriter } from "@/modules/typewriter"
import { initNav } from "@/modules/nav"
import { renderProjects } from "@/modules/projects"
import { renderSkills } from "@/modules/skills"
import { initCounters } from "@/modules/counters"
import { initCursorGlow } from "@/modules/cursor"
import { initBackground } from "@/modules/background"

function setYear() {
  const el = document.getElementById("year")
  if (el) el.textContent = String(new Date().getFullYear())
}

function boot() {
  initTheme()
  renderSkills()
  renderProjects()
  initNav()
  initTypewriter()
  initCounters()
  initCursorGlow()
  initBackground()
  initReveal()
  setYear()
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true })
} else {
  boot()
}
