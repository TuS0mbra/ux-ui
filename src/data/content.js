// ============================================================================
//  S0MBRA STUDIO — SITE CONTENT
//  Copy, services, pricing and placeholder case studies live here so the
//  owner can edit wording in one place. PRICE PLACEHOLDERS are marked TODO.
// ============================================================================

// Industry showcase — "I build for you too."
export const INDUSTRIES = [
  { name: 'Automotive', tag: 'Dealers · Detailing · Repair', icon: 'car' },
  { name: 'Gyms & Fitness', tag: 'Studios · Coaches · CrossFit', icon: 'dumbbell' },
  { name: 'Restaurants', tag: 'Fine dining · Cafés · Bars', icon: 'utensils' },
  { name: 'Barbershops', tag: 'Barbers · Salons · Spas', icon: 'scissors' },
  { name: 'Construction', tag: 'Builders · Contractors · Trades', icon: 'hammer' },
  { name: 'Real Estate', tag: 'Agents · Brokers · Developers', icon: 'building' },
  { name: 'Clothing Brands', tag: 'Streetwear · Boutiques · DTC', icon: 'shirt' },
  { name: 'Startups', tag: 'SaaS · Apps · Founders', icon: 'rocket' },
  { name: 'Creators', tag: 'Artists · Coaches · Influencers', icon: 'sparkle' },
]

export const SERVICES = [
  {
    title: 'Custom Website Design',
    desc: 'Bespoke, conversion-focused sites designed around your brand — not a template everyone else is using.',
    icon: 'sparkle',
  },
  {
    title: 'Redesigns',
    desc: 'Take a dated, slow, or "DIY" site and turn it into something that finally fits the business you\'ve grown into.',
    icon: 'wand',
  },
  {
    title: 'E-Commerce',
    desc: 'Fast, beautiful storefronts engineered to turn browsers into buyers and grow average order value.',
    icon: 'cart',
  },
  {
    title: 'Landing Pages',
    desc: 'High-impact single pages built to convert ad traffic, QR scans, and campaigns into booked leads.',
    icon: 'target',
  },
  {
    title: 'SEO Foundations',
    desc: 'Clean structure, fast load, and on-page SEO so the right local customers actually find you.',
    icon: 'search',
  },
  {
    title: 'Mobile Optimization',
    desc: 'Mobile-first builds that feel effortless on the phone — where most of your customers already are.',
    icon: 'phone',
  },
  {
    title: 'Performance',
    desc: 'Lightning-fast pages tuned for Core Web Vitals. Speed that ranks higher and converts better.',
    icon: 'bolt',
  },
  {
    title: 'Branding Help',
    desc: 'Color, type, and visual direction to give your business a confident, polished identity that feels like you.',
    icon: 'palette',
  },
  {
    title: 'Maintenance Plans',
    desc: 'Ongoing care — updates, edits, monitoring, and peace of mind so your site never falls behind.',
    icon: 'shield',
  },
]

// Portfolio — unsolicited CONCEPT redesigns for real Vancouver, WA businesses.
// Not paid work; we have NOT been hired by these businesses. The "before"
// mockups are stylized "generic dated template" frames for contrast — they are
// NOT representations of the businesses' actual current sites. This is clearly
// labeled in the section copy and the disclaimer footnote.
export const PORTFOLIO = [
  {
    name: 'Burgerville',
    category: 'Restaurant · Vancouver, WA',
    blurb:
      'A warmer, hungrier rebuild — the food, the order button, and one tap to the nearest location, front and center.',
    beforeHue: '30',
    brand: {
      headline: 'Real food. Real fast.',
      sub: 'Pacific Northwest favorites since 1961.',
      ctaPrimary: 'Order Now',
      ctaSecondary: 'Find a Spot',
      palette: { from: '#3a0a05', via: '#9b2412', to: '#f59e0b', accent: '#fde68a' },
      motif: 'flame',
    },
  },
  {
    name: 'Heathen Brewing',
    category: 'Brewery · Vancouver, WA',
    blurb:
      'A heavier, moodier rebuild that matches the beer — bold, confident, and easy to find your next pint.',
    beforeHue: '260',
    brand: {
      headline: 'Brewed heavy. Pour confident.',
      sub: 'Craft beer brewed in Vancouver, WA.',
      ctaPrimary: 'Visit the Taproom',
      ctaSecondary: "What's on Tap",
      palette: { from: '#0a0810', via: '#3b0764', to: '#7c3aed', accent: '#facc15' },
      motif: 'glass',
    },
  },
  {
    name: 'Kiggins Theatre',
    category: 'Cinema · Vancouver, WA',
    blurb:
      'A century of stories deserves a cinematic site — velvet, gold, and tickets one tap away.',
    beforeHue: '0',
    brand: {
      headline: 'Where Vancouver goes for film.',
      sub: 'Independent cinema in downtown since 1936.',
      ctaPrimary: 'Get Tickets',
      ctaSecondary: "What's Playing",
      palette: { from: '#180405', via: '#5a0f1a', to: '#d8b25a', accent: '#fde68a' },
      motif: 'film',
    },
  },
  {
    name: 'Loowit Brewing',
    category: 'Brewery · Vancouver, WA',
    blurb:
      'A clean, confident identity rebuild that shows off the eruption-energy of the name at a single glance.',
    beforeHue: '180',
    brand: {
      headline: 'Volcanic beer. Local roots.',
      sub: 'Brewed at the foot of Mount St. Helens.',
      ctaPrimary: 'Taproom Hours',
      ctaSecondary: 'Find Our Beer',
      palette: { from: '#0b1a1a', via: '#134e4a', to: '#22c55e', accent: '#fde68a' },
      motif: 'flame',
    },
  },
  {
    name: 'Beaches Restaurant',
    category: 'Waterfront Dining · Vancouver, WA',
    blurb:
      'A relaxed, sun-on-the-water rebuild that makes booking a sunset table feel inevitable.',
    beforeHue: '210',
    brand: {
      headline: 'Sunset, riverside, every night.',
      sub: 'A Vancouver waterfront classic.',
      ctaPrimary: 'Reserve a Table',
      ctaSecondary: 'See the Menu',
      palette: { from: '#0c1e3a', via: '#1d4ed8', to: '#f59e0b', accent: '#fef3c7' },
      motif: 'wine',
    },
  },
  {
    name: 'Trap Door Brewing',
    category: 'Brewery · Vancouver, WA',
    blurb:
      "An edgier, secret-club rebuild — the kind of site that makes you want to push open the door.",
    beforeHue: '300',
    brand: {
      headline: 'Pull the handle. Find a pint.',
      sub: 'Independent craft brewery and pizza.',
      ctaPrimary: 'Visit the Taproom',
      ctaSecondary: 'On Tap Now',
      palette: { from: '#080208', via: '#581c87', to: '#e11d48', accent: '#fde68a' },
      motif: 'glass',
    },
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'A free call to understand your business, goals, and what makes you different. No pressure, just clarity.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'We craft a custom direction — layout, motion, and brand feel — and refine it with you until it feels right.',
  },
  {
    step: '03',
    title: 'Build',
    desc: 'Pixel-perfect, fast, and responsive. Hand-built so it performs flawlessly on every device.',
  },
  {
    step: '04',
    title: 'Launch',
    desc: 'We go live, you get training, and your business finally looks the way it deserves to.',
  },
]

