"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-0 z-20 flex items-baseline gap-5 px-4 sm:px-11 py-4 flex-wrap"
      style={{
        borderBottom: "2px solid var(--rule)",
        background: "rgba(250,251,250,.94)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Link href="/" className="ser navlink mr-auto whitespace-nowrap" style={{ fontSize: 24, border: 0, padding: 0 }}>
        Nafisah Nubah
      </Link>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="navlink whitespace-nowrap"
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
