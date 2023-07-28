"use client";

import Logo from "./design/Logo";
import { motion } from "framer-motion";

// Needs to be wrapped in a percistent AnimatePresence component in order to play the exit animation
const LoadingScreen = () => {
  return (
    <motion.div
      className='fixed z-[500] inset-0 overflow-hidden bg-black'
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <motion.div
        className='w-full h-full bg-nier-700'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}>
        <Logo className='absolute z-30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-1/6 fill-nier-300 brightness-75' />
        <div
          id='line-grid'
          className='absolute z-20 w-full h-full bg-transparent bg-repeat bg-lines-inverted bg-120'
        />
        <div
          id='wave'
          className='relative -left-[50px] z-10 h-[200vh] w-28 origin-center animate-wave bg-wave  '
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
