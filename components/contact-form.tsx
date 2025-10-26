"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface ContactFormProps {
  mode: "education" | "engineering"
}

export function ContactForm({ mode }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Thanks for reaching out!",
      description: "We'll be in touch soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className={`py-20 ${mode === "engineering" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className={mode === "engineering" ? "bg-gray-800 border-gray-700" : ""}>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary">Let's Collaborate</CardTitle>
              <CardDescription className={mode === "engineering" ? "text-gray-400" : ""}>
                Have a question or want to work together? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className={mode === "engineering" ? "text-gray-300" : ""}>
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={
                      mode === "engineering"
                        ? "bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500"
                        : ""
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={mode === "engineering" ? "text-gray-300" : ""}>
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={
                      mode === "engineering"
                        ? "bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500"
                        : ""
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={mode === "engineering" ? "text-gray-300" : ""}>
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className={
                      mode === "engineering"
                        ? "bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500"
                        : ""
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
