import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import Icon from '../components/Icon'
import { SectionHeading } from '../components/ui'
import { SERVICES } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="relative section-pad py-24 sm:py-32">
      {/* ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40"
      />
      <div className="container-max relative">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Everything you need to grow online, in one place."
            subtitle="One small studio, end to end. Strategy, design, build, and the technical bits — all handled for you. No agencies, no run-around, no surprise invoices."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.06}>
              <TiltCard className="h-full rounded-3xl" max={7}>
                <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl glass p-6 transition-colors duration-300 hover:border-royal-light/40">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-royal/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                  />
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-royal/30 to-transparent text-royal-light transition-transform duration-500 group-hover:scale-110">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-haze">{service.desc}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
