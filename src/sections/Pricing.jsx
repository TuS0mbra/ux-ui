import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import Icon from '../components/Icon'
import { Button } from '../components/ui'
import GradientOrbs from '../components/GradientOrbs'
import { PRICING } from '../data/content'
import { scrollToId } from '../lib/scroll'

export default function Pricing() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.price-head > *', {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.from('.price-note', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.price-note', start: 'top 85%' },
      })
      gsap.from('.price-tier', {
        opacity: 0,
        y: 80,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.price-tiers', start: 'top 80%' },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="pricing" className="relative section-pad bg-ink-900 py-32 sm:py-40">
      <GradientOrbs palette="gold" intensity={0.9} />
      <div className="container-max relative">
        <div className="price-head mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="meta mb-6 text-gold">Pricing</span>
          <h2 className="font-display text-4xl font-medium italic leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl">
            Honest prices for great work.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-haze-soft sm:text-lg">
            Transparent starting points. Every project begins with a free call and a fixed quote —
            no hourly meters, no surprise invoices.
          </p>
        </div>

        <div className="price-note mx-auto mt-10 max-w-2xl rounded-2xl glass px-6 py-5 text-center">
          <p className="font-meta text-xs font-semibold uppercase tracking-[0.35em] text-gold-soft">
            Founder Pricing
          </p>
          <p className="mt-3 text-sm leading-relaxed text-haze-soft">
            We're early in our journey and building S0MBRA from the ground up — so you get
            obsessive, hands-on work at rates well below what local designers usually charge. These
            are the lowest prices we'll ever offer; as our portfolio and skills grow, so will they.{' '}
            <span className="text-white">Get in now and lock in your rate.</span>
          </p>
        </div>

        <div className="price-tiers mt-16 grid items-end gap-5 lg:grid-cols-3">
          {PRICING.map((tier) => (
            <article
              key={tier.name}
              className={`price-tier relative flex h-full flex-col gap-6 rounded-[2rem] p-7 sm:p-8 ${
                tier.popular
                  ? 'glass-strong border-gold/50 shadow-gold lg:-translate-y-4 lg:scale-[1.04]'
                  : 'glass hover:border-royal-light/40 hover:shadow-glow'
              }`}
              data-cursor-label={tier.popular ? 'Most Popular' : 'View'}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-gradient px-4 py-1 font-meta text-[0.6rem] font-bold uppercase tracking-[0.3em] text-ink-900 shadow-gold">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-display text-3xl font-medium italic text-white">{tier.name}</h3>
                <p className="mt-1 text-sm text-haze-soft">{tier.tagline}</p>
              </div>

              <div className="flex items-baseline gap-2 border-y border-white/10 py-5">
                <span
                  className={`font-display text-5xl font-medium italic ${
                    tier.popular ? 'text-gradient-gold' : 'text-white'
                  }`}
                >
                  {tier.price}
                </span>
                <span className="meta text-haze">{tier.cadence}</span>
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
                size="md"
                onClick={() => scrollToId('booking')}
                className="mt-auto w-full"
                data-cursor-label="Book"
              >
                {tier.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
