import { Suspense, lazy, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import Marquee from '../components/Marquee'
import { Button } from '../components/ui'
import { scrollToId } from '../lib/scroll'
import { useIsDesktop, usePrefersReducedMotion } from '../hooks/useMediaQuery'

// Lazy-load WebGL so the heavy chunk only ships when actually rendered.
const AuroraScene = lazy(() => import('../components/AuroraScene'))

const LETTERS = ['S', '0', 'M', 'B', 'R', 'A']

export default function Hero() {
  const ref = useRef(null)
  const desktop = useIsDesktop()
  const reduced = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (reduced) {
        gsap.set('.hero-letter, .hero-rule, .hero-sub, .hero-ctas, .hero-tag', {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        })
        return undefined
      }
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-tag', { opacity: 0, y: 14, duration: 0.6 })
        .from(
          '.hero-letter',
          {
            opacity: 0,
            y: 100,
            filter: 'blur(20px)',
            stagger: 0.1,
            duration: 1.1,
          },
          '-=0.3',
        )
        .from('.hero-rule', { scaleX: 0, duration: 1.4 }, '-=0.4')
        .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8 }, '-=0.8')
        .from('.hero-ctas', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')

      if (desktop) {
        const letters = ref.current.querySelectorAll('.hero-letter')
        const onMove = (e) => {
          const cx = e.clientX / window.innerWidth - 0.5
          const cy = e.clientY / window.innerHeight - 0.5
          letters.forEach((l, i) => {
            const depth = 1 + (i % 3) * 0.6
            gsap.to(l, {
              x: cx * 22 * depth,
              y: cy * 14 * depth,
              duration: 1.2,
              ease: 'power2.out',
              overwrite: 'auto',
            })
          })
        }
        document.addEventListener('mousemove', onMove)
        return () => document.removeEventListener('mousemove', onMove)
      }
      return undefined
    },
    { scope: ref, dependencies: [reduced, desktop] },
  )

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink-900"
    >
      {/* CSS aurora gradient as fallback (always present, behind canvas) */}
      <div aria-hidden="true" className="absolute inset-0 bg-aurora opacity-90" />

      {/* WebGL aurora + embers + stars */}
      {!reduced && (
        <Suspense fallback={null}>
          <AuroraScene />
        </Suspense>
      )}

      <div className="container-max section-pad relative z-10 flex flex-col items-center pb-24 pt-24 text-center">
        <span className="hero-tag meta mb-7 inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-gold">
          <span
            className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-gold"
            aria-hidden="true"
          />
          Vancouver, WA · Web Design Studio
        </span>

        <h1
          aria-label="Sombra Studio"
          className="font-display italic leading-[0.82] tracking-tightest text-white"
          style={{ fontSize: 'clamp(5rem, 22vw, 22rem)' }}
        >
          {LETTERS.map((char, i) => (
            <span
              key={i}
              className={`hero-letter inline-block ${
                char === '0' ? 'text-gradient-gold not-italic' : ''
              }`}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </h1>

        <span
          aria-hidden="true"
          className="hero-rule mt-8 block h-px w-3/4 origin-left bg-gold-gradient sm:w-2/3 lg:w-1/2"
        />

        <p className="hero-sub mt-8 max-w-xl text-lg leading-relaxed text-haze-soft sm:text-xl">
          You focus on running your business. We'll build the website that helps it grow.
        </p>

        <div className="hero-ctas mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
          <Button
            variant="primary"
            size="lg"
            icon="arrow"
            onClick={() => scrollToId('booking')}
            data-cursor-label="Book"
          >
            Book a Free Call
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => scrollToId('portfolio')}
            data-cursor-label="View"
          >
            View Our Work
          </Button>
        </div>
      </div>

      {/* bottom marquee */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-y border-gold/20 bg-ink-900/40 py-3 backdrop-blur-sm">
        <Marquee speed={32}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-2xl italic text-white/85 sm:text-3xl"
            >
              <span>Made by us.</span>
              <span className="meta text-gold">★</span>
              <span>Made for you.</span>
              <span className="meta text-gold">★</span>
              <span>Vancouver, Washington.</span>
              <span className="meta text-gold">★</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
