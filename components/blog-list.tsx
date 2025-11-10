"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/lib/blog-types"

const POSTS_PER_PAGE = 10

interface BlogListProps {
  allPosts: BlogPost[]
}

export function BlogList({ allPosts }: BlogListProps) {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observerTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial load
    setDisplayedPosts(allPosts.slice(0, POSTS_PER_PAGE))
    setHasMore(allPosts.length > POSTS_PER_PAGE)
  }, [allPosts])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setIsLoading(true)
          // Simulate slight delay for smooth loading
          setTimeout(() => {
            const currentCount = displayedPosts.length
            const nextPosts = allPosts.slice(currentCount, currentCount + POSTS_PER_PAGE)
            setDisplayedPosts((prev) => [...prev, ...nextPosts])
            setHasMore(currentCount + POSTS_PER_PAGE < allPosts.length)
            setIsLoading(false)
          }, 300)
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [hasMore, isLoading, displayedPosts.length, allPosts])

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden flex flex-col group hover:shadow-lg hover:shadow-primary/20 transition-all h-full cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.thumbnail || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
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
                  <span className="px-2 py-1 rounded-full bg-purple-primary text-white font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
              </div>
              <div className="p-6 pt-0">
                <Button variant="purple-ghost" className="group/btn p-0 h-auto">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Infinite Scroll Trigger */}
      {hasMore && (
        <div ref={observerTarget} className="py-8 text-center">
          {isLoading && <div className="text-gray-400">Loading more posts...</div>}
        </div>
      )}

      {!hasMore && displayedPosts.length > 0 && (
        <div className="py-8 text-center text-gray-400">
          <p>You've reached the end!</p>
        </div>
      )}
    </>
  )
}

