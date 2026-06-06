import { motion, useReducedMotion } from 'framer-motion'

// Letter-by-letter (or word-by-word) reveal driven by whileInView. Collapses to
// a plain element under reduced-motion. Whitespace preserved.
export default function SplitTextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
  by = 'letter', // 'letter' | 'word'
  as = 'span',
  once = true,
}) {
  const reduced = useReducedMotion()
  const Tag = motion[as] || motion.span

  if (reduced) return <span className={className}>{text}</span>

  const units = by === 'word' ? text.split(/(\s+)/) : Array.from(text)

  return (
    <Tag
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {units.map((unit, i) => {
        if (/^\s+$/.test(unit)) return <span key={`s${i}`}>{unit}</span>
        return (
          <motion.span
            key={`${unit}-${i}`}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: '0.6em', filter: 'blur(8px)' },
              show: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            aria-hidden="true"
          >
            {unit}
          </motion.span>
        )
      })}
    </Tag>
  )
}
