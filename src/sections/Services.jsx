import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import Icon from '../components/Icon'
import { SERVICES } from '../data/content'

export default function Services() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.svc-head > *', {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.from('.svc-card', {
        opacity: 0,
        y: 70,
        scale: 0.95,
        stagger: { each: 0.08, from: 'start' },
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
      id="services"
      className="relative section-pad bg-ink-800 py-32 sm:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 bg-aurora"
      />
      <div className="container-max relative">
        <div className="svc-head mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="meta mb-6 text-gold">What We Do</span>
          <h2 className="font-display text-4xl font-medium italic leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl">
            Everything you need to grow online.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-haze-soft sm:text-lg">
            One small studio, end to end. Strategy, design, build, and the technical bits — all handled.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="svc-card group relative flex flex-col gap-4 overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:border-royal-light/50 hover:shadow-glow"
              data-cursor-label="Service"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-royal/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-royal/30 to-transparent text-royal-light transition-transform duration-500 group-hover:scale-110">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="relative font-display text-xl font-medium italic text-white">
                {service.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-haze-soft">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
