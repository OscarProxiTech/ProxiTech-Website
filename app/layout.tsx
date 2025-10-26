import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.proxitech.com.au'),
  title: "ProxiTech - Robotics and AI Education",
  description:
    "Empowering Robotics and AI Education. ProxiTech bridges technology and learning — bringing robotics, AI, and engineering innovation to classrooms and industries.",
  generator: "v0.app",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "ProxiTech - Robotics and AI Education",
    description:
      "Empowering Robotics and AI Education. ProxiTech bridges technology and learning — bringing robotics, AI, and engineering innovation to classrooms and industries.",
    type: "website",
    url: "https://www.proxitech.com.au",
    siteName: "ProxiTech",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 1200,
        alt: 'ProxiTech Icon',
      },
    ],
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
