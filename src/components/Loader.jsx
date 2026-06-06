import { motion } from 'framer-motion'
import Wordmark from './Wordmark'

// Editorial opening sequence: tiny edition tag fades in, wordmark assembles,
// a hairline gold rule sweeps across underneath, then the whole layer fades
// out (driven by App.jsx's AnimatePresence).
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="meta absolute left-1/2 top-10 -translate-x-1/2"
      >
        Edition · MMXXV · Issue 01
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <Wordmark className="text-7xl sm:text-8xl" />
      </motion.div>
      <motion.span
        className="mt-7 block h-px w-48 origin-left bg-gold/80"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="meta mt-5"
      >
        Vancouver · WA
      </motion.p>
    </motion.div>
  )
}
