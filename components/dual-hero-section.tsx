"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

interface DualHeroSectionProps {
  mode: "education" | "engineering"
  setMode: (mode: "education" | "engineering") => void
}

export function DualHeroSection({ mode, setMode }: DualHeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleModeSwitch = (newMode: "education" | "engineering") => {
    if (newMode !== mode) {
      setIsTransitioning(true)
      setTimeout(() => {
        setMode(newMode)
        setIsTransitioning(false)
      }, 300)
    }
  }

  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden pt-16 transition-colors duration-500",
        mode === "engineering" ? "bg-gray-950" : "bg-white",
      )}
    >
      {mode === "engineering" && (
        <div className="absolute inset-0 pointer-events-none">
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
      )}

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`mb-12 flex justify-center gap-8 ${mounted ? "animate-fade-in" : "opacity-0"}`}>
          <Button
            variant={mode === "education" ? "default" : "outline"}
            size="lg"
            onClick={() => handleModeSwitch("education")}
            className={cn(
              "gap-3 transition-all px-8 py-6 text-lg font-semibold min-w-[200px]",
              mode === "education"
                ? "bg-purple-primary hover:bg-purple-primary/90 text-white shadow-lg"
                : mode === "engineering"
                  ? "border-2 border-purple-primary text-purple-primary hover:bg-purple-primary/20 bg-gray-900/50"
                  : "border-2 border-purple-primary text-purple-primary hover:bg-purple-primary/10",
            )}
          >
            <GraduationCap className="h-6 w-6" />
            Education
          </Button>
          <Button
            variant={mode === "engineering" ? "default" : "outline"}
            size="lg"
            onClick={() => handleModeSwitch("engineering")}
            className={cn(
              "gap-3 transition-all px-8 py-6 text-lg font-semibold min-w-[200px]",
              mode === "engineering"
                ? "bg-purple-primary hover:bg-purple-primary/90 text-white shadow-lg"
                : "border-2 border-purple-primary text-purple-primary hover:bg-purple-primary/10",
            )}
          >
            <Wrench className="h-6 w-6" />
            Engineering
          </Button>
        </div>

        <div
          className={cn(
            "mb-8 flex justify-center transition-all duration-500",
            mounted && !isTransitioning ? "animate-fade-in-scale" : "opacity-0",
            isTransitioning && "translate-x-full opacity-0",
          )}
        >
          <Image
            src={
              mode === "engineering"
                ? "/images/branding/proxitech-engineering-dark.png"
                : "/images/branding/proxitech-education.png"
            }
            alt={mode === "engineering" ? "ProxiTech Engineering Development" : "ProxiTech Robotics and A.I. Education"}
            width={600}
            height={200}
            className="h-auto w-full max-w-2xl"
            priority
          />
        </div>

        <h1
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance transition-all duration-500",
            mounted && !isTransitioning ? "animate-fade-in-up animation-delay-500" : "opacity-0",
            isTransitioning && "translate-x-full opacity-0",
            mode === "engineering" ? "text-white" : "text-gray-900",
          )}
        >
          {mode === "education" ? "Empowering Robotics and AI Education" : "Engineering Development & Innovation"}
        </h1>

        <p
          className={cn(
            "text-lg md:text-xl max-w-3xl mx-auto mb-8 text-pretty transition-all duration-500",
            mounted && !isTransitioning ? "animate-fade-in-up animation-delay-500" : "opacity-0",
            isTransitioning && "translate-x-full opacity-0",
            mode === "engineering" ? "text-gray-300" : "text-gray-600",
          )}
          style={{ animationDelay: "0.7s" }}
        >
          {mode === "education"
            ? "ProxiTech bridges technology and learning — bringing robotics, AI, and engineering innovation to classrooms and industries."
            : "Custom engineering solutions, prototyping, and technical development for businesses and innovators."}
        </p>

        <div
          className={cn(
            "flex gap-4 justify-center transition-all duration-500",
            mounted && !isTransitioning ? "animate-fade-in-up animation-delay-500" : "opacity-0",
            isTransitioning && "translate-x-full opacity-0",
          )}
          style={{ animationDelay: "0.9s" }}
        >
          <Link href={mode === "education" ? "/education" : "/engineering"}>
            <Button size="lg" className={cn("group", "bg-purple-primary hover:bg-purple-primary/90 text-white shadow-lg")}>
              {mode === "education" ? "Explore Programs" : "View Projects"}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const contactSection = document.getElementById("contact")
              contactSection?.scrollIntoView({ behavior: "smooth" })
            }}
            className={cn(
              mode === "engineering"
                ? "border-2 border-purple-primary text-purple-primary hover:bg-purple-primary/20 bg-gray-900/50"
                : "border-2 border-purple-primary text-purple-primary hover:bg-purple-primary/10",
            )}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
