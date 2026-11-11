"use client"

import { useEffect } from "react"

// Client-side behaviour for the page: hand-drawn doodles, scroll reveals, side tabs,
// section menu, pencil scroll line, paper plane and expandable entries.
// Ported from the portfolio-design-v7 mockup script.
function init(root: HTMLElement) {
  const $ = <T extends Element = HTMLElement>(s: string, el?: Element) => (el || root).querySelector(s) as T
  const $$ = <T extends Element = HTMLElement>(s: string, el?: Element) =>
    [...(el || root).querySelectorAll(s)] as T[]
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches
  const offs: (() => void)[] = []
  const on = (t: EventTarget, ev: string, fn: EventListener, o?: AddEventListenerOptions | boolean) => {
    t.addEventListener(ev, fn, o)
    offs.push(() => t.removeEventListener(ev, fn, o))
  }
  const svg = (vb: string, d: string) =>
    `<svg viewBox="${vb}" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="${d}"/></svg>`

  // hand-drawn arrows pointing toward the content
  const ARROWS: Record<string, string> = {
    l: svg("0 0 44 30", "M42 6 C30 2 14 6 6 20 M6 20 L4 10 M6 20 L15 17"),
    r: svg("0 0 44 30", "M2 6 C14 2 30 6 38 20 M38 20 L40 10 M38 20 L29 17"),
  }
  $$(".ar").forEach((a) => {
    a.innerHTML = ARROWS[a.dataset.ar || "l"] || ARROWS.l
  })
  $$(".rs").forEach((r) => {
    r.innerHTML =
      r.dataset.shape === "under"
        ? svg("0 0 100 12", "M2 7 C20 2 35 11 52 6 S82 3 98 7")
        : svg("0 0 100 40", "M54 3 C20 1 3 10 4 21 C5 33 30 39 56 37 C82 35 98 27 96 16 C94 6 74 2 44 5")
  })
  $$(".mtn").forEach((m) => {
    m.innerHTML = svg("0 0 46 24", "M2 22 L14 6 L20 13 L28 2 L44 22 Z M24 7 L28 2 L32 8")
  })

  // reveal annotations as they come into view
  const targets = $$(".nt, .rs, mark.hl")
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((en) => {
        if (!en.isIntersecting) return
        const el = en.target
        setTimeout(() => el.classList.add("shown"), reduce ? 0 : 150)
        io.unobserve(el)
      }),
    { threshold: 0.3, rootMargin: "0px 0px -8% 0px" },
  )
  targets.forEach((t) => io.observe(t))

  // smooth scroll helper shared by tabs, menu and plane
  const goTo = (id: string) => {
    const t = id === "top" ? null : root.querySelector("#" + id)
    const y = t ? t.getBoundingClientRect().top + scrollY - 90 : 0
    window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" })
  }

  // side tabs
  const tabEls = $$<HTMLAnchorElement>("[data-tab]")
  const secs = tabEls.map((t) => root.querySelector("#" + t.dataset.tab))
  tabEls.forEach((t) =>
    on(t, "click", (e) => {
      e.preventDefault()
      goTo(t.dataset.tab!)
    }),
  )
  const spy = () => {
    let c = -1
    secs.forEach((s, i) => {
      if (s && s.getBoundingClientRect().top < innerHeight * 0.4) c = i
    })
    tabEls.forEach((t, i) => t.classList.toggle("on", i === c))
  }
  on(window, "scroll", spy, { passive: true })
  spy()

  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("in")))
  // hand-drawn swash under the name
  $("[data-nsw]").innerHTML =
    '<svg viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M3 10 C60 4 120 13 180 7 S260 4 297 9"/></svg>'

  // section menu
  const mnu = $("[data-mnu]"),
    burger = $("[data-burger]"),
    links = $$<HTMLAnchorElement>("[data-go]")
  const setOpen = (o: boolean) => {
    mnu.classList.toggle("open", o)
    burger.setAttribute("aria-expanded", String(o))
    if (o) setTimeout(() => links[0] && links[0].focus({ preventScroll: true }), 120)
  }
  on(burger, "click", (e) => {
    e.stopPropagation()
    setOpen(!mnu.classList.contains("open"))
  })
  links.forEach((a) =>
    on(a, "click", (e) => {
      e.preventDefault()
      setOpen(false)
      setTimeout(() => goTo(a.dataset.go!), 120)
    }),
  )
  on(document, "click", (e) => {
    if (mnu.classList.contains("open") && !mnu.contains(e.target as Node)) setOpen(false)
  })
  on(window, "keydown", (e) => {
    if ((e as KeyboardEvent).key === "Escape" && mnu.classList.contains("open")) {
      setOpen(false)
      burger.focus()
    }
  })
  const menuSpy = () => {
    let c = -1
    links.forEach((a, i) => {
      const s = root.querySelector("#" + a.dataset.go)
      if (s && s.getBoundingClientRect().top < innerHeight * 0.4) c = i
    })
    links.forEach((a, i) => a.classList.toggle("on", i === c))
  }
  on(window, "scroll", menuSpy, { passive: true })
  menuSpy()

  // reveals: section numbers, entries, thumbnails
  $$(".blk>h2").forEach((h) => h.classList.add("hhl"))
  $$(".ent, .fp, .stats, .pq").forEach((el) => el.classList.add("rv2"))
  const lio = new IntersectionObserver(
    (es) =>
      es.forEach((en) => {
        if (!en.isIntersecting) return
        const el = en.target as HTMLElement
        if (el.tagName === "H2") el.classList.add("lit")
        else {
          const sib = [...el.parentElement!.children].filter(
            (x) => x.classList.contains("rv2") && !x.classList.contains("on"),
          )
          el.style.transitionDelay = Math.min(Math.max(0, sib.indexOf(el)), 4) * 80 + "ms"
          el.classList.add("on")
        }
        lio.unobserve(el)
      }),
    { threshold: 0.15 },
  )
  $$(".hhl, .rv2").forEach((el) => lio.observe(el))
  offs.push(() => lio.disconnect())

  // expandable entries
  $$<HTMLButtonElement>("[data-xb]").forEach((b) =>
    on(b, "click", () => {
      const ent = b.closest(".ent")!
      const open = !ent.classList.contains("open")
      ent.classList.toggle("open", open)
      b.setAttribute("aria-expanded", String(open))
      b.textContent = open ? "less −" : "details +"
    }),
  )

  // pencil scroll line + paper plane
  const pc = $("[data-pencil]"),
    plane = $("[data-plane]"),
    doc = $(".doc")
  let path: SVGPathElement | null = null,
    tip: SVGGElement | null = null,
    len = 0
  const drawPencil = () => {
    plane.classList.toggle("show", scrollY > 600)
    if (!path || !tip) return
    const r = doc.getBoundingClientRect()
    const p = Math.max(0, Math.min(1, (innerHeight * 0.5 - r.top) / r.height))
    path.style.strokeDashoffset = String(len * (1 - p))
    const pt = path.getPointAtLength(len * p)
    tip.setAttribute("transform", `translate(${pt.x},${pt.y}) rotate(${Math.sin(p * 40) * 8})`)
  }
  let lastH = 0
  const buildPencil = () => {
    const H = pc.clientHeight
    if (!H || H === lastH) return
    lastH = H
    let d = "M13 0"
    for (let y = 0; y < H; y += 40) {
      const x = 13 + Math.sin(y / 90) * 7 + Math.sin(y / 23) * 2
      d += ` L${x.toFixed(1)} ${y}`
    }
    pc.innerHTML = `<svg viewBox="0 0 26 ${H}" preserveAspectRatio="none" aria-hidden="true"><path class="tr" d="${d}"/><g class="tip"><path d="M-4 -26 L4 -26 L4 -6 L0 2 L-4 -6 Z" fill="#ffd36b" stroke="#24211c" stroke-width="1.2" stroke-linejoin="round"/><path d="M-4 -26 L4 -26 L4 -31 L-4 -31 Z" fill="#f6a5b4" stroke="#24211c" stroke-width="1.2"/><path d="M-2 -3 L0 2 L2 -3 Z" fill="#24211c"/></g></svg>`
    path = $<SVGPathElement>(".tr", pc)
    tip = $<SVGGElement>(".tip", pc)
    len = path.getTotalLength()
    path.style.strokeDasharray = String(len)
    drawPencil()
  }
  $("[data-planeart]").innerHTML =
    '<svg viewBox="0 0 26 22" aria-hidden="true"><path d="M1 10 L25 1 L17 21 L12 13 Z" fill="#fffdf6" stroke="#2747c4" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 13 L25 1" stroke="#2747c4" stroke-width="1.2"/></svg>'
  on(window, "scroll", drawPencil, { passive: true })
  // rebuild the pencil line whenever the page height changes (resize, expanded entries)
  let raf = 0
  const ro = new ResizeObserver(() => {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(buildPencil)
  })
  const pT = setTimeout(() => {
    buildPencil()
    ro.observe(pc)
  }, 300)
  offs.push(() => {
    clearTimeout(pT)
    cancelAnimationFrame(raf)
    ro.disconnect()
  })
  on(plane, "click", () => {
    plane.classList.add("fly")
    goTo("top")
    setTimeout(() => plane.classList.remove("fly"), 1200)
  })

  return () => {
    offs.forEach((f) => f())
    io.disconnect()
  }
}

export function Enhance() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".r7c")
    if (!root) return
    return init(root)
  }, [])
  return null
}
