import Icon from './Icon'
import { SITE } from '../config'
import { scrollToId } from '../lib/scroll'

// Always-visible mobile conversion bar: one tap to reach the studio from
// anywhere on the page. Editorial flat treatment, hairline gold border.
export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[95] border-t border-gold/30 bg-ink-900/90 backdrop-blur-md md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-stretch divide-x divide-white/10">
        <a
          href={SITE.phoneHref}
          className="focus-ring flex flex-1 items-center justify-center gap-2 py-4 font-meta text-[0.7rem] uppercase tracking-[0.3em] text-white active:bg-white/5"
        >
          <Icon name="phone" className="h-3.5 w-3.5 text-gold" />
          Call · Text
        </a>
        <button
          type="button"
          onClick={() => scrollToId('booking')}
          className="focus-ring flex flex-1 items-center justify-center gap-2 bg-gold py-4 font-meta text-[0.7rem] uppercase tracking-[0.3em] text-ink-900 active:bg-gold-soft"
        >
          <Icon name="calendar" className="h-3.5 w-3.5" />
          Book a Call
        </button>
      </div>
    </div>
  )
}
