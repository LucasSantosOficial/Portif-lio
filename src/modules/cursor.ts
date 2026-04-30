export function initCursorGlow() {
  if (matchMedia("(pointer: coarse)").matches) return
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return

  const glow = document.querySelector<HTMLElement>(".cursor-glow")
  if (!glow) return

  let targetX = window.innerWidth / 2
  let targetY = window.innerHeight / 2
  let currentX = targetX
  let currentY = targetY

  window.addEventListener("pointermove", (event) => {
    targetX = event.clientX
    targetY = event.clientY
  })

  const tick = () => {
    currentX += (targetX - currentX) * 0.12
    currentY += (targetY - currentY) * 0.12
    glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}
