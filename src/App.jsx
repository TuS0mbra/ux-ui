import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import GoldDust from './components/GoldDust'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import MobileActionBar from './components/MobileActionBar'
import MadeByUs from './components/MadeByUs'

import Hero from './sections/Hero'
import Industries from './sections/Industries'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Process from './sections/Process'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import Booking from './sections/Booking'
import FAQ from './sections/FAQ'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[130] focus:rounded-full focus:bg-royal focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <SmoothScroll />
      <CustomCursor />
      <GoldDust density={55} opacity={0.65} />
      <Navbar />

      <main>
        <Hero />
        <MadeByUs />
        <Industries />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <Booking />
        <FAQ />
        <About />
        <Contact />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  )
}
