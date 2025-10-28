import { ThemedCard, ThemedCardHeader, ThemedCardTitle, ThemedCardDescription, ThemedCardContent } from "@/components/ui/themed-card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AboutSectionProps {
  mode: "education" | "engineering"
}

export function AboutSection({ mode }: AboutSectionProps) {
  return (
    <section className="py-20 bg-section-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
            About ProxiTech
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-subheading">
            We focus on two core areas: Education and Engineering, bringing cutting-edge technology to learners and
            industries alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ThemedCard mode={mode}>
            <ThemedCardHeader>
              <div className="mb-4">
                <Image
                  src={mode === "engineering" ? "/images/branding/proxitech-education-dark.png" : "/images/branding/proxitech-education.png"}
                  alt="ProxiTech Education"
                  width={300}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <ThemedCardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-purple-primary" />
                Education
              </ThemedCardTitle>
              <ThemedCardDescription>
                Teaching robotics and AI to the next generation
              </ThemedCardDescription>
            </ThemedCardHeader>
            <ThemedCardContent>
              <p className="text-sm mb-4 text-body">
                We deliver hands-on robotics workshops, school programs, and competition training that inspire students
                to explore STEM fields and develop practical skills.
              </p>
              <Link href="/education">
                <Button variant="purple-outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </ThemedCardContent>
          </ThemedCard>

          <ThemedCard mode={mode}>
            <ThemedCardHeader>
              <div className="mb-4">
                <Image
                  src={mode === "engineering" ? "/images/branding/proxitech-engineering-dark.png" : "/images/branding/proxitech-engineering.png"}
                  alt="ProxiTech Engineering"
                  width={300}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <ThemedCardTitle className="flex items-center gap-2">
                <Wrench className="h-6 w-6 text-purple-primary" />
                Engineering
              </ThemedCardTitle>
              <ThemedCardDescription>
                Developing smart systems and innovative solutions
              </ThemedCardDescription>
            </ThemedCardHeader>
            <ThemedCardContent>
              <p className="text-sm mb-4 text-body">
                Our engineering team develops cutting-edge robotics systems, AI solutions, and smart automation for
                industries seeking innovation and efficiency.
              </p>
              <Link href="/engineering">
                <Button variant="purple-outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </ThemedCardContent>
          </ThemedCard>
        </div>
      </div>
    </section>
  )
}
