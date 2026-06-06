import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'

// Pin the section vertically and pan its inner row horizontally as the page
// scrolls. The outer ref is `n * 100vh` tall — that's the "scroll budget" for
// the horizontal pan. Mobile (< lg) short-circuits to a normal vertical stack.
export default function PinnedHorizontalScroll({
  children,
  count,
  className = '',
  // Approximate horizontal travel as a fraction. count=6 → cards 0..5; we want
  // to translate left so the last card aligns to the right edge. Default scales
  // with count.
}) {
  const isLarge = useMediaQuery('(min-width: 1024px)')
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  // Translate from 0% to roughly -((count - 1) / count) * 100% so each card
  // takes one slot and they fully pan past the viewport.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${((count - 1) / count) * 100}%`],
  )

  if (!isLarge) {
    return (
      <div className={`flex flex-col gap-6 ${className}`}>
        {/* Mobile: vertical stack of the same cards */}
        {Array.from({ length: count }).map((_, i) => (
          <div key={i}>{children(i, 1)}</div>
        ))}
      </div>
    )
  }

  // Desktop: pinned + horizontal pan
  return (
    <section ref={ref} className={`relative ${className}`} style={{ height: `${count * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x, width: `${count * 100}vw` }}
          className="flex h-full will-change-transform"
        >
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex h-full w-screen shrink-0 items-center justify-center px-12 xl:px-24">
              {children(i, count)}
            </div>
          ))}
        </motion.div>
        {/* Progress indicator */}
        <ProgressIndicator scrollYProgress={scrollYProgress} count={count} />
      </div>
    </section>
  )
}

function ProgressIndicator({ scrollYProgress, count }) {
  const widthPct = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <div className="absolute bottom-10 left-12 right-12 z-10 flex items-center gap-6">
      <span className="meta">01 — Burgerville</span>
      <div className="relative h-px flex-1 bg-white/15">
        <motion.div style={{ width: widthPct }} className="absolute inset-y-0 left-0 bg-gold" />
      </div>
      <span className="meta">{String(count).padStart(2, '0')} — End</span>
    </div>
  )
}
