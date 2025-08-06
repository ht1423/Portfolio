"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'

interface Blog {
  title: string
  description: string
  date: string
  readTime?: string
  reactions?: number
  comments?: number
  link: string
}

export default function Blogs() {
  const blogs: Blog[] = [
    // { 
    //   title: "When process.env Bites Back: A Node.js Performance Lesson",
    //   description: "During a past job, I was working on optimizing an internal API service. Here's what we had:",
    //   date: "May 4, 2025",
    //   link: "https://medium.com/@cb7/when-process-env-bites-back-a-node-js-performance-lesson-40bbec066d33"
    // },
    // {
    //   title: "Cookie-based Authentication: A Simple Guide for Secure Sessions",
    //   description: "What is Authentication? Authentication is the process of verifying the identity of a user, device, or entity in a system. It ensures that...",
    //   date: "Jul 12, 2024",
    //   link: "https://medium.com/stackademic/cookie-based-authentication-a-simple-guide-for-secure-sessions-d8f0549e8f86"
    // },
    // {
    //   title: "Understanding TypeScript's Handling of Object Literal Types",
    //   description: "Did you know that TypeScript's handling of object literals can sometimes lead to unexpected behavior? when I started learning...",
    //   date: "Jun 20, 2024",
    //   link: "https://medium.com/stackademic/understanding-typescripts-handling-of-object-literal-types-the-quirks-and-insights-c1c8b4e49645",
    // },
    // {
    //   title: "Why Choose Next.js over React?",
    //   description: "In the dynamic landscape of web development, React has emerged as a powerhouse for building interactive user interfaces. However, as projects grow in complexity...",
    //   date: "Apr 14, 2024",
    //   link: "https://medium.com/stackademic/why-choose-nextjs-over-react-74ac9eeca76d",
    // },
    // {
    //   title: "Need of Context API (or Similar State Management Tools)",
    //   description: "Context API is a react structure enabling us to exchange information across all levels of a react application, think of it as a...",
    //   date: "Mar 18, 2024",
    // },    
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      {/* <h2 className="text-2xl font-medium mb-3 bg-gradient-to-r from-blue-400 to-cyan-600 text-transparent bg-clip-text">
        Blogs
      </h2>
      <p className="text-[var(--text-muted)] mb-8">
        I write about software development, sharing insights and experiences from my journey in tech.
      </p> */}
      <div className="space-y-4">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <Card className="group relative border-[var(--card-border)] bg-[var(--card-background)] hover:bg-[var(--hover-background)] transition-all duration-300 overflow-hidden">
                <div className={`absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm`} />
                <CardHeader className="relative">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg group-hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">
                        {blog.title}
                        <ArrowUpRight 
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" 
                          size={18} 
                        />
                      </CardTitle>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {blog.description}
                    </CardDescription>
                    <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 