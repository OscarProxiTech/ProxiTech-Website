import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function BlogHighlights() {
  const posts = [
    {
      title: "Getting Started with Robotics in the Classroom",
      excerpt: "A comprehensive guide for educators looking to introduce robotics to their students.",
      date: "2025-10-15",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "The Future of AI in Education",
      excerpt: "Exploring how artificial intelligence is transforming learning experiences.",
      date: "2025-10-08",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Building Your First Autonomous Robot",
      excerpt: "Step-by-step tutorial for creating a simple autonomous navigation system.",
      date: "2025-10-01",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Latest from Our Blog</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and updates from the world of robotics and AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/20 transition-shadow overflow-hidden border-gray-700 bg-gray-900"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
                <CardTitle className="text-lg group-hover:text-primary/80 transition-colors text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-400">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-700 text-primary hover:bg-gray-800 hover:text-primary/80 bg-transparent"
            >
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
