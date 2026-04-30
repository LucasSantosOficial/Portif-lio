export function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]")
  if (!targets.length) return

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((el) => el.classList.add("is-revealed"))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const delay = Number(el.dataset.revealDelay ?? 0)
        window.setTimeout(() => el.classList.add("is-revealed"), delay)
        observer.unobserve(el)
      })
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  )

  targets.forEach((el) => observer.observe(el))
}
