"use client"

import Link from "next/link"

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nafisah-nubah-3a355829b" },
  { name: "GitHub", href: "https://github.com/nafisahnubah" },
  { name: "Email", href: "mailto:Nafisah.Nubah@dal.ca" },
]

export function Footer() {
  return (
    <footer style={{ borderTop: "2px solid var(--rule)" }}>
      <div
        className="px-4 sm:px-11 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap"
        style={{ fontSize: 12.5, color: "rgba(47,58,47,.55)" }}
      >
        <span>© {new Date().getFullYear()} Nafisah Nubah</span>
        <div className="flex gap-5">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="navlink"
              style={{ fontSize: 12.5 }}
            >
              {social.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
