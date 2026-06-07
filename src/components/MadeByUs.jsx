import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { scrollToId } from '../lib/scroll'
import { Button } from './ui'

// PROMINENT "we built this site too" pitch — sits right under the hero so it
// hits every visitor. The site itself is the strongest credibility piece S0MBRA
// has, so we lead with it.
export default function MadeByUs() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.mbu-line-1',
        { opacity: 0, y: 30, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        },
      )
      gsap.fromTo(
        '.mbu-line-2',
        { opacity: 0, y: 30, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        },
      )
      gsap.fromTo(
        '.mbu-rule',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.3,
          ease: 'power3.out',
          delay: 0.4,
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        },
      )
      gsap.fromTo(
        '.mbu-cta',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.6,
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        },
      )
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      className="relative section-pad py-24 sm:py-32"
      aria-labelledby="mbu-heading"
    >
      <div className="container-max flex flex-col items-center text-center">
        <span className="meta mb-8 inline-flex items-center gap-3 text-gold">
          <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
          You're looking at our portfolio
          <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
        </span>

        <h2
          id="mbu-heading"
          className="mbu-line-1 max-w-4xl font-display text-4xl font-medium italic leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl"
        >
          Yes — we designed this entire site.
        </h2>

        <p className="mbu-line-2 mt-6 max-w-2xl text-lg leading-relaxed text-haze-soft sm:text-xl">
          Every animation, every word, the 3D, the whole experience — built by hand by us.
          What you're scrolling through right now is a live preview of what we'll build for your business.
        </p>

        <span
          aria-hidden="true"
          className="mbu-rule mt-10 block h-px w-40 origin-left bg-gold-gradient"
        />

        <div className="mbu-cta mt-10">
          <Button
            variant="primary"
            size="lg"
            icon="arrow"
            onClick={() => scrollToId('booking')}
            data-cursor-label="Book"
          >
            Get One Like This
          </Button>
        </div>
      </div>
    </section>
  )
}
