import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navbar mode="education" setMode={() => {}} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About ProxiTech</h1>
              <p className="text-lg text-muted-foreground">
                Bridging technology and learning to create a future where innovation is accessible to all
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                  <CardDescription>
                    To empower the next generation with hands-on robotics and AI education while delivering innovative
                    engineering solutions that drive technological advancement.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <Eye className="h-6 w-6" />
                  </div>
                  <CardTitle>Our Vision</CardTitle>
                  <CardDescription>
                    A world where every student has access to cutting-edge technology education and where businesses
                    leverage intelligent automation to solve complex challenges.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <CardTitle>Innovation</CardTitle>
                  <CardDescription>
                    We constantly push boundaries and explore new possibilities in robotics, AI, and education.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Accessibility</CardTitle>
                  <CardDescription>
                    Technology education should be available to everyone, regardless of background or experience.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                  <CardDescription>
                    We deliver high-quality solutions and educational experiences that exceed expectations.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  ProxiTech was founded with a simple belief: that the future belongs to those who understand and can
                  work with emerging technologies. We started as a small team of engineers and educators passionate
                  about making robotics and AI accessible to students of all ages.
                </p>
                <p className="text-muted-foreground mb-4">
                  Today, we serve schools and organizations across the region, providing comprehensive STEM education
                  programs while also developing custom engineering solutions for businesses looking to leverage
                  automation and intelligent systems.
                </p>
                <p className="text-muted-foreground">
                  Our dual focus on education and engineering allows us to stay at the forefront of technological
                  innovation while nurturing the next generation of innovators, problem-solvers, and creators.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer mode="education" />
    </>
  )
}
