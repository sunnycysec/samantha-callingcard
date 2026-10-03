import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const projects = [
  {
    no: 'No. 01',
    title: 'PowerShell IT Automation Toolkit',
    description:
      'I built a beginner-friendly PowerShell toolkit to automate common IT support and troubleshooting tasks. It gathers system information, checks disk space, reviews network configuration, tests connectivity and DNS resolution, and checks the status of selected Windows services.',
    tags: ['PowerShell', 'Windows', 'Command Line', 'Automation', 'Troubleshooting'],
  },
 {
    no: 'No. 02',
    title: 'Network Traffic Analysis & Troubleshooting Lab',
    description:
       'I am building a network traffic analysis and troubleshooting lab using Wireshark to capture and analyze real network traffic. I will investigate protocols such as DNS, TCP, UDP, HTTP/HTTPS, and ICMP, use packet captures to diagnose connectivity and name-resolution issues, and document my findings and troubleshooting process.',
    tags: ['Linux', 'Bash', 'SSH', 'System Administration', 'Security'],
  },
]

export function Projects() {
  return (
    <section aria-labelledby="projects-title" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading id="projects-title" numeral="IV" title="Projects" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 140} className="h-full">
            <article className="group relative flex h-full flex-col gap-6 border border-border bg-card/50 p-8 transition-colors duration-500 hover:border-gold/50 hover:bg-forest/25">
              <span className="pointer-events-none absolute left-2 top-2 size-3 border-l border-t border-gold/50" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-2 right-2 size-3 border-b border-r border-gold/50" aria-hidden="true" />

              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.25em]">
                <span className="text-gold">{project.no}</span>
                <span className="border border-gold/40 px-2.5 py-1 text-[0.65rem] tracking-[0.2em] text-gold/90">
                  <span className="sr-only">Status: </span>
                  Planned Project
                </span>
              </div>

              <h3 className="font-serif text-3xl text-cream text-balance">{project.title}</h3>

              <p className="leading-relaxed text-muted-foreground text-pretty">{project.description}</p>

              <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-sage/30 px-3 py-1 text-xs uppercase tracking-[0.15em] text-sage"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
