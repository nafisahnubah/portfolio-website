import type React from "react"
import type { Metadata } from "next"
import { Archivo, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"
import "./globals.css"
import { Footer } from "@/components/footer"

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["400", "500", "600", "800"],
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Nafisah Nubah, Software developer, ML researcher",
  description:
    "Portfolio of Nafisah Nubah, fourth year computer science student at Dalhousie University. Software development, machine learning research, and teaching.",
  generator: "v0.app",
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
    <html lang="en">
      <body className={`${archivo.variable} ${instrumentSerif.variable} antialiased`}>
        <Suspense fallback={null}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
