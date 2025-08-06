"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Code2, Blocks, Cpu } from 'lucide-react'
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
      company: "OneClickcomm",
      role: "App Developer (Freelance)",
      period: "Current",
      description: "Building a skincare-based mobile app to recommend tanning routines",
      tech: ["React Native", "Expo", "JavaScript", "Firebase"],
      achievements: [
        "Developing core features for a personalized skincare app with camera integration",
        "Collaborating with skincare experts and client to deliver a functional MVP",
        "Implemented responsive UI and optimized user flows for mobile experience"
      ],
      icon: <Building2 className="w-5 h-5 text-pink-400" />,
      links: [{
        type: 'website',
        url: 'https://www.oneclickcomm.com/',
        icon: <Code2 className="w-3 h-3" />,
        label: 'Website'
      },]
    },
    {
      company: "Soujourn International",
      role: "Frontend Developer (Freelance)",
      period: "2025",
      description: "Developed UI for a travel and booking platform using MERN stack",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      achievements: [
        "Built responsive dashboards and booking flows for a seamless user experience",
        "Integrated secure authentication and real-time routing for dynamic content",
        "Collaborated with backend team to improve API performance and reduce load times"
      ],
      icon: <Blocks className="w-5 h-5 text-green-400" />,
      
    },
    {
      company: "Veritas Tech",
      role: "Frontend Developer Intern",
      period: "2024",
      description: "Built UI for decentralized applications on AO protocol",
      tech: ["React", "TailwindCSS", "TypeScript", "AO"],
      achievements: [
        "Designed and implemented Web3 UI components for decentralized platforms",
        "Integrated APIs and optimized responsive layouts for real-time blockchain data",
        "Enhanced user experience through UI performance optimization"
      ],
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      links: [{
        type: 'website',
        url: 'https://veritas-ao.dev/',
        icon: <Code2 className="w-3 h-3" />,
        label: 'Website'
      },]
    },
    {
      company: "IBM SkillsBuild",
      role: "Data Analyst Intern",
      period: "2024",
      description: "Analyzed large datasets and delivered insights to improve diversity in leadership",
      tech: ["Python", "SQL", "Pandas", "Tableau"],
      achievements: [
        "Processed and cleaned 1M+ records to improve data accuracy and reduce processing time",
        "Analyzed leadership diversity across 15+ countries and provided actionable recommendations",
        "Created interactive dashboards and reports for data-driven decision-making"
      ],
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      links: [{
        type: 'website',
        url: 'https://skillsbuild.org/',
        icon: <Code2 className="w-3 h-3" />,
        label: 'Wesbite'
      },]
    }
  ];
  
  return (
    <>
      <motion.section className="py-20">
        <h2 className="text-2xl font-medium mb-3 bg-gradient-to-r from-blue-400 to-cyan-600 text-transparent bg-clip-text">
          Experience
        </h2>
        <p className="text-[var(--text-muted)] mb-8">
        My professional journey so far, showcasing roles, milestones, and impactful contributions in development.
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
                className="group relative border-[var(--card-border)] bg-[var(--card-background)] hover:bg-[var(--hover-background)] transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500/20 via-cyan-500/20 to-transparent" />
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="p-2 rounded-lg bg-[var(--hover-background)]">
                      {exp.icon}
                    </div>
                    <div className="space-y-1.5 flex-grow w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <CardTitle className="text-lg text-[var(--text-primary)]">
                            {exp.role}
                          </CardTitle>
                          <span className="text-sm text-[var(--text-muted)]">•</span>
                          <span className="text-[var(--text-muted)]">
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
                                  className="bg-[var(--hover-background)] border-[var(--card-border)] hover:bg-[var(--card-background)] hover:border-[var(--text-muted)] transition-colors flex items-center gap-1.5"
                                >
                                  {link.icon}
                                  <span className="text-xs">{link.label}</span>
                                </Badge>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-[var(--text-muted)]">{exp.period}</div>
                      <CardDescription className="text-[var(--text-muted)]">
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
                        className="bg-[var(--hover-background)] border-[var(--card-border)] hover:bg-[var(--card-background)] hover:border-[var(--text-muted)] transition-colors"
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