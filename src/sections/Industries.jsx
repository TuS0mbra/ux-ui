import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import Icon from '../components/Icon'
import { INDUSTRIES } from '../data/content'

export default function Industries() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.ind-head > *', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.from('.ind-card', {
        opacity: 0,
        y: 60,
        filter: 'blur(8px)',
        stagger: { each: 0.07, from: 'start' },
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
      id="industries"
      className="relative section-pad bg-ink-900 py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(40% 50% at 50% 30%, rgba(124,58,237,0.25), transparent 70%)',
        }}
      />
      <div className="container-max relative">
        <div className="ind-head mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="meta mb-6 text-gold">Who We Build For</span>
          <h2 className="font-display text-4xl font-medium italic leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl">
            If you run it, we'll build the site you need.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-haze-soft sm:text-lg">
            From the garage to the gym floor — friendly, modern websites that fit how your business actually works.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <article
              key={industry.name}
              className="ind-card group relative flex flex-col gap-3 rounded-3xl glass p-5 transition-all duration-300 hover:border-royal-light/50 hover:shadow-glow sm:p-6"
              data-cursor-label="Industry"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-royal/30 to-transparent text-royal-light transition-colors duration-300 group-hover:from-royal/50 group-hover:text-white">
                <Icon name={industry.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-medium italic text-white sm:text-2xl">
                {industry.name}
              </h3>
              <p className="text-sm text-haze-soft">{industry.tag}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                We build for you too
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
