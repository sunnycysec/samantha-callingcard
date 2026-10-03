import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type ExperienceEntry = {
  period?: string
  role: string
  place: string
  points: string[]
}

const entries: ExperienceEntry[] = [
  {
    period: 'Aug 2025 – Present',
    role: 'IT & Network Engineering Student',
    place: 'Western Governors University',
    points: [
      'Developing hands-on skills in networking, Linux, Windows, cloud computing, and IT troubleshooting through coursework and lab environments.',
      'Working with networking fundamentals including TCP/IP, DNS, DHCP, common network services, and troubleshooting concepts.',
      'Using Linux command-line tools, Windows PowerShell, and Git/version control as part of technical coursework and personal projects.',
      'Building and documenting technical projects to strengthen practical problem-solving and troubleshooting skills.',
      'Completed CompTIA A+ Core 2 and currently preparing for CompTIA A+ Core 1.',
      'Earned Linux Essentials certification and completed the Google IT Support Professional Certificate.',
    ],
  },
  {
    role: 'Technology & Operations Experience',
    place: 'ALDI | Management',
    points: [
      'Troubleshot store technology and equipment issues, including printers, alarm systems, electronic safes, and other operational systems.',
      'Used technical documentation, manuals, and vendor support resources to investigate and resolve equipment issues.',
      'Assisted with setting up employee access to the electronic safe according to established procedures and security requirements.',
      'Performed inventory counts, price checks, receipt/return verification, and other operational audits requiring attention to detail and accurate documentation.',
      'Conducted employee and process audits using store systems and security procedures to identify discrepancies and reduce operational risk.',
      'Trained 50+ new employees on front-end operations, cash-handling procedures, store systems, and company processes.',
      'Supported multiple store openings and helped train teams during new-store launches.',
      'Communicated technical and operational issues clearly to district leadership and appropriate support contacts.',
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
