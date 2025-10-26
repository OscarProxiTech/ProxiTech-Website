import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Robotics Workshop 2024",
      description: "Students building their first autonomous robots",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "AI Competition Finals",
      description: "Teams competing in the annual AI challenge",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "STEM Fair Showcase",
      description: "Displaying innovative student projects",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Coding Bootcamp",
      description: "Learning Python for robotics control",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "3D Printing Lab",
      description: "Designing and printing custom robot parts",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Drone Programming",
      description: "Students programming autonomous drones",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <>
      <Navbar mode="education" />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Education Gallery</h1>
              <p className="text-lg text-muted-foreground">Explore our programs, workshops, and student achievements</p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer mode="education" />
    </>
  )
}
