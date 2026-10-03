import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Experience } from '@/components/portfolio/experience'
import { Education } from '@/components/portfolio/education'
import { Contact } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <div id="about" className="scroll-mt-16">
          <About />
        </div>
        <div id="skills" className="scroll-mt-16">
          <Skills />
        </div>
        <div id="projects" className="scroll-mt-16">
          <Projects />
        </div>
        <div id="experience" className="scroll-mt-16">
          <Experience />
        </div>
        <div id="education" className="scroll-mt-16">
          <Education />
        </div>
        <div id="contact" className="scroll-mt-16">
          <Contact />
        </div>
      </main>
    </>
  )
}
