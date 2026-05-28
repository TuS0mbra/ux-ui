import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import Icon from '../components/Icon'
import { SectionHeading } from '../components/ui'
import { PORTFOLIO } from '../data/content'

// Pure-CSS mock "screenshots" so there are zero image assets to ship. The
// BEFORE layer is a dated/flat mock; on hover an AFTER layer wipes across to
// dramatize the redesign. All projects are clearly-labeled placeholders.
function BeforeAfter({ project }) {
  return (
    <div className="group/ba relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-700">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-600/80 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>

      <div className="relative h-[calc(100%-29px)] w-full">
        {/* BEFORE — dated, flat */}
        <div
          className="absolute inset-0 p-4"
          style={{ background: `hsl(${project.beforeHue} 18% 88%)` }}
          aria-hidden="true"
        >
          <div className="h-3 w-1/3 rounded-sm bg-black/40" />
          <div className="mt-3 h-10 w-full rounded-sm bg-black/10" />
          <div className="mt-3 h-2 w-3/4 rounded-sm bg-black/20" />
          <div className="mt-2 h-2 w-2/3 rounded-sm bg-black/20" />
          <div className="mt-4 flex gap-2">
            <div className="h-8 w-16 rounded-sm bg-black/30" />
            <div className="h-8 w-16 rounded-sm bg-black/15" />
          </div>
        </div>

        {/* AFTER — cinematic, wipes in on hover */}
        <div
          className="absolute inset-0 p-4 transition-[clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:inset(0_100%_0_0)] group-hover/ba:[clip-path:inset(0_0_0_0)]"
          style={{
            background: `linear-gradient(135deg, ${project.afterFrom}, ${project.afterTo})`,
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-ink-900/55" />
          <div className="relative">
            <div className="h-3 w-1/4 rounded-full bg-gold-soft/90" />
            <div className="mt-4 h-6 w-3/4 rounded-md bg-white/90" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-white/40" />
            <div className="mt-5 flex gap-2">
              <div className="h-8 w-20 rounded-full bg-white/90" />
              <div className="h-8 w-20 rounded-full border border-white/40" />
            </div>
          </div>
        </div>

        {/* labels */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/50 px-2 py-1 font-display text-[0.6rem] uppercase tracking-widest text-white/70 transition-opacity duration-300 group-hover/ba:opacity-0">
          Before
        </span>
        <span className="absolute right-3 top-3 z-10 rounded-full bg-black/30 px-2 py-1 font-display text-[0.6rem] uppercase tracking-widest text-gold-soft opacity-0 backdrop-blur transition-opacity duration-300 group-hover/ba:opacity-100">
          After
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
            eyebrow="Selected Work"
            title="The transformation speaks for itself."
            subtitle="Hover any project to see the before → after. (These are sample concepts — real client work replaces them after launch.)"
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
                    <span className="shrink-0 rounded-full bg-royal/15 px-3 py-1 text-xs font-medium text-royal-light">
                      {project.result}
                    </span>
                  </div>
                  <p className="px-1 text-sm leading-relaxed text-haze">{project.blurb}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-haze/70">
            {/* PLACEHOLDER: swap these sample concepts for real client case studies */}
            Sample concepts — your project could be next
          </p>
        </Reveal>
      </div>
    </section>
  )
}
