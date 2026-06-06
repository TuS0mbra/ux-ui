import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ChapterIntro from '../components/ChapterIntro'
import { FAQ as ITEMS } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative section-pad bg-graphite py-32 sm:py-40">
      <div className="container-max max-w-4xl">
        <ChapterIntro number="08" title="Footnotes." caption="Good questions, straight answers" />

        <ul className="mt-20 border-t border-white/10">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-button-${i}`
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <li className="border-b border-white/10">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="focus-ring flex w-full items-baseline gap-6 py-7 text-left"
                      data-cursor-label={isOpen ? 'Close' : 'Open'}
                    >
                      <span className="meta shrink-0 text-gold">{String(i + 1).padStart(2, '0')}</span>
                      <span className="flex-1 font-display text-2xl italic leading-snug text-white sm:text-3xl">
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 text-gold transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <Icon name="chevron" className="h-5 w-5" />
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
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="ml-[3.25rem] max-w-2xl pb-7 text-base leading-relaxed text-haze">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
