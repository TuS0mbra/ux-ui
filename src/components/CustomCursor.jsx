import { useEffect, useRef } from 'react'
import { useIsDesktop, usePrefersReducedMotion } from '../hooks/useMediaQuery'

// Glowing reactive cursor (desktop, pointer:fine, motion-on only).
// A crisp dot tracks instantly; a larger glow ring follows with easing and
// expands over interactive elements.
export default function CustomCursor() {
  const desktop = useIsDesktop()
  const reduced = usePrefersReducedMotion()
  const enabled = desktop && !reduced

  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!enabled) return undefined

    document.body.classList.add('cursor-active')
    const dot = dotRef.current
    const ring = ringRef.current

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...mouse }
    let hovering = false
    let rafId

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (dot) {
        dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`
      }
      const interactive = e.target.closest('a, button, [data-cursor="hover"], input, textarea, select')
      hovering = Boolean(interactive)
    }

    const render = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.18
      ringPos.y += (mouse.y - ringPos.y) * 0.18
      if (ring) {
        const scale = hovering ? 1.8 : 1
        ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${scale})`
        ring.style.opacity = hovering ? '0.9' : '0.55'
      }
      rafId = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(render)

    return () => {
      document.body.classList.remove('cursor-active')
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[120] h-10 w-10 rounded-full border border-royal-light/70 mix-blend-screen"
        style={{ boxShadow: '0 0 24px rgba(139,92,246,0.65)' }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[121] h-1.5 w-1.5 rounded-full bg-gold-soft"
        style={{ boxShadow: '0 0 12px rgba(231,205,143,0.9)' }}
      />
    </>
  )
}
