import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { Button, SectionHeading } from '../components/ui'
import { SITE } from '../config'
import { scrollToId } from '../lib/scroll'

// Book by calling or texting — one tap from a phone, no scheduler needed.
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
            subtitle="Tap to call or text and we'll set up a free, no-pressure consultation — just a quick conversation about making your business look unforgettable."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {SITE.contacts.map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-center gap-5 rounded-3xl glass-strong p-7 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal/30 to-transparent text-royal-light">
                  <Icon name="phone" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold text-white">{c.name}</p>
                  <p className="text-sm text-haze">{c.phoneDisplay}</p>
                </div>
                <div className="flex w-full gap-2">
                  <Button variant="gold" size="md" href={c.phoneHref} className="flex-1">
                    Call
                  </Button>
                  <Button variant="ghost" size="md" href={c.smsHref} className="flex-1">
                    Text
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 text-center">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-haze/70">
              Prefer to write it out?
            </span>
            <Button variant="primary" size="lg" icon="arrow" onClick={() => scrollToId('contact')}>
              Send a Message Instead
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
