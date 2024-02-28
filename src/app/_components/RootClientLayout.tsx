"use client"

import { Suspense, useEffect, type ReactNode, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import { useAtom, useAtomValue } from "jotai"

import LoadingScreen from "~/app/_components/LoadingScreen"
import { heroLoadedAtom, homeLoadedAtom, skillsLoadedAtom } from "~/lib/state"

const RootClientLayout = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [homeLoaded, setHomeLoaded] = useAtom(homeLoadedAtom)
  const heroLoaded = useAtomValue(heroLoadedAtom)
  const skillsLoaded = useAtomValue(skillsLoadedAtom)

  useEffect(() => {
    if (heroLoaded && skillsLoaded) {
      setTimeout(() => {
        // console.log("Page loaded");
        setHomeLoaded(true)
        // Allow scrolling after loading
        ref.current!.style.overflow = "auto"
      }, 1000)
    }
  }, [heroLoaded, skillsLoaded])

  return (
    <div className="overflow-hidden" ref={ref}>
      <AnimatePresence>{!homeLoaded && <LoadingScreen />}</AnimatePresence>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  )
}

export default RootClientLayout
