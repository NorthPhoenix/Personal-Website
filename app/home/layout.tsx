"use client"

import { Suspense, useEffect, ReactNode, useRef, useLayoutEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import {
  currentProjectDisplayedCountAtom,
  initialProjectDisplayedCountAtom,
  screenSizeAtom,
} from "lib/state"

import LoadingScreen from "app/_globalComponents/LoadingScreen"
import {
  aboutLoadedAtom,
  heroLoadedAtom,
  homeLoadedAtom,
  skillsLoadedAtom,
} from "lib/state"

export const dynamic = "force-dynamic"

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [homeLoaded, setPageLoaded] = useAtom(homeLoadedAtom)
  const heroLoaded = useAtomValue(heroLoadedAtom)
  const aboutLoaded = useAtomValue(aboutLoadedAtom)
  const skillsLoaded = useAtomValue(skillsLoadedAtom)

  const [screenSize, setScreenSize] = useAtom(screenSizeAtom)
  const setCurrentProjectDisplayedCount = useSetAtom(
    currentProjectDisplayedCountAtom
  )
  const initialProjectDisplayedCount = useAtomValue(
    initialProjectDisplayedCountAtom
  )

  useEffect(() => {
    if (heroLoaded && aboutLoaded && skillsLoaded) {
      setTimeout(() => {
        // console.log("Page loaded");
        setPageLoaded(true)
        // Allow scrolling after loading
        ref.current!.style.overflow = "auto"
      }, 2)
    }
  }, [heroLoaded, aboutLoaded, skillsLoaded])

  // Set screen size state
  useLayoutEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 640) {
        setScreenSize("xs")
      } else if (windowWidth < 768) {
        setScreenSize("sm")
      } else if (windowWidth < 1024) {
        setScreenSize("md")
      } else if (windowWidth < 1280) {
        setScreenSize("lg")
      } else if (windowWidth < 1536) {
        setScreenSize("xl")
      } else {
        setScreenSize("2xl")
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // set initial project count on reload or resize
  useEffect(() => {
    setCurrentProjectDisplayedCount(initialProjectDisplayedCount)
  }, [screenSize])

  return (
    <div className='overflow-hidden' ref={ref}>
      <AnimatePresence>{!homeLoaded && <LoadingScreen />}</AnimatePresence>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  )
}

export default HomeLayout
