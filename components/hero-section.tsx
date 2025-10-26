"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Particle Background (Dark Mode Only) */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo Animation */}
        <div className={`mb-8 flex justify-center ${mounted ? "animate-fade-in-scale" : "opacity-0"}`}>
          <Image
            src="/images/design-mode/ProxiTech%20Icon.png"
            alt="ProxiTech Icon"
            width={120}
            height={120}
            className="dark:hidden"
            priority
          />
          <Image
            src="/images/design-mode/ProxiTech%20Icon%20Dark.png"
            alt="ProxiTech Icon"
            width={120}
            height={120}
            className="hidden dark:block"
            priority
          />
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance ${mounted ? "animate-fade-in-up animation-delay-500" : "opacity-0"}`}
        >
          Empowering Robotics and AI Education
        </h1>

        {/* Subtext */}
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty ${mounted ? "animate-fade-in-up animation-delay-500" : "opacity-0"}`}
          style={{ animationDelay: "0.7s" }}
        >
          ProxiTech bridges technology and learning — bringing robotics, AI, and engineering innovation to classrooms
          and industries.
        </p>

        {/* CTA Button */}
        <div
          className={`${mounted ? "animate-fade-in-up animation-delay-500" : "opacity-0"}`}
          style={{ animationDelay: "0.9s" }}
        >
          <Button size="lg" onClick={scrollToContact} className="group">
            Book a Workshop
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
