import { useRef } from 'react'
import Icon from './Icon'
import { useIsDesktop, usePrefersReducedMotion } from '../hooks/useMediaQuery'

// Premium pill buttons with a magnetic pull toward the cursor on desktop.
// Variants are tuned for the purple+gold palette.
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  type,
  ...rest
}) {
  const ref = useRef(null)
  const desktop = useIsDesktop()
  const reduced = usePrefersReducedMotion()
  const magnetic = desktop && !reduced

  const onMove = (e) => {
    if (!magnetic || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const dx = (e.clientX - cx) * 0.2
    const dy = (e.clientY - cy) * 0.2
    ref.current.style.transform = `translate(${dx}px, ${dy}px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  const base =
    'group relative inline-flex items-center justify-center gap-3 rounded-full font-meta uppercase tracking-[0.25em] transition-[background,color,border,box-shadow] duration-300 focus-ring will-change-transform'
  const sizes = {
    sm: 'px-4 py-2 text-[0.65rem]',
    md: 'px-6 py-3 text-[0.7rem]',
    lg: 'px-8 py-4 text-xs',
  }
  const variants = {
    primary:
      'bg-royal-gradient text-white shadow-glow hover:shadow-glow-lg',
    gold:
      'bg-gold-gradient text-ink-900 shadow-gold hover:shadow-gold-lg',
    ghost:
      'glass text-white hover:border-royal-light/60',
    outline:
      'border border-gold/70 text-gold hover:bg-gold hover:text-ink-900',
  }
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const inner = (
    <span className="relative z-10 flex items-center gap-3">
      {children}
      {icon && (
        <Icon
          name={icon}
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </span>
  )

  const transitionStyle = {
    transition:
      'transform 0.25s cubic-bezier(0.22,1,0.36,1), background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s',
  }

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cls}
        style={transitionStyle}
        {...rest}
      >
        {inner}
      </a>
    )
  }
  return (
    <button
      ref={ref}
      type={type || 'button'}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cls}
      style={transitionStyle}
      {...rest}
    >
      {inner}
    </button>
  )
}
