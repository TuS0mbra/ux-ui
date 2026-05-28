import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import Icon from '../components/Icon'
import { SectionHeading } from '../components/ui'
import { TESTIMONIALS } from '../data/content'

// Initials-based avatar so there are no external image dependencies.
function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
  return (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal to-royal-deep font-display text-sm font-semibold text-white ring-1 ring-royal-light/30"
    >
      {initials}
    </span>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad py-24 sm:py-32">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            eyebrow="Word On The Street"
            title="The kind of reviews you'll be getting soon."
            subtitle="Sample testimonials shown as placeholders — real client words take their place after your first projects."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <TiltCard className="h-full rounded-3xl" max={5}>
                <figure className="flex h-full flex-col gap-5 rounded-3xl glass p-7">
                  <Icon name="quote" className="h-7 w-7 text-royal-light/70" />
                  <blockquote className="text-lg leading-relaxed text-white/90">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 pt-2">
                    <Avatar name={t.name} />
                    <span>
                      <span className="block font-display font-semibold text-white">{t.name}</span>
                      <span className="block text-sm text-haze">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
