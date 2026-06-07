import { motion } from 'framer-motion'
import Wordmark from './Wordmark'

// Opening sequence: a soft purple aurora behind the wordmark, gold rule sweep,
// then fades out (driven by App.jsx AnimatePresence).
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-aurora opacity-80"
      />
      <motion.div
        initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative"
      >
        <Wordmark className="text-7xl sm:text-8xl" glow />
      </motion.div>
      <motion.span
        className="relative mt-7 block h-px w-48 origin-left bg-gold-gradient"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="meta relative mt-5"
      >
        Vancouver · WA
      </motion.p>
    </motion.div>
  )
}
