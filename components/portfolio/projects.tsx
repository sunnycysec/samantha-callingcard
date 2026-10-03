import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const projects = [
  {
    no: 'No. 01',
    title: 'Personal Portfolio',
    specimen: 'Folium personale',
    description:
      'This site — a responsive, accessible portfolio built with Next.js and Tailwind CSS, version-controlled with Git and deployed to the cloud.',
    tags: ['Next.js', 'Git', 'Deployment'],
  },
  {
    no: 'No. 02',
    title: 'Linux Lab',
    specimen: 'Radix penguinus',
    description:
      'A virtualized Linux server environment for practicing user and permission management, package installs, services, SSH hardening, and shell scripting.',
    tags: ['Linux', 'Bash', 'SSH'],
  },
  {
    no: 'No. 03',
    title: 'Network Lab',
    specimen: 'Rete subterranea',
    description:
      'A simulated small-office network with subnetting, VLANs, DHCP scopes and DNS records — documented and tested with packet captures.',
    tags: ['TCP/IP', 'DNS', 'DHCP'],
  },
  {
    no: 'No. 04',
    title: 'Cloud Project',
    specimen: 'Nubes cultivata',
    description:
      'Provisioning a cloud-hosted virtual machine and static site, exploring identity & access, network security groups, and cost-aware architecture.',
    tags: ['Cloud', 'IAM', 'Security'],
  },
]

export function Projects() {
  return (
    <section aria-labelledby="projects-title" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading id="projects-title" numeral="III" title="Projects" latin="Specimina — field collections" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 140}>
            <article className="group relative flex h-full flex-col gap-6 border border-border bg-card/50 p-8 transition-colors duration-500 hover:border-gold/50 hover:bg-forest/25">
              <span className="pointer-events-none absolute left-2 top-2 size-3 border-l border-t border-gold/50" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-2 right-2 size-3 border-b border-r border-gold/50" aria-hidden="true" />

              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em]">
                <span className="text-gold">{project.no}</span>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-3xl text-cream">{project.title}</h3>
                <p className="font-serif italic text-sage">{project.specimen}</p>
              </div>

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
