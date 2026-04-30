import type { Theme } from "@/types"

const STORAGE_KEY = "ls-theme"

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
  if (stored === "light" || stored === "dark") return stored
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  const button = document.getElementById("theme-toggle")
  button?.setAttribute("aria-pressed", theme === "light" ? "true" : "false")

  const avatar = document.getElementById("avatar") as HTMLImageElement | null
  if (avatar) {
    avatar.src =
      theme === "light" ? "./figma/assets/avatar.png" : "./figma/assets/avatar-light.png"
  }
}

export function initTheme() {
  const button = document.getElementById("theme-toggle")
  if (!button) return

  applyTheme(getInitialTheme())

  button.addEventListener("click", () => {
    const next: Theme = document.documentElement.dataset.theme === "light" ? "dark" : "light"
    localStorage.setItem(STORAGE_KEY, next)
    applyTheme(next)
  })

  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "t" && !event.metaKey && !event.ctrlKey && !event.altKey) {
      const target = event.target as HTMLElement | null
      if (target?.matches("input, textarea, [contenteditable='true']")) return
      button.click()
    }
  })
}
