"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Twitter, FileText, Github, BookOpen } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Hero() {

  return (
    <section>
      <div className="flex justify-between items-start mb-8 pt-20" id="ca426f02-0d88-47a3-a431-3965a58b1d3b">
        

        
      </div>

      {/* Profile Info */}
      <h1 className="text-[32px] leading-none font-medium text-white mb-2">
        Hi, I&apos;m Harshita
      </h1>
      
      <p className="text-[var(--text-secondary)] text-base mb-4">
        22, Delhi | Full Stack Developer
      </p>

      <p className="text-[var(--text-secondary)] max-w-xl">
        I&apos;m a full-stack developer focused on building web apps with clean code and practical features. I enjoy learning new tools and improving projects to make them simple and effective. Each project is an opportunity to solve real problems and sharpen my skills.
      </p>
    </section>
  )
} 

