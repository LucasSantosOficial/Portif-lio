export function initNav() {
  const header = document.querySelector<HTMLElement>(".site-header")
  const menuToggle = document.getElementById("menu-toggle")
  const nav = document.querySelector<HTMLElement>(".primary-nav")

  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
  }

  if (menuToggle && nav) {
    const close = () => {
      nav.classList.remove("is-open")
      menuToggle.setAttribute("aria-expanded", "false")
      menuToggle.classList.remove("is-active")
    }
    const open = () => {
      nav.classList.add("is-open")
      menuToggle.setAttribute("aria-expanded", "true")
      menuToggle.classList.add("is-active")
    }
    menuToggle.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) close()
      else open()
    })
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close))
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close()
    })
  }

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href")
      if (!href || href === "#") return
      const target = document.querySelector(href)
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      history.replaceState(null, "", href)
    })
  })

  initActiveSection()
}

function initActiveSection() {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".primary-nav a[href^='#']")
  )
  const sections = links
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1)
      return id ? document.getElementById(id) : null
    })
    .filter((el): el is HTMLElement => el !== null)

  if (!sections.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const id = entry.target.id
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`)
        })
      })
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  )

  sections.forEach((section) => observer.observe(section))
}
