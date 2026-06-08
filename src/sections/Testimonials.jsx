import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import Icon from '../components/Icon'
import { TESTIMONIALS } from '../data/content'

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
  return (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal to-royal-deep font-display text-sm font-semibold italic text-white ring-1 ring-royal-light/30"
    >
      {initials}
    </span>
  )
}

export default function Testimonials() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.test-head > *', {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.from('.test-card', {
        opacity: 0,
        y: 50,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative section-pad bg-ink-900 py-16 sm:py-24"
    >
      <div className="container-max">
        <div className="test-head mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="meta mb-6 text-gold">Word on the Street</span>
          <h2 className="font-display text-4xl font-medium italic leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl">
            The kind of reviews you'll be getting soon.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-haze-soft sm:text-lg">
            Sample quotes shown as placeholders — real client words take their place after your
            first projects with us.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="test-card flex h-full flex-col gap-5 rounded-3xl glass p-7 transition-shadow duration-300 hover:shadow-glow"
            >
              <Icon name="quote" className="h-7 w-7 text-royal-light/70" />
              <blockquote className="font-display text-xl italic leading-relaxed text-white sm:text-2xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
                <Avatar name={t.name} />
                <span>
                  <span className="block font-display text-lg italic text-white">{t.name}</span>
                  <span className="meta text-haze">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
