import { motion, useReducedMotion } from 'framer-motion'

// A hairline gold rule that sweeps from left to right when it enters view.
// Used as section dividers and inside ChapterIntro.
export default function GoldDivider({ className = '', delay = 0, height = '1px' }) {
  const reduced = useReducedMotion()
  return (
    <motion.span
      className={`block w-full origin-left bg-gold/60 ${className}`}
      style={{ height }}
      initial={reduced ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      aria-hidden="true"
    />
  )
}
