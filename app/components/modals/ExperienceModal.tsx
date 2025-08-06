"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import type { Experience } from "../sections/Experience"
import { motion, AnimatePresence } from "framer-motion"

interface ExperienceModalProps {
  experience: Experience | null
  isOpen: boolean
  onClose: () => void
}

export default function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
  if (!experience) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[var(--card-background)] border-[var(--card-border)] text-[var(--text-primary)] p-0 gap-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="p-2 rounded-lg bg-[var(--hover-background)]">
                  {experience.icon}
                </div>
                <div>
                  <DialogTitle className="text-xl font-medium">
                    {experience.role}
                  </DialogTitle>
                  <p className="text-[var(--text-muted)]">{experience.company}</p>
                </div>
              </motion.div>
            </div>
          </DialogHeader>

          <motion.div 
            className="space-y-6 p-6 pt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Links */}
            <AnimatePresence>
              {experience.links && experience.links.length > 0 && (
                <motion.div 
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {experience.links.map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      <Badge 
                        variant="outline" 
                        className="bg-[var(--hover-background)] border-[var(--card-border)] hover:bg-[var(--card-background)] hover:border-[var(--text-muted)] transition-colors flex items-center gap-1.5"
                      >
                        {link.icon}
                        <span className="text-xs">{link.label}</span>
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Badge>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-sm font-medium mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (i * 0.05) }}
                  >
                    <Badge 
                      variant="outline"
                      className="bg-[var(--hover-background)] border-[var(--card-border)] hover:bg-[var(--card-background)] hover:border-[var(--text-muted)] transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-sm font-medium mb-2">Key Achievements</h3>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-2 text-[var(--text-muted)]"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
} 