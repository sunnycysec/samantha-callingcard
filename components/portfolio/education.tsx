import { GraduationCap } from 'lucide-react'
import { Sprig } from './ornaments'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const coursework = ['Network Fundamentals', 'Linux Administration', 'Cloud Foundations', 'Network Security', 'Scripting & Automation']

export function Education() {
  return (
    <section aria-labelledby="education-title" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading id="education-title" numeral="V" title="Education" latin="Disciplina — cultivated knowledge" />

      <Reveal>
        <div className="relative border border-gold/30 p-2">
          <div className="flex flex-col items-center gap-6 border border-border px-6 py-14 text-center md:px-16">
            <GraduationCap className="size-7 text-gold" aria-hidden="true" />
            <p className="text-xs uppercase tracking-[0.3em] text-sage">Western Governors University</p>
            <h3 className="max-w-2xl font-serif text-4xl text-cream text-balance md:text-5xl">
              {'B.S. Network & Cloud Engineering'}
            </h3>
            <p className="font-serif text-lg italic text-muted-foreground">Graduation expected Aug 2028</p>
            <Sprig className="text-gold/60" />
            <ul className="flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Areas of study">
              {coursework.map((course) => (
                <li key={course} className="text-sm text-muted-foreground">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
