"use client"

import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react"
import { motion, stagger, useAnimate } from "framer-motion"

import DownArrow from "app/_globalComponents/design/DownArrow"
import StarsBackground from "./StarsBackground"
import Cubes3D from "./Cubes3D"
import { useSetAtom, useAtomValue } from "jotai"
import { heroLoadedAtom, homeLoadedAtom } from "lib/state"

type HeroProps = {
  className?: string
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const setHeroLoaded = useSetAtom(heroLoadedAtom)
  const homeLoaded = useAtomValue(homeLoadedAtom)

  const [particlesLoaded, setParticlesLoaded] = useState(false)
  // const [cubesLoaded, setcubesLoaded] = useState(false)

  const onParticleLoad = () => {
    console.log("onParticleLoad")
    setParticlesLoaded(true)
  }

  // const onCubesLoad = () => {
  //   // console.log("onCubesLoad");
  //   setcubesLoaded(true)
  // }

  useEffect(() => {
    if (particlesLoaded) {
      console.log("Hero loaded")
      setHeroLoaded(true)
    }
  }, [particlesLoaded])

  const [animationScope, animate] = useAnimate()
  useEffect(() => {
    if (homeLoaded) {
      animate(
        [
          [
            "span",
            { opacity: 1 },
            { delay: stagger(1.5), duration: 2.5, ease: "easeIn" },
          ],
        ],
        { delay: 1.3 }
      )
    }
  }, [homeLoaded])

  return (
    <section
      id='hero'
      className='relative flex h-[max(100svh,_512px)] flex-col'>
      <div
        className={twMerge(
          "mt-28 flex grow flex-col items-center overflow-hidden",
          className
        )}>
        <div className='flex w-full grow flex-col items-center justify-center space-y-5 text-center '>
          <motion.h1
            ref={animationScope}
            className='relative my-4 h-full w-full grow font-exodus-striped text-[17vw] mix-blend-difference md:text-8xl lg:text-9xl xl:text-[9rem]'>
            <span className='absolute left-1/2 top-0 w-full -translate-x-1/2 select-none bg-gradient-to-t from-neutral-600 to-nier-300 bg-clip-text text-transparent opacity-0 md:-translate-x-[67%]'>
              DESIGN
            </span>
            <span className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 select-none bg-gradient-to-t from-neutral-600 to-nier-300 bg-clip-text text-transparent opacity-0'>
              DEVELOP
            </span>
            <span className='absolute bottom-0 left-1/2 w-full -translate-x-1/2 select-none bg-gradient-to-t from-neutral-600 to-nier-300 bg-clip-text text-transparent opacity-0 md:-translate-x-[33%]'>
              DELIVER
            </span>
          </motion.h1>
        </div>

        <motion.a
          className='my-10 h-7 w-40 opacity-50'
          href='#about'
          whileHover={{ scale: 1.3, opacity: 1 }}>
          <DownArrow className='h-full w-full fill-nier-400 mix-blend-difference' />
        </motion.a>
      </div>
      <StarsBackground
        onLoad={onParticleLoad}
        className='absolute left-0 right-0 top-0 -z-30 h-full'
      />
      {/* <Cubes3D
        onLoad={onCubesLoad}
        className='absolute left-0 top-0 -z-40 h-full w-full'
      /> */}
    </section>
  )
}

export default Hero
