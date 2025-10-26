import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Bot, Zap, Cog } from "lucide-react"

export function EngineeringProjects() {
  const projects = [
    {
      icon: Bot,
      title: "Autonomous Robotics",
      description: "Advanced navigation and decision-making systems for autonomous robots",
      status: "In Development",
    },
    {
      icon: Cpu,
      title: "AI Vision Systems",
      description: "Computer vision solutions for industrial quality control and inspection",
      status: "Prototype",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "IoT-enabled automation systems for manufacturing and logistics",
      status: "Active",
    },
    {
      icon: Cog,
      title: "Custom Solutions",
      description: "Tailored engineering projects for specific industry needs",
      status: "Consulting",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Engineering Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Innovative solutions at the intersection of robotics, AI, and automation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/20 transition-shadow bg-gray-800 border-gray-700"
            >
              <CardHeader>
                <div className="mb-2 inline-flex p-3 rounded-lg bg-primary/20 text-primary">
                  <project.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg text-primary">{project.title}</CardTitle>
                <CardDescription className="text-xs">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/30 text-primary font-medium">
                    {project.status}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
