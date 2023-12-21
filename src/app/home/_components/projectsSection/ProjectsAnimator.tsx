"use client"
import { motion } from "framer-motion"
import { type ReactNode } from "react"

const ProjectsAnimator = ({ children }: { children: ReactNode }) => {
  const projectsVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  }
  return <motion.div variants={projectsVariants}>{children}</motion.div>
}

export default ProjectsAnimator
