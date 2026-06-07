import { useEffect, useRef, useState } from 'react'
import { useIsDesktop, usePrefersReducedMotion } from '../hooks/useMediaQuery'

// Magnetic cursor: a glowing royal ring follows with easing, a gold dot tracks
// instantly. Interactive targets can set [data-cursor-label] to display a small
// editorial caption. Desktop + motion only.
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
    let hoverState = 'idle'
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
      ringPos.x += (mouse.x - ringPos.x) * 0.18
      ringPos.y += (mouse.y - ringPos.y) * 0.18
      if (ring) {
        const scale = hoverState === 'idle' ? 1 : hoverState === 'hover' ? 1.8 : 2.6
        ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${scale})`
        ring.style.opacity = hoverState === 'idle' ? '0.7' : '1'
      }
      if (labelEl) {
        labelEl.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y + 36}px, 0) translate(-50%, 0)`
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
        className="pointer-events-none fixed left-0 top-0 z-[120] h-10 w-10 rounded-full border border-royal-light/80 mix-blend-screen transition-[opacity] duration-200"
        style={{ boxShadow: '0 0 20px rgba(167,139,250,0.6)' }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[121] h-1.5 w-1.5 rounded-full bg-gold-soft"
        style={{ boxShadow: '0 0 10px rgba(231,205,143,0.9)' }}
      />
      <div
        ref={labelRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[121] whitespace-nowrap font-meta text-[0.6rem] uppercase tracking-[0.4em] text-gold-soft transition-opacity duration-200 ${
          label ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {label}
      </div>
    </>
  )
}
