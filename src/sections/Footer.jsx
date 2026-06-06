import Wordmark from '../components/Wordmark'
import Icon from '../components/Icon'
import { SITE } from '../config'
import { scrollToId } from '../lib/scroll'

const NAV = [
  { label: 'Index', id: 'industries' },
  { label: 'Edition', id: 'services' },
  { label: 'Collection', id: 'portfolio' },
  { label: 'Tariff', id: 'pricing' },
  { label: 'Studio', id: 'about' },
  { label: 'Correspondence', id: 'contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative section-pad bg-ink-900 pb-28 pt-20 sm:pb-20">
      <div className="container-max">
        {/* gold rule */}
        <span className="block h-px w-full bg-gold/40" aria-hidden="true" />

        <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="max-w-sm">
            <Wordmark className="text-5xl" />
            <p className="mt-6 text-sm leading-relaxed text-haze">
              Friendly, modern websites for every kind of business in Vancouver, WA.
              You need it, we make it.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="meta text-gold">Chapters</span>
            {NAV.map((link, i) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToId(link.id)}
                className="focus-ring flex w-fit items-baseline gap-3 text-left transition-colors hover:text-gold"
                data-cursor-label={link.label}
              >
                <span className="meta text-haze">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-lg italic text-haze hover:text-white">{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="meta text-gold">Correspondence</span>
            {SITE.contacts.map((c) => (
              <a
                key={c.name}
                href={c.phoneHref}
                className="focus-ring font-display text-lg italic text-haze transition-colors hover:text-white"
                data-cursor-label="Call"
              >
                {c.name} · {c.phoneDisplay}
              </a>
            ))}
            <a
              href={SITE.emailHref}
              className="focus-ring break-all font-display text-lg italic text-haze transition-colors hover:text-white"
              data-cursor-label="Email"
            >
              {SITE.email}
            </a>
            <div className="mt-3 flex gap-2">
              <a
                href={SITE.phoneHref}
                aria-label="Call"
                className="focus-ring flex h-10 w-10 items-center justify-center border border-white/15 text-haze transition-colors hover:border-gold hover:text-gold"
                data-cursor-label="Call"
              >
                <Icon name="phone" className="h-4 w-4" />
              </a>
              <a
                href={SITE.emailHref}
                aria-label="Email"
                className="focus-ring flex h-10 w-10 items-center justify-center border border-white/15 text-haze transition-colors hover:border-gold hover:text-gold"
                data-cursor-label="Email"
              >
                <Icon name="mail" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="meta text-haze">© {year} · S0MBRA Studio · All rights reserved</p>
          <p className="meta text-haze">Edition · MMXXV · Issue 01</p>
        </div>
      </div>
    </footer>
  )
}
