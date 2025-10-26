import { Card, CardContent } from "@/components/ui/card"
import { Users, Trophy, BookOpen, Lightbulb } from "lucide-react"

export function EducationHighlights() {
  const highlights = [
    {
      icon: Users,
      title: "School Programs",
      description: "Comprehensive robotics curricula designed for K-12 education",
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Training and support for robotics competitions and challenges",
    },
    {
      icon: BookOpen,
      title: "Workshops",
      description: "Hands-on immersion days and intensive learning experiences",
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description: "Project-based learning environments for creative exploration",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering students with hands-on robotics and AI learning experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <highlight.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
