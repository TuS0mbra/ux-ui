import Reveal from '../components/Reveal'
import ChapterIntro from '../components/ChapterIntro'
import Icon from '../components/Icon'
import { Button } from '../components/ui'
import { PRICING } from '../data/content'
import { scrollToId } from '../lib/scroll'

// The Tariff — the entire site's signature move. Palette flips to ivory + ink
// for one chapter. Gold rule sweeps on entry and exit. Tier cards are editorial.
export default function Pricing() {
  return (
    <section id="pricing" className="ivory relative section-pad py-32 sm:py-40">
      {/* gold rule sweep on entry */}
      <Reveal>
        <div className="mx-auto h-px w-full origin-left bg-gold/60" />
      </Reveal>

      <div className="container-max mt-20">
        {/* Localized ChapterIntro override — needs ink-on-ivory color */}
        <div className="flex w-full flex-col gap-6 items-start text-left">
          <div className="flex w-full items-baseline justify-between gap-6">
            <span className="font-meta text-[0.65rem] uppercase tracking-[0.4em] text-ink-900/60">
              Chapter 05
            </span>
            <span className="font-meta text-[0.65rem] uppercase tracking-[0.4em] text-ink-900/60">
              Investment
            </span>
          </div>
          <span className="block h-px w-full origin-left bg-ink-900/30" />
          <h2 className="font-display text-[2.4rem] font-medium italic leading-[1.02] tracking-tightest text-ink-900 sm:text-5xl lg:text-[4.2rem]">
            The Tariff.
          </h2>
        </div>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-900/70 sm:text-lg">
          Transparent starting points. Every project begins with a free call and a
          fixed quote — no hourly meters, no surprise invoices.
        </p>

        {/* Editor's note (founder pricing) */}
        <Reveal delay={0.05}>
          <div className="mt-10 max-w-2xl border-l-2 border-gold pl-6">
            <p className="font-meta text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-gold-deep">
              Editor's note
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-900/80">
              We're early in our journey and building S0MBRA from the ground up — so
              you get obsessive, hands-on work at rates well below what local
              designers usually charge. These are the lowest prices we'll ever
              offer; as our portfolio and skills grow, so will they.{' '}
              <span className="font-medium text-ink-900">Get in now and lock in your rate.</span>
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid items-end gap-6 lg:grid-cols-3">
          {PRICING.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col gap-7 border p-8 transition-all duration-500 ${
                  tier.popular
                    ? 'border-ink-900 bg-ivory-soft lg:-translate-y-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]'
                    : 'border-ink-900/20 bg-transparent hover:border-ink-900'
                }`}
                data-cursor-label={tier.popular ? 'Most Popular' : 'View'}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-meta text-[0.65rem] uppercase tracking-[0.4em] text-ink-900/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {tier.popular && (
                    <span className="font-meta text-[0.65rem] font-bold uppercase tracking-[0.4em] text-gold-deep">
                      Most Popular
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-3xl font-medium italic leading-none text-ink-900 sm:text-4xl">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-900/60">{tier.tagline}</p>
                </div>

                <div className="flex items-baseline gap-3 border-y border-ink-900/15 py-6">
                  <span className="font-display text-5xl font-medium italic leading-none text-ink-900 sm:text-6xl">
                    {tier.price}
                  </span>
                  <span className="meta text-ink-900/60">{tier.cadence}</span>
                </div>

                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-ink-900/85">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? 'solid' : 'inverse'}
                  size="md"
                  onClick={() => scrollToId('booking')}
                  className="mt-auto w-full"
                  data-cursor-label="Book"
                >
                  {tier.cta}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* gold rule sweep on exit */}
      <Reveal>
        <div className="mx-auto mt-24 h-px w-full origin-left bg-gold/60" />
      </Reveal>
    </section>
  )
}
