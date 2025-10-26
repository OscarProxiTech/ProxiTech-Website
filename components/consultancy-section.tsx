import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Engineering Consultancy</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Expert guidance for your robotics and automation projects from concept to deployment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/20 transition-all border-gray-700 bg-gray-900"
            >
              <CardHeader>
                <div className="mb-2 inline-flex p-3 rounded-lg bg-primary/20 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
