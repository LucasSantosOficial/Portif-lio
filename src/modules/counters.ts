export function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>("[data-counter]")
  if (!counters.length) return

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    counters.forEach((el) => {
      const target = Number(el.dataset.counter ?? 0)
      el.textContent = `${target}${el.dataset.suffix ?? ""}`
    })
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        animate(entry.target as HTMLElement)
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.6 }
  )

  counters.forEach((el) => observer.observe(el))
}

function animate(el: HTMLElement) {
  const target = Number(el.dataset.counter ?? 0)
  const suffix = el.dataset.suffix ?? ""
  const duration = 1400
  const start = performance.now()

  const step = (now: number) => {
    const progress = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = `${Math.round(target * eased)}${suffix}`
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
