import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

// Canvas-2D drifting gold dust particles. Cheap, smooth, surreal. Sits above
// the gradient orbs and below content as an atmospheric layer.
export default function GoldDust({ density = 70, opacity = 0.7 }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return undefined
    const canvas = ref.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    let raf
    let w
    let h
    let particles = []

    const resize = () => {
      w = canvas.width = window.innerWidth * window.devicePixelRatio
      h = canvas.height = window.innerHeight * window.devicePixelRatio
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    const spawn = () => {
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 0.4 + Math.random() * 1.6,
        vx: -0.15 + Math.random() * 0.3,
        vy: -0.4 - Math.random() * 0.5,
        a: 0.2 + Math.random() * 0.6,
        tone: Math.random() < 0.3 ? 'violet' : 'gold',
      }))
    }
    resize()
    spawn()

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -10) {
          p.y = window.innerHeight + 10
          p.x = Math.random() * window.innerWidth
        }
        if (p.x < -10) p.x = window.innerWidth + 10
        if (p.x > window.innerWidth + 10) p.x = -10
        const color = p.tone === 'gold' ? '231,205,143' : '167,139,250'
        ctx.beginPath()
        ctx.fillStyle = `rgba(${color},${p.a * opacity})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowColor = `rgba(${color},${p.a * opacity})`
        ctx.shadowBlur = 6
      })
      raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [density, opacity, reduced])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[55]"
    />
  )
}
