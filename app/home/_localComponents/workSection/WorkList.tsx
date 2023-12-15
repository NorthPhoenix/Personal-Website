"use client"

import React from "react"
import { ForwardRefComponent, motion, type Variants } from "framer-motion"

const WorkList: ForwardRefComponent<
  React.ElementRef<typeof motion.ul>,
  React.ComponentPropsWithoutRef<typeof motion.ul>
> = React.forwardRef(({ children, ...props }, ref) => {
  const workListVariants: Variants = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }
  return (
    <motion.ul ref={ref} variants={workListVariants} {...props}>
      {children}
    </motion.ul>
  )
})

export default WorkList
