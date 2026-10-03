import { Reveal } from './reveal'

type SectionHeadingProps = {
  id: string
  numeral: string
  title: string
  latin?: string
}

export function SectionHeading({ id, numeral, title, latin }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 flex flex-col gap-3 md:mb-16">
      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold">
        <span>{`Folio ${numeral}`}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" aria-hidden="true" />
      </div>
      <h2 id={id} className="font-serif text-4xl font-medium text-cream text-balance md:text-5xl">
        {title}
      </h2>
      {latin ? <p className="font-serif text-lg italic text-sage">{latin}</p> : null}
    </Reveal>
  )
}
