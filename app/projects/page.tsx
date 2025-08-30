"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter, Code, Database, Globe, Brain } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "DEEBug",
    subtitle: "Web-Based Performance Bug Detection Tool",
    description:
      "Collaborated with a cross-functional team to develop a web-based tool for detecting and fixing performance bugs in deep learning models. Used Agile methodologies and Jira for project management.",
    longDescription:
      "A comprehensive tool that helps developers identify and resolve performance bottlenecks in deep learning models. Features real-time analysis, automated suggestions, and integration with popular ML frameworks.",
    technologies: ["React.js", "Tailwind CSS", "Python Flask", "Gemini API", "Google Cloud", "Jira"],
    category: "Full-Stack",
    year: "2025",
    status: "Completed",
    image: "/modern-web-dashboard-for-ai-debugging-tool.png",
    github: "#",
    demo: "#",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "RateEase",
    subtitle: "Service Review Application System",
    description:
      "Developed a scalable full-stack service review platform allowing users to log in, post, and manage reviews using RESTful APIs. Enhanced user engagement by 20%.",
    longDescription:
      "A comprehensive review platform with user authentication, review management, and responsive design. Built with modern web technologies and focuses on user experience.",
    technologies: ["React.js", "Node.js", "MongoDB", "Firebase", "React Router", "Tailwind CSS"],
    category: "Full-Stack",
    year: "2024",
    status: "Completed",
    image: "/modern-review-application-interface.png",
    github: "https://github.com/nafisahnubah/rateease-client-side",
    demo: "#",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "LBook",
    subtitle: "Library Inventory Management System",
    description:
      "Developed a full-stack web application to streamline book cataloging and user tracking with MySQL database for fast, reliable data retrieval.",
    longDescription:
      "A complete library management solution with book cataloging, user management, and inventory tracking. Features CRUD operations and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
    category: "Web Development",
    year: "2024",
    status: "Completed",
    image: "/library-management-system-interface.png",
    github: "https://github.com/nafisahnubah/lbook",
    demo: "#",
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "AquaTrack",
    subtitle: "Water Quality Analysis Dashboard",
    description:
      "Developed an interactive web app using Python and Django to analyze and visualize water quality trends using 10+ years of historical data.",
    longDescription:
      "An environmental monitoring dashboard that provides insights into water quality trends, anomaly detection, and data visualization for informed decision-making.",
    technologies: ["Python", "Django", "Data Analysis", "Git", "GitHub", "Jira", "Agile"],
    category: "Data Analysis",
    year: "2024",
    status: "Completed",
    image: "/water-quality-data-dashboard-with-charts.png",
    github: "https://github.com/Ruddraw/OceanData",
    demo: "#",
    icon: Code,
    gradient: "from-orange-500 to-red-500",
  },
]

const categories = ["All", "Full-Stack", "Web Development", "Data Analysis"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

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
              <Code className="w-4 h-4" />
              My Work
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my journey in full-stack development, from web applications to data
              analysis tools.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Filter className="w-4 h-4" />
              Filter by category:
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300 hover:scale-105"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  {/* Project Icon */}
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center transition-transform duration-300 ${hoveredProject === project.id ? "scale-110" : ""}`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies
                      .slice(0, hoveredProject === project.id ? project.technologies.length : 4)
                      .map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    {!hoveredProject && project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.github !== "#" && (
                      <Button asChild size="sm" variant="outline" className="group/btn bg-transparent">
                        <Link href={project.github} target="_blank">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.demo !== "#" && (
                      <Button asChild size="sm" className="group/btn">
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-card/30 to-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Interested in collaborating?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology and development.
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
                <Link href="/experience">View Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
