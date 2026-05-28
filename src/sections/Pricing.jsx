import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import Icon from '../components/Icon'
import { Button, SectionHeading } from '../components/ui'
import { PRICING } from '../data/content'
import { scrollToId } from '../lib/scroll'

export default function Pricing() {
  return (
    <section id="pricing" className="relative section-pad py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-glow opacity-50"
      />
      <div className="container-max relative">
        <Reveal>
          <SectionHeading
            eyebrow="Investment"
            title="Pricing that pays for itself."
            subtitle="Transparent starting points. Every project begins with a free call and a fixed quote — no hourly meters, no surprises."
          />
        </Reveal>

        <div className="mt-16 grid items-end gap-5 lg:grid-cols-3">
          {PRICING.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <TiltCard className="rounded-[2rem]" max={6} glow={!tier.popular}>
                <article
                  className={`relative flex h-full flex-col gap-6 rounded-[2rem] p-7 sm:p-8 ${
                    tier.popular
                      ? 'glass-strong border-gold/40 shadow-gold lg:-translate-y-4 lg:scale-[1.03]'
                      : 'glass'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-gradient px-4 py-1 font-display text-xs font-semibold uppercase tracking-wider text-ink-900 shadow-gold">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="mt-1 text-sm text-haze">{tier.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    {/* PLACEHOLDER price — set in src/data/content.js (PRICING) */}
                    <span
                      className={`font-display text-4xl font-bold ${
                        tier.popular ? 'text-gradient-gold' : 'text-white'
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-haze">{tier.cadence}</span>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/85">
                        <Icon
                          name="check"
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            tier.popular ? 'text-gold' : 'text-royal-light'
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.popular ? 'gold' : 'ghost'}
                    size="lg"
                    onClick={() => scrollToId('booking')}
                    className="mt-auto w-full"
                  >
                    {tier.cta}
                  </Button>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
