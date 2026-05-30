import { useState } from 'react'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { Button, SectionHeading } from '../components/ui'
import { SITE } from '../config'
import { INDUSTRIES } from '../data/content'

const METHODS = [
  ...SITE.contacts.map((c) => ({
    icon: 'phone',
    label: `Call or text ${c.name}`,
    value: c.phoneDisplay,
    href: c.phoneHref,
  })),
  { icon: 'mail', label: 'Email', value: SITE.email, href: SITE.emailHref },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('submitting')
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative section-pad py-24 sm:py-32">
      <div className="container-max grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: pitch + direct methods */}
        <Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get In Touch"
              title="Tell us about your business."
              subtitle="Fill out the form or reach out directly. We reply to every message personally — usually within one business day."
            />

            <ul className="mt-9 flex flex-col gap-3">
              {METHODS.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    className="focus-ring group flex items-center gap-4 rounded-2xl glass px-5 py-4 transition-colors hover:border-royal-light/40"
                    {...(m.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-royal-light transition-colors group-hover:text-white">
                      <Icon name={m.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-haze">
                        {m.label}
                      </span>
                      <span className="block font-display text-white">{m.value}</span>
                    </span>
                    <Icon
                      name="arrow"
                      className="ml-auto h-4 w-4 text-haze transition-transform group-hover:translate-x-1 group-hover:text-gold-soft"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Right: Formspree form */}
        <Reveal delay={0.1}>
          <div className="rounded-[2rem] glass-strong p-6 shadow-card sm:p-8">
            {status === 'success' ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-royal/20 text-gold-soft">
                  <Icon name="check" className="h-8 w-8" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-white">Message sent.</h3>
                <p className="max-w-sm text-haze">
                  Thanks for reaching out — we'll get back to you personally within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
                {/* FormSubmit config (delivery is set in src/config.js → formEndpoint) */}
                <input type="hidden" name="_subject" value="New lead from S0MBRA Studio" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="form-input"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="form-input"
                      placeholder="you@business.com"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="form-input"
                      placeholder="(555) 000-0000"
                    />
                  </Field>
                  <Field label="Business type" htmlFor="business">
                    <select id="business" name="business_type" className="form-input" defaultValue="">
                      <option value="" disabled>
                        Select one
                      </option>
                      {INDUSTRIES.map((ind) => (
                        <option key={ind.name} value={ind.name}>
                          {ind.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                </div>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Tell me about your business and what you're looking for…"
                  />
                </Field>

                {status === 'error' && (
                  <p role="alert" className="text-sm text-red-300">
                    Something went wrong. Please email{' '}
                    <a href={SITE.emailHref} className="underline">
                      {SITE.email}
                    </a>{' '}
                    directly.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  icon="arrow"
                  {...(status === 'submitting' ? { disabled: true } : {})}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="font-display text-xs uppercase tracking-wider text-haze">{label}</span>
      {children}
    </label>
  )
}
