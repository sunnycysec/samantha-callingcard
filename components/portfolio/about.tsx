import Image from 'next/image'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const facts = [
  { label: 'Focus', value: 'Networks & Cloud' },
  { label: 'Studying', value: 'B.S. at WGU' },
  { label: 'Seeking', value: 'Entry-level IT roles' },
]

export function About() {
  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading id="about-title" numeral="I" title="About" latin="De origine — on beginnings" />

      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal className="relative order-last md:order-first">
          <div className="relative border border-border bg-card/40 p-4">
            <Image
              src="/images/botanical-plate.png"
              alt="Engraved specimen plate of a eucalyptus sprig and mushroom whose roots form a network"
              width={1024}
              height={1024}
              className="h-auto w-full mix-blend-lighten"
            />
            <p className="mt-3 border-t border-border pt-3 text-center font-serif text-sm italic text-muted-foreground">
              {'Mycelium connexa — the original network'}
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-6">
          <p className="font-serif text-2xl leading-relaxed text-cream text-pretty md:text-3xl">
            {"I'm an entry-level IT professional drawn to the quiet systems that keep everything connected."}
          </p>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            {
              "Much like the root networks beneath a forest floor, the best infrastructure is invisible until it isn't. I'm studying Network & Cloud Engineering and spend my time in home labs — building Linux servers, configuring networks, and learning how traffic finds its way from one place to another."
            }
          </p>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            {
              'I approach troubleshooting the way a naturalist approaches the field: patient observation, careful notes, and a genuine curiosity about why things behave the way they do.'
            }
          </p>

          <dl className="mt-4 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 bg-background p-5">
                <dt className="text-xs uppercase tracking-[0.25em] text-gold">{fact.label}</dt>
                <dd className="font-serif text-lg text-cream">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
