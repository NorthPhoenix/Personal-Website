"use client"

import Logo from "./design/Logo"
import { motion } from "framer-motion"

// Needs to be wrapped in a percistent AnimatePresence component in order to play the exit animation
const LoadingScreen = () => {
  return (
    <motion.div
      className='fixed inset-0 z-[500] overflow-hidden'
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      {/* Fallback background */}
      <div className='absolute inset-0 -z-10 bg-black' />
      <motion.div
        className='h-full w-full bg-nier-700 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, when: "beforeChildren" }}>
        <Logo className='absolute left-1/2 top-1/2 z-30 h-1/6 -translate-x-1/2 -translate-y-1/2 fill-nier-300 brightness-75' />
        <div
          id='line-grid'
          className='absolute z-20 h-full w-full bg-transparent bg-lines-inverted bg-size-120 bg-repeat'
        />
        <motion.div
          initial={{ rotateZ: -45, x: -50, y: 50 }}
          animate={{ rotateZ: -45, x: "100vw", y: "-100vh" }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          id='wave'
          className='z-10 h-[200vh] w-28 origin-center bg-wave'
        />
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
