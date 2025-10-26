import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Cpu, Zap, Cog, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EngineeringPage() {
  const services = [
    {
      icon: Bot,
      title: "Autonomous Robotics",
      description:
        "Design and development of autonomous navigation systems, path planning algorithms, and decision-making frameworks.",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Computer vision, object detection, predictive analytics, and intelligent automation solutions.",
    },
    {
      icon: Zap,
      title: "IoT & Automation",
      description: "Smart sensor networks, industrial automation, and connected device ecosystems.",
    },
    {
      icon: Cog,
      title: "Custom Development",
      description: "Tailored engineering solutions for unique challenges in manufacturing, logistics, and beyond.",
    },
  ]

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar mode="engineering" />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/20 to-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProxiTech%20Engineering%20Dark-emMZJBW5kmtkg6HoechOs4pVTPo2rk.png"
                alt="ProxiTech Engineering"
                width={400}
                height={100}
                className="h-20 w-auto mx-auto mb-8"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-primary">
                Engineering the Future of Automation
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-pretty">
                We develop cutting-edge robotics systems, AI solutions, and smart automation technologies that drive
                innovation and efficiency across industries.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Services</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Comprehensive engineering solutions from concept to deployment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/20 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-gray-400">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Process</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From initial consultation to final deployment, we work closely with you every step of the way
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Discovery", description: "Understanding your needs and challenges" },
                { step: "02", title: "Design", description: "Creating tailored solutions and prototypes" },
                { step: "03", title: "Development", description: "Building and testing your system" },
                { step: "04", title: "Deployment", description: "Implementation and ongoing support" },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary/30 mb-4">{phase.step}</div>
                  <h3 className="font-semibold mb-2 text-primary">{phase.title}</h3>
                  <p className="text-sm text-gray-400">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Let's Build Something Amazing</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              Partner with ProxiTech to bring your engineering vision to life.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-6">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer mode="engineering" />
    </div>
  )
}
