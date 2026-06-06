import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

// Fixed full-viewport film-grain texture for dark chapters. Inline SVG noise so
// nothing is fetched. Animates a subtle position jitter unless reduced-motion.
export default function GrainOverlay({ opacity = 0.06 }) {
  const reduced = usePrefersReducedMotion()
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[60] mix-blend-overlay ${
        reduced ? '' : 'animate-grain-flicker'
      }`}
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280' viewBox='0 0 280 280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        backgroundSize: '280px 280px',
      }}
      aria-hidden="true"
    />
  )
}
