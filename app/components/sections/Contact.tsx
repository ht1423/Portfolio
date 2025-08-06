"use client"

import { motion } from "framer-motion"
// import {  Mail } from 'lucide-react'

export default function Contact() {
  const contacts = [
    // {
    //   icon: <Twitter size={18} />,
    //   link: "https://x.com/cbajpai7",
    //   label: "Twitter"
    // },
    
    {
      // icon: <Mail size={18} />,
      // label: "Email"
    },
    // {
    //   icon: <Github size={18} />,
    //   label: "GitHub"
    // }
  ]

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8 border-t border-[var(--card-border)]"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs text-[var(--text-muted)]">
          Harshita Tiwari
        </p>
        <div className="flex items-center gap-4">
          {contacts.map((contact, i) => (
            <motion.a
              key={i}
              // href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              // aria-label={contact.label}
            >
              {/* {contact.icon} */}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
} 