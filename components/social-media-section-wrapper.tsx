"use client"

import { useEffect, useState } from "react"
import { SocialMediaSection } from "@/components/social-media-section"
import { siteLinks } from "@/lib/site-links"
import type { SocialPostsData } from "@/lib/social-posts-data"

/**
 * Wrapper component for SocialMediaSection
 * Loads build-time generated social posts data from JSON file
 */
export function SocialMediaSectionWrapper() {
  const [postsData, setPostsData] = useState<SocialPostsData | null>(null)

  useEffect(() => {
    // Load social posts data from public JSON file (generated at build time)
    fetch("/social-posts.json")
      .then((res) => res.json())
      .then((data: SocialPostsData) => setPostsData(data))
      .catch(() => {
        // Silently fail - will use default URLs
        setPostsData(null)
      })
  }, [])

  const socialPosts = [
    {
      platform: "instagram" as const,
      handle: "@proxitechaus",
      url: postsData?.instagram?.url || siteLinks.social.instagram,
      caption: postsData?.instagram?.title || "Latest updates from our workshops and events",
    },
    {
      platform: "youtube" as const,
      handle: "ProxiTech",
      url: postsData?.youtube?.url || siteLinks.social.youtube,
      caption: postsData?.youtube?.title || "Tutorials and educational content",
    },
    {
      platform: "linkedin" as const,
      handle: "ProxiTech",
      url: postsData?.linkedin?.url || siteLinks.social.linkedin,
      caption: postsData?.linkedin?.title || "Industry insights and company updates",
    },
  ]

  return <SocialMediaSection posts={socialPosts} />
}

