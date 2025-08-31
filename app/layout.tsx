import type React from "react"
import type { Metadata } from "next"
import { Poppins, Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { LoadingScreen } from "@/components/loading-screen"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Nafisah Nubah - Portfolio",
  description: "Computer Science Student at Dalhousie University",
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
      <body className={`font-sans ${nunito.variable} ${poppins.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <LoadingScreen />
          <Navigation />
          <main className="pt-16 min-h-screen">{children}</main>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
