import Reveal from '../components/Reveal'
import ChapterIntro from '../components/ChapterIntro'
import { TESTIMONIALS } from '../data/content'

// Editorial press section — oversized opening quote, serif blockquotes.
export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad bg-ink-900 py-32 sm:py-40">
      <div className="container-max">
        <ChapterIntro number="06" title="The Press." caption="What clients say" />

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-haze sm:text-lg">
          Sample quotes shown as placeholders — real client words take their place
          after your first projects with us.
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <figure className="flex flex-col gap-6">
                <span
                  aria-hidden="true"
                  className="font-display text-7xl italic leading-[0.5] text-gold/70 sm:text-8xl"
                >
                  &ldquo;
                </span>
                <blockquote className="font-display text-2xl font-medium italic leading-snug text-white sm:text-3xl">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-baseline gap-3 border-t border-white/10 pt-4">
                  <span className="meta text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="block font-display text-lg italic text-white">{t.name}</span>
                    <span className="meta text-haze">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
