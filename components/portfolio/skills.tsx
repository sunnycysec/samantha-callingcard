import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const skillGroups = [
  {
    family: 'Systems',
    note: 'The soil',
    skills: ['Linux', 'PowerShell', 'Git'],
  },
  {
    family: 'Networking',
    note: 'The roots',
    skills: ['Networking', 'TCP/IP', 'DNS', 'DHCP'],
  },
  {
    family: 'Support',
    note: 'The canopy',
    skills: ['Troubleshooting', 'Google Workspace', 'Microsoft 365'],
  },
]

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="border-y border-border bg-forest/20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading id="skills-title" numeral="II" title="Skills" latin="Herbarium technicum — a catalogue of tools" />

        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.family} delay={i * 120} className="flex flex-col gap-6 bg-background p-8">
              <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                <h3 className="font-serif text-2xl text-cream">{group.family}</h3>
                <span className="font-serif text-sm italic text-sage">{group.note}</span>
              </div>
              <ul className="flex flex-col gap-3">
                {group.skills.map((skill, j) => (
                  <li key={skill} className="group flex items-center gap-4">
                    <span className="font-serif text-sm italic text-gold/70 tabular-nums">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px w-4 bg-gold/30 transition-all group-hover:w-8 group-hover:bg-gold" aria-hidden="true" />
                    <span className="text-cream/90 transition-colors group-hover:text-cream">{skill}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
