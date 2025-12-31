"use client"

import { ThemeWrapper } from "@/components/theme-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function StorePage() {
  return (
    <ThemeWrapper>
      <Navbar />
      <main className="min-h-screen pt-20">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-heading">Store</h1>
            <p className="text-lg text-subheading">Page content coming soon.</p>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeWrapper>
  )
}

