"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-2xl font-medium mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        About
      </h2>
      <div className="space-y-4 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-lg blur-xl" />
        <div className="relative">
          <p className="text-[#8B8B8B] leading-relaxed hover:text-white transition-colors">
            I&apos;m a full-stack developer focused on building web apps with clean code and practical features. I enjoy learning new tools and improving projects to make them simple and effective. Each project is an opportunity to solve real problems and sharpen my skills.
          </p>
          <p className="text-[#8B8B8B] leading-relaxed mt-4 hover:text-white transition-colors">
             My tech stack includes React, Next.js, TypeScript, Node.js, Express, and PostgreSQL. I focus on writing clean, efficient code while building smooth, user-friendly interfaces and reliable backend systems.
          </p>
        </div>
      </div>
    </motion.section>
  )
} 