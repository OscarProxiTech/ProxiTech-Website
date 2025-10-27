import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    <section className={cn("py-20", mode === "engineering" ? "bg-gray-900" : "bg-gray-50")}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              mode === "engineering" ? "text-white" : "text-gray-900",
            )}
          >
            About ProxiTech
          </h2>
          <p className={cn("text-lg max-w-2xl mx-auto", mode === "engineering" ? "text-gray-300" : "text-gray-600")}>
            We focus on two core areas: Education and Engineering, bringing cutting-edge technology to learners and
            industries alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card
            className={cn(
              "group hover:shadow-lg transition-shadow",
              mode === "engineering" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
            )}
          >
            <CardHeader>
              <div className="mb-4">
                <Image
                  src={mode === "engineering" ? "/images/branding/proxitech-education-dark.png" : "/images/branding/proxitech-education.png"}
                  alt="ProxiTech Education"
                  width={300}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <CardTitle
                className={cn("flex items-center gap-2", mode === "engineering" ? "text-white" : "text-gray-900")}
              >
                <GraduationCap className="h-6 w-6 text-purple-primary" />
                Education
              </CardTitle>
              <CardDescription className={mode === "engineering" ? "text-gray-400" : "text-gray-600"}>
                Teaching robotics and AI to the next generation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={cn("text-sm mb-4", mode === "engineering" ? "text-gray-300" : "text-gray-600")}>
                We deliver hands-on robotics workshops, school programs, and competition training that inspire students
                to explore STEM fields and develop practical skills.
              </p>
              <Link href="/education">
                <Button
                  variant="outline"
                  className={cn(
                    "w-full transition-colors",
                    mode === "engineering"
                      ? "border-purple-primary text-purple-primary hover:bg-purple-primary/10"
                      : "border-purple-primary text-purple-primary hover:bg-purple-primary/10",
                  )}
                >
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card
            className={cn(
              "group hover:shadow-lg transition-shadow",
              mode === "engineering" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
            )}
          >
            <CardHeader>
              <div className="mb-4">
                <Image
                  src={mode === "engineering" ? "/images/branding/proxitech-engineering-dark.png" : "/images/branding/proxitech-engineering.png"}
                  alt="ProxiTech Engineering"
                  width={300}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <CardTitle
                className={cn("flex items-center gap-2", mode === "engineering" ? "text-white" : "text-gray-900")}
              >
                <Wrench className="h-6 w-6 text-purple-primary" />
                Engineering
              </CardTitle>
              <CardDescription className={mode === "engineering" ? "text-gray-400" : "text-gray-600"}>
                Developing smart systems and innovative solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={cn("text-sm mb-4", mode === "engineering" ? "text-gray-300" : "text-gray-600")}>
                Our engineering team develops cutting-edge robotics systems, AI solutions, and smart automation for
                industries seeking innovation and efficiency.
              </p>
              <Link href="/engineering">
                <Button
                  variant="outline"
                  className={cn(
                    "w-full transition-colors",
                    mode === "engineering"
                      ? "border-purple-primary text-purple-primary hover:bg-purple-primary/10"
                      : "border-purple-primary text-purple-primary hover:bg-purple-primary/10",
                  )}
                >
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
