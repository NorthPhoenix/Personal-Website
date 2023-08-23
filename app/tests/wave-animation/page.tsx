"use client";

import { NextPage } from "next";
import { motion } from "framer-motion";

const waveAnimation: NextPage = () => {
  return (
    <div className='w-full h-screen overflow-hidden bg-nier-700'>
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
    </div>
  );
};

export default waveAnimation;
