"use client"

import { twMerge } from "tailwind-merge"
import { useCallback, useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import options from "~/lib/utils/particles-options"

type StarsBackgroundProps = {
  className?: string
  onLoad?: () => void
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({
  className,
  onLoad,
}) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    })
      .catch((error) => {
        console.error(error)
        console.error("Error initializing particles engine")
      })
      .finally(() => {
        setInit(true)
      })
  }, [])

  const particlesLoaded = useCallback(async () => {
    // console.log("StarsBackground useCallback");
    onLoad?.()
  }, [])
  if (!init) {
    return null
  }
  return (
    <>
      <Particles
        className={twMerge("bg-black", className)}
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        options={options}
      />
      <div className={twMerge("bg-radial-gradient", className)}></div>
    </>
  )
}

export default StarsBackground
