import { motion, useReducedMotion } from 'framer-motion'
import GoldDivider from './GoldDivider'

// Each section opens with this metadata block: chapter number, chapter title,
// and a sweeping gold rule. Sets the editorial-magazine tone.
export default function ChapterIntro({
  number,
  title,
  caption,
  align = 'left',
  className = '',
}) {
  const reduced = useReducedMotion()
  const alignCls =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div className={`flex w-full flex-col gap-6 ${alignCls} ${className}`}>
      <div
        className={`flex w-full items-baseline justify-between gap-6 ${
          align === 'center' ? 'flex-col items-center gap-2' : ''
        }`}
      >
        <span className="meta">Chapter {number}</span>
        <span className="meta">{caption}</span>
      </div>
      <GoldDivider />
      <motion.h2
        initial={reduced ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="font-display text-[2.4rem] font-medium italic leading-[1.02] tracking-tightest sm:text-5xl lg:text-[4.2rem]"
      >
        {title}
      </motion.h2>
    </div>
  )
}
