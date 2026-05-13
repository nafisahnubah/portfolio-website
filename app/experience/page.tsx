"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Code, Users, Brain, Calendar, MapPin, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const experiences = [
  {
    id: 1,
    title: "Application Developer",
    company: "ImmediaC",
    location: "Halifax, NS",
    period: "2026",
    status: "Completed",
    type: "Development",
    description:
      "Worked as an Application Developer at ImmediaC, contributing to the development of a cloud-based enterprise resource planning (ERP) web application with AI-powered workflow automation and enterprise integrations.",
    responsibilities: [
      "Developed and maintained a full-stack ERP web application using React.js (frontend) and .NET/C# (backend)",
      "Led the implementation of AI integrations using the OpenAI API to automate workflows and improve operational efficiency",
      "Designed and worked with SQL databases to support scalable and efficient enterprise application functionality",
      "Collaborated in an Agile/Scrum environment to design, develop, test, and deploy features",
      "Assisted with client requirements gathering and translated business requirements into technical solutions",
      "Deployed and managed cloud infrastructure and storage using Microsoft Azure",
    ],
    skills: ["Software Development", "OpenAI API", ".NET", "C#", "React.js", "Azure", "SQL", "Agile Scrum"],
    icon: Briefcase,
    gradient: "from-orange-500 to-red-500",
  },

  {
    id: 2,
    title: "Undergraduate Machine Learning Researcher",
    company: "Dalhousie University",
    location: "Halifax, NS",
    period: "Present",
    status: "Current",
    type: "Research",
    description:
      "Conducting machine learning research on glacier melt patterns under Dalhousie faculty supervision, analyzing geospatial and satellite data to identify temporal changes in glacier coverage.",
    responsibilities: [
      "Applying machine learning techniques to analyze glacier melt patterns and environmental changes",
      "Performing data cleaning, preprocessing, and statistical analysis on large-scale geospatial datasets",
      "Using Google Earth Engine and geospatial data processing tools to analyze satellite imagery",
      "Conducting image segmentation and temporal analysis to identify changes in glacier coverage over time",
    ],
    skills: [
      "Machine Learning",
      "Google Earth Engine",
      "Geospatial Data Processing",
      "Data Analysis",
      "Image Segmentation",
      "Python",
      "Statistical Analysis",
    ],
    icon: Brain,
    gradient: "from-cyan-500 to-blue-500",
  },

  {
    id: 3,
    title: "Software Developer",
    company: "Computing Councils of Canada (C3)",
    location: "Remote",
    period: "Present",
    status: "Current",
    type: "Development",
    description:
      "Developing and maintaining organizational web platforms and internal tools while building AI-powered workflow automation solutions.",
    responsibilities: [
      "Developing and maintaining the organization website and internal dashboard using Next.js and Node.js",
      "Integrating frontend and backend systems to deliver scalable and efficient web applications",
      "Building agentic AI solutions to automate workflows and improve operational efficiency",
      "Collaborating with team members to design and implement new features and technical solutions",
    ],
    skills: ["Next.js", "Node.js", "Full-Stack Development", "AI Automation", "JavaScript", "Web Development"],
    icon: Briefcase,
    gradient: "from-emerald-500 to-teal-500",
  },

  {
    id: 4,
    title: "Secretary",
    company: "Dalhousie Women in Tech Society",
    location: "Halifax, NS",
    period: "Present",
    status: "Current",
    type: "Community",
    description:
      "Supporting the society through event coordination, mentorship, and operational leadership while previously serving as the Upper Year Student Representative.",
    responsibilities: [
      "Hosting and coordinating events, workshops, and initiatives for women and non-binary students in technology",
      "Mentoring students and fostering an inclusive and supportive community environment",
      "Assisting with society operations and organizational planning",
      "Supporting outreach and engagement initiatives to encourage participation in technology",
    ],
    skills: ["Leadership", "Mentorship", "Event Coordination", "Community Engagement", "Communication", "Teamwork"],
    icon: Users,
    gradient: "from-pink-500 to-red-500",
  },

  {
    id: 5,
    title: "Student Leader",
    company: "Dalhousie Faculty of Computer Science",
    location: "Halifax, NS",
    period: "Present",
    status: "Current",
    type: "Community",
    description:
      "Supporting the Faculty of Computer Science through event coordination, mentorship, and community-building initiatives for students in technology.",
    responsibilities: [
      "Hosting and coordinating events, hackathons, and faculty initiatives",
      "Mentoring students and helping foster an engaging and welcoming community",
      "Collaborating with faculty staff to support operations and student engagement",
      "Encouraging participation in technology-focused programs and activities",
    ],
    skills: ["Leadership", "Mentorship", "Event Coordination", "Community Engagement", "Communication"],
    icon: Users,
    gradient: "from-pink-500 to-red-500",
  },

  {
    id: 6,
    title: "Software Developer",
    company: "Dalhousie University (Student Accessibility Centre)",
    location: "Halifax, NS",
    period: "2025",
    status: "Completed",
    type: "Development",
    description:
      "Developed a Java application to automate the scheduling and sorting of exams, improving operational efficiency within the Student Accessibility Centre.",
    responsibilities: [
      "Designed and implemented a Java application for exam scheduling automation",
      "Collaborated with a team member to design and implement new features",
      "Improved operational efficiency through automation and streamlined processes",
    ],
    skills: ["Java", "Software Development", "Automation", "Problem Solving", "Team Collaboration"],
    icon: Briefcase,
    gradient: "from-orange-500 to-red-500",
  },

  {
    id: 7,
    title: "Student Researcher",
    company: "Dalhousie Machine Learning Society (DMLS)",
    location: "Halifax, NS",
    period: "2025",
    status: "Completed",
    certificate: "/DMLS_Certificate.pdf",
    type: "Research",
    description:
      "Contributed to the Neuro Imaging Analysis & Research (NIAR) project under the guidance of Dr. Carlos R. Hernandez-Castillo, applying machine learning techniques to analyze fMRI data from SCA7 patients and control groups.",
    responsibilities: [
      "Collaborated with fellow researchers to explore machine learning applications in neuroscience",
      "Analyzed fMRI data to identify potential disease biomarkers",
      "Contributed insights toward research publications and presentations",
    ],
    skills: ["Machine Learning", "fMRI Data Analysis", "Research", "Neuroscience", "Python"],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },

  {
    id: 8,
    title: "Events and Media Lead",
    company: "Dalhousie Machine Learning Society",
    location: "Halifax, NS",
    period: "Present",
    status: "Current",
    type: "Community",
    description:
      "Leading event planning, promotions, and digital engagement initiatives for the society while previously serving as the Social Media Coordinator.",
    responsibilities: [
      "Leading the planning and execution of events, workshops, and initiatives",
      "Managing promotions, branding, and social media strategy for the society",
      "Creating and coordinating content to highlight events, projects, and members",
      "Collaborating with executive members to strengthen community engagement and outreach",
    ],
    skills: ["Leadership", "Event Planning", "Social Media Management", "Content Creation", "Digital Marketing", "Communication"],
    icon: Users,
    gradient: "from-pink-500 to-red-500",
  },

  {
    id: 9,
    title: "Computer Science Instructor",
    company: "SuperNOVA at Dalhousie University",
    location: "Halifax, NS",
    period: "2025",
    status: "Completed",
    type: "Education",
    description:
      "Delivered Computer Science camps to youth, simplifying coding concepts through engaging hands-on activities and mentorship.",
    responsibilities: [
      "Teaching programming and Computer Science concepts through interactive activities",
      "Providing mentorship and guidance to students with varying skill levels",
      "Adapting teaching methods to suit different learning styles",
    ],
    skills: ["Teaching", "Mentorship", "Communication", "Programming", "Youth Education"],
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },

  {
    id: 10,
    title: "Teaching Assistant and Marker",
    company: "Dalhousie University",
    location: "Halifax, NS",
    period: "2025",
    status: "Completed",
    type: "Education",
    description:
      "Conducted lab classes and provided technical support for a Web Development course, helping students strengthen their understanding of HTML, CSS, and JavaScript.",
    responsibilities: [
      "Conducted lab classes providing instruction on web development concepts",
      "Assisted students with technical questions related to HTML, CSS, JavaScript, and web concepts",
      "Graded assignments and provided constructive feedback to support student learning",
    ],
    skills: ["Web Development", "HTML", "CSS", "JavaScript", "Teaching", "Assessment"],
    icon: Code,
    gradient: "from-green-500 to-emerald-500",
  },

  {
    id: 11,
    title: "Invigilator",
    company: "Student Accessibility Centre, Dalhousie University",
    location: "Halifax, NS",
    period: "Present",
    status: "Current",
    type: "Support",
    description:
      "Proctored exams for students with accommodations in a fast-paced environment while ensuring adherence to approved accessibility requirements.",
    responsibilities: [
      "Proctored multiple exams simultaneously in a fast-paced environment",
      "Ensured adherence to accommodation requirements for students with special needs",
      "Collaborated with fellow invigilators to maintain smooth operations",
      "Liaised with professors to resolve time-sensitive concerns",
    ],
    skills: ["Time Management", "Attention to Detail", "Communication", "Multitasking", "Student Support"],
    icon: GraduationCap,
    gradient: "from-indigo-500 to-purple-500",
  },

  {
    id: 12,
    title: "Lunch Monitor",
    company: "Halifax Regional Centre for Education (HRCE)",
    location: "Halifax, NS",
    period: "Present",
    status: "Current",
    type: "Support",
    description:
      "Supervised students at LeMarchant-St. Thomas Elementary during lunch periods, helping maintain a safe and positive environment.",
    responsibilities: [
      "Supervised students during lunch periods to maintain safety and adherence to school expectations",
      "Assisted with lunchtime activities, outdoor play preparation, and cleanup tasks",
      "Promoted positive behavior and student engagement through active supervision",
    ],
    skills: ["Supervision", "Student Support", "Collaboration", "Communication", "Conflict Resolution"],
    icon: Users,
    gradient: "from-yellow-500 to-orange-500",
  },
]

const typeColors = {
  Research: "bg-purple-100 text-purple-800 border-purple-200",
  Education: "bg-blue-100 text-blue-800 border-blue-200",
  Development: "bg-green-100 text-green-800 border-green-200",
  Support: "bg-orange-100 text-orange-800 border-orange-200",
  Community: "bg-pink-100 text-pink-800 border-pink-200",
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
              Experiences
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Journey
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From research and teaching to software development and volunteer roles, these experiences reflect the different ways I’ve grown and contributed.
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

                            {experience.certificate && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Certificate:</h4>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="hover:scale-105 transition-all"
                                  asChild
                                >
                                  <Link href={experience.certificate} target="_blank">
                                    View Certificate
                                  </Link>
                                </Button>
                              </div>
                            )}

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
            <h2 className="text-3xl font-bold text-foreground">Looking Ahead</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Through research, education, development, and support roles, I’ve built a foundation of skills and perspectives that I continue to grow with every opportunity.
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
                <Link href="/projects">View My Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
