import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getPostBySlug, getPostSlugs, BlogPost } from "@/lib/blog"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar mode="engineering" />
      <main>
        {/* Hero Section with Thumbnail */}
        <section className="pt-32 pb-8 bg-gradient-to-b from-purple-primary/20 to-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog">
                <Button variant="purple-ghost" className="mb-8 group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </Button>
              </Link>

              {post.thumbnail && (
                <div className="mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              )}

              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-primary text-white font-medium">
                  {post.category}
                </span>
                {post.author && <span className="text-gray-300">By {post.author}</span>}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{post.title}</h1>
              {post.excerpt && <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>}

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-0">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-purple-primary text-white text-sm flex items-center gap-1"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="pt-0 pb-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.htmlContent }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer mode="engineering" />
    </div>
  )
}

