"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Linkedin, Calendar } from "lucide-react"
import { siteLinks } from "@/lib/site-links"
import { EmbeddedPost } from "@/components/ui/embedded-post"

interface SocialPost {
  platform: "instagram" | "linkedin" | "youtube"
  handle: string
  url: string
  caption?: string
}

interface SocialMediaSectionProps {
  posts: SocialPost[]
}

const platformIcons = {
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
}

export function SocialMediaSection({ posts }: SocialMediaSectionProps) {

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our latest workshops, student projects, and educational content
          </p>
        </div>

        {/* Embedded Posts */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {posts.map((post, index) => {
            const Icon = platformIcons[post.platform]
            return (
              <Card key={index} className="overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm capitalize">{post.platform}</p>
                      <p className="text-xs text-muted-foreground">{post.handle}</p>
                    </div>
                  </div>
                  <EmbeddedPost platform={post.platform} url={post.url} className="w-full" />
                  {post.caption && (
                    <p className="text-sm text-muted-foreground mt-4">{post.caption}</p>
                  )}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a href={siteLinks.social.instagram} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Instagram className="h-5 w-5" />
              Instagram
            </Button>
          </a>
          <a href={siteLinks.social.youtube} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Youtube className="h-5 w-5" />
              YouTube
            </Button>
          </a>
          <a href={siteLinks.social.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
          </a>
          <a href={siteLinks.events.humanitix} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Calendar className="h-5 w-5" />
              Events
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
