"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Code, Users, Brain, Calendar, MapPin, ChevronRight, Award } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const experiences = [
  {
    id: 1,
    title: "Student Researcher",
    company: "Dalhousie Machine Learning Society",
    location: "Halifax, NS",
    period: "Present",
    status: "Current",
    type: "Research",
    description:
      "Contributing to an ongoing research project under Dr. Carlos R. Hernandez Castillo involving fMRI data analysis using machine learning to uncover biomarkers for diseases.",
    responsibilities: [
      "Collaborating with fellow researchers to explore advanced machine learning techniques for neuroscience data",
      "Analyzing fMRI data to identify potential disease biomarkers",
      "Contributing to research publications and presentations",
    ],
    skills: ["Machine Learning", "fMRI Data Analysis", "Research", "Neuroscience", "Python"],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Instructor",
    company: "SuperNOVA at Dalhousie University",
    location: "Halifax, NS",
    period: "Present",
    status: "Current",
    type: "Education",
    description:
      "Delivering Computer Science camps to youth, simplifying complex coding concepts through hands-on activities.",
    responsibilities: [
      "Teaching programming concepts to young students through engaging activities",
      "Providing mentorship and guidance to students with varying skill levels",
      "Adapting instruction methods to suit different learning styles",
    ],
    skills: ["Teaching", "Mentorship", "Communication", "Programming", "Youth Education"],
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Teaching Assistant and Marker",
    company: "Dalhousie University (CSCI 1170)",
    location: "Halifax, NS",
    period: "2025",
    status: "Completed",
    type: "Education",
    description:
      "Conducted lab classes and provided technical support for web development courses, helping students master HTML, CSS, and JavaScript.",
    responsibilities: [
      "Conducted lab classes providing clear instructions for web development concepts",
      "Assisted students with technical questions related to HTML, CSS, JS, and web concepts",
      "Graded assignments and provided constructive feedback to improve student learning",
    ],
    skills: ["Web Development", "HTML", "CSS", "JavaScript", "Teaching", "Assessment"],
    icon: Code,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Software Developer (Internal)",
    company: "Student Accessibility Centre, Dalhousie University",
    location: "Halifax, NS",
    period: "2025",
    status: "Completed",
    type: "Development",
    description:
      "Developed a Java application to automate the sorting of scheduled exams, enhancing operational efficiency.",
    responsibilities: [
      "Designed and implemented Java application for exam scheduling automation",
      "Collaborated with team members to design and implement new features",
      "Improved operational efficiency through automated processes",
    ],
    skills: ["Java", "Software Development", "Automation", "Team Collaboration", "Problem Solving"],
    icon: Briefcase,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Invigilator",
    company: "Student Accessibility Centre, Dalhousie University",
    location: "Halifax, NS",
    period: "Present",
    status: "Current",
    type: "Support",
    description:
      "Proctored up to 15 exams in a fast-paced environment for students with accommodations, ensuring adherence to approved needs.",
    responsibilities: [
      "Proctored multiple exams simultaneously in fast-paced environment",
      "Ensured adherence to accommodation requirements for students with special needs",
      "Collaborated with fellow invigilators to maintain smooth operations",
      "Liaised with professors to resolve time-sensitive concerns",
    ],
    skills: ["Time Management", "Attention to Detail", "Communication", "Multitasking", "Student Support"],
    icon: GraduationCap,
    gradient: "from-indigo-500 to-purple-500",
  },
]

const typeColors = {
  Research: "bg-purple-100 text-purple-800 border-purple-200",
  Education: "bg-blue-100 text-blue-800 border-blue-200",
  Development: "bg-green-100 text-green-800 border-green-200",
  Support: "bg-orange-100 text-orange-800 border-orange-200",
}

export default function ExperiencePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Briefcase className="w-4 h-4" />
              Professional Journey
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Work{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Experience
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My professional journey through research, education, and software development at Dalhousie University and
              beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${experience.gradient} rounded-full border-4 border-background shadow-lg z-10 transition-transform duration-300 hover:scale-125`}
                  />

                  {/* Experience Card */}
                  <div className="ml-20">
                    <Card
                      className={`p-6 hover:shadow-xl transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm ${
                        selectedExperience === experience.id ? "ring-2 ring-primary/50 shadow-2xl" : ""
                      }`}
                      onClick={() => setSelectedExperience(selectedExperience === experience.id ? null : experience.id)}
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 bg-gradient-to-r ${experience.gradient} rounded-lg flex items-center justify-center`}
                              >
                                <experience.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
                                <p className="text-primary font-medium">{experience.company}</p>
                              </div>
                            </div>
                          </div>

                          <div className="text-right space-y-2">
                            <Badge
                              variant={experience.status === "Current" ? "default" : "secondary"}
                              className={experience.status === "Current" ? "animate-pulse" : ""}
                            >
                              {experience.status}
                            </Badge>
                            <Badge variant="outline" className={typeColors[experience.type as keyof typeof typeColors]}>
                              {experience.type}
                            </Badge>
                          </div>
                        </div>

                        {/* Location and Period */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {experience.period}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">{experience.description}</p>

                        {/* Expandable Content */}
                        {selectedExperience === experience.id && (
                          <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                              <ul className="space-y-1">
                                {experience.responsibilities.map((responsibility, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    {responsibility}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Skills & Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill) => (
                                  <Badge
                                    key={skill}
                                    variant="outline"
                                    className="text-xs hover:bg-primary/10 transition-colors"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Expand Indicator */}
                        <div className="flex justify-center pt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs text-muted-foreground hover:text-primary"
                          >
                            {selectedExperience === experience.id ? "Show Less" : "Show More"}
                            <ChevronRight
                              className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                                selectedExperience === experience.id ? "rotate-90" : ""
                              }`}
                            />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Stats
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-card/30 to-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Experience Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "5+ Roles",
                description: "Diverse experience across research, education, and development",
                gradient: "from-primary to-secondary",
              },
              {
                icon: Users,
                title: "Teaching & Mentorship",
                description: "Guided students in web development and programming concepts",
                gradient: "from-secondary to-accent",
              },
              {
                icon: Brain,
                title: "Research Experience",
                description: "Contributing to machine learning research in neuroscience",
                gradient: "from-accent to-primary",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm animate-in zoom-in duration-700`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-lg flex items-center justify-center mx-auto`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{stat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Want to work together?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities to apply my skills in research, education, or software
              development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover:scale-105 transition-all duration-300">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/projects">View My Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
