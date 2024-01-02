"use client"

import { type ReactNode } from "react"
import { LazyMotion, domAnimation, m } from "framer-motion"

const InViewDetector = ({ children }: { children: ReactNode }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30%" }}
        className="h-full w-full"
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}

export default InViewDetector
