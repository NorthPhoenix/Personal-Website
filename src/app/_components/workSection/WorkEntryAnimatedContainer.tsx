"use client"

import React from "react"
import { type ForwardRefComponent, motion, type Variants } from "framer-motion"

const WorkEntryAnimatedContainer: ForwardRefComponent<
  React.ElementRef<typeof motion.li>,
  React.ComponentPropsWithoutRef<typeof motion.li>
> = React.forwardRef(({ children, ...props }, ref) => {
  const workEntryVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }
  return (
    <motion.li ref={ref} variants={workEntryVariants} {...props}>
      {children}
    </motion.li>
  )
})

export default WorkEntryAnimatedContainer
