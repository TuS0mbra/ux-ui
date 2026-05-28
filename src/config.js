// ============================================================================
//  S0MBRA STUDIO — OWNER CONFIG
//  >>> EDIT EVERYTHING IN THIS FILE TO MAKE THE SITE YOURS <<<
//  Every value below is a PLACEHOLDER. Replace with your real details.
// ============================================================================

export const SITE = {
  // --- Direct contact (used by the sticky mobile bar, contact section, footer) ---
  phoneDisplay: '(555) 010-2030', // TODO: your phone number, as you want it shown
  phoneHref: 'tel:+15550102030', // TODO: same number, digits only, with country code
  smsHref: 'sms:+15550102030', // TODO: same number for "Text" action

  email: 'hello@sombra.studio', // TODO: your email address
  get emailHref() {
    return `mailto:${this.email}`
  },

  instagramHandle: '@YOUR-HANDLE', // TODO: your Instagram handle
  instagramUrl: 'https://instagram.com/YOUR-HANDLE', // TODO: full Instagram URL

  // --- Calendly (Booking section embed). Create a free event type and paste the link. ---
  calendlyUrl: 'https://calendly.com/YOUR-LINK', // TODO: your Calendly scheduling link

  // --- Formspree (Contact form). Create a form at formspree.io and paste its endpoint. ---
  formspreeAction: 'https://formspree.io/f/YOUR-ID', // TODO: your Formspree form endpoint
}
