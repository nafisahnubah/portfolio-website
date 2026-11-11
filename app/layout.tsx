import type React from "react"
import type { Metadata } from "next"
import { Newsreader, Caveat, Instrument_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--f-serif",
  style: ["normal", "italic"],
  axes: ["opsz"],
})

const hand = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--f-hand",
  weight: ["500", "700"],
})

const sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--f-sans",
})

export const metadata: Metadata = {
  title: "Nafisah Nubah, Software developer, ML researcher",
  description:
    "Portfolio of Nafisah Nubah, fourth year computer science student at Dalhousie University. Software development, machine learning research, and teaching.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${hand.variable} ${sans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
