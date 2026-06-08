import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import { PROCESS } from '../data/content'

export default function Process() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.proc-head > *', {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.from('.proc-step', {
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="process" className="relative section-pad bg-ink-900 py-16 sm:py-24">
      <div className="container-max">
        <div className="proc-head mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="meta mb-6 text-gold">The Process</span>
          <h2 className="font-display text-4xl font-medium italic leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl">
            Simple, transparent, built around you.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-haze-soft sm:text-lg">
            Four steps from first call to launch day. You're involved at every milestone — nothing
            ships until you love it.
          </p>
        </div>

        <ol className="relative mt-10 grid gap-8 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block"
          />
          {PROCESS.map((step) => (
            <li key={step.step} className="proc-step relative flex flex-col gap-4">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl glass-strong font-display text-lg font-bold italic text-gradient-gold shadow-glow">
                {step.step}
              </span>
              <h3 className="font-display text-2xl font-medium italic text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-haze-soft">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
