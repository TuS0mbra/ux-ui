import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Wordmark from './Wordmark'
import Icon from './Icon'
import { Button } from './ui'
import { scrollToId } from '../lib/scroll'

const LINKS = [
  { label: 'Industries', id: 'industries' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'portfolio' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[90] flex justify-center px-4 pt-4">
      <nav
        className={`pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-glow' : 'border border-transparent bg-transparent'
        }`}
        aria-label="Primary"
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            go('top')
          }}
          className="focus-ring rounded-md"
          data-cursor-label="Top"
        >
          <Wordmark className="text-2xl" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                className="focus-ring rounded-full px-4 py-2 text-sm text-haze transition-colors hover:text-white"
                data-cursor-label={link.label}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="md"
            onClick={() => go('booking')}
            className="hidden sm:inline-flex"
            data-cursor-label="Book"
          >
            Book a Free Call
          </Button>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full glass text-white lg:hidden"
            data-cursor-label="Menu"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto absolute inset-x-4 top-20 rounded-3xl glass-strong p-3 shadow-glow lg:hidden"
          >
            <ul className="flex flex-col">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    className="focus-ring w-full rounded-2xl px-4 py-3 text-left font-display text-lg italic text-white/90 transition-colors hover:bg-white/5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <Button variant="primary" size="lg" onClick={() => go('booking')} className="mt-2 w-full">
              Book a Free Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
