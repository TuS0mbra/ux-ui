import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import Wordmark from '../components/Wordmark'
import Icon from '../components/Icon'
import { Button } from '../components/ui'
import { scrollToId } from '../lib/scroll'

const PRINCIPLES = [
  { icon: 'sparkle', label: '100% custom — never a template' },
  { icon: 'bolt', label: 'Engineered for speed & SEO' },
  { icon: 'shield', label: 'Direct, hands-on from start to finish' },
]

export default function About() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.about-left > *', {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.from('.about-card', {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="about" className="relative section-pad bg-ink-900 py-32 sm:py-40">
      <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="about-left">
          <span className="meta text-gold">About the Studio</span>
          <h2 className="mt-5 font-display text-4xl font-medium italic leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl">
            Hungry, hands-on, and obsessed with building websites that feel like{' '}
            <span className="text-gradient-royal animate-gradient-pan">yours</span>.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-haze-soft">
            <p>
              S0MBRA Studio is a small Vancouver, WA studio built on a simple belief: a great
              website is the cheapest, hardest-working employee a local business can hire. It works
              24/7, it never calls in sick, and it decides whether a stranger trusts you in the
              first three seconds.
            </p>
            <p>
              We'll be honest — we're early in our journey. We're newer to this than the big
              agencies, and that's exactly why we pour everything into every single project. You
              work directly with us, you get our full attention, and you get it at prices the
              established studios can't touch.
            </p>
          </div>

          <ul className="mt-8 flex flex-col gap-3">
            {PRINCIPLES.map((p) => (
              <li key={p.label} className="flex items-center gap-3 text-sm text-white/90">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-gold-soft">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                {p.label}
              </li>
            ))}
          </ul>

          <Button
            variant="primary"
            size="lg"
            icon="arrow"
            className="mt-9"
            onClick={() => scrollToId('booking')}
            data-cursor-label="Work With Us"
          >
            Work With Us
          </Button>
        </div>

        <div className="about-card relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-[2.5rem] bg-royal-gradient opacity-40 blur-3xl"
          />
          <div className="flex aspect-square flex-col items-center justify-center gap-6 rounded-[2.5rem] glass-strong p-10 text-center">
            <Wordmark className="text-6xl sm:text-7xl" glow />
            <p className="meta">Vancouver · WA · Web Design</p>
            <span className="h-px w-24 bg-gold-gradient" aria-hidden="true" />
            <p className="max-w-xs font-display text-xl italic text-white/90">
              "You need it. We make it."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
