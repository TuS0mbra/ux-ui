import { useRef, useState } from 'react'
import { useIsDesktop, usePrefersReducedMotion } from '../hooks/useMediaQuery'

// 3D hover tilt + a soft glow that tracks the cursor. Desktop + motion only.
export default function TiltCard({
  children,
  className = '',
  max = 9,
  glow = true,
}) {
  const ref = useRef(null)
  const desktop = useIsDesktop()
  const reduced = usePrefersReducedMotion()
  const enabled = desktop && !reduced

  const [transform, setTransform] = useState('')
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

  const handleMove = (e) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * -2 * max
    const ry = (px - 0.5) * 2 * max
    setTransform(`perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(1.015)`)
    setGlowPos({ x: px * 100, y: py * 100 })
  }

  const handleLeave = () => {
    setHovered(false)
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)')
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => enabled && setHovered(true)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: enabled ? transform : undefined,
        transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)',
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {glow && enabled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(220px circle at ${glowPos.x}% ${glowPos.y}%, rgba(139,92,246,0.22), transparent 60%)`,
          }}
        />
      )}
      {children}
    </div>
  )
}
