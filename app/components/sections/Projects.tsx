"use client"

import { ArrowUpRight } from 'lucide-react'
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";

interface Project {
  title: string
  description: string
  tech: string[]
  status?: string
  link: string
  gradient: string
  image?: string
}

export default function Projects() {
  const personalProjects = [
    {
      title: "Reviewit",
      description:
        "A platform enabling users to collect and showcase authentic testimonials through personalized landing pages and embeddable widgets.",
      tech: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "PostgreSQL"],
      status: "Active",
      link: "https://my-reviewit.vercel.app/",
      image: "/images/Reviewit.png",
      gradient: "from-purple-600/20 via-pink-600/20 to-red-600/20"
    },
    {
      title: "FasterUI",
      description:
        "Created a responsive multi-section landing page featuring services, a portfolio carousel, FAQs, and a contact form. Implemented frontend functionality using Axios to handle contact requests efficiently.",
      tech: ["Tailwind", "React"],
      status: "Active",
      link: "https://faster-ui-seven.vercel.app/",
      image: "/images/fasterUi.png",
      gradient: "from-cyan-600/20 via-blue-600/20 to-indigo-600/20"
    },
    {
      title: "Price Findrr",
      description: "Developed the UI for a price tracking tool, implementing responsive layouts and integrating email alerts using Nodemailer for discount and stock notifications on Amazon.in products.",
      tech: ["Next.js", "TypeScript", "Zod", "Tailwind CSS", "Nodemailer"],
      status: "Active",
      link: "https://price-findrr-tau.vercel.app/", 
      image: "/images/Price.png",
      gradient: "from-emerald-600/20 via-teal-600/20 to-cyan-600/20"
    },
    {
      title: "Dev-Dashboard",
      description: "Built the backend for a developer dashboard to manage widgets like notes, todo, and timer. Implemented GitHub OAuth and APIs for seamless data handling and integration.",
      tech: ["JavaScript", "React", "MongoDB", "Express"],
      status: "Not-active",
      link: "",
      image: "/images/download.jpeg", 
      gradient: "from-indigo-600/20 via-blue-600/20 to-cyan-600/20"
    },
  ];
  


  const featuredLandingPages = [
    {
      title: "Sundown",
      description:
        "A sleek landing page clone of Sundown Studio, built to showcase a modern startup’s product with smooth animations and elegant design.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      link: "https://sundown-lime.vercel.app/", 
      image: "/images/sundown.png", 
      gradient: "from-pink-600/20 via-purple-600/20 to-red-600/20"
    },
    {
      title: "Sidcup",
      description:
        "A crisp and professional landing page tailored for golf clubs and enthusiasts, highlighting events and memberships.",
      tech: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      link: "https://sidcup-one.vercel.app/",
      image: "/images/sidcup.png", 
      gradient: "from-green-600/20 via-teal-600/20 to-emerald-600/20"
    },
    {
      title: "Literary Latte",
      description:
        "A cozy landing page blending books and cafe culture, perfect for showcasing book collections, events, and cozy vibes.",
      tech: ["React", "TailwindCSS"],
      link: "https://literary-latte.vercel.app/",
      image: "/images/latte.png", 
      gradient: "from-orange-600/20 via-pink-600/20 to-yellow-600/20"
    },
    {
      title: "Lazarev",
      description:
        "A modern landing page, focused on simplicity and smooth user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://lazarev-six.vercel.app/",
      image: "/images/lazarev.png", 
      gradient: "from-indigo-600/20 via-blue-600/20 to-cyan-600/20"
    },
    {
      title: "Bouncing Docs",
      description:
        "A ReactJS-powered documentation app showcasing efficient task implementation with dynamic UI updates and enhanced user experience.",
      tech: ["React", "TailwindCSS"],
      link: "https://bouncing-docs.vercel.app/",
      image: "/images/bouncing.png", 
      gradient: "from-purple-600/20 via-violet-600/20 to-indigo-600/20"
    },
    {
      title: "Apple Vision Pro",
      description:
        "Apple Vision Pro landing page, showcasing cutting-edge tech with smooth animations and responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "Canvas"],
      link: "https://apple-vision-sigma.vercel.app/",
      image: "/images/apple.png", 
      gradient: "from-gray-600/20 via-black/20 to-slate-600/20"
    },
    {
      title: "Legal Bharat",
      description:
        "A user-friendly platform connecting people with pro bono lawyers, making legal help accessible and easy to find.",
      tech: ["React", "TypeScript", "MongoDB", "Node.js"],
      link: "https://legal-bharat-frontend.vercel.app/",
      image: "/images/legal.png", 
      gradient: "from-blue-600/20 via-cyan-600/20 to-teal-600/20"
    }
  ];
  

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
          <Card className="group relative border-[var(--card-border)] bg-[var(--card-background)] hover:bg-[var(--hover-background)] transition-all duration-300 overflow-hidden">
            <div
              className={`absolute -inset-[1px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition duration-500 blur-sm`}
            />
            <a href={project.link} className="relative block" target="_blank" rel="noopener noreferrer">
              {/* ✅ Optimized Project Image */}
              {project.image && (
                <div className="w-full h-48 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw" // ✅ Responsive sizes
                    priority={i === 0} // ✅ Prioritize first image for LCP
                  />
                </div>
              )}
  
              {/* ✅ Card Content */}
              <CardHeader className="pb-4 pt-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <CardTitle className="flex items-center gap-2 text-lg group-hover:text-[var(--text-primary)] transition-colors">
                      {project.title}
                      <ArrowUpRight
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                        size={18}
                      />
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
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
                      className="bg-[var(--hover-background)] border-[var(--card-border)] hover:bg-[var(--card-background)] hover:border-[var(--text-muted)] transition-colors"
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
  );

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
      <p className="text-[var(--text-muted)] mb-8">
  A selection of my projects showcasing responsive design, interactive interfaces, and full-stack development. Each project demonstrates practical solutions, clean code, and attention to user experience.
</p>


      <Tabs defaultValue="personal" className="w-full">
<TabsList className="grid grid-cols-2 w-full mb-8 bg-[var(--card-background)] border-[var(--card-border)]">
    <TabsTrigger
      value="personal"
      className="data-[state=active]:bg-[var(--hover-background)] data-[state=active]:text-[var(--text-primary)]  data-[state=active]:border
  data-[state=active]:border-blue-500 border border-transparent transition-all"
    >
      Personal Projects
    </TabsTrigger>
   
    <TabsTrigger
      value="featured"
      className="data-[state=active]:bg-[var(--hover-background)] data-[state=active]:text-[var(--text-primary)]"
    >
      Featured Landing Pages
    </TabsTrigger>
  </TabsList>

  <TabsContent value="personal" className="mt-0">
    <ProjectGrid projects={personalProjects} />
  </TabsContent>
  
  
  <TabsContent value="featured" className="mt-0">
    <ProjectGrid projects={featuredLandingPages} />
  </TabsContent>
</Tabs>

    </motion.section>
  )
} 