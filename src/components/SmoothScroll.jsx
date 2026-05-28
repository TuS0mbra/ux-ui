import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenis } from '../lib/scroll'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

// Momentum / smooth scrolling (Lenis). Disabled entirely when the user prefers
// reduced motion — scrollToId then falls back to native smooth scrolling.
export default function SmoothScroll() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return undefined

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    })
    setLenis(lenis)

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      setLenis(null)
    }
  }, [reduced])

  return null
}
