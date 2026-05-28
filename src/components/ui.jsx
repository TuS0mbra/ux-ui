import Icon from './Icon'

// --- Button ---------------------------------------------------------------
// Renders as <a> when href is set, otherwise <button>. Variants tuned for the
// cyber-luxury palette.
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  ...rest
}) {
  const base =
    'focus-ring group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-medium transition-all duration-300 will-change-transform'
  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }
  const variants = {
    primary:
      'bg-royal-gradient text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5',
    gold:
      'bg-gold-gradient text-ink-900 shadow-gold hover:-translate-y-0.5 hover:shadow-[0_0_70px_-12px_rgba(216,178,90,0.7)]',
    ghost:
      'glass text-white hover:border-royal-light/40 hover:-translate-y-0.5',
  }
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <Icon
            name={icon}
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          />
        )}
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls} {...rest}>
      {inner}
    </button>
  )
}

// --- Section heading ------------------------------------------------------
export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display text-[0.7rem] uppercase tracking-[0.4em] text-gold-soft ${className}`}
    >
      <span className="h-px w-6 bg-gold/60" aria-hidden="true" />
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignCls} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tightest text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="text-base leading-relaxed text-haze sm:text-lg">{subtitle}</p>}
    </div>
  )
}
