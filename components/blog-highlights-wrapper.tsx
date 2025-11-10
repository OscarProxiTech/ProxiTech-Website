import { BlogHighlights } from "@/components/blog-highlights"
import { getAllPosts } from "@/lib/blog"

export function BlogHighlightsWrapper() {
  const allPosts = getAllPosts()
  const posts = allPosts.slice(0, 3)
  
  return <BlogHighlights posts={posts} />
}

