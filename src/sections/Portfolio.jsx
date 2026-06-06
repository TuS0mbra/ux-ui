import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ChapterIntro from '../components/ChapterIntro'
import PinnedHorizontalScroll from '../components/PinnedHorizontalScroll'
import { PORTFOLIO } from '../data/content'

// Each portfolio entry has its OWN per-business BEFORE and AFTER mock — not a
// shared template recolored. BEFORE = stylized brand-flavored dated mock, NOT
// an impersonation of the live site. AFTER = a tailored editorial redesign
// that wipes in on hover.

const ChromeBar = (
  <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-600/80 px-3 py-2">
    <span className="h-2 w-2 rounded-full bg-white/20" />
    <span className="h-2 w-2 rounded-full bg-white/20" />
    <span className="h-2 w-2 rounded-full bg-white/20" />
  </div>
)

function AfterWipe({ style, children }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden transition-[clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:inset(0_100%_0_0)] group-hover/ba:[clip-path:inset(0_0_0_0)]"
      style={style}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-ink-900/55" />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

// ============================  BURGERVILLE  ============================
function BeforeBurgerville() {
  return (
    <div className="absolute inset-0 bg-[#fff7d4]" aria-hidden="true">
      <div className="flex items-center justify-between bg-[#b91c1c] px-3 py-1.5">
        <span className="font-display text-[10px] font-extrabold uppercase tracking-wider text-white">Burgerville</span>
        <div className="flex gap-2 text-[7px] font-bold uppercase text-white/90">
          <span>Menu</span><span>Locations</span><span>Order</span>
        </div>
      </div>
      <div className="space-y-1.5 p-3">
        <div className="h-12 rounded-sm bg-[#fcd8a4]" />
        <div className="h-1.5 w-1/2 rounded-sm bg-[#7f1d1d]/70" />
        <div className="h-1.5 w-3/4 rounded-sm bg-[#7f1d1d]/45" />
        <div className="flex justify-center pt-1">
          <div className="rounded-sm bg-[#15803d] px-3 py-1 font-display text-[8px] font-bold text-white">ORDER ONLINE</div>
        </div>
      </div>
    </div>
  )
}
function AfterBurgerville() {
  return (
    <AfterWipe style={{ background: 'linear-gradient(135deg,#3a0a05,#9b2412 50%,#f59e0b)' }}>
      <div className="flex h-full flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="font-meta text-xs font-bold uppercase tracking-[0.3em] text-white">Burgerville</span>
          <Icon name="flame" className="h-5 w-5" style={{ color: '#fde68a' }} strokeWidth={1.8} />
        </div>
        <div className="my-auto">
          <h4 className="font-display text-3xl font-medium italic leading-tight text-white sm:text-4xl">Real food.<br />Real fast.</h4>
          <p className="mt-2 text-sm text-white/80">PNW favorites since 1961.</p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-sm bg-[#fde68a] px-4 py-2 font-meta text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#7f1d1d]">Order</span>
          <span className="rounded-sm border border-white/40 px-3 py-2 font-meta text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white">Find a Spot</span>
        </div>
      </div>
    </AfterWipe>
  )
}

// ============================  HEATHEN BREWING  ============================
function BeforeHeathen() {
  return (
    <div className="absolute inset-0 bg-[#1f2a1a]" aria-hidden="true">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <span className="font-display text-[10px] font-bold uppercase tracking-wider text-white/80">Heathen</span>
        <div className="flex gap-2 text-[7px] uppercase text-white/55"><span>Beer</span><span>Visit</span><span>News</span></div>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-4 gap-1.5">
          <div className="h-9 rounded-sm bg-white/10" />
          <div className="h-9 rounded-sm bg-white/10" />
          <div className="h-9 rounded-sm bg-white/10" />
          <div className="h-9 rounded-sm bg-white/10" />
        </div>
        <div className="mt-3 h-1.5 w-1/2 rounded-sm bg-white/20" />
        <div className="mt-1 h-1.5 w-2/3 rounded-sm bg-white/15" />
        <div className="mt-2 inline-block rounded-sm border border-white/40 px-3 py-1 font-display text-[8px] font-bold uppercase text-white/80">Visit Us</div>
      </div>
    </div>
  )
}
function AfterHeathen() {
  return (
    <AfterWipe style={{ background: 'linear-gradient(135deg,#0a0810,#3b0764 55%,#7c3aed)' }}>
      <div className="flex h-full flex-col items-center p-5 text-center">
        <span className="font-meta text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/75">Heathen Brewing</span>
        <div className="my-auto">
          <h4 className="font-display text-3xl font-medium italic uppercase leading-tight tracking-[0.02em] text-white sm:text-4xl">Brewed Heavy</h4>
          <p className="mt-2 text-sm text-white/70">Craft beer · Vancouver, WA</p>
          <div className="mt-5 flex justify-center gap-2">
            <span className="h-10 w-4 border border-[#facc15]/60 bg-white/5" />
            <span className="h-10 w-4 border border-[#facc15]/60 bg-white/5" />
            <span className="h-10 w-4 border border-[#facc15]/60 bg-white/5" />
            <span className="h-10 w-4 border border-[#facc15]/60 bg-white/5" />
          </div>
        </div>
        <span className="rounded-sm bg-[#facc15] px-4 py-2 font-meta text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#1a0a3b]">Visit the Taproom</span>
      </div>
    </AfterWipe>
  )
}

// ============================  KIGGINS THEATRE  ============================
function BeforeKiggins() {
  return (
    <div className="absolute inset-0 bg-[#fde68a]" aria-hidden="true">
      <div className="border-b-2 border-[#7c2d12] bg-[#fbbf24] px-3 py-1.5 text-center">
        <span className="font-serif text-[11px] font-bold tracking-wider text-[#7c2d12]">KIGGINS THEATRE</span>
      </div>
      <div className="space-y-1 p-3">
        <div className="text-center font-display text-[8px] font-bold uppercase tracking-wider text-[#7c2d12]">Now Showing</div>
        <div className="flex justify-between text-[8px] text-[#7c2d12]/80"><span>The Holdovers</span><span>7:00 · 9:30</span></div>
        <div className="flex justify-between text-[8px] text-[#7c2d12]/80"><span>Past Lives</span><span>7:15 · 9:45</span></div>
        <div className="flex justify-between text-[8px] text-[#7c2d12]/80"><span>Anatomy of a Fall</span><span>8:00</span></div>
        <div className="mt-2 flex justify-center">
          <div className="rounded-sm bg-[#7c2d12] px-3 py-1 font-display text-[8px] font-bold text-white">BUY TICKETS</div>
        </div>
      </div>
    </div>
  )
}
function AfterKiggins() {
  return (
    <AfterWipe style={{ background: 'linear-gradient(135deg,#1a0606,#5a0f1a 45%,#c19a3a)' }}>
      <div className="flex h-full flex-col p-5">
        <div className="flex items-center justify-center gap-2 border-b border-[#fde68a]/30 pb-2">
          <span className="h-1 w-1 rounded-full bg-[#fde68a]" />
          <span className="h-1 w-1 rounded-full bg-[#fde68a]" />
          <span className="h-1 w-1 rounded-full bg-[#fde68a]" />
          <span className="h-1 w-1 rounded-full bg-[#fde68a]" />
          <span className="h-1 w-1 rounded-full bg-[#fde68a]" />
          <span className="h-1 w-1 rounded-full bg-[#fde68a]" />
        </div>
        <div className="my-auto text-center">
          <h4 className="font-display text-2xl font-medium italic leading-tight text-white sm:text-3xl">"Where Vancouver goes for film."</h4>
          <p className="mt-4 font-meta text-xs uppercase tracking-[0.3em] text-[#fde68a]">Today · 7:00 · 9:30 · 10:45</p>
        </div>
        <div className="flex justify-center gap-2">
          <span className="rounded-sm bg-[#fde68a] px-4 py-2 font-meta text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#5a0f1a]">Tickets</span>
          <span className="rounded-sm border border-white/40 px-3 py-2 font-meta text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white">What's Playing</span>
        </div>
      </div>
    </AfterWipe>
  )
}

// ============================  LOOWIT BREWING  ============================
function BeforeLoowit() {
  return (
    <div className="absolute inset-0 bg-[#dde2d3]" aria-hidden="true">
      <div className="flex items-center justify-center border-b border-[#3f4a37]/20 px-3 py-2">
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#3f4a37]">Loowit Brewing</span>
      </div>
      <div className="space-y-1.5 p-3">
        <div className="h-1.5 w-full rounded-sm bg-[#3f4a37]/30" />
        <div className="h-1.5 w-5/6 rounded-sm bg-[#3f4a37]/25" />
        <div className="h-1.5 w-3/4 rounded-sm bg-[#3f4a37]/20" />
        <div className="h-1.5 w-2/3 rounded-sm bg-[#3f4a37]/15" />
        <div className="mt-2 inline-block rounded-sm border border-[#3f4a37]/40 px-3 py-1 font-display text-[8px] font-bold uppercase text-[#3f4a37]">Find Our Beer</div>
      </div>
    </div>
  )
}
function AfterLoowit() {
  return (
    <AfterWipe style={{ background: 'linear-gradient(135deg,#0b1a1a,#134e4a 60%,#22c55e)' }}>
      <div className="flex h-full">
        <div className="flex flex-1 flex-col justify-between p-5">
          <span className="font-meta text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">Loowit</span>
          <div>
            <h4 className="font-display text-2xl font-medium italic leading-tight text-white sm:text-3xl">Volcanic beer.<br />Local roots.</h4>
            <p className="mt-2 text-sm text-white/70">Brewed at the foot of Mt. St. Helens.</p>
          </div>
          <span className="self-start rounded-sm bg-[#fde68a] px-4 py-2 font-meta text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#0b1a1a]">Taproom</span>
        </div>
        <div className="relative flex-1">
          <svg viewBox="0 0 100 80" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <polygon points="0,80 35,25 50,45 70,15 100,80" fill="rgba(255,255,255,0.14)" />
            <polygon points="0,80 25,40 45,55 100,80" fill="rgba(0,0,0,0.28)" />
            <line x1="70" y1="15" x2="73" y2="22" stroke="#fde68a" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </AfterWipe>
  )
}

// ============================  BEACHES RESTAURANT  ============================
function BeforeBeaches() {
  return (
    <div className="absolute inset-0 bg-[#cde2ee]" aria-hidden="true">
      <div className="flex items-center justify-between bg-[#1e3a8a] px-3 py-1.5">
        <span className="font-display text-[10px] font-bold uppercase tracking-wider text-white">Beaches</span>
        <div className="flex gap-2 text-[7px] uppercase text-white/80"><span>Menu</span><span>Reserve</span><span>About</span></div>
      </div>
      <div className="p-3">
        <div className="h-14 rounded-sm bg-[#5b8ec7]" />
        <div className="mt-2 h-1.5 w-2/3 rounded-sm bg-[#1e3a8a]/60" />
        <div className="mt-1 h-1.5 w-1/2 rounded-sm bg-[#1e3a8a]/40" />
        <div className="mt-2 inline-block rounded-sm border border-[#1e3a8a]/60 px-3 py-1 font-display text-[8px] font-bold uppercase text-[#1e3a8a]">Reservation</div>
      </div>
    </div>
  )
}
function AfterBeaches() {
  return (
    <AfterWipe style={{ background: 'linear-gradient(180deg,#0c1e3a 0%,#1d4ed8 35%,#f59e0b 75%,#fef3c7 100%)' }}>
      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 rounded-full bg-[#fef3c7] opacity-60 blur-md" />
      <div className="pointer-events-none absolute right-10 top-10 h-10 w-10 rounded-full bg-[#fef3c7]" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/90 via-ink-900/45 to-transparent p-5">
        <div className="flex items-center justify-between">
          <span className="font-meta text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">Beaches</span>
          <Icon name="wine" className="h-4 w-4" style={{ color: '#fef3c7' }} strokeWidth={1.6} />
        </div>
        <h4 className="mt-2 font-display text-2xl font-medium italic leading-tight text-white sm:text-3xl">Sunset, riverside,<br />every night.</h4>
        <div className="mt-4 flex gap-2">
          <span className="rounded-sm bg-[#fef3c7] px-4 py-2 font-meta text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#0c1e3a]">Reserve</span>
          <span className="rounded-sm border border-white/40 px-3 py-2 font-meta text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white">Menu</span>
        </div>
      </div>
    </AfterWipe>
  )
}

// ============================  TRAP DOOR BREWING  ============================
function BeforeTrap() {
  return (
    <div className="absolute inset-0 bg-[#0a0a0a]" aria-hidden="true">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <span className="font-display text-[10px] font-bold uppercase tracking-wider text-[#e11d48]">TRAP DOOR</span>
        <div className="flex gap-2 text-[7px] uppercase text-white/55"><span>Beer</span><span>Food</span><span>Visit</span></div>
      </div>
      <div className="space-y-2 p-3">
        <div className="h-12 rounded-sm bg-white/5" />
        <div className="h-1.5 w-1/2 rounded-sm bg-white/15" />
        <div className="mt-1 inline-block rounded-sm border border-[#e11d48]/60 px-3 py-1 font-display text-[8px] font-bold uppercase text-[#e11d48]">Visit Us</div>
      </div>
    </div>
  )
}
function AfterTrap() {
  return (
    <AfterWipe style={{ background: 'radial-gradient(70% 70% at 50% 50%, #581c87 0%, #080208 70%)' }}>
      <div className="flex h-full flex-col items-center justify-center p-5 text-center">
        <span className="font-meta text-[0.65rem] uppercase tracking-[0.5em] text-white/60">trap door</span>
        <h4 className="mt-5 font-display text-3xl font-medium italic leading-tight text-white sm:text-4xl">Pull the handle.</h4>
        <p className="mt-2 font-display text-base italic text-white/70">Find a pint.</p>
        <span className="mt-7 rounded-sm border border-[#fde68a]/60 bg-[#fde68a]/10 px-5 py-2 font-meta text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#fde68a]">Visit the Taproom</span>
      </div>
    </AfterWipe>
  )
}

const BEFORE_BY = {
  Burgerville: BeforeBurgerville,
  'Heathen Brewing': BeforeHeathen,
  'Kiggins Theatre': BeforeKiggins,
  'Loowit Brewing': BeforeLoowit,
  'Beaches Restaurant': BeforeBeaches,
  'Trap Door Brewing': BeforeTrap,
}
const AFTER_BY = {
  Burgerville: AfterBurgerville,
  'Heathen Brewing': AfterHeathen,
  'Kiggins Theatre': AfterKiggins,
  'Loowit Brewing': AfterLoowit,
  'Beaches Restaurant': AfterBeaches,
  'Trap Door Brewing': AfterTrap,
}

function BeforeAfter({ project }) {
  const Before = BEFORE_BY[project.name]
  const After = AFTER_BY[project.name]
  if (!Before || !After) return null
  return (
    <div className="group/ba relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-ink-700">
      {ChromeBar}
      <div className="relative h-[calc(100%-29px)] w-full">
        <Before />
        <After />
        <span className="absolute left-4 top-4 z-10 bg-black/55 px-2 py-1 font-meta text-[0.55rem] uppercase tracking-[0.4em] text-white/75 transition-opacity duration-300 group-hover/ba:opacity-0">
          Before
        </span>
        <span className="absolute right-4 top-4 z-10 bg-gold/90 px-2 py-1 font-meta text-[0.55rem] uppercase tracking-[0.4em] text-ink-900 opacity-0 transition-opacity duration-300 group-hover/ba:opacity-100">
          After
        </span>
      </div>
    </div>
  )
}

function PortfolioPanel({ project, index, count }) {
  return (
    <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <div className="w-full" data-cursor-label="Hover">
        <BeforeAfter project={project} />
      </div>
      <aside className="flex flex-col gap-5">
        <div className="flex items-baseline justify-between border-b border-gold/30 pb-3">
          <span className="meta text-gold">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <span className="meta text-haze">Concept</span>
        </div>
        <h3 className="font-display text-4xl font-medium italic leading-[1] text-white sm:text-5xl lg:text-6xl">
          {project.name}
        </h3>
        <p className="meta text-haze">{project.category}</p>
        <p className="max-w-md text-base leading-relaxed text-haze">{project.blurb}</p>
        <span className="meta mt-2 text-gold">Hover to see the redesign →</span>
      </aside>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-oxblood-deep">
      <div className="container-max section-pad pb-16 pt-32 sm:pt-40">
        <ChapterIntro number="03" title="The Collection." caption="Concept work · Vancouver, WA" />
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-haze sm:text-lg">
          Hover any card to see the redesign. These are unsolicited concept
          reimaginings of real Vancouver, WA businesses — each one designed
          differently around what that business actually does.
        </p>
      </div>

      <PinnedHorizontalScroll count={PORTFOLIO.length}>
        {(i) => (
          <PortfolioPanel project={PORTFOLIO[i]} index={i} count={PORTFOLIO.length} />
        )}
      </PinnedHorizontalScroll>

      <div className="container-max section-pad pb-32">
        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center font-meta text-[0.65rem] uppercase tracking-[0.3em] text-haze/70">
            Unsolicited concept redesigns of real Vancouver, WA businesses — not paid client work.
            "Before" mockups are stylized approximations for contrast, not the businesses' actual sites.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
