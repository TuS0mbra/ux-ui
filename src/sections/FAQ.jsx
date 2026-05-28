import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { SectionHeading } from '../components/ui'
import { FAQ as ITEMS } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative section-pad py-24 sm:py-32">
      <div className="container-max max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="Questions" title="Good questions, straight answers." />
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-button-${i}`
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl glass">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="font-display text-base font-medium text-white sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-royal-light transition-transform duration-300 ${
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
                        <p className="px-5 pb-6 text-sm leading-relaxed text-haze sm:px-6">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
