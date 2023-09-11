"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

const InViewDetector = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: "-40%" }}
      className='h-full w-full'>
      {children}
    </motion.div>
  )
}

export default InViewDetector
