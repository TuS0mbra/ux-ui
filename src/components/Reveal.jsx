import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered reveal. Collapses to a plain element under reduced-motion.
export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 30,
  once = true,
}) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
