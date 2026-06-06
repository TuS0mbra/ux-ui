import { useEffect, useRef, useState } from 'react'
import { useIsDesktop, usePrefersReducedMotion } from '../hooks/useMediaQuery'

// Editorial magnetic cursor: a hairline gold ring follows with easing, a tiny
// dot tracks instantly. When hovering an element with [data-cursor-label] (or
// any interactive element), the ring expands and a small uppercase caption
// renders below it. Desktop + motion only.
export default function CustomCursor() {
  const desktop = useIsDesktop()
  const reduced = usePrefersReducedMotion()
  const enabled = desktop && !reduced

  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)
  const [label, setLabel] = useState('')

  useEffect(() => {
    if (!enabled) return undefined

    document.body.classList.add('cursor-active')
    const dot = dotRef.current
    const ring = ringRef.current
    const labelEl = labelRef.current

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...mouse }
    let hoverState = 'idle' // 'idle' | 'hover' | 'labeled'
    let rafId

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (dot) {
        dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`
      }
      const target = e.target.closest('[data-cursor-label], a, button, input, textarea, select')
      if (!target) {
        hoverState = 'idle'
        setLabel('')
        return
      }
      const explicit = target.getAttribute('data-cursor-label')
      if (explicit) {
        hoverState = 'labeled'
        setLabel(explicit)
      } else {
        hoverState = 'hover'
        setLabel('')
      }
    }

    const render = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.2
      ringPos.y += (mouse.y - ringPos.y) * 0.2
      if (ring) {
        const scale = hoverState === 'idle' ? 1 : hoverState === 'hover' ? 1.6 : 2.4
        ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${scale})`
        ring.style.opacity = hoverState === 'idle' ? '0.55' : '0.95'
      }
      if (labelEl) {
        labelEl.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y + 34}px, 0) translate(-50%, 0)`
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
        className="pointer-events-none fixed left-0 top-0 z-[120] h-9 w-9 rounded-full border border-gold/70 mix-blend-difference transition-[opacity] duration-200"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[121] h-1 w-1 rounded-full bg-gold"
      />
      <div
        ref={labelRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[121] whitespace-nowrap font-meta text-[0.6rem] uppercase tracking-[0.4em] text-gold transition-opacity duration-200 ${
          label ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {label}
      </div>
    </>
  )
}
