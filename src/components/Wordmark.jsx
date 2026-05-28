// "S0MBRA" wordmark — elegant semi-cursive serif (Cormorant Garamond italic).
// The zero reads as an O but is geometrically distinct via a gold gradient +
// a refined inner ring. Decorative letters are aria-hidden; the wrapper carries
// the accessible name.
export default function Wordmark({ className = '', glow = true, as = 'span' }) {
  const Tag = as
  return (
    <Tag
      aria-label="Sombra Studio"
      role="img"
      className={`relative inline-flex select-none items-baseline font-serif italic leading-none tracking-tight ${className}`}
    >
      <span aria-hidden="true" className="text-white/95">
        S
      </span>
      {/* The stylized zero */}
      <span aria-hidden="true" className="relative inline-flex items-center justify-center px-[0.02em]">
        <span className="text-gradient-gold not-italic" style={{ fontFeatureSettings: '"lnum" 1' }}>
          0
        </span>
        <span
          className="pointer-events-none absolute inset-[18%_28%] rounded-full border border-gold-soft/50"
          aria-hidden="true"
        />
      </span>
      <span aria-hidden="true" className="text-white/95">
        MBRA
      </span>
      {glow && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-4 -inset-y-2 -z-10 rounded-full opacity-70 blur-2xl"
          style={{ background: 'radial-gradient(closest-side, rgba(124,58,237,0.35), transparent)' }}
        />
      )}
    </Tag>
  )
}
