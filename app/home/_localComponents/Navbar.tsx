"use client"

import Logo from "app/_globalComponents/design/Logo"
import { Menu } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { useState, useEffect, useRef } from "react"
import SideOverMenu from "./SideOverMenu"
import { useAtomValue } from "jotai"
import { homeLoadedAtom } from "lib/state"
import {
  motion,
  useMotionValue,
  AnimationSequence,
  useAnimate,
} from "framer-motion"

const navigationLinks = [
  { href: "#about", label: "About Me", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#contact", label: "Get in touch", id: "contact" },
  { href: "/resume", label: "Resume", id: "resume" },
]

type NavbarProps = {
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const homeLoaded = useAtomValue(homeLoadedAtom)

  const hideNav = () => {
    const navbar = navRef.current
    if (navbar) {
      navbar.classList.add("-translate-y-[105%]")
    }
  }

  const showNav = () => {
    const navbar = navRef.current
    if (navbar) {
      navbar.classList.remove("-translate-y-[105%]")
    }
  }

  useEffect(() => {
    // Close the side menu on resize
    const handleResize = () => {
      setSideMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)

    // On scroll down - hide the navbar, on scroll up - show it
    let prevScrollpos = window.scrollY
    const handleScroll = () => {
      if (window.scrollY > prevScrollpos) {
        hideNav()
      }
      if (window.scrollY < prevScrollpos) {
        showNav()
      }
      prevScrollpos = window.scrollY
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [animationScope, animate] = useAnimate()
  const lineWidth = useMotionValue("0%")
  const opacity = useMotionValue(0)
  const animationSequence: AnimationSequence = [
    [
      lineWidth,
      "90%",
      {
        duration: 1.3,
        ease: "easeInOut",
      },
    ],
    [
      opacity,
      1,
      {
        duration: 1,
        ease: "easeInOut",
        at: 1,
      },
    ],
  ]
  useEffect(() => {
    if (homeLoaded) {
      animate(animationSequence, { delay: 0.5 })
    }
  }, [homeLoaded])

  return (
    <>
      <header
        ref={navRef}
        className={twMerge(
          "fixed left-0 right-0 top-0 z-40 flex flex-col items-center mix-blend-difference transition-transform duration-500",
          className,
        )}
      >
        <div ref={animationScope} className="contents w-full">
          <motion.nav
            className="flex h-20 w-[90%] max-w-7xl flex-row items-center justify-between bg-transparent p-6 md:h-24"
            style={{ opacity }}
          >
            <button
              onClick={() => {
                window.scroll({ behavior: "smooth", top: 0 })
              }}
              className="group flex h-12 flex-row items-center gap-4 object-scale-down md:h-14"
            >
              <Logo className="h-full w-auto fill-nier-200 transition-transform group-hover:scale-105" />
              <div className="flex flex-col items-start">
                <h1 className="text-left font-exodus-striped text-xl leading-6 text-nier-300">
                  Nikita Istomin
                </h1>
                <h2 className="font-helvetica text-sm leading-3 text-nier-400">
                  Frontend Developer
                </h2>
              </div>
            </button>
            <button
              type="button"
              className="p-1 text-nier-400"
              onClick={() => {
                hideNav()
                setSideMenuOpen((state: Boolean) => {
                  return !state
                })
              }}
            >
              <Menu className="h-8 w-8 fill-none" />
            </button>
          </motion.nav>
          <motion.div
            className="flex flex-row items-center justify-center gap-2 overflow-hidden"
            style={{ width: lineWidth }}
          >
            <span className="h-[2px] w-[15px] grow-0 bg-nier-400" />
            <span className="h-[2px] grow bg-nier-400" />
            <span className="h-[2px] w-[15px] grow-0 bg-nier-400" />
          </motion.div>
        </div>
      </header>
      <SideOverMenu
        open={sideMenuOpen}
        setOpen={setSideMenuOpen}
        links={navigationLinks}
        showNav={showNav}
      />
    </>
  )
}

export default Navbar
