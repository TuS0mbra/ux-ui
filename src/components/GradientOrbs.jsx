import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

// Ambient atmosphere: large, soft, drifting + breathing color orbs. Purple,
// violet, gold. Sits behind a section's content as a low-z layer.
// Pass `palette` to pick the mix; pass `intensity` (0–1) to dial them up/down.
export default function GradientOrbs({
  palette = 'royal',
  intensity = 1,
  className = '',
}) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  const orbs =
    palette === 'gold'
      ? [
          { c: 'rgba(212,175,55,.30)', w: 800, h: 800, t: '-20%', l: '-15%' },
          { c: 'rgba(124,58,237,.32)', w: 700, h: 700, b: '-25%', r: '0%' },
          { c: 'rgba(231,205,143,.22)', w: 550, h: 550, t: '20%', r: '20%' },
        ]
      : [
          { c: 'rgba(124,58,237,.45)', w: 900, h: 900, t: '-25%', l: '-18%' },
          { c: 'rgba(76,29,149,.55)', w: 800, h: 800, b: '-25%', r: '-10%' },
          { c: 'rgba(167,139,250,.30)', w: 600, h: 600, t: '15%', r: '15%' },
          { c: 'rgba(212,175,55,.18)', w: 500, h: 500, b: '10%', l: '20%' },
        ]

  useGSAP(
    () => {
      if (reduced) return
      const els = ref.current.querySelectorAll('.grad-orb')
      els.forEach((orb, i) => {
        gsap.fromTo(
          orb,
          { x: 0, y: 0 },
          {
            x: i % 2 === 0 ? 180 : -140,
            y: i % 2 === 0 ? -120 : 140,
            duration: 7 + i * 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          },
        )
        gsap.fromTo(
          orb,
          { scale: 1 },
          {
            scale: 1.35,
            duration: 5 + i * 1.5,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: i * 1.5,
          },
        )
        gsap.to(orb, {
          rotation: 360,
          duration: 40 + i * 10,
          ease: 'none',
          repeat: -1,
        })
      })
    },
    { scope: ref, dependencies: [palette, reduced] },
  )

  return (
    <div ref={ref} className={`section-grad ${className}`} aria-hidden="true">
      {orbs.map((o, i) => (
        <div
          key={i}
          className="grad-orb"
          style={{
            background: o.c,
            width: o.w * intensity,
            height: o.h * intensity,
            top: o.t,
            left: o.l,
            right: o.r,
            bottom: o.b,
          }}
        />
      ))}
    </div>
  )
}
