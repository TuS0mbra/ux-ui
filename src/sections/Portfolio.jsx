import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import Icon from '../components/Icon'
import { SectionHeading } from '../components/ui'
import { PORTFOLIO } from '../data/content'

// Each portfolio card has its OWN per-business BEFORE and AFTER mock — not a
// shared template recolored. The BEFORE is a stylized approximation of the
// brand's general current vibe (clearly not a literal copy); the AFTER is a
// distinct redesigned layout tailored to the business. The wipe + browser
// chrome are shared via small primitives.

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
      <div className="flex h-full flex-col p-3">
        <div className="flex items-center justify-between">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white">Burgerville</span>
          <Icon name="flame" className="h-4 w-4" style={{ color: '#fde68a' }} strokeWidth={1.8} />
        </div>
        <div className="my-auto">
          <h4 className="font-display text-[15px] font-bold leading-tight text-white">Real food.<br />Real fast.</h4>
          <p className="mt-1 text-[10px] text-white/75">PNW favorites since 1961.</p>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-full bg-[#fde68a] px-3 py-1 text-[9px] font-bold text-[#7f1d1d]">Order Now</span>
          <span className="rounded-full border border-white/40 px-2.5 py-1 text-[9px] font-medium text-white">Find a Spot</span>
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
      <div className="flex h-full flex-col items-center p-3 text-center">
        <span className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-white/75">Heathen Brewing</span>
        <div className="my-auto">
          <h4 className="font-display text-[15px] font-extrabold uppercase leading-tight tracking-[0.04em] text-white">Brewed Heavy</h4>
          <p className="mt-1 text-[10px] text-white/70">Craft beer · Vancouver, WA</p>
          <div className="mt-3 flex justify-center gap-1.5">
            <span className="h-7 w-3 rounded-sm border border-[#facc15]/60 bg-white/5" />
            <span className="h-7 w-3 rounded-sm border border-[#facc15]/60 bg-white/5" />
            <span className="h-7 w-3 rounded-sm border border-[#facc15]/60 bg-white/5" />
            <span className="h-7 w-3 rounded-sm border border-[#facc15]/60 bg-white/5" />
          </div>
        </div>
        <span className="rounded-full bg-[#facc15] px-3 py-1 text-[9px] font-bold text-[#1a0a3b]">Visit the Taproom</span>
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
      <div className="flex h-full flex-col p-3">
        <div className="flex items-center justify-center gap-1 border-b border-[#fde68a]/30 pb-1.5">
          <span className="h-1 w-1 rounded-full bg-[#fde68a]/80" />
          <span className="h-1 w-1 rounded-full bg-[#fde68a]/80" />
          <span className="h-1 w-1 rounded-full bg-[#fde68a]/80" />
          <span className="h-1 w-1 rounded-full bg-[#fde68a]/80" />
          <span className="h-1 w-1 rounded-full bg-[#fde68a]/80" />
          <span className="h-1 w-1 rounded-full bg-[#fde68a]/80" />
        </div>
        <div className="my-auto text-center">
          <h4 className="font-serif text-[14px] font-semibold italic leading-tight text-white">"Where Vancouver goes for film."</h4>
          <p className="mt-2 font-display text-[8px] uppercase tracking-[0.25em] text-[#fde68a]">Today · 7:00 · 9:30 · 10:45</p>
        </div>
        <div className="flex justify-center gap-1.5">
          <span className="rounded-full bg-[#fde68a] px-3 py-1 text-[9px] font-bold text-[#5a0f1a]">Get Tickets</span>
          <span className="rounded-full border border-white/40 px-2.5 py-1 text-[9px] font-medium text-white">What's Playing</span>
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
        <div className="flex flex-1 flex-col justify-between p-3">
          <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-white">Loowit</span>
          <div>
            <h4 className="font-display text-[12px] font-bold leading-tight text-white">Volcanic beer.<br />Local roots.</h4>
            <p className="mt-1 text-[9px] text-white/70">Brewed at the foot of Mt. St. Helens.</p>
          </div>
          <span className="self-start rounded-full bg-[#fde68a] px-2.5 py-1 text-[9px] font-bold text-[#0b1a1a]">Taproom Hours</span>
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
      <div className="pointer-events-none absolute right-3 top-3 h-12 w-12 rounded-full bg-[#fef3c7] opacity-60 blur-md" />
      <div className="pointer-events-none absolute right-5 top-5 h-8 w-8 rounded-full bg-[#fef3c7]" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/90 via-ink-900/45 to-transparent p-3">
        <div className="flex items-center justify-between">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-white">Beaches</span>
          <Icon name="wine" className="h-3.5 w-3.5" style={{ color: '#fef3c7' }} strokeWidth={1.6} />
        </div>
        <h4 className="mt-1 font-serif text-[13px] font-semibold italic leading-tight text-white">Sunset, riverside,<br />every night.</h4>
        <div className="mt-2 flex gap-1.5">
          <span className="rounded-full bg-[#fef3c7] px-3 py-1 text-[9px] font-bold text-[#0c1e3a]">Reserve a Table</span>
          <span className="rounded-full border border-white/40 px-2.5 py-1 text-[9px] font-medium text-white">See the Menu</span>
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
      <div className="flex h-full flex-col items-center justify-center p-3 text-center">
        <span className="font-display text-[8px] uppercase tracking-[0.5em] text-white/60">trap door</span>
        <h4 className="mt-3 font-display text-[15px] font-extrabold leading-tight text-white">Pull the handle.</h4>
        <p className="mt-1 font-serif text-[10px] italic text-white/70">Find a pint.</p>
        <span className="mt-4 rounded-full border border-[#fde68a]/60 bg-[#fde68a]/10 px-4 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#fde68a]">Visit the Taproom</span>
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
    <div className="group/ba relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-700">
      {ChromeBar}
      <div className="relative h-[calc(100%-29px)] w-full">
        <Before />
        <After />
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/55 px-2 py-1 font-display text-[0.6rem] uppercase tracking-widest text-white/75 transition-opacity duration-300 group-hover/ba:opacity-0">
          Before
        </span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative section-pad py-24 sm:py-32">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            eyebrow="Concept Work · Vancouver, WA"
            title="What we'd build for our city."
            subtitle="Hover any card to see the redesign. These are unsolicited concept reimaginings of real Vancouver, WA businesses — each one designed differently around what that business actually does."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 0.06}>
              <TiltCard className="h-full rounded-3xl" max={6}>
                <article className="flex h-full flex-col gap-4 rounded-3xl glass p-4 sm:p-5">
                  <BeforeAfter project={project} />
                  <div className="flex items-start justify-between gap-3 px-1">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{project.name}</h3>
                      <p className="text-xs uppercase tracking-wider text-haze">{project.category}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-royal/15 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-royal-light">
                      Concept
                    </span>
                  </div>
                  <p className="px-1 text-sm leading-relaxed text-haze">{project.blurb}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[0.7rem] uppercase tracking-[0.25em] text-haze/70">
            Unsolicited concept redesigns of real Vancouver, WA businesses — not paid client work.
            "Before" mockups are stylized approximations for contrast, not the businesses' actual sites.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
