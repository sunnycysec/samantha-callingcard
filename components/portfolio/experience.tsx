import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const entries = [
  {
    period: 'Present',
    role: 'Home Lab Practitioner',
    place: 'Self-directed',
    points: [
      'Build and maintain virtualized Linux and Windows environments for hands-on practice.',
      'Configure and document network services including DNS, DHCP and routing.',
      'Automate routine tasks with PowerShell and track changes using Git.',
    ],
  },
  {
    period: 'Recent',
    role: 'Technical Support',
    place: 'Help desk & end-user support',
    points: [
      'Troubleshoot hardware, software and connectivity issues with clear, patient communication.',
      'Administer accounts and productivity tools across Google Workspace and Microsoft 365.',
      'Write step-by-step guides so common fixes are repeatable and easy to follow.',
    ],
  },
]

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="border-y border-border bg-forest/20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading id="experience-title" numeral="IV" title="Experience" latin="Annales — growth rings" />

        <ol className="relative flex flex-col gap-12 border-l border-gold/25 pl-8 md:pl-12">
          {entries.map((entry, i) => (
            <Reveal as="li" key={entry.role} delay={i * 120} className="relative">
              <span
                className="absolute -left-[37px] top-2 size-2.5 rotate-45 border border-gold bg-background md:-left-[53px]"
                aria-hidden="true"
              />
              <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
                <p className="text-xs uppercase tracking-[0.25em] text-gold">{entry.period}</p>
                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-3xl text-cream">{entry.role}</h3>
                  <p className="font-serif italic text-sage">{entry.place}</p>
                  <ul className="mt-2 flex flex-col gap-2">
                    {entry.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-gold/50" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
