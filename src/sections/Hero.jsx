import { Suspense, lazy } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../components/ui'
import Icon from '../components/Icon'
import { scrollToId } from '../lib/scroll'
import { useIsDesktop, usePrefersReducedMotion } from '../hooks/useMediaQuery'

const HeroScene = lazy(() => import('../components/HeroScene'))

const HEADLINE = ['You', 'Need', 'It.', 'We', 'Make', 'It.']

export default function Hero() {
  const reduced = usePrefersReducedMotion()
  const desktop = useIsDesktop()
  // Load the heavier scene only on motion-friendly devices; lighten it off-desktop.
  const canRender3D = !reduced
  const quality = desktop ? 'high' : 'low'

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* CSS ambient fallback — always present, sits behind the canvas */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink-900" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-90"
        style={{
          background:
            'radial-gradient(70% 60% at 50% 35%, rgba(124,58,237,0.30), transparent 65%), radial-gradient(40% 40% at 80% 80%, rgba(216,178,90,0.10), transparent 70%)',
        }}
      />

      {canRender3D && (
        <Suspense fallback={null}>
          <HeroScene quality={quality} />
        </Suspense>
      )}

      {/* Legibility scrim + bottom fade into the next section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-transparent to-ink-900"
      />

      <div className="container-max section-pad relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.3em] text-haze"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-gold" aria-hidden="true" />
          Vancouver, WA · Web Design Studio
        </motion.div>

        <h1 className="max-w-5xl font-display text-[2.6rem] font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
          {HEADLINE.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className={`mr-[0.25em] inline-block ${
                i === HEADLINE.length - 1 ? 'text-gradient-royal animate-gradient-pan' : ''
              }`}
              initial={reduced ? false : { opacity: 0, y: 26, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-haze sm:text-lg"
        >
          You focus on running your business. We'll build the website that helps it grow.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button variant="primary" size="lg" icon="arrow" onClick={() => scrollToId('booking')}>
            Book a Free Call
          </Button>
          <Button variant="ghost" size="lg" onClick={() => scrollToId('portfolio')}>
            See Our Work
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <button
        type="button"
        onClick={() => scrollToId('industries')}
        aria-label="Scroll to explore"
        className="focus-ring absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-haze md:flex"
      >
        <span className="font-display text-[0.65rem] uppercase tracking-[0.4em]">Scroll</span>
        <span className="relative flex h-9 w-5 justify-center rounded-full border border-white/20">
          <span className="mt-1.5 h-1.5 w-1 animate-scroll-cue rounded-full bg-gold-soft" aria-hidden="true" />
        </span>
      </button>
    </section>
  )
}
