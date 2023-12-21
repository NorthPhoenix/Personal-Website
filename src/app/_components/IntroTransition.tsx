import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

const IntroTransition = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter()
  const variants = {
    out: { opacity: 0, y: -50, transition: { duration: 0.5 } },
    in: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0 } },
  }

  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.div
        variants={variants}
        key={pathname}
        initial="out"
        animate="in"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default IntroTransition