export const PRICING = [
  {
    name: 'Launch',
    // Founder rate — comfortably under local market. Raise as your skills grow.
    price: '$600',
    cadence: 'starting at',
    tagline: 'One high-impact page for small businesses.',
    features: [
      'Single-page custom design',
      'Mobile-first & responsive',
      'Lead form + click-to-call',
      'Basic on-page SEO',
      'Launch in ~1–2 weeks',
    ],
    popular: false,
    cta: 'Book a Call',
  },
  {
    name: 'Signature',
    // Founder rate — most local studios charge $2.5k–$5k for this.
    price: '$1,800',
    cadence: 'starting at',
    tagline: 'A full custom multi-page website.',
    features: [
      'Up to 6 custom pages',
      'Premium motion & 3D accents',
      'Advanced SEO foundations',
      'Booking / scheduling integration',
      'Performance tuned & optimized',
      '30 days post-launch support',
    ],
    popular: true,
    cta: 'Book a Call',
  },
  {
    name: 'Bespoke',
    price: "Let's talk",
    cadence: 'custom quote',
    tagline: 'E-commerce or fully custom builds.',
    features: [
      'Unlimited / complex pages',
      'E-commerce or web app',
      'Custom integrations & CMS',
      'Branding & content support',
      'Priority maintenance plan',
    ],
    popular: false,
    cta: "Let's Talk",
  },
]

// Testimonials — CLEARLY FICTIONAL placeholders. Swap for real reviews after first clients.
export const TESTIMONIALS = [
  {
    quote:
      'People literally ask who built our website now. It made us look like the most established shop in town overnight.',
    name: 'Marcus Reyes',
    role: 'Owner, Apex Auto Detailing',
  },
  {
    quote:
      'Sign-ups tripled in the first month. The site finally looks like a business twice our size.',
    name: 'Dana Whitlock',
    role: 'Founder, Iron Forge Gym',
  },
  {
    quote:
      'Worth every dollar. It is the single best investment I have made in the business this year.',
    name: 'Sofia Marchetti',
    role: 'Owner, Lumen Bistro',
  },
  {
    quote:
      'Fast, flawless, and stunning. Clients trust us before we even say a word now.',
    name: 'Theo Brandt',
    role: 'Director, Summit Build Co.',
  },
]

export const FAQ = [
  {
    q: 'How long does a project take?',
    a: 'Most single-page sites launch in 1–2 weeks. Full multi-page builds typically run 3–5 weeks depending on scope and how quickly we finalize content.',
  },
  {
    q: 'How much does a website cost?',
    a: 'It depends on scope, but every tier starts with a free call so you get a clear, fixed quote before anything begins. No surprises, no hourly meters.',
  },
  {
    q: 'What is your process like?',
    a: 'Four simple steps: Discovery, Design, Build, Launch. You are involved at every milestone and nothing ships until you love it.',
  },
  {
    q: 'What is included?',
    a: 'A fully custom, mobile-first design, fast performance, on-page SEO foundations, and the integrations your business needs — booking, forms, click-to-call, and more.',
  },
  {
    q: 'Do you host the website?',
    a: 'Yes — I can set up fast, reliable hosting and handle the technical details, or deploy to your existing provider. Maintenance plans are available if you want ongoing care.',
  },
  {
    q: 'What if I already have a website?',
    a: 'Perfect. Redesigns are a specialty. I take dated or underperforming sites and transform them into something that looks and converts like a premium brand.',
  },
]
