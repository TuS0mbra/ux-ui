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
    <footer className="relative section-pad bg-ink-900 pb-28 pt-12 sm:pb-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div className="container-max">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Wordmark className="text-4xl" />
            <p className="mt-5 text-sm leading-relaxed text-haze-soft">
              Friendly, modern websites for every kind of business in Vancouver, WA. You need it,
              we make it.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="meta text-gold">Explore</span>
            {NAV.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToId(link.id)}
                className="focus-ring w-fit text-left text-sm text-haze-soft transition-colors hover:text-white"
                data-cursor-label={link.label}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="meta text-gold">Connect</span>
            {SITE.contacts.map((c) => (
              <a
                key={c.name}
                href={c.phoneHref}
                className="focus-ring text-sm text-haze-soft transition-colors hover:text-white"
                data-cursor-label="Call"
              >
                {c.name} · {c.phoneDisplay}
              </a>
            ))}
            <a
              href={SITE.emailHref}
              className="focus-ring break-all text-sm text-haze-soft transition-colors hover:text-white"
              data-cursor-label="Email"
            >
              {SITE.email}
            </a>
            <div className="mt-1 flex gap-2">
              <a
                href={SITE.phoneHref}
                aria-label="Call"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full glass text-royal-light transition-colors hover:text-white"
              >
                <Icon name="phone" className="h-5 w-5" />
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

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-haze">© {year} S0MBRA Studio. All rights reserved.</p>
          <p className="meta text-haze">Built for the businesses that built this town</p>
        </div>
      </div>
    </footer>
  )
}
