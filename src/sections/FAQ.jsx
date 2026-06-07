import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import Icon from '../components/Icon'
import { FAQ as ITEMS } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.faq-head > *', {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.from('.faq-item', {
        opacity: 0,
        y: 30,
        stagger: 0.06,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="faq" className="relative section-pad bg-ink-900 py-32 sm:py-40">
      <div className="container-max max-w-3xl">
        <div className="faq-head mx-auto flex flex-col items-center text-center">
          <span className="meta mb-6 text-gold">Questions</span>
          <h2 className="font-display text-4xl font-medium italic leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl">
            Good questions, straight answers.
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-button-${i}`
            return (
              <div key={item.q} className="faq-item overflow-hidden rounded-2xl glass">
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    data-cursor-label={isOpen ? 'Close' : 'Open'}
                  >
                    <span className="font-display text-lg italic text-white sm:text-xl">{item.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <Icon name="chevron" className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-6 text-sm leading-relaxed text-haze-soft sm:px-6">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
