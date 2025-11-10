import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section"
import { ThemedCard, ThemedCardHeader, ThemedCardTitle, ThemedCardDescription, ThemedCardContent } from "@/components/ui/themed-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/lib/blog-types"

interface BlogHighlightsProps {
  posts: BlogPost[]
}

export function BlogHighlights({ posts }: BlogHighlightsProps) {

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
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <ThemedCard className="hover:shadow-lg hover:shadow-primary/20 transition-shadow overflow-hidden h-full cursor-pointer group">
              <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.thumbnail || "/placeholder.svg"}
                  alt={post.title}
                    width={400}
                    height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
                <ThemedCardHeader>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
                  <ThemedCardTitle className="text-lg group-hover:text-gray-300 transition-colors">
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
            </Link>
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
