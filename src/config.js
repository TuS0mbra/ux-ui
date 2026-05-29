// ============================================================================
//  S0MBRA STUDIO — OWNER CONFIG
//  >>> EDIT THESE VALUES TO MAKE THE SITE YOURS <<<
//  Everything here is live. No extra accounts required.
// ============================================================================

export const SITE = {
  // --- Primary number (powers the sticky mobile "Call / Text" button) ---
  phoneDisplay: '(360) 975-9853',
  phoneHref: 'tel:+13609759853',
  smsHref: 'sms:+13609759853',

  // --- All studio contacts (shown in Booking, Contact, and the footer) ---
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

  // --- Contact form delivery (FormSubmit — no account needed) ---
  // Submissions are emailed straight to the address above. IMPORTANT: the very
  // first time the form is submitted, FormSubmit sends a one-time activation
  // email to that inbox — click the link in it once and the form is live.
  formEndpoint: 'https://formsubmit.co/ajax/S0mbrastudio00@gmail.com',
}
