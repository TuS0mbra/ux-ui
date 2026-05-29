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
    desc: 'Take a dated, slow, or "DIY" site and transform it into something that looks like it cost five figures.',
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
    desc: 'Color, type, and visual direction to give your business a confident, expensive-looking identity.',
    icon: 'palette',
  },
  {
    title: 'Maintenance Plans',
    desc: 'Ongoing care — updates, edits, monitoring, and peace of mind so your site never falls behind.',
    icon: 'shield',
  },
]

// Portfolio — CLEARLY FICTIONAL placeholder projects. Owner swaps in real work later.
export const PORTFOLIO = [
  {
    name: 'Apex Auto Detailing',
    category: 'Automotive',
    result: '+212% booking requests',
    blurb: 'A flat brochure site reimagined as a cinematic, dark-mode showroom.',
    beforeHue: '210',
    afterFrom: '#4c1d95',
    afterTo: '#7c3aed',
  },
  {
    name: 'Iron Forge Gym',
    category: 'Fitness',
    result: '3.1× trial sign-ups',
    blurb: 'Bold, high-energy redesign with a frictionless membership funnel.',
    beforeHue: '30',
    afterFrom: '#6d28d9',
    afterTo: '#a78bfa',
  },
  {
    name: 'Lumen Bistro',
    category: 'Restaurant',
    result: '+88% reservations',
    blurb: 'An elegant, appetite-driven experience with one-tap booking.',
    beforeHue: '150',
    afterFrom: '#4c1d95',
    afterTo: '#d8b25a',
  },
  {
    name: 'Fade Theory',
    category: 'Barbershop',
    result: '2.4× online bookings',
    blurb: 'A sharp, modern brand that matches the precision of the cuts.',
    beforeHue: '0',
    afterFrom: '#7c3aed',
    afterTo: '#e7cd8f',
  },
  {
    name: 'Summit Build Co.',
    category: 'Construction',
    result: '+140% quote requests',
    blurb: 'Heavy-duty credibility with a clean, trustworthy project showcase.',
    beforeHue: '200',
    afterFrom: '#4c1d95',
    afterTo: '#8b5cf6',
  },
  {
    name: 'Crown & Key Realty',
    category: 'Real Estate',
    result: '+96% qualified leads',
    blurb: 'A luxury listing experience that makes every property feel premium.',
    beforeHue: '260',
    afterFrom: '#6d28d9',
    afterTo: '#d8b25a',
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
    desc: 'I craft a custom direction — layout, motion, and brand feel — and refine it with you until it feels right.',
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
      'Sign-ups tripled in the first month. The site feels more expensive than businesses ten times our size.',
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
