"use client"

import { useEffect, useRef } from "react"

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext("2d")
    if (!ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const p = { x: -9999, y: -9999 }
    const eased = { x: -9999, y: -9999 }

    const onMove = (e: PointerEvent) => {
      const r = c.getBoundingClientRect()
      p.x = e.clientX - r.left
      p.y = e.clientY - r.top
    }
    window.addEventListener("pointermove", onMove, { passive: true })

    const BW = 132
    const buf = document.createElement("canvas")
    const bctx = buf.getContext("2d")!
    const stops: [number, number, number][] = [
      [250, 251, 250],
      [218, 228, 219],
      [138, 169, 145],
      [201, 162, 125],
      [125, 83, 54],
    ]
    const ramp = (v: number): [number, number, number] => {
      const s = Math.max(0, Math.min(0.999, v)) * (stops.length - 1)
      const i = Math.floor(s)
      const f = s - i
      const a = stops[i]
      const b = stops[i + 1] || a
      return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f]
    }

    let raf = 0
    const draw = (t: number) => {
      const w = c.clientWidth
      const h = c.clientHeight
      if (!w || !h) {
        raf = requestAnimationFrame(draw)
        return
      }
      const BH = Math.max(8, Math.round((BW * h) / w))
      if (buf.width !== BW || buf.height !== BH) {
        buf.width = BW
        buf.height = BH
      }
      if (c.width !== w || c.height !== h) {
        c.width = w
        c.height = h
      }

      eased.x += (p.x - eased.x) * 0.06
      eased.y += (p.y - eased.y) * 0.06
      const time = reduce ? 0 : t / 7000
      const px = (eased.x / w) * BW
      const py = (eased.y / h) * BH

      const img = bctx.createImageData(BW, BH)
      const d = img.data
      for (let y = 0; y < BH; y++) {
        for (let x = 0; x < BW; x++) {
          let fx = x
          let fy = y
          const dx = x - px
          const dy = y - py
          const dist = Math.hypot(dx, dy)
          const R = BW * 0.34
          if (dist < R) {
            const k = 1 - dist / R
            const a = k * k * 2.6
            const ca = Math.cos(a)
            const sa = Math.sin(a)
            fx = px + dx * ca - dy * sa
            fy = py + dx * sa + dy * ca
          }
          const w1 = Math.sin(fx * 0.055 + time * 1.7 + Math.cos(fy * 0.041 - time) * 1.9)
          const w2 = Math.sin(fy * 0.062 - time * 1.2 + Math.sin(fx * 0.033 + time * 0.7) * 2.2)
          const w3 = Math.sin((fx + fy) * 0.028 + time * 2.1)
          let v = 0.5 + w1 * 0.3 + w2 * 0.22 + w3 * 0.16
          if (dist < R) v += (1 - dist / R) * 0.22
          const i = (y * BW + x) * 4
          const col = ramp(v)
          d[i] = col[0]
          d[i + 1] = col[1]
          d[i + 2] = col[2]
          d[i + 3] = 255
        }
      }
      bctx.putImageData(img, 0, 0)
      ctx.clearRect(0, 0, w, h)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"
      ctx.globalAlpha = 0.5
      ctx.drawImage(buf, 0, 0, BW, BH, 0, 0, w, h)
      ctx.globalAlpha = 1
      if (!reduce) raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
      aria-hidden="true"
    />
  )
}
