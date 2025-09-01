"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nafisah-nubah-3a355829b",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/nafisahnubah",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:Nafisah.Nubah@dal.ca",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nafisah Nubah. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
