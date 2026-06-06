import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../components/ui'
import Marquee from '../components/Marquee'
import { scrollToId } from '../lib/scroll'

const LETTERS = ['S', '0', 'M', 'B', 'R', 'A']

// Title Page — viewport-tall kinetic wordmark, edition tag, sweep, marquee.
// No WebGL. One slow-orbiting hairline ring is the only ambient element.
export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink-900 pt-24"
    >
      {/* ambient orbiting hairline ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[120vmin] w-[120vmin] animate-orbit-slow rounded-full border border-gold/15" />
      </div>
      {/* soft radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-90"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 45%, rgba(201,162,39,0.10), transparent 70%)',
        }}
      />

      {/* edition meta tags */}
      <div className="container-max section-pad relative z-10 flex items-start justify-between">
        <motion.span
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="meta"
        >
          Edition · MMXXV · Issue 01
        </motion.span>
        <motion.span
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="meta hidden sm:inline-flex"
        >
          Vancouver · WA
        </motion.span>
      </div>

      {/* wordmark + sweep */}
      <div className="container-max section-pad relative z-10 my-auto flex flex-col items-center text-center">
        <h1
          aria-label="Sombra Studio"
          className="font-display italic leading-[0.82] tracking-tightest text-white"
          style={{ fontSize: 'clamp(5rem, 22vw, 22rem)' }}
        >
          {LETTERS.map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              aria-hidden="true"
              className={`inline-block ${char === '0' ? 'text-gradient-gold not-italic' : ''}`}
              initial={reduced ? false : { opacity: 0, y: '0.6em', filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.9,
                delay: 0.45 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        {/* gold underline sweep */}
        <motion.span
          initial={reduced ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 block h-px w-3/4 origin-left bg-gold/80 sm:w-2/3 lg:w-1/2"
          aria-hidden="true"
        />

        {/* CTAs */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
        >
          <Button
            variant="solid"
            size="lg"
            icon="arrow"
            onClick={() => scrollToId('booking')}
            data-cursor-label="Book"
          >
            Book a Call
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => scrollToId('portfolio')}
            data-cursor-label="View"
          >
            View the Collection
          </Button>
        </motion.div>
      </div>

      {/* tickering motto marquee */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="relative z-10 mt-10 border-y border-gold/20 py-3"
      >
        <Marquee speed={36}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display italic text-2xl text-white/80 sm:text-3xl"
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
      </motion.div>
    </section>
  )
}
