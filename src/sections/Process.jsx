import Reveal from '../components/Reveal'
import ChapterIntro from '../components/ChapterIntro'
import { PROCESS } from '../data/content'

// Vertical column of huge italic numerals 01–04; editorial body beside. Hairline
// rules between rows.
export default function Process() {
  return (
    <section id="process" className="relative section-pad bg-graphite py-32 sm:py-40">
      <div className="container-max">
        <ChapterIntro number="04" title="How It's Made." caption="The process" />

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-haze sm:text-lg">
          Four steps from first call to launch day. You're involved at every
          milestone — nothing ships until you love it.
        </p>

        <ol className="mt-20 border-t border-white/10">
          {PROCESS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <li className="grid grid-cols-1 items-baseline gap-4 border-b border-white/10 py-12 md:grid-cols-[10rem_1fr_2fr] md:gap-12 md:py-14">
                <span className="font-display text-7xl italic leading-none text-gold sm:text-8xl">
                  {step.step}
                </span>
                <span className="font-display text-3xl italic leading-tight text-white sm:text-4xl">
                  {step.title}
                </span>
                <p className="max-w-xl text-base leading-relaxed text-haze">{step.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
