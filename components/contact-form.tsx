"use client"

import type React from "react"
import { useState } from "react"

export function ContactForm({ action }: { action: string }) {
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

  if (isSubmitted) {
    return (
      <div className="sent" role="status">
        <p className="fl">Sent</p>
        <p className="st">Thanks for reaching out!</p>
        <p className="ss">I&apos;ll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form className="cf" action={action} method="POST" onSubmit={handleSubmit}>
      <div className="fld">
        <label htmlFor="nm">Name</label>
        <input id="nm" name="name" placeholder="Your name" required />
      </div>
      <div className="fld">
        <label htmlFor="em">Email</label>
        <input id="em" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="fld">
        <label htmlFor="sj">Subject</label>
        <input id="sj" name="subject" placeholder="What is this about" required />
      </div>
      <div className="fld">
        <label htmlFor="ms">Message</label>
        <textarea id="ms" name="message" rows={5} placeholder="Tell me what is on your mind" required />
      </div>
      <button type="submit" className="send" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  )
}
