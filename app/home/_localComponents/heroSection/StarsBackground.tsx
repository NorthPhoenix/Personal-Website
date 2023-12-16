"use client"

import { twMerge } from "tailwind-merge"
import { useCallback, useEffect, useState } from "react"
import type { Container, Engine } from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import options from "lib/utils/particles-options"

type StarsBackgroundProps = {
  className?: string
  onLoad?: () => void
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({
  className,
  onLoad,
}) => {
  const [ init, setInit ] = useState(false);

  useEffect(() => {
      initParticlesEngine(async (engine) => {
          await loadFull(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // console.log("StarsBackground useCallback");
      onLoad?.()
    },
    []
  )
  if (!init) {
      return null;
  }
  return (
    <>
      <Particles
        className={twMerge("bg-black", className)}
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <div className={twMerge("bg-radial-gradient", className)}></div>
    </>
  )
}

export default StarsBackground
