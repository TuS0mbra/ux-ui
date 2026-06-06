// CSS-only infinite horizontal marquee. Children duplicated so the loop is
// seamless. Use sparingly — a single tickering line under the hero.
export default function Marquee({ children, className = '', speed = 28 }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="flex w-max animate-marquee will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center pr-12">{children}</div>
        <div className="flex shrink-0 items-center pr-12">{children}</div>
      </div>
    </div>
  )
}
