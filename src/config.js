// ============================================================================
//  S0MBRA STUDIO — OWNER CONFIG
//  >>> EDIT EVERYTHING IN THIS FILE TO MAKE THE SITE YOURS <<<
//  Most values are filled in. Items still marked TODO need your accounts.
// ============================================================================

export const SITE = {
  // --- Primary number (powers the sticky mobile "Call / Text" button) ---
  phoneDisplay: '(360) 975-9853',
  phoneHref: 'tel:+13609759853',
  smsHref: 'sms:+13609759853',

  // --- All studio contacts (shown in the Contact section + footer) ---
  contacts: [
    {
      name: 'Eric',
      phoneDisplay: '(360) 975-9853',
      phoneHref: 'tel:+13609759853',
      smsHref: 'sms:+13609759853',
    },
    {
      name: 'Austin',
      phoneDisplay: '(360) 936-9886',
      phoneHref: 'tel:+13609369886',
      smsHref: 'sms:+13609369886',
    },
  ],

  email: 'S0mbrastudio00@gmail.com',
  get emailHref() {
    return `mailto:${this.email}`
  },

  // --- TODO: create these accounts and paste your links ---
  instagramHandle: '@YOUR-HANDLE', // TODO: your Instagram handle
  instagramUrl: 'https://instagram.com/YOUR-HANDLE', // TODO: full Instagram URL

  // Calendly (Booking section embed). Free to set up at calendly.com.
  calendlyUrl: 'https://calendly.com/YOUR-LINK', // TODO: your Calendly scheduling link

  // Formspree (Contact form). Free to set up at formspree.io.
  formspreeAction: 'https://formspree.io/f/YOUR-ID', // TODO: your Formspree form endpoint
}
