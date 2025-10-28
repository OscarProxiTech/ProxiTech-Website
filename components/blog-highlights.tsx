import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section"
import { ThemedCard, ThemedCardHeader, ThemedCardTitle, ThemedCardDescription, ThemedCardContent } from "@/components/ui/themed-card"
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
    <Section variant="primary">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <SectionTitle>Latest from Our Blog</SectionTitle>
          <SectionDescription>
            Insights, tutorials, and updates from the world of robotics and AI
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {posts.map((post, index) => (
            <ThemedCard key={index} className="hover:shadow-lg hover:shadow-primary/20 transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <ThemedCardHeader>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
                <ThemedCardTitle className="text-lg group-hover:text-purple-primary/80 transition-colors">
                  {post.title}
                </ThemedCardTitle>
                <ThemedCardDescription>{post.excerpt}</ThemedCardDescription>
              </ThemedCardHeader>
              <ThemedCardContent>
                <Button variant="purple-ghost" className="group/btn p-0 h-auto">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </ThemedCardContent>
            </ThemedCard>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button variant="purple-outline" size="lg">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}
