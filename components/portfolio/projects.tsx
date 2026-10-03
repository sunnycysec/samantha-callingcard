import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const projects = [
  {
    no: 'No. 01',
    title: 'Linux Security & Administration Lab',
    description:
      'I plan to build a Linux virtual machine where I will practice foundational system administration and security skills, including users and groups, file permissions, package management, SSH configuration, firewall rules, system logs, and basic security hardening.',
    tags: ['Linux', 'Bash', 'SSH', 'System Administration', 'Security'],
  },
  {
    no: 'No. 02',
    title: 'Network Troubleshooting Lab',
    description:
      'I plan to create a small simulated network environment where I will practice diagnosing common networking problems involving IP configuration, DNS, DHCP, connectivity, subnetting, and routing. I will document the troubleshooting process and solutions.',
    tags: ['TCP/IP', 'DNS', 'DHCP', 'Subnetting', 'Network Troubleshooting'],
  },
  {
    no: 'No. 03',
    title: 'AWS Infrastructure with Terraform',
    description:
      'I plan to use Terraform to provision a small AWS environment as an introduction to Infrastructure as Code. Through a manageable project such as hosting a simple static website, I will explore cloud resources, IAM concepts, security groups, networking, and responsible resource cleanup.',
    tags: ['AWS', 'Terraform', 'Infrastructure as Code', 'IAM', 'Cloud Security'],
  },
  {
    no: 'No. 04',
    title: 'PowerShell IT Automation Toolkit',
    description:
      'I plan to write a collection of beginner-friendly PowerShell scripts to automate common IT support tasks. I will practice gathering system information, checking disk space, reviewing network configuration, testing connectivity, and generating basic troubleshooting information.',
    tags: ['PowerShell', 'Windows', 'Command Line', 'Automation', 'Troubleshooting'],
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
