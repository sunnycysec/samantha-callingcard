import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { Sprig } from './ornaments'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.15fr_1fr] md:px-10">
        <div className="relative z-10 flex flex-col gap-8">
          <p
            className="animate-rise text-xs uppercase tracking-[0.35em] text-sage"
            style={{ animationDelay: '100ms' }}
          >
            {'Field Journal · Vol. I'}
          </p>

          <h1
            id="hero-title"
            className="animate-rise font-serif text-7xl font-medium leading-none text-cream sm:text-8xl lg:text-9xl"
            style={{ animationDelay: '250ms' }}
          >
            Samantha
          </h1>

          <p
            className="animate-rise text-sm font-medium uppercase tracking-[0.3em] text-gold sm:text-base"
            style={{ animationDelay: '400ms' }}
          >
            {'IT • Networking • Cloud Engineering'}
          </p>

          <div className="animate-rise" style={{ animationDelay: '550ms' }}>
            <Sprig className="text-gold/70" />
          </div>

          <blockquote
            className="animate-rise max-w-md font-serif text-2xl italic leading-snug text-sage sm:text-3xl"
            style={{ animationDelay: '700ms' }}
          >
            {'“Rooted in curiosity. Built for the digital world.”'}
          </blockquote>

          <div
            className="animate-rise flex flex-wrap items-center gap-4 pt-2"
            style={{ animationDelay: '850ms' }}
          >
            <a
              href="#projects"
              className="border border-gold/60 bg-gold/10 px-6 py-3 text-xs uppercase tracking-[0.25em] text-cream transition-colors hover:bg-gold hover:text-background"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-2 py-3 text-xs uppercase tracking-[0.25em] text-muted-foreground underline-offset-8 transition-colors hover:text-gold hover:underline"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div
          className="animate-rise relative mx-auto w-full max-w-sm md:max-w-none"
          style={{ animationDelay: '400ms' }}
        >
          <div className="pointer-events-none absolute inset-6 border border-gold/15" aria-hidden="true" />
          <div className="animate-sway">
            <Image
              src="/images/botanical-hero.png"
              alt="Botanical line drawing of a fern, rosemary and sage with leaf veins forming network nodes"
              width={768}
              height={1376}
              priority
              className="fade-edges mx-auto h-auto max-h-[78svh] w-auto mix-blend-lighten"
            />
          </div>
          <p className="absolute bottom-6 right-8 font-serif text-sm italic text-muted-foreground">
            {'Pteridium reticulum — fig. 1'}
          </p>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-gold md:block"
      >
        <ArrowDown className="size-5 animate-bounce" />
        <span className="sr-only">Scroll to About</span>
      </a>
    </section>
  )
}
