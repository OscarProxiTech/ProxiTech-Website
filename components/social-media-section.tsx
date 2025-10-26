import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Linkedin } from "lucide-react"

export function SocialMediaSection() {
  const socialPosts = [
    {
      platform: "Instagram",
      icon: Instagram,
      handle: "@proxitech_edu",
      preview: "/placeholder.svg?height=300&width=300",
      caption: "Amazing workshop with local students building their first robots!",
      likes: "234",
    },
    {
      platform: "YouTube",
      icon: Youtube,
      handle: "ProxiTech Education",
      preview: "/placeholder.svg?height=300&width=300",
      caption: "New tutorial: Programming your first autonomous robot",
      likes: "1.2K",
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      handle: "ProxiTech",
      preview: "/placeholder.svg?height=300&width=300",
      caption: "Congratulations to our competition teams on their recent success!",
      likes: "456",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our latest workshops, student projects, and educational content
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {socialPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.preview || "/placeholder.svg"}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <post.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{post.platform}</p>
                    <p className="text-xs text-muted-foreground">{post.handle}</p>
                  </div>
                </div>
                <p className="text-sm mb-2">{post.caption}</p>
                <p className="text-xs text-muted-foreground">{post.likes} likes</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="gap-2 bg-transparent">
            <Instagram className="h-5 w-5" />
            Instagram
          </Button>
          <Button variant="outline" size="lg" className="gap-2 bg-transparent">
            <Youtube className="h-5 w-5" />
            YouTube
          </Button>
          <Button variant="outline" size="lg" className="gap-2 bg-transparent">
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}
