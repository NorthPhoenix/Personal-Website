"use client";

import Logo from "./design/Logo";
import { motion } from "framer-motion";

// Needs to be wrapped in a percistent AnimatePresence component in order to play the exit animation
const LoadingScreen = () => {
  return (
    <motion.div
      className='fixed z-[500] inset-0 overflow-hidden'
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      {/* Fallback background */}
      <div className='absolute inset-0 bg-black -z-10' />
      <motion.div
        className='w-full h-full bg-nier-700 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, when: "beforeChildren" }}>
        <Logo className='absolute z-30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-1/6 fill-nier-300 brightness-75' />
        <div
          id='line-grid'
          className='absolute z-20 w-full h-full bg-transparent bg-repeat bg-lines-inverted bg-size-120'
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
  );
};

export default LoadingScreen;
