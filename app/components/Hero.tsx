"use client"

// import Image from 'next/image'


export default function Hero() {

  return (
    <section>
      <div className="flex justify-between items-start mb-8 pt-20" id="ca426f02-0d88-47a3-a431-3965a58b1d3b">
        {/* Profile Image */}
        <div className="relative w-[128px] h-[128px] rounded-2xl overflow-hidden">
          {/* <Image 
            src="/pfp.jpeg"
            alt="Profile picture"
            fill
            className="h-28 w-28 rounded-3xl object-cover"
            priority
          /> */}
        </div>

        {/* Action Buttons */}
        {/* <TooltipProvider delayDuration={100}>
          <div className="flex items-center gap-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  href="https://x.com/cbajpai7" 
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[var(--hover-background)] rounded-lg transition-colors"
                >
                  <Twitter size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  target="_blank" 
                  className="w-10 h-10 flex items-center justify-center hover:bg-[var(--hover-background)] rounded-lg transition-colors"
                >
                  <BookOpen size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Blog</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                  <Github size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider> */}
      </div>

      {/* Profile Info */}
      <h1 className="text-[32px] leading-none font-medium text-[var(--text-primary)] mb-2">
      Hi, I&apos;m Harshita
      </h1>

      <p className="text-[var(--text-secondary)] text-base mb-4">
        22, Delhi | Frontend Developer
      </p>

      <p className="text-[var(--text-secondary)] max-w-xl">
        I&apos;m a passionate Frontend Developer specializing in building modern, responsive, and user-friendly web interfaces. Skilled in React, Tailwind CSS, and JavaScript, I create seamless digital experiences that bring designs to life.
      </p>

    </section>
  )
} 