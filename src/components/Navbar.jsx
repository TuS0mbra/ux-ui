import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Wordmark from './Wordmark'
import Icon from './Icon'
import { Button } from './ui'
import { scrollToId } from '../lib/scroll'

const LINKS = [
  { label: 'Index', id: 'industries' },
  { label: 'Edition', id: 'services' },
  { label: 'Collection', id: 'portfolio' },
  { label: 'Tariff', id: 'pricing' },
  { label: 'Studio', id: 'about' },
  { label: 'Correspondence', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] transition-colors duration-500 ${
        scrolled ? 'bg-ink-900/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="relative">
        <nav
          className="container-max flex items-center justify-between px-5 py-4 sm:px-8 lg:px-16"
          aria-label="Primary"
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              go('top')
            }}
            className="focus-ring rounded-sm"
            data-cursor-label="Top"
          >
            <Wordmark className="text-2xl" />
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => go(link.id)}
                  className="focus-ring meta text-haze transition-colors hover:text-gold"
                  data-cursor-label={link.label}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => go('booking')}
              className="hidden sm:inline-flex"
              data-cursor-label="Book"
            >
              Book a Call
            </Button>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="focus-ring flex h-10 w-10 items-center justify-center border border-white/15 text-white lg:hidden"
              data-cursor-label="Menu"
            >
              <Icon name={open ? 'close' : 'menu'} className="h-4 w-4" />
            </button>
          </div>
        </nav>
        {/* hairline rule under the bar when scrolled */}
        <span
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold/20 transition-opacity ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full border-y border-gold/20 bg-ink-900/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-max flex flex-col py-2">
              {LINKS.map((link) => (
                <li key={link.id} className="border-b border-white/5 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    className="focus-ring flex w-full items-center justify-between px-5 py-5 text-left sm:px-8"
                  >
                    <span className="font-display text-2xl italic text-white">{link.label}</span>
                    <span className="meta">0{LINKS.indexOf(link) + 1}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="container-max px-5 pb-5 sm:px-8">
              <Button variant="primary" size="lg" onClick={() => go('booking')} className="w-full">
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
