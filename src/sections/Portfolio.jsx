import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import Icon from '../components/Icon'
import { SectionHeading } from '../components/ui'
import { PORTFOLIO } from '../data/content'

// Pure-CSS mock "screenshots" — zero image assets, every card is brand-themed.
// BEFORE is a deliberately generic dated-template stand-in (NOT the business's
// real site); on hover, the branded AFTER concept wipes across.
function BeforeAfter({ project }) {
  const { brand, beforeHue } = project
  return (
    <div className="group/ba relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-700">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-600/80 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>

      <div className="relative h-[calc(100%-29px)] w-full">
        {/* BEFORE — generic dated template (stylized, not the business's real site) */}
        <div
          className="absolute inset-0 p-4"
          style={{ background: `hsl(${beforeHue} 16% 86%)` }}
          aria-hidden="true"
        >
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-1/3 rounded-sm bg-black/45" />
            <div className="flex gap-1.5">
              <div className="h-1.5 w-6 rounded-sm bg-black/25" />
              <div className="h-1.5 w-6 rounded-sm bg-black/25" />
            </div>
          </div>
          <div className="mt-3 h-9 w-full rounded-sm bg-black/10" />
          <div className="mt-3 h-1.5 w-3/4 rounded-sm bg-black/20" />
          <div className="mt-1.5 h-1.5 w-2/3 rounded-sm bg-black/20" />
          <div className="mt-4 flex gap-2">
            <div className="h-7 w-16 rounded-sm bg-black/30" />
            <div className="h-7 w-16 rounded-sm bg-black/15" />
          </div>
        </div>

        {/* AFTER — branded concept site mock */}
        <div
          className="absolute inset-0 transition-[clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:inset(0_100%_0_0)] group-hover/ba:[clip-path:inset(0_0_0_0)]"
          style={{
            background: `linear-gradient(135deg, ${brand.palette.from}, ${brand.palette.via}, ${brand.palette.to})`,
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-ink-900/55" />
          <div className="relative flex h-full flex-col p-3">
            <div className="flex items-center justify-between">
              <span className="font-display text-[9px] font-semibold uppercase tracking-[0.18em] text-white/95">
                {project.name}
              </span>
              <span style={{ color: brand.palette.accent }}>
                <Icon name={brand.motif} className="h-3.5 w-3.5" strokeWidth={1.8} />
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1">
              <h4 className="font-display text-sm font-bold leading-tight text-white sm:text-[15px]">
                {brand.headline}
              </h4>
              <p className="text-[10px] leading-snug text-white/75">{brand.sub}</p>
            </div>
            <div className="flex gap-1.5">
              <span
                className="rounded-full px-2.5 py-1 text-[9px] font-semibold"
                style={{ background: brand.palette.accent, color: '#1a0a05' }}
              >
                {brand.ctaPrimary}
              </span>
              <span className="rounded-full border border-white/40 px-2.5 py-1 text-[9px] font-medium text-white">
                {brand.ctaSecondary}
              </span>
            </div>
          </div>
        </div>

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
            subtitle="Hover any card to see the redesign. These are unsolicited concept reimaginings of real Vancouver, WA businesses — a small love letter to the city, and a preview of what we'd build for you."
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
            Unsolicited concept redesigns for real Vancouver, WA businesses — not paid client work.
            "Before" mockups are stylized for contrast, not the businesses' actual sites.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
