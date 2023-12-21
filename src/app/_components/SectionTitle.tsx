"use client"

import { motion } from "framer-motion"

const SectionTitle = ({ title }: { title: string }) => {
  const topTitleLineVariants = {
    hidden: {
      scaleX: 0,
      x: "-50%",
    },
    visible: {
      x: 0,
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  }
  const bottomTitleLineVariants = {
    hidden: {
      scaleX: 0,
      x: "50%",
    },
    visible: {
      x: 0,
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  }
  const titleVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  }
  return (
    <div className="mb-6 flex w-full flex-col items-center justify-center gap-4">
      <motion.div
        variants={topTitleLineVariants}
        className="flex w-full max-w-7xl flex-row items-center justify-center gap-2 px-4"
      >
        <span className="h-[2px] w-5 grow-0 bg-nier-700" />
        <span className="h-[2px] grow bg-nier-700" />
        <span className="h-[2px] w-5 grow-0 bg-nier-700" />
      </motion.div>
      <motion.h2
        variants={titleVariants}
        className="text-shadow -translate-y-[2px] px-4 text-center font-exodus-striped text-5xl uppercase tracking-[0.5rem] lg:text-6xl"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={bottomTitleLineVariants}
        className="flex w-full max-w-7xl flex-row items-center justify-center gap-2 px-4"
      >
        <span className="h-[2px] w-5 grow-0 bg-nier-700" />
        <span className="h-[2px] grow bg-nier-700" />
        <span className="h-[2px] w-5 grow-0 bg-nier-700" />
      </motion.div>
    </div>
  )
}

export default SectionTitle
