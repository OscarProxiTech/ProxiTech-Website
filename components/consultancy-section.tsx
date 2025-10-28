import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section"
import { ThemedCard, ThemedCardHeader, ThemedCardTitle, ThemedCardDescription, ThemedCardContent } from "@/components/ui/themed-card"
import { Button } from "@/components/ui/button"
import { Briefcase, Target, Rocket, Users } from "lucide-react"

export function ConsultancySection() {
  const services = [
    {
      icon: Target,
      title: "Technical Assessment",
      description: "Comprehensive evaluation of your automation and robotics needs",
      features: ["System analysis", "Feasibility studies", "ROI projections"],
    },
    {
      icon: Rocket,
      title: "Solution Design",
      description: "Custom engineering solutions tailored to your specific requirements",
      features: ["Prototype development", "System integration", "Performance optimization"],
    },
    {
      icon: Briefcase,
      title: "Implementation",
      description: "End-to-end project management and deployment support",
      features: ["Project planning", "Installation", "Testing & validation"],
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Comprehensive training and ongoing technical support",
      features: ["Staff training", "Documentation", "Maintenance plans"],
    },
  ]

  return (
    <Section variant="primary">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <SectionTitle>Engineering Consultancy</SectionTitle>
          <SectionDescription>
            Expert guidance for your robotics and automation projects from concept to deployment
          </SectionDescription>
        </SectionHeader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <ThemedCard key={index} className="hover:shadow-lg hover:shadow-primary/20 transition-all">
              <ThemedCardHeader>
                <div className="mb-2 inline-flex p-3 rounded-lg bg-purple-primary/20 text-purple-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <ThemedCardTitle className="text-lg">{service.title}</ThemedCardTitle>
                <ThemedCardDescription className="text-muted">{service.description}</ThemedCardDescription>
              </ThemedCardHeader>
              <ThemedCardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </ThemedCardContent>
            </ThemedCard>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="purple-solid">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </Section>
  )
}
