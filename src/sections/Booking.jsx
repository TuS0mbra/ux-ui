import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import Icon from '../components/Icon'
import GradientOrbs from '../components/GradientOrbs'
import { Button } from '../components/ui'
import { SITE } from '../config'
import { scrollToId } from '../lib/scroll'

export default function Booking() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.book-head > *', {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.from('.book-card', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="booking" className="relative section-pad bg-ink-900 py-32 sm:py-40">
      <GradientOrbs intensity={1} />
      <div className="container-max relative">
        <div className="book-head mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="meta mb-6 text-gold">Free Consultation</span>
          <h2 className="font-display text-4xl font-medium italic leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl">
            Let's build something.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-haze-soft sm:text-lg">
            Tap to call or text and we'll set up a free, no-pressure consultation — just a quick
            conversation about making your business look unforgettable.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-5 sm:grid-cols-2">
          {SITE.contacts.map((c) => (
            <article
              key={c.name}
              className="book-card flex flex-col items-center gap-5 rounded-3xl glass-strong p-8 text-center shadow-glow"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal/40 to-transparent text-royal-light">
                <Icon name="phone" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-2xl font-medium italic text-white">{c.name}</p>
                <p className="meta mt-2 text-haze-soft">{c.phoneDisplay}</p>
              </div>
              <div className="flex w-full gap-2">
                <Button variant="gold" size="md" href={c.phoneHref} className="flex-1" data-cursor-label="Call">
                  Call
                </Button>
                <Button variant="ghost" size="md" href={c.smsHref} className="flex-1" data-cursor-label="Text">
                  Text
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="meta text-haze">Prefer to write it out?</span>
          <Button
            variant="primary"
            size="lg"
            icon="arrow"
            onClick={() => scrollToId('contact')}
            data-cursor-label="Write"
          >
            Send a Message Instead
          </Button>
        </div>
      </div>
    </section>
  )
}
