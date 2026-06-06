import { useState } from 'react'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ChapterIntro from '../components/ChapterIntro'
import { Button } from '../components/ui'
import { SITE } from '../config'
import { INDUSTRIES } from '../data/content'

const METHODS = [
  ...SITE.contacts.map((c) => ({
    label: `Call or text ${c.name}`,
    value: c.phoneDisplay,
    href: c.phoneHref,
  })),
  { label: 'Email', value: SITE.email, href: SITE.emailHref },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')

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
    <section id="contact" className="relative section-pad bg-ink-900 py-32 sm:py-40">
      <div className="container-max grid items-start gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <Reveal>
          <div>
            <ChapterIntro number="10" title="Correspondence." caption="Get in touch" />

            <p className="mt-10 max-w-md text-base leading-relaxed text-haze sm:text-lg">
              Fill out the form or reach out directly. We reply to every message
              personally — usually within one business day.
            </p>

            <ul className="mt-12 border-t border-white/10">
              {METHODS.map((m) => (
                <li key={m.label} className="border-b border-white/10">
                  <a
                    href={m.href}
                    className="focus-ring group flex items-baseline justify-between gap-4 py-6"
                    data-cursor-label="Open"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="meta text-haze">{m.label}</span>
                      <span className="font-display text-2xl italic text-white transition-colors group-hover:text-gold sm:text-3xl">
                        {m.value}
                      </span>
                    </span>
                    <Icon
                      name="arrow"
                      className="h-4 w-4 text-haze transition-transform group-hover:translate-x-1 group-hover:text-gold"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {status === 'success' ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-5 border border-white/10 p-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center border border-gold text-gold">
                  <Icon name="check" className="h-6 w-6" />
                </span>
                <h3 className="font-display text-3xl font-medium italic text-white">Message sent.</h3>
                <p className="max-w-sm text-haze">
                  Thanks for reaching out — we'll get back to you personally within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-8" noValidate>
                <input type="hidden" name="_subject" value="New lead from S0MBRA Studio" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input id="name" name="name" type="text" required autoComplete="name" className="form-input" placeholder="Your name" />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input id="email" name="email" type="email" required autoComplete="email" className="form-input" placeholder="you@business.com" />
                  </Field>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Phone" htmlFor="phone">
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className="form-input" placeholder="(555) 000-0000" />
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
                  <textarea id="message" name="message" required rows={4} className="form-input resize-none" placeholder="Tell us about your business and what you're looking for…" />
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
                  variant="solid"
                  size="lg"
                  className="self-start"
                  icon="arrow"
                  data-cursor-label="Send"
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
      <span className="meta">{label}</span>
      {children}
    </label>
  )
}
