"use client"

import { motion } from "framer-motion"
import { Twitter, Mail, Github, Calendar } from 'lucide-react'

export default function Contact() {
  

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8 border-t border-[#232323]"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs text-[#666666]">
          Harshita Tiwari
        </p>
        
      </div>
    </motion.footer>
  )
} 