import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import { PROCESS } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="relative section-pad py-24 sm:py-32">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            eyebrow="The Process"
            title="Simple, transparent, and built around you."
            subtitle="Four steps from first call to launch day. You're involved at every milestone — nothing ships until you love it."
          />
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* connecting line (desktop) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-royal/40 to-transparent md:block"
          />
          {PROCESS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.12}>
              <li className="relative flex flex-col gap-4">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl glass-strong font-display text-lg font-bold text-gradient-gold shadow-glow">
                  {step.step}
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-haze">{step.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
