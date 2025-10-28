import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section"
import { ThemedCard, ThemedCardHeader, ThemedCardTitle, ThemedCardDescription, ThemedCardContent } from "@/components/ui/themed-card"
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
    <Section variant="secondary">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <SectionTitle>Engineering Projects</SectionTitle>
          <SectionDescription>
            Innovative solutions at the intersection of robotics, AI, and automation
          </SectionDescription>
        </SectionHeader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ThemedCard key={index} className="hover:shadow-lg hover:shadow-primary/20 transition-shadow">
              <ThemedCardHeader>
                <div className="mb-2 inline-flex p-3 rounded-lg bg-purple-primary/20 text-purple-primary">
                  <project.icon className="h-6 w-6" />
                </div>
                <ThemedCardTitle className="text-lg">{project.title}</ThemedCardTitle>
                <ThemedCardDescription className="text-xs">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-purple-primary/30 text-purple-primary font-medium">
                    {project.status}
                  </span>
                </ThemedCardDescription>
              </ThemedCardHeader>
              <ThemedCardContent>
                <p className="text-sm text-muted">{project.description}</p>
              </ThemedCardContent>
            </ThemedCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
