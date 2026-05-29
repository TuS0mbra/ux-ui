import Reveal from '../components/Reveal'
import Wordmark from '../components/Wordmark'
import Icon from '../components/Icon'
import { Button, Eyebrow } from '../components/ui'
import { scrollToId } from '../lib/scroll'

const PRINCIPLES = [
  { icon: 'sparkle', label: '100% custom — never a template' },
  { icon: 'bolt', label: 'Engineered for speed & SEO' },
  { icon: 'shield', label: 'Direct, hands-on from start to finish' },
]

export default function About() {
  return (
    <section id="about" className="relative section-pad py-24 sm:py-32">
      <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <Eyebrow>About The Studio</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tightest text-white sm:text-4xl lg:text-5xl">
              Hungry, hands-on, and obsessed with making your business look{' '}
              <span className="text-gradient-royal animate-gradient-pan">untouchable</span>.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-haze">
              <p>
                {/* Feel free to rewrite this story in your own voice */}
                S0MBRA Studio is a small, hands-on studio built on a simple belief: a great website
                is the cheapest, hardest-working employee a local business can hire. It works 24/7,
                it never calls in sick, and it decides whether a stranger trusts you in the first
                three seconds.
              </p>
              <p>
                I'll be honest — I'm early in my journey. I'm newer to this than the big agencies,
                and that's exactly why I pour everything into every single project. You work directly
                with me, you get my full obsession and hunger to over-deliver, and you get it at
                prices the established studios can't touch.
              </p>
              <p>
                No account managers, no outsourced teams, no templates dressed up as "custom." Just
                sharp design, fast code, and an obsession with detail that makes the kind of site
                people screenshot and ask, "who built that?"
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
            >
              Work With Me
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-[2.5rem] bg-royal-gradient opacity-30 blur-3xl"
            />
            <div className="flex aspect-square flex-col items-center justify-center gap-6 rounded-[2.5rem] glass-strong p-10 text-center">
              <Wordmark className="text-6xl sm:text-7xl" />
              <p className="font-display text-xs uppercase tracking-[0.45em] text-haze">
                Premium Web Design
              </p>
              <span className="h-px w-24 bg-gold-gradient" aria-hidden="true" />
              <p className="max-w-xs text-sm leading-relaxed text-white/80">
                "I make your business look expensive, modern, and untouchable."
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
