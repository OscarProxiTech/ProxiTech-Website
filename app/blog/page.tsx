import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
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
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar mode="engineering" />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-purple-primary/20 to-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">ProxiTech Blog</h1>
              <p className="text-lg text-gray-300">
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
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden flex flex-col group hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <span className="px-2 py-1 rounded-full bg-purple-primary/20 text-purple-primary font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-primary/80 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <Button
                      variant="purple-ghost"
                      className="group/btn p-0 h-auto"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer mode="engineering" />
    </div>
  )
}
