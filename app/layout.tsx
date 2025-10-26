import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ProxiTech - Robotics and AI Education",
  description:
    "Empowering Robotics and AI Education. ProxiTech bridges technology and learning — bringing robotics, AI, and engineering innovation to classrooms and industries.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon-dark.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: "ProxiTech - Robotics and AI Education",
    description:
      "Empowering Robotics and AI Education. ProxiTech bridges technology and learning — bringing robotics, AI, and engineering innovation to classrooms and industries.",
    type: "website",
    url: "https://www.proxitech.com.au",
    siteName: "ProxiTech",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
