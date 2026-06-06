// "S0MBRA" wordmark — Cormorant Garamond italic. The zero reads as O but is
// geometrically distinct via a gold gradient + a refined inner ring. Decorative
// letters are aria-hidden; the wrapper carries the accessible name.
//
// variant="default" — inline use in navbar, footer, etc.
// variant="kinetic" — the giant hero treatment: oversized, letters animate in
//   sequence (driven by the Hero section's own framer-motion).
export default function Wordmark({ className = '', as = 'span' }) {
  const Tag = as
  return (
    <Tag
      aria-label="Sombra Studio"
      role="img"
      className={`relative inline-flex select-none items-baseline font-display italic leading-none ${className}`}
    >
      <span aria-hidden="true">S</span>
      <span aria-hidden="true" className="relative inline-flex items-center justify-center px-[0.02em]">
        <span className="text-gradient-gold not-italic" style={{ fontFeatureSettings: '"lnum" 1' }}>
          0
        </span>
        <span
          className="pointer-events-none absolute inset-[18%_28%] rounded-full border border-gold-soft/40"
          aria-hidden="true"
        />
      </span>
      <span aria-hidden="true">MBRA</span>
    </Tag>
  )
}
