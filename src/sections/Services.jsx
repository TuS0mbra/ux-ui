import Reveal from '../components/Reveal'
import ChapterIntro from '../components/ChapterIntro'
import { SERVICES } from '../data/content'

// Editorial table of contents: numbered rows in 2 columns, big serif numeral on
// the left, service name + description on the right. Hairline dividers.
export default function Services() {
  return (
    <section id="services" className="relative section-pad bg-graphite py-32 sm:py-40">
      <div className="container-max">
        <ChapterIntro number="02" title="Edition Contents." caption="What we do" />

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-haze sm:text-lg">
          One small studio, end to end. Strategy, design, build, and the technical
          bits — all handled. No agencies, no run-around, no surprise invoices.
        </p>

        <ul className="mt-20 border-t border-white/10">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.04}>
              <li
                className="group grid grid-cols-1 gap-4 border-b border-white/10 py-10 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[8rem_1fr_2fr] md:gap-10 md:py-12"
                data-cursor-label="Service"
              >
                <span className="font-display text-5xl italic leading-none text-gold/80 md:text-6xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-display text-2xl italic leading-tight text-white transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                    {service.title}
                  </span>
                </span>
                <p className="max-w-xl text-base leading-relaxed text-haze">{service.desc}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
