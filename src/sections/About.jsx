import Reveal from '../components/Reveal'
import ChapterIntro from '../components/ChapterIntro'
import Wordmark from '../components/Wordmark'
import Icon from '../components/Icon'
import { Button } from '../components/ui'
import { scrollToId } from '../lib/scroll'

const PRINCIPLES = [
  '100% custom — never a template',
  'Engineered for speed & SEO',
  'Direct, hands-on from start to finish',
]

export default function About() {
  return (
    <section id="about" className="relative section-pad bg-ink-900 py-32 sm:py-40">
      <div className="container-max grid items-start gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
        <div>
          <ChapterIntro number="09" title="The Studio." caption="About S0MBRA" />

          <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-haze sm:text-lg">
            <p>
              S0MBRA Studio is a small Vancouver, WA studio built on a simple belief: a great
              website is the cheapest, hardest-working employee a local business can hire. It
              works 24/7, it never calls in sick, and it decides whether a stranger trusts you
              in the first three seconds.
            </p>
            <p>
              We'll be honest — we're early in our journey. We're newer to this than the big
              agencies, and that's exactly why we pour everything into every single project.
              You work directly with us, you get our full attention, and you get it at prices
              the established studios can't touch.
            </p>
            <p>
              No account managers, no outsourced teams, no templates dressed up as "custom."
              Just friendly, sharp design and fast code that fits the business you actually
              run — and the kind of site people screenshot and ask, "who built that?"
            </p>
          </div>

          <ul className="mt-12 space-y-4 border-t border-white/10 pt-8">
            {PRINCIPLES.map((p, i) => (
              <li key={p} className="flex items-baseline gap-6">
                <span className="meta text-gold">0{i + 1}</span>
                <span className="font-display text-xl italic text-white sm:text-2xl">{p}</span>
              </li>
            ))}
          </ul>

          {/* P.S. — we built this site too */}
          <Reveal delay={0.1}>
            <div className="mt-12 flex items-start gap-5 border-l border-gold pl-6">
              <div>
                <p className="font-meta text-[0.65rem] font-bold uppercase tracking-[0.4em] text-gold">
                  Editor's Note
                </p>
                <p className="mt-3 max-w-xl font-display text-xl italic leading-relaxed text-white sm:text-2xl">
                  P.S. — we built this site too. The motion, the typography, the booking flow,
                  every word — all hand-built by us. It's a live preview of what we'll build
                  for your business.
                </p>
              </div>
            </div>
          </Reveal>

          <Button
            variant="primary"
            size="lg"
            icon="arrow"
            className="mt-12"
            onClick={() => scrollToId('booking')}
            data-cursor-label="Work With Us"
          >
            Work With Us
          </Button>
        </div>

        <Reveal delay={0.1}>
          <aside className="sticky top-32 flex flex-col items-center gap-8 border border-white/10 p-10 text-center">
            <span className="meta text-gold">Studio Card</span>
            <Wordmark className="text-5xl sm:text-6xl" />
            <span className="block h-px w-16 bg-gold/70" aria-hidden="true" />
            <p className="meta text-haze">Vancouver · WA</p>
            <p className="max-w-xs font-display text-lg italic text-white">
              "You need it. We make it."
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
