"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { DualHeroSection } from "@/components/dual-hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationHighlights } from "@/components/education-highlights"
import { PartnersSection } from "@/components/partners-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { ConsultancySection } from "@/components/consultancy-section"
import { EngineeringProjects } from "@/components/engineering-projects"
// Blog highlights will be fetched server-side via the wrapper component
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function HomePage() {
  const [mode, setMode] = useState<"education" | "engineering">("education")

  return (
    <div className={mode === "engineering" ? "dark" : ""}>
      <Navbar mode={mode} setMode={setMode} />
      <main>
        <DualHeroSection mode={mode} setMode={setMode} />
        <AboutSection mode={mode} />

        {mode === "education" ? (
          <>
            <EducationHighlights />
            <PartnersSection />
            <SocialMediaSection />
          </>
        ) : (
          <>
            <ConsultancySection />
            <EngineeringProjects />
            {/* Blog highlights - temporarily disabled due to server component constraints */}
          </>
        )}

        <ContactForm mode={mode} />
      </main>
      <Footer mode={mode} />
      <Toaster />
    </div>
  )
}
