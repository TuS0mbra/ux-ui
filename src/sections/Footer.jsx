import Wordmark from '../components/Wordmark'
import Icon from '../components/Icon'
import { SITE } from '../config'
import { scrollToId } from '../lib/scroll'

const NAV = [
  { label: 'Industries', id: 'industries' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'portfolio' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative section-pad pb-28 pt-20 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal/40 to-transparent"
      />
      <div className="container-max">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Wordmark className="text-4xl" />
            <p className="mt-5 text-sm leading-relaxed text-haze">
              Premium websites that make local businesses look expensive, modern, and untouchable.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold-soft">
              Explore
            </span>
            {NAV.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToId(link.id)}
                className="focus-ring w-fit text-left text-sm text-haze transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold-soft">
              Connect
            </span>
            {/* PLACEHOLDER contact values live in src/config.js */}
            <a href={SITE.phoneHref} className="focus-ring text-sm text-haze hover:text-white">
              {SITE.phoneDisplay}
            </a>
            <a href={SITE.emailHref} className="focus-ring text-sm text-haze hover:text-white">
              {SITE.email}
            </a>
            <div className="mt-1 flex gap-2">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full glass text-royal-light transition-colors hover:text-white"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a
                href={SITE.emailHref}
                aria-label="Email"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full glass text-royal-light transition-colors hover:text-white"
              >
                <Icon name="mail" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-haze/70">© {year} S0MBRA Studio. All rights reserved.</p>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-haze/70">
            Designed to make you look expensive
          </p>
        </div>
      </div>
    </footer>
  )
}
