// Shared scroll controller. SmoothScroll registers the active Lenis instance;
// everything else navigates through scrollToId so behavior stays consistent
// whether smooth-scroll is on (desktop) or off (reduced-motion / fallback).
let lenisRef = null

export function setLenis(instance) {
  lenisRef = instance
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenisRef) {
    lenisRef.scrollTo(el, { offset: -8, duration: 1.2 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
