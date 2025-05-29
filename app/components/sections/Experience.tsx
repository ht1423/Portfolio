"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Code2, Blocks, Cpu, Globe, Twitter, Linkedin } from 'lucide-react'
import ExperienceModal from "../modals/ExperienceModal"
import { useState } from "react"

interface ExperienceLink {
  type: 'website' | 'twitter' | 'app' | 'linkedin'
  url: string
  icon: React.ReactNode
  label: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  tech: string[]
  achievements: string[]
  icon: React.ReactNode
  links?: ExperienceLink[]
}

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)
  
  const experiences: Experience[] = [
    
    {
      company: "Shipoars Shipping",
      role: "Full-Stack Intern",
      period: "Internship",
      description: "Contributed to full-stack development, working on both frontend and backend features to enhance application functionality.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      achievements: [
        "Implemented new UI components and improved responsiveness",
        "Developed backend APIs to support business workflows",
        "Collaborated with the team to debug and optimize code"
      ],
      icon: <Globe className="w-5 h-5 text-teal-400" />,
      links: [
        {
          type: 'website',
          url: 'https://www.shipoarsshipping.com/', 
          icon: <Globe className="w-3 h-3" />,
          label: 'Website'
        }
      ]
    },
    {
      company: "Freelance",
      role: "Full-Stack Developer",
      period: "Freelance Project",
      description: "Built a travel agency web application with customizable trip packages, currency exchange, and booking features.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      achievements: [
        "Developed full-stack features including trip customization and booking system",
        "Implemented currency exchange functionality to support international users",
        "Focused on creating a smooth and user-friendly interface"
      ],
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
    }
  ]

  return (
    <>
      <motion.section className="py-20">
        <h2 className="text-2xl font-medium mb-3 bg-gradient-to-r from-blue-400 to-cyan-600 text-transparent bg-clip-text">
          Experience
        </h2>
        <p className="text-[#8B8B8B] mb-8">
          A timeline of my journey as a developer — highlighting key roles, projects, and milestones in full-stack and emerging tech.
        </p>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="group relative border-[#232323] bg-[#1a1a1a] hover:bg-[#1d1d1d] transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500/20 via-cyan-500/20 to-transparent" />
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#242424]">
                      {exp.icon}
                    </div>
                    <div className="space-y-1.5 flex-grow w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <CardTitle className="text-lg text-white">
                            {exp.role}
                          </CardTitle>
                          <span className="text-sm text-[#8B8B8B]">•</span>
                          <span className="text-[#8B8B8B]">
                            {exp.company}
                          </span>
                        </div>
                        {exp.links && (
                          <div className="flex flex-wrap gap-2">
                            {exp.links.map((link, i) => (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                              >
                                <Badge 
                                  variant="outline" 
                                  className="bg-[#242424] border-[#333333] hover:bg-[#2a2a2a] hover:border-[#404040] transition-colors flex items-center gap-1.5"
                                >
                                  {link.icon}
                                  <span className="text-xs">{link.label}</span>
                                </Badge>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-[#8B8B8B]">{exp.period}</div>
                      <CardDescription className="text-[#8B8B8B]">
                        {exp.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className="bg-[#242424] border-[#333333] hover:bg-[#2a2a2a] hover:border-[#404040] transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <ExperienceModal 
        experience={selectedExperience}
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  )
} 