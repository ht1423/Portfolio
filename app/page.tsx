import Hero from './components/Hero'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import { TracingBeam } from '@/components/ui/tracing-beam'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col">
      <div className="fixed inset-0 bg-[#0D0D0F] w-full" />
      
      {/* Gradient background */}
      <div className="fixed inset-0 bg-black w-full">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />
        
      </div>
      
      {/* Content */}
      <div className="relative w-full flex-grow">
        <div className="max-w-3xl sm:w-3/4 mx-auto px-6">
          <Hero />
          <div className="max-w-2xl mx-auto">
            <TracingBeam className="h-fit">
              <Experience />
              <Projects />
            </TracingBeam>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative w-full">
        <div className="max-w-3xl sm:w-3/4 mx-auto px-6">
          <Contact />
        </div>
      </div>
    </main>
  )
}