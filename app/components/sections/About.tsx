"use client";

import { motion } from "framer-motion";

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
          <p className="text-[var(--text-secondary)] leading-relaxed hover:text-[var(--text-primary)] transition-colors">
            I&apos;m a passionate <strong>MERN Stack Developer</strong> focused on building
            modern, responsive, and user-friendly web applications. I specialize
            in creating seamless digital experiences using <strong>MongoDB</strong>,
            <strong>Express.js</strong>, <strong>React</strong>, and <strong>Node.js</strong>.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4 hover:text-[var(--text-primary)] transition-colors">
            My core expertise lies in crafting clean UI components, optimizing performance,
            and delivering intuitive designs that bring ideas to life. Currently,
            I&apos;m expanding my skills by working on personal projects, contributing to
            real-world applications, and exploring advanced features of modern frameworks.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
