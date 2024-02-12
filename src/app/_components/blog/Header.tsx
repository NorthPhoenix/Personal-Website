"use client"

import Logo from "~/app/_components/design/Logo"
import { twMerge } from "tailwind-merge"
import { motion, type Variants } from "framer-motion"
import Link from "next/link"

type HeaderProps = {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const lineAnimationVariants: Variants = {
    hidden: {
      width: "0%",
    },
    show: {
      width: "90%",
      transition: {
        duration: 1.3,
        ease: "easeInOut",
      },
    },
  }
  const navAnimationVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <header>
        <div
          className={twMerge("flex w-full flex-col items-center", className)}
        >
          <motion.nav
            className="flex h-16 w-[90%] max-w-7xl flex-row items-center justify-between bg-transparent p-3 sm:h-20 sm:p-4 md:h-24 md:p-6"
            initial="hidden"
            animate="show"
            variants={navAnimationVariants}
          >
            <Link
              href="/blog"
              className="group flex flex-row items-center gap-4 object-scale-down md:h-14"
            >
              <Logo className="h-8 w-auto fill-nier-200 transition-transform group-hover:scale-105 sm:h-12 md:h-14" />
              <div className="flex flex-col items-start">
                <h1 className="text-left font-exodus-striped text-base leading-6 text-nier-300 sm:text-xl">
                  Nikita Istomin
                </h1>
                <h2 className="font-helvetica text-xs leading-3 text-nier-400 sm:text-sm">
                  Full-stack Developer
                </h2>
              </div>
            </Link>
            <Link
              href="/"
              className="font-helvetica transition-transform hover:scale-105"
            >
              <div className="relative">
                <span className="absolute -left-2 -top-2 text-xxs opacity-50 sm:-top-3 sm:text-xs sm:tracking-widest ">
                  My
                </span>
                <span className="text-sm uppercase sm:text-xl sm:tracking-wide">
                  Portfolio
                </span>
                <span className="absolute -bottom-2 -right-4 text-xxs opacity-50 sm:text-xs sm:tracking-widest ">
                  website
                </span>
              </div>
            </Link>
          </motion.nav>
          <motion.div
            className="flex flex-row items-center justify-center gap-2 overflow-hidden"
            initial="hidden"
            animate="show"
            variants={lineAnimationVariants}
          >
            <span className="h-[2px] w-[15px] grow-0 bg-nier-400" />
            <span className="h-[2px] grow bg-nier-400" />
            <span className="h-[2px] w-[15px] grow-0 bg-nier-400" />
          </motion.div>
        </div>
      </header>
    </>
  )
}

export default Header
