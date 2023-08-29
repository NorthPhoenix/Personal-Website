"use client"

import { Suspense, useEffect, ReactNode, useRef, useLayoutEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { isMobileAtom } from "lib/state"

// const HomeComponent = dynamic(() => import("./_localComponents/Home"));
import LoadingScreen from "app/_globalComponents/LoadingScreen"
import {
  aboutLoadedAtom,
  heroLoadedAtom,
  homeLoadedAtom,
  skillsLoadedAtom,
} from "lib/state"

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [homeLoaded, setPageLoaded] = useAtom(homeLoadedAtom)
  const heroLoaded = useAtomValue(heroLoadedAtom)
  const aboutLoaded = useAtomValue(aboutLoadedAtom)
  const skillsLoaded = useAtomValue(skillsLoadedAtom)

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

  // Set isMobile state
  const setIsMobile = useSetAtom(isMobileAtom)
  useLayoutEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className='overflow-hidden' ref={ref}>
      <AnimatePresence>{!homeLoaded && <LoadingScreen />}</AnimatePresence>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  )
}

export default HomeLayout
