interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export function initBackground() {
  const canvas = document.getElementById("bg-canvas") as HTMLCanvasElement | null
  if (!canvas) return
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.style.display = "none"
    return
  }

  const particles: Particle[] = []
  let width = 0
  let height = 0
  let dpr = Math.min(window.devicePixelRatio || 1, 2)

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    seed()
  }

  const seed = () => {
    particles.length = 0
    const count = Math.min(80, Math.floor((width * height) / 22000))
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
      })
    }
  }

  const tick = () => {
    ctx.clearRect(0, 0, width, height)

    const isLight = document.documentElement.dataset.theme === "light"
    const dot = isLight ? "rgba(20, 22, 40, 0.45)" : "rgba(180, 200, 255, 0.55)"
    const line = isLight ? "rgba(20, 22, 40, 0.08)" : "rgba(160, 180, 255, 0.10)"

    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > width) p.vx *= -1
      if (p.y < 0 || p.y > height) p.vy *= -1
      ctx.beginPath()
      ctx.fillStyle = dot
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.strokeStyle = line
    ctx.lineWidth = 1
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i]!
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j]!
        const dx = a.x - b.x
        const dy = a.y - b.y
        const dist = dx * dx + dy * dy
        if (dist < 130 * 130) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
    }

    requestAnimationFrame(tick)
  }

  resize()
  window.addEventListener("resize", resize, { passive: true })
  requestAnimationFrame(tick)
}
