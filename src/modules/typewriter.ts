const PHRASES = [
  "modernas",
  "acessíveis",
  "rápidas",
  "que resolvem",
  "com TypeScript",
  "sob medida",
]

export function initTypewriter() {
  const target = document.getElementById("typewriter-target")
  if (!target) return

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    target.textContent = PHRASES[0] ?? ""
    return
  }

  let phraseIndex = 0
  let charIndex = 0
  let deleting = false

  const tick = () => {
    const phrase = PHRASES[phraseIndex % PHRASES.length] ?? ""
    if (!deleting) {
      charIndex++
      target.textContent = phrase.slice(0, charIndex)
      if (charIndex === phrase.length) {
        deleting = true
        window.setTimeout(tick, 1600)
        return
      }
      window.setTimeout(tick, 80 + Math.random() * 60)
    } else {
      charIndex--
      target.textContent = phrase.slice(0, charIndex)
      if (charIndex === 0) {
        deleting = false
        phraseIndex++
        window.setTimeout(tick, 280)
        return
      }
      window.setTimeout(tick, 35)
    }
  }

  window.setTimeout(tick, 600)
}
