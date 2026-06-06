import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ChapterIntro from '../components/ChapterIntro'
import { Button } from '../components/ui'
import { SITE } from '../config'
import { scrollToId } from '../lib/scroll'

// "Begin" — minimal cinematic close. One massive line, tap-to-call buttons.
export default function Booking() {
  return (
    <section id="booking" className="relative section-pad bg-ink-900 py-32 sm:py-40">
      <div className="container-max">
        <ChapterIntro number="07" title="Begin." caption="A free consultation" />

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-haze sm:text-lg">
          Tap to call or text and we'll set up a free, no-pressure consultation —
          just a quick conversation about making your business look unforgettable.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {SITE.contacts.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <article className="flex flex-col gap-6 border-t border-gold/30 pt-8">
                <div className="flex items-baseline justify-between">
                  <span className="meta text-gold">0{i + 1}</span>
                  <Icon name="phone" className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-4xl font-medium italic leading-none text-white sm:text-5xl">
                    {c.name}
                  </h3>
                  <p className="meta mt-3 text-haze">{c.phoneDisplay}</p>
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <Button variant="solid" size="md" href={c.phoneHref} data-cursor-label="Call">
                    Call {c.name}
                  </Button>
                  <Button variant="ghost" size="md" href={c.smsHref} data-cursor-label="Text">
                    Send a Text
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-20 flex flex-col items-start gap-3 border-t border-white/10 pt-10">
            <span className="meta text-haze">Prefer to write it out?</span>
            <button
              type="button"
              onClick={() => scrollToId('contact')}
              className="focus-ring group flex items-baseline gap-4 text-left"
              data-cursor-label="Write"
            >
              <span className="font-display text-3xl italic text-white transition-colors group-hover:text-gold sm:text-4xl">
                Send a message instead
              </span>
              <Icon
                name="arrow"
                className="h-4 w-4 text-gold transition-transform group-hover:translate-x-2"
              />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
