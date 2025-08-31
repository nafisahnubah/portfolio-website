"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, Database, Globe, Sparkles, Github, Linkedin, Mail, Heart, Smile, BarChart, Book, Zap, Award, Activity } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentEmoji, setCurrentEmoji] = useState(0)
  const fullText = "Exploring technology, data, and meaningful projects"
  const emojis = ["🚀", "✨", "💻", "🎯", "🌟"]

  useEffect(() => {
    setIsVisible(true)

    let index = 0
    const typeTimer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeTimer)
      }
    }, 100)

    const emojiTimer = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % emojis.length)
    }, 2000)

    return () => {
      clearInterval(typeTimer)
      clearInterval(emojiTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static geometric shapes for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/8 rounded-full" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/8 rotate-45" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/8 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/5 rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-secondary/6 rotate-45" />
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-accent/7 rounded-full" />
        <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-primary/6 rotate-45" />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-secondary/8 rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-bounce hover:animate-pulse transition-all cursor-pointer hover:scale-105">
              {/* <span className="text-lg animate-spin" style={{ animationDuration: "2s" }}>
                {emojis[currentEmoji]}
              </span> */}
              <Smile className="w-4 h-4" />
              Hi there!
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="block animate-in slide-in-from-left-10 duration-700 hover:animate-pulse cursor-default">
                Nafisah
              </span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-in slide-in-from-right-10 duration-700 delay-300 bg-[length:200%_100%] hover:animate-bounce cursor-default">
                Nubah
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-500">
                <span className="text-primary font-semibold">{typedText}</span>
                <span className="animate-pulse">|</span>
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in duration-1000 delay-700">
                Computer Science Student | {" "}
                <span className="text-primary font-semibold hover:text-secondary transition-colors cursor-pointer hover:animate-pulse">
                  Dalhousie University
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-in slide-in-from-bottom-5 duration-1000 delay-1000">
              <Button
                asChild
                size="lg"
                className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:rotate-1"
              >
                <Link href="/experience">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 hover:bg-primary/5 bg-transparent hover:-rotate-1"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex justify-center gap-6 pt-8 animate-in fade-in duration-1000 delay-1200">
              <Link
                href="https://github.com/nafisahnubah"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group hover:rotate-12"
                target="_blank"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="http://www.linkedin.com/in/nafisah-nubah-3a355829b"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group hover:-rotate-12"
                target="_blank"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="mailto:Nafisah.Nubah@dal.ca"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group hover:rotate-12"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 animate-in fade-in duration-1000 hover:animate-pulse cursor-default flex justify-center items-center gap-2">
            What I Do
            <Sparkles className="w-6 h-6 font-extrabold text-yellow-700" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Full-Stack & Web Development",
                description: "React.js, Node.js, Python, Java - Building responsive, accessible, and interactive web applications",
                color: "from-primary to-secondary",
                emoji: "💻",
              },
              {
                icon: Database,
                title: "Cloud & Data Solutions",
                description: "AWS, Azure, Firebase, MongoDB, MySQL - Scalable cloud architectures and data management",
                color: "from-secondary to-accent",
                emoji: "☁️",
              },
              {
                icon: Sparkles,
                title: "Teaching & Mentorship",
                description: "Instructor, TA, and workshop experience simplifying complex CS concepts for students",
                color: "from-yellow-400 to-yellow-600",
                emoji: "🎓",
              },
              {
                icon: Activity,
                title: "Machine Learning & Analytics",
                description: "Machine learning and data analysis research and projects, including fMRI and performance analytics",
                color: "from-green-400 to-green-600",
                emoji: "🔬",
              }

            ].map((item, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:rotate-2 cursor-pointer group border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    {/* <span className="text-2xl group-hover:animate-bounce">{item.emoji}</span> */}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-card/30 to-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 animate-in fade-in duration-1000 hover:animate-pulse cursor-default flex justify-center items-center gap-2">
            Quick Stats
            <BarChart className="w-8 h-8 font-extrabold text-teal-700" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Projects Built", color: "text-primary", icon: <BarChart className="w-8 h-8" /> },
              { number: "2+", label: "Years Learning", color: "text-secondary", icon: <Book className="w-8 h-8" /> },
              { number: "5+", label: "Technologies", color: "text-accent", icon: <Zap className="w-8 h-8" /> },
              { number: "4", label: "Certifications", color: "text-primary", icon: <Award className="w-8 h-8" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className={`space-y-2 hover:scale-110 transition-transform duration-300 cursor-pointer animate-in zoom-in duration-700 hover:-rotate-3 group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* <div className="text-3xl group-hover:animate-bounce">{stat.icon}</div> */}
                <div className={`text-4xl font-bold ${stat.color} hover:animate-pulse`}>{stat.number}</div>
                <div className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 backdrop-blur-sm border border-primary/20 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              {/* <div className="flex gap-2 text-3xl">
                <span className="animate-bounce" style={{ animationDelay: "0s" }}>
                  🤝
                </span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                  ✨
                </span>
                <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                  💡
                </span>
              </div> */}
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-in fade-in duration-1000 hover:animate-pulse cursor-default">
              Get in Touch!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-in fade-in duration-1000 delay-200">
              I’m always excited to explore new ideas, share knowledge, and create meaningful experiences. Let’s connect, collaborate, or just exchange thoughts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-5 duration-1000 delay-400">
              <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 hover:rotate-1 group">
                <Link href="/experience">
                  Explore My Work
                  <Sparkles className="ml-2 w-4 h-4 group-hover:animate-spin" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-transparent hover:-rotate-1 group"
              >
                <Link href="/contact">
                  Let's Connect
                  <Heart className="ml-2 w-4 h-4 group-hover:animate-pulse text-red-500" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
