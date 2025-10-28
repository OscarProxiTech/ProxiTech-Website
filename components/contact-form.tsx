"use client"

import type React from "react"

import { useState } from "react"
import { ThemedCard, ThemedCardHeader, ThemedCardTitle, ThemedCardDescription, ThemedCardContent } from "@/components/ui/themed-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

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
    <section id="contact" className="py-20 bg-section-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <ThemedCard mode={mode}>
            <ThemedCardHeader className="text-center">
              <ThemedCardTitle className="text-3xl">Let's Collaborate</ThemedCardTitle>
              <ThemedCardDescription>
                Have a question or want to work together? We'd love to hear from you.
              </ThemedCardDescription>
            </ThemedCardHeader>
            <ThemedCardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="label-themed">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="input-themed"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="label-themed">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="input-themed"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="label-themed">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="input-themed"
                  />
                </div>

                <Button
                  type="submit"
                  variant="purple-solid"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </ThemedCardContent>
          </ThemedCard>
        </div>
      </div>
    </section>
  )
}
