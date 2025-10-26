import { Card, CardContent } from "@/components/ui/card"

export function PartnersSection() {
  const partners = [
    {
      name: "Tech University",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Leading STEM education partner",
    },
    {
      name: "Innovation District",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Community maker space collaboration",
    },
    {
      name: "Robotics Alliance",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Competition and training support",
    },
    {
      name: "Education Foundation",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Curriculum development partner",
    },
    {
      name: "STEM Network",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Regional education network",
    },
    {
      name: "Tech Institute",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Professional development partner",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborating with leading organizations to advance robotics and AI education
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-lg hover:border-primary/50 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 h-20 flex items-center justify-center">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="font-semibold mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
