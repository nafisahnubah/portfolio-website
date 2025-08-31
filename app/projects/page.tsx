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
    technologies: ["Python Flask", "Gemini API", "Google Cloud", "Jira", "React.js", "Tailwind CSS"],
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
    title: "Normalized Entity Parser (NEP)",
    subtitle: "Java Tool for Processing SARS Exam Rosters",
    description:
      "Collaborated with a team to build a Java-based application for Dalhousie's Student Accessibility Centre that converts university exam roster PDFs into structured, easy-to-use summaries.",
    longDescription:
      "NEP (Normalized Entity Parser) automates the extraction and grouping of exam data (course codes, times, locations, and student counts) from SARS-generated rosters. It outputs clean text summaries to reduce manual workload and improve exam scheduling efficiency at the Accessibility Center.",
    technologies: ["Java", "Swing GUI", "Apache PDFBox", "Launch4j", "Git"],
    category: "Tooling",
    year: "2025",
    status: "Completed",
    image: "/nep.png",
    github: "https://github.com/NepSauce/Normalized-Entity-Parser",
    demo: "#",
    icon: Database,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 3,
    title: "RateEase",
    subtitle: "Service Review Application System",
    description:
      "Developed a scalable full-stack service review platform allowing users to log in, post, and manage reviews using RESTful APIs.",
    longDescription:
      "A comprehensive review platform with user authentication, review management, and responsive design. Built with modern web technologies and focuses on user experience.",
    technologies: ["React.js", "Node.js", "MongoDB", "Firebase", "React Router", "Tailwind CSS"],
    category: "Full-Stack",
    year: "2024",
    status: "Completed",
    image: "/ratease.png",
    github: "https://github.com/nafisahnubah/rateease-client-side",
    demo: "https://taupe-elf-0b4f7f.netlify.app/",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "LBook",
    subtitle: "Library Inventory Management System",
    description:
      "Collaborated with a team to develop a full-stack web application to streamline book cataloging and user tracking with MySQL database for fast, reliable data retrieval.",
    longDescription:
      "A complete library management solution with book cataloging, user management, and inventory tracking. Features CRUD operations and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
    category: "Full-Stack",
    year: "2024",
    status: "Completed",
    image: "/lbook.jpeg",
    github: "https://github.com/nafisahnubah/lbook",
    demo: "#",
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "AquaTrack",
    subtitle: "Water Quality Analysis Dashboard",
    description:
      "Collaborated with a team for DeepSense's Ocean of Data Challenge to develop an interactive web app using Python and Django that analyzes and visualizes water quality trends using 10+ years of historical data.",
    longDescription:
      "An environmental monitoring dashboard that provides insights into water quality trends, anomaly detection, and data visualization for informed decision-making.",
    technologies: ["Python", "Django", "Data Analysis", "Git", "Jira", "Agile"],
    category: "Data Analysis",
    year: "2024",
    status: "Completed",
    image: "/aqua.png",
    github: "https://github.com/Ruddraw/OceanData",
    demo: "https://www.youtube.com/watch?v=uxkQomTASvo",
    icon: Code,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Portfolio Website",
    subtitle: "Personal Portfolio to Showcase Projects, Skills & Experience",
    description:
      "Designed and implemented my personal portfolio website to highlight my work, credentials, and journey in one intuitive web experience.",
    longDescription:
      "Built a responsive portfolio site that organizes my certifications, work experiences, and projects into a clean, accessible layout. Developed with a focus on usability and design coherence, it serves as a central showcase of my skills and professional growth.",
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
    category: "Frontend",
    year: "2025",
    status: "Current",
    image: "/portfolio.png",
    github: "https://github.com/nafisahnubah/portfolio-website",
    demo: "https://nafisah-nubah-portfolio.vercel.app/",
    icon: Globe,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 7,
    title: "Color Contrast Checker 2",
    subtitle: "Lightweight WCAG Color Contrast NPM Tool",
    description:
      "Created a lightweight npm package to check if two colors meet WCAG contrast guidelines across different levels (AA, AAA, large-text variants).",
    longDescription:
      "Built a versatile JavaScript library that supports a wide variety of color formats—hex (3/6/8 digits), RGB(A), HSL(A), HSV(A), named CSS colors, and integer codecs. It calculates relative luminance, contrast ratios, and accessibility compliance (AA, AAA, AA_LARGE, AAA_LARGE) to help developers ensure visual accessibility.",
    technologies: [
      "JavaScript",
      "WCAG",
      "Accessibility",
      "Color Parsing",
      "npm"
    ],
    category: "Tooling",
    year: "2025",
    status: "Completed",
    image: "/color-contrast-accessibility-tool.png",
    github: "https://github.com/nafisahnubah/color-contrast-checker2",
    demo: "https://www.npmjs.com/package/color-contrast-checker2",
    icon: Code,
    gradient: "from-gray-400 to-gray-600",
  },
  {
    id: 8,
    title: "PrediHome",
    subtitle: "Interactive Housing & Employment Analytics Across Canada",
    description:
      "Built an R/Shiny web app with a team that helps users evaluate the most affordable and promising provinces to live in based on housing prices and employment indicators.",
    longDescription:
      "PrediHome is a data-driven web application leveraging housing price index (HPI), unemployment, and employment rate data to guide users toward the best provinces to live in. Users can select a year (1986–2035) to explore historical and predictive analytics. The app highlights the province with the lowest HPI and unemployment rate, displays interactive bar charts, and calculates a composite score combining key metrics to recommend the top province overall.",
    technologies: ["R", "Shiny", "ggplot2", "dplyr", "tidyr"],
    category: "Data Analysis",
    year: "2025",
    status: "Completed",
    image: "/predihome.jpeg",
    github: "https://github.com/RafatH0ssain/PrediHome",
    demo: "#",
    icon: Globe,
    gradient: "from-teal-500 to-green-500",
  },
  {
    id: 9,
    title: "JSON Compiler (Frontend)",
    subtitle: "Recursive-Descent Parser & Scanner for JSON",
    description:
      "Developed a Python-based recursive-descent parser that processes JSON token streams to generate syntax trees (ASTs), implementing both lexical scanning and syntactic/semantic analysis.",
    longDescription:
      "This project implements a recursive-descent parser using Python to process JSON token streams from text files. It includes both a scanner and parser to perform syntactic and semantic analysis, constructing Abstract Syntax Trees that reflect the JSON grammar. The tool can process valid JSON inputs and output structured AST representations, demonstrating fundamentals of compiler design.",
    technologies: ["Python", "Recursive-Descent Parser", "Lexer/Scanner", "AST Generation"],
    category: "Tooling",
    year: "2024",
    status: "Completed",
    image: "/json-compiler-abstract-visualization.png",
    github: "https://github.com/nafisahnubah/json-compiler-frontend",
    demo: "#",
    icon: Code,
    gradient: "from-gray-500 to-gray-700",
  },
  {
    id: 10,
    title: "Simple Board Game Simulation",
    subtitle: "Java-Based 8×8 Grid Game Simulation",
    description:
      "Implemented an interactive board game simulator in Java featuring diverse piece behaviors and user-driven commands.",
    longDescription:
      "This Java application simulates a board game on an 8×8 grid, allowing users to create and move different types of pieces—Slow, Fast, Flexible, and Fast Flexible—each with unique movement rules. It supports interactive command-based gameplay, dynamic board display, and validation logic to prevent invalid moves or actions. Built to demonstrate object-oriented design, command parsing, and real-time state updates.",
    technologies: ["Java", "Object-Oriented Programming", "CLI", "Game Logic"],
    category: "Tooling",
    year: "2024",
    status: "Completed",
    image: "/simple-board-game-ui.png",
    github: "https://github.com/nafisahnubah/simple-board-game",
    demo: "#",
    icon: Code,
    gradient: "from-yellow-500 to-yellow-700",
  },
]


const categories = ["All", "Full-Stack", "Frontend", "Data Analysis", "Tooling"]

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
              A collection of projects showcasing my journey in software development, spanning web applications, data analysis, and interactive tools.
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
            <h2 className="text-3xl font-bold text-foreground">Building Forward</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These projects represent my curiosity and drive to create, each one an opportunity to learn, experiment, and bring ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button asChild size="lg" className="hover:scale-105 transition-all duration-300">
                <Link href="/contact">Get In Touch</Link>
              </Button> */}
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
