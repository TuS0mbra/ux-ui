import { useEffect, useState } from 'react'

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}

export const usePrefersReducedMotion = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)')

// "Desktop" = roomy viewport AND a precise pointer (mouse). Drives whether the
// custom cursor, 3D tilt, and heavier WebGL effects are enabled.
export const useIsDesktop = () =>
  useMediaQuery('(min-width: 1024px) and (pointer: fine)')
