import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "Getting Started with Robotics in the Classroom",
      excerpt: "A comprehensive guide for educators looking to introduce robotics to their students.",
      date: "2025-10-15",
      category: "Education",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "The Future of AI in Education",
      excerpt: "Exploring how artificial intelligence is transforming learning experiences.",
      date: "2025-10-08",
      category: "AI",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Building Your First Autonomous Robot",
      excerpt: "Step-by-step tutorial for creating a simple autonomous navigation system.",
      date: "2025-10-01",
      category: "Engineering",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "STEM Education Trends for 2025",
      excerpt: "Key trends shaping the future of science, technology, engineering, and math education.",
      date: "2025-09-24",
      category: "Education",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Computer Vision Applications in Industry",
      excerpt: "How computer vision is revolutionizing quality control and automation.",
      date: "2025-09-17",
      category: "Engineering",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Preparing Students for Robotics Competitions",
      excerpt: "Tips and strategies for coaching successful robotics competition teams.",
      date: "2025-09-10",
      category: "Education",
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar mode="engineering" setMode={() => {}} />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/20 to-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">ProxiTech Blog</h1>
              <p className="text-lg text-gray-400">
                Insights, tutorials, and updates from the world of robotics and AI
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:border-primary group hover:shadow-lg hover:shadow-primary/20 transition-all overflow-hidden flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <span className="px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-primary group-hover:text-primary/80 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer mode="engineering" />
    </div>
  )
}
