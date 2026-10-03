import { Code, Mail, UserRound } from 'lucide-react'
import { Leaf, Sprig } from './ornaments'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const channels = [
  { label: 'Email', value: 'sunny.cysec@outlook.com', href: 'mailto:sunny.cysec@outlook.com', icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/sunnycysec', href: 'https://linkedin.com/in/sunnycysec', icon: UserRound },
  { label: 'GitHub', value: 'github.com/sunnycysec', href: 'https://github.com/sunnycysec', icon: Code },
]

export function Contact() {
  return (
    <section aria-labelledby="contact-title" className="border-t border-border bg-forest/20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading id="contact-title" numeral="VI" title="Contact" latin="Correspondentia — send word" />

        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <Reveal className="flex flex-col gap-6">
            <p className="font-serif text-3xl leading-snug text-cream text-pretty md:text-4xl">
              {"Open to entry-level IT, help desk, and junior network or cloud roles — I'd love to hear from you."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Whether it&apos;s an opportunity, a lab idea, or a question about something I&apos;ve built, my inbox is always open.
            </p>
            <a
              href="mailto:sunny.cysec@outlook.com"
              className="mt-2 inline-flex w-fit items-center gap-3 border border-gold/60 bg-gold/10 px-6 py-3 text-xs uppercase tracking-[0.25em] text-cream transition-colors hover:bg-gold hover:text-background"
            >
              <Mail className="size-4" aria-hidden="true" />
              Say Hello
            </a>
          </Reveal>

          <Reveal delay={150}>
            <ul className="flex flex-col border-t border-border">
              {channels.map(({ label, value, href, icon: Icon }) => (
                <li key={label} className="border-b border-border">
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-5 py-6 transition-colors"
                  >
                    <Icon className="size-5 text-gold" aria-hidden="true" />
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.25em] text-sage">{label}</span>
                      <span className="font-serif text-xl text-cream transition-colors group-hover:text-gold">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:px-10 md:text-left">
          <p className="flex items-center gap-2 font-serif text-lg text-cream">
            <Leaf className="text-gold" />
            Samantha
          </p>
          <Sprig className="hidden text-gold/40 md:block" />
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {`© ${new Date().getFullYear()} · Grown with care`}
          </p>
        </div>
      </footer>
    </section>
  )
}
