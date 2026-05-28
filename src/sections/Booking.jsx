import { useEffect, useRef, useState } from 'react'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { Button, SectionHeading } from '../components/ui'
import { SITE } from '../config'

// Calendly, themed to match the site. The iframe only mounts once the section
// nears the viewport, so it never slows the initial (mobile) load.
function CalendlyEmbed() {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin: '400px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Theme params keep the scheduler dark/purple to match the site.
  const themed = `${SITE.calendlyUrl}?hide_gdpr_banner=1&background_color=0a0a0c&text_color=f5f5f7&primary_color=7c3aed`

  return (
    <div ref={ref} className="overflow-hidden rounded-3xl glass-strong">
      {show ? (
        <iframe
          src={themed}
          title="Book a free consultation with S0MBRA Studio"
          loading="lazy"
          className="h-[680px] w-full border-0 bg-ink-800"
        />
      ) : (
        <div className="flex h-[680px] w-full items-center justify-center bg-ink-800 text-haze">
          <span className="animate-pulse font-display text-sm uppercase tracking-[0.3em]">
            Loading scheduler…
          </span>
        </div>
      )}
    </div>
  )
}

export default function Booking() {
  return (
    <section id="booking" className="relative section-pad py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60"
      />
      <div className="container-max relative">
        <Reveal>
          <SectionHeading
            eyebrow="Free Consultation"
            title="Let's Build Something."
            subtitle="Pick a time that works for you. No pressure, no obligation — just a conversation about making your business look unforgettable."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl">
            <CalendlyEmbed />
            <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-haze/70">
              {/* PLACEHOLDER: set your Calendly link in src/config.js (calendlyUrl) */}
              Prefer to talk first?{' '}
              <a href={SITE.phoneHref} className="text-gold-soft underline-offset-4 hover:underline">
                Call {SITE.phoneDisplay}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
