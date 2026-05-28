import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import Icon from '../components/Icon'
import { SectionHeading } from '../components/ui'
import { INDUSTRIES } from '../data/content'

export default function Industries() {
  return (
    <section id="industries" className="relative section-pad py-24 sm:py-32">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            eyebrow="Who I Build For"
            title="If you run it, I can make it look like a brand."
            subtitle="From the garage to the gym floor — I design websites that make local businesses look like the most established name in town."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.name} delay={(i % 3) * 0.06}>
              <TiltCard className="h-full rounded-3xl">
                <article className="group flex h-full flex-col gap-3 rounded-3xl glass p-5 transition-colors duration-300 hover:border-royal-light/40 sm:p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-royal-light transition-colors duration-300 group-hover:bg-royal/20 group-hover:text-white">
                    <Icon name={industry.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-haze">{industry.tag}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-medium uppercase tracking-wider text-gold-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    I build for you too
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </span>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
