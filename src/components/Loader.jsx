import { motion } from 'framer-motion'
import Wordmark from './Wordmark'

// Premium loading overlay: the wordmark reveals, a gold line sweeps, then the
// whole layer fades up and out (orchestrated by AnimatePresence in App).
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial-glow opacity-70"
      />
      <motion.div
        initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Wordmark className="text-6xl sm:text-7xl" />
      </motion.div>
      <motion.div
        className="mt-7 h-px w-40 origin-left bg-gold-gradient"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.25, ease: 'easeInOut' }}
      />
      <motion.p
        className="mt-5 font-display text-[0.7rem] uppercase tracking-[0.45em] text-haze"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Studio
      </motion.p>
    </motion.div>
  )
}
