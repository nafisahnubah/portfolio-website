"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Coffee,
  Heart,
  Sparkles,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    })

    if (res.ok) {
      setIsSubmitted(true)
      form.reset()
    } else {
      alert("Oops! Something went wrong. Please try again.")
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Nafisah.Nubah@dal.ca",
      href: "mailto:Nafisah.Nubah@dal.ca",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Halifax, NS, Canada",
      href: "#",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "nafisahnubah",
      href: "https://github.com/nafisahnubah",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "nafisah-nubah",
      href: "http://www.linkedin.com/in/nafisah-nubah-3a355829b",
      gradient: "from-blue-600 to-blue-800",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-bounce">
              <MessageCircle className="w-4 h-4" />
              Let's Connect!
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'd love to hear from you! Whether you have a project in mind, want
              to collaborate, or just want to say hello, feel free to reach out.
            </p>

            <div className="flex items-center justify-center gap-2 text-muted-foreground animate-pulse">
              <Coffee className="w-5 h-5" />
              <span>Always up for a good conversation over coffee!</span>
              <Heart className="w-5 h-5 text-red-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <Card className="p-8 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-primary" />
                      Send me a message
                    </h2>
                    <p className="text-muted-foreground">
                      I'll get back to you as soon as possible. Looking forward
                      to hearing from you!
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-12 space-y-4 animate-in zoom-in duration-500">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thanks for reaching out! I'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form
                      action="https://formspree.io/f/xldwjgqj"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={`transition-all duration-300 ${
                              focusedField === "name"
                                ? "ring-2 ring-primary/50 scale-105"
                                : ""
                            }`}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={`transition-all duration-300 ${
                              focusedField === "email"
                                ? "ring-2 ring-primary/50 scale-105"
                                : ""
                            }`}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          className={`transition-all duration-300 ${
                            focusedField === "subject"
                              ? "ring-2 ring-primary/50 scale-105"
                              : ""
                          }`}
                          placeholder="What's this about?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className={`min-h-32 transition-all duration-300 ${
                            focusedField === "message"
                              ? "ring-2 ring-primary/50 scale-105"
                              : ""
                          }`}
                          placeholder="Tell me about your project, idea, or just say hello!"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group hover:scale-105 transition-all duration-300"
                      >
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </Card>
            </div>

            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Feel free to reach out through any of these channels. I'm
                  always excited to connect with fellow developers, potential
                  collaborators, or anyone interested in technology!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className={`p-4 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in slide-in-from-right-5 duration-700`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Link
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : "_self"}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.label}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-card/30 to-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to start something amazing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether it's a new project, collaboration opportunity, or just a
              friendly chat about technology, I'm always excited to connect with
              like-minded people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="hover:scale-105 transition-all duration-300"
              >
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/experience">My Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
