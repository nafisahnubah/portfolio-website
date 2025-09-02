"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Calendar, CheckCircle, Cloud, Shield, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2025",
    expiryDate: "2028",
    credentialId: "3ba7fdd31b034ac2b70922ff291b237a",
    verificationUrl: "https://www.credly.com/badges/8779fae8-0b78-4810-b918-e031c5a814af/public_url",
    description:
      "Foundational AWS certification validating knowledge of cloud concepts, AWS services, security, pricing, and support models.",
    skills: ["Cloud Computing", "Amazon Web Services (AWS)", "Cloud Services"],
    icon: Cloud,
    gradient: "from-yellow-500 to-orange-500",
    category: "Cloud Computing",
  },
  {
    id: 2,
    title: "Practical Cybersecurity",
    issuer: "ShiftKey Labs",
    issueDate: "2025",
    credentialId: "a0a8fced-94bb-46cb-a892-54054cf7c7e1",
    verificationUrl: "https://credsverse.com/credentials/a0a8fced-94bb-46cb-a892-54054cf7c7e1",
    description:
      "Hands-on certification covering core cybersecurity principles, threat detection, mitigation strategies, and security best practices in real-world applications.",
    skills: ["Cybersecurity"],
    icon: Shield,
    gradient: "from-red-500 to-orange-500",
    category: "Cybersecurity",
  },
  {
    id: 3,
    title: "Cloud Foundations",
    issuer: "ShiftKey Labs",
    issueDate: "2025",
    credentialId: "09308d08-9796-4db0-8b18-3f8d3e5e891c",
    verificationUrl: "https://credsverse.com/credentials/09308d08-9796-4db0-8b18-3f8d3e5e891c",
    description:
      "Comprehensive foundation in cloud computing concepts, covering core services, architecture patterns, and best practices for cloud deployment and management.",
    skills: ["Cloud Computing", "AWS", "Cloud Architecture", "DevOps", "Infrastructure"],
    icon: Cloud,
    gradient: "from-blue-500 to-cyan-500",
    category: "Cloud Computing",
  },
  {
    id: 4,
    title: "Fundamentals of Cloud Administration with Azure",
    issuer: "ShiftKey Labs",
    issueDate: "2025",
    credentialId: "e5258766-b644-4860-a2e0-46a246d1c410",
    verificationUrl: "https://credsverse.com/credentials/e5258766-b644-4860-a2e0-46a246d1c410",
    description:
      "Specialized training in Microsoft Azure cloud administration, covering resource management, security, monitoring, and optimization of Azure environments.",
    skills: ["Microsoft Azure", "Cloud Administration", "Resource Management", "Security", "Monitoring"],
    icon: Shield,
    gradient: "from-purple-500 to-pink-500",
    category: "Cloud Administration",
  },
];


// const upcomingCertifications = [
//   {
//     title: "AWS Certified Solutions Architect",
//     provider: "Amazon Web Services",
//     targetDate: "2025",
//     status: "Planning",
//   },
//   {
//     title: "Google Cloud Professional Developer",
//     provider: "Google Cloud",
//     targetDate: "2025",
//     status: "In Progress",
//   },
// ]

export default function CertificationsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCert, setHoveredCert] = useState<number | null>(null)

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
              <Award className="w-4 h-4" />
              Professional Development
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Certifications
              </span>{" "}
              & Credentials
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Continuous learning and professional development through industry-recognized certifications across tech and related fields.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={cert.id}
                className={`group overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                {/* Certificate Header */}
                <div className="relative p-6 bg-gradient-to-r from-card to-card/80">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${cert.gradient} rounded-xl flex items-center justify-center transition-transform duration-300 ${hoveredCert === cert.id ? "scale-110 rotate-3" : ""}`}
                      >
                        <cert.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{cert.issueDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{cert.description}</p>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Credential Info */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">Credential ID:</span> {cert.credentialId.slice(0, 8)}...
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button asChild size="sm" className="w-full group/btn hover:scale-105 transition-all duration-300">
                      <Link href={cert.verificationUrl} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        Verify Credential
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Stats
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-card/30 to-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                number: "2",
                label: "Certifications Earned",
                description: "Industry-recognized credentials",
                gradient: "from-primary to-secondary",
              },
              {
                icon: BookOpen,
                number: "100+",
                label: "Hours of Learning",
                description: "Dedicated to professional development",
                gradient: "from-secondary to-accent",
              },
              {
                icon: TrendingUp,
                number: "2+",
                label: "More Planned",
                description: "Continuous skill advancement",
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
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <h3 className="text-lg font-semibold text-foreground">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Upcoming Certifications
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Upcoming Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingCertifications.map((cert, index) => (
              <Card
                key={index}
                className={`p-6 border-2 border-dashed border-primary/30 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-in slide-in-from-bottom-5 duration-700`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">{cert.title}</h3>
                    <Badge
                      variant="outline"
                      className={
                        cert.status === "In Progress"
                          ? "bg-blue-100 text-blue-800 border-blue-200"
                          : "bg-gray-100 text-gray-800 border-gray-200"
                      }
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-primary font-medium">{cert.provider}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Target: {cert.targetDate}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 backdrop-blur-sm border border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-4">Committed to Growth</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              These certifications highlight the steps I’ve taken to expand my knowledge and stay current in an ever-changing industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover:scale-105 transition-all duration-300">
                <Link href="/experience">View Experience</Link>
              </Button>
              {/* <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/contact">Let's Connect</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
