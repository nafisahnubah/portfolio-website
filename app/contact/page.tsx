"use client"

import type React from "react"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        alert("Oops! Something went wrong. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full" style={{ background: "var(--bg)" }}>
      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-11 pt-14 pb-10">
          <div className="max-w-[820px]">
            <div className="kick" style={{ marginBottom: 14 }}>
              Halifax, Nova Scotia
            </div>
            <h1 className="ser text-5xl sm:text-6xl" style={{ lineHeight: 1, margin: "0 0 18px" }}>
              Get in touch
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(47,58,47,.78)", margin: 0 }}>
              If you&apos;d like to talk about a role, a project, or anything else, send me a message and I&apos;ll get back
              to you soon.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.15fr_1fr]" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="px-4 sm:px-11 py-11 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--rule)]">
          {isSubmitted ? (
            <div>
              <div className="kick" style={{ marginBottom: 10 }}>
                Sent
              </div>
              <p className="ser" style={{ fontSize: 28, margin: "0 0 8px" }}>
                Thanks for reaching out!
              </p>
              <p style={{ fontSize: 14.5, color: "rgba(47,58,47,.7)", margin: 0 }}>
                I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form action="https://formspree.io/f/xldwjgqj" method="POST" onSubmit={handleSubmit}>
              <div className="field" style={{ marginBottom: 16 }}>
                <label htmlFor="nm">Name</label>
                <input className="input" id="nm" name="name" placeholder="Your name" required />
              </div>
              <div className="field" style={{ marginBottom: 16 }}>
                <label htmlFor="em">Email</label>
                <input className="input" id="em" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="field" style={{ marginBottom: 16 }}>
                <label htmlFor="sj">Subject</label>
                <input className="input" id="sj" name="subject" placeholder="What is this about" required />
              </div>
              <div className="field" style={{ marginBottom: 20 }}>
                <label htmlFor="ms">Message</label>
                <textarea
                  className="input"
                  id="ms"
                  name="message"
                  rows={5}
                  placeholder="Tell me what is on your mind"
                  required
                />
              </div>
              <button type="submit" className="btnx btn-s" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
        <div className="px-4 sm:px-11 py-11">
          <div className="kick" style={{ marginBottom: 16 }}>
            Other ways
          </div>
          <div style={{ padding: "12px 0", borderBottom: "1px solid var(--hair)" }}>
            <div style={{ fontWeight: 600 }}>Email</div>
            <a href="mailto:Nafisah.Nubah@dal.ca" style={{ fontSize: 14.5, textDecoration: "none" }}>
              Nafisah.Nubah@dal.ca
            </a>
            <br />
            <a href="mailto:nafisahnubah@gmail.com" style={{ fontSize: 14.5, textDecoration: "none" }}>
              nafisahnubah@gmail.com
            </a>
          </div>
          <div style={{ padding: "12px 0", borderBottom: "1px solid var(--hair)" }}>
            <div style={{ fontWeight: 600 }}>LinkedIn</div>
            <a
              href="http://www.linkedin.com/in/nafisah-nubah-3a355829b"
              target="_blank"
              rel="noopener"
              style={{ fontSize: 14.5, textDecoration: "none" }}
            >
              nafisah-nubah
            </a>
          </div>
          <div style={{ padding: "12px 0", borderBottom: "1px solid var(--hair)" }}>
            <div style={{ fontWeight: 600 }}>GitHub</div>
            <a
              href="https://github.com/nafisahnubah"
              target="_blank"
              rel="noopener"
              style={{ fontSize: 14.5, textDecoration: "none" }}
            >
              nafisahnubah
            </a>
          </div>
          <div style={{ padding: "12px 0", borderBottom: "1px solid var(--hair)" }}>
            <div style={{ fontWeight: 600 }}>Phone</div>
            <a href="tel:+17828827285" style={{ fontSize: 14.5, textDecoration: "none" }}>
              +1 (782) 882 7285
            </a>
          </div>
          <div style={{ padding: "12px 0" }}>
            <div style={{ fontWeight: 600 }}>Location</div>
            <span style={{ fontSize: 14.5, color: "rgba(47,58,47,.7)" }}>Halifax, NS, Canada</span>
          </div>
        </div>
      </div>
    </div>
  )
}
