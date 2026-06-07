import Icon from './Icon'
import { SITE } from '../config'
import { scrollToId } from '../lib/scroll'

// Always-visible mobile conversion bar: one tap to reach the studio from
// anywhere on the page.
export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[95] md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="m-3 flex items-stretch gap-2 rounded-2xl glass-strong p-2 shadow-glow">
        <a
          href={SITE.phoneHref}
          className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 py-3.5 font-meta text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white transition-colors active:bg-white/10"
        >
          <Icon name="phone" className="h-4 w-4 text-gold-soft" />
          Call · Text
        </a>
        <button
          type="button"
          onClick={() => scrollToId('booking')}
          className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-xl bg-royal-gradient py-3.5 font-meta text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white shadow-glow"
        >
          <Icon name="calendar" className="h-4 w-4" />
          Book a Call
        </button>
      </div>
    </div>
  )
}
