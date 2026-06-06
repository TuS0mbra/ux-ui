import Reveal from '../components/Reveal'
import ChapterIntro from '../components/ChapterIntro'
import { INDUSTRIES } from '../data/content'

// Editorial numbered list — no card grid. Hover offsets the row right and
// lights a gold dot. Hairline rule between rows.
export default function Industries() {
  return (
    <section id="industries" className="relative section-pad py-32 sm:py-40">
      <div className="container-max">
        <ChapterIntro number="01" title="The Index." caption="Who we build for" />

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-haze sm:text-lg">
          From the garage to the gym floor — we build for every kind of business in
          Vancouver. You run it. We build the site that helps it grow.
        </p>

        <ul className="mt-16 border-t border-white/10">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.name} delay={(i % 3) * 0.04}>
              <li>
                <div
                  className="group relative grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-6 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02]"
                  data-cursor-label="Industry"
                >
                  <span className="meta text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex flex-col gap-1">
                    <span className="font-display text-3xl italic leading-none text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                      {industry.name}
                    </span>
                    <span className="meta text-haze">{industry.tag}</span>
                  </span>
                  <span className="flex items-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="meta text-gold">We build it</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
