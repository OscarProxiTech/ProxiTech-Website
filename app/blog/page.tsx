import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogList } from "@/components/blog-list"
import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {
  const allPosts = getAllPosts()

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
            <BlogList allPosts={allPosts} />
          </div>
        </section>
      </main>
      <Footer mode="engineering" />
    </div>
  )
}
