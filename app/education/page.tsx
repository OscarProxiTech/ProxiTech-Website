import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, BookOpen, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EducationPage() {
  const programs = [
    {
      icon: Users,
      title: "School Programs",
      description: "Comprehensive robotics curricula designed for K-12 education, aligned with STEM standards.",
      features: ["Age-appropriate lessons", "Teacher training", "Equipment packages", "Ongoing support"],
    },
    {
      icon: Trophy,
      title: "Competition Training",
      description: "Prepare students for robotics competitions with expert coaching and resources.",
      features: ["Competition strategies", "Team building", "Technical skills", "Mentorship"],
    },
    {
      icon: BookOpen,
      title: "Workshops & Camps",
      description: "Intensive hands-on learning experiences during school breaks and special events.",
      features: ["1-5 day programs", "Project-based learning", "Small group sizes", "Take-home projects"],
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description: "Create a makerspace in your school with our complete lab setup and curriculum.",
      features: ["Lab design", "Equipment selection", "Curriculum development", "Staff training"],
    },
  ]

  return (
    <>
      <Navbar mode="education" />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/images/branding/proxitech-education.png"
                alt="ProxiTech Education"
                width={400}
                height={100}
                className="h-20 w-auto mx-auto mb-8"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Inspiring the Next Generation of Innovators
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Our education programs bring robotics and AI to life in the classroom, empowering students with hands-on
                experience and real-world problem-solving skills.
              </p>
              <Link href="/#contact">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Flexible solutions designed to meet the needs of schools, educators, and students
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                      <program.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Classroom?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact us to learn more about bringing ProxiTech education programs to your school.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
