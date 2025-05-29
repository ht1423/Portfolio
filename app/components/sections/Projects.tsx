"use client"

import { ArrowUpRight } from 'lucide-react'
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Project {
  title: string
  description: string
  tech: string[]
  status?: string
  link: string
  gradient: string
}

export default function Projects() {
  const personalProjects = [
    {
      title: "Reviewit",
      description: "A platform enabling users to collect and showcase authentic testimonials through personalized landing pages and embeddable widgets.",
      tech: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "PostgreSQL"],
      status: "Active",
      link: "https://my-reviewit.vercel.app/", 
      gradient: "from-green-400/20 via-blue-500/20 to-purple-600/20"
    },
    {
      title: "SnipSavvy",
      description: "Code snippet management platform with multi-level sharing and organization capabilities",
      tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
      link: " https://snipsavvy.vercel.app/",
      gradient: "from-cyan-600/20 via-blue-600/20 to-indigo-600/20"
    },
    {
      title: "Price Findrr",
      description: "A one-stop solution for all your price tracking needs, automating alerts on discounts, lowest prices, and stock availability for Amazon.in products.",
      tech: ["Next.js", "TypeScript", "Zod", "Tailwind CSS", "Nodemailer"],
      status: "Active",
      link: "https://price-findrr.vercel.app/",
      gradient: "from-yellow-400/20 via-red-500/20 to-pink-600/20"
    },
    {
      title: "medium-hono",
      description: "A platform for reading, writing, and sharing articles with a clean, intuitive interface. Built during Cohort 2.0 with Harkirat Singh.",
      tech: ["TypeScript", "React", "MongoDB", "Express", "Hono"],
      status: "Active",
      link: "https://medium-hono.vercel.app/",
      gradient: "from-indigo-400/20 via-purple-500/20 to-pink-600/20"
    }

  ]

  const clientProjects = [
    {
      title: "Neo-Terminal",
      description: "Frontend and infrastructure development for an Ape Terminal clone",
      tech: ["Next.js", "TailwindCSS", "TypeScript"],
      status: "Paused",
      link: "https://neo-terminal-eight.vercel.app",
      gradient: "from-blue-600/20 via-cyan-600/20 to-purple-600/20"
    },
    {
      title: "Tiplink",
      description: "Lead maintainer contributing to improvements and architecture design of the project",
      tech: ["TypeScript", "Next.js", "Open Source"],
      link: "https://github.com/code100x/tiplink",
      gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20"
    }
  ]

  const ProjectGrid = ({ projects }: { projects: Project[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="group relative border-[#232323] bg-[#1a1a1a] hover:bg-[#1d1d1d] transition-all duration-300 overflow-hidden">
            <div className={`absolute -inset-[1px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition duration-500 blur-sm`} />
            <a href={project.link} className="relative block" target="_blank" rel="noopener noreferrer">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <CardTitle className="flex items-center gap-2 text-lg group-hover:text-white transition-colors">
                      {project.title}
                      <ArrowUpRight 
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" 
                        size={18} 
                      />
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.status && (
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
                      {project.status}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
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
            </a>
          </Card>
        </motion.div>
      ))}
    </div>
  )

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-2xl font-medium mb-3 bg-gradient-to-r from-blue-400 to-cyan-600 text-transparent bg-clip-text">
        Projects
      </h2>
      <p className="text-[#8B8B8B] mb-8">
       A collection of my personal projects that I’ve worked on to learn and improve my skills over time. These projects reflect the things I’ve built while exploring different technologies and solving small problems.
      </p>
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid   mb-8 bg-[#1a1a1a] border-[#232323]">
          <TabsTrigger 
            value="personal"
            className="data-[state=active]:bg-[#242424] data-[state=active]:text-white"
          >
            Personal Projects
          </TabsTrigger>
          
        </TabsList>
        <TabsContent value="personal" className="mt-0">
          <ProjectGrid projects={personalProjects} />
        </TabsContent>
        <TabsContent value="client" className="mt-0">
          <ProjectGrid projects={clientProjects} />
        </TabsContent>
      </Tabs>
    </motion.section>
  )
} 