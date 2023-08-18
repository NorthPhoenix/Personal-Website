"use client";

import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DownArrow from "app/_globalComponents/design/DownArrow";
import StarsBackground from "./StarsBackground";
import Cubes3D from "./Cubes3D";
import { useSetAtom } from "jotai";
import { heroLoadedAtom } from "utils/state";

type HeroProps = {
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  const setHeroLoaded = useSetAtom(heroLoadedAtom);

  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const [cubesLoaded, setcubesLoaded] = useState(false);

  const onParticleLoad = () => {
    // console.log("onParticleLoad");
    setParticlesLoaded(true);
  };

  const onCubesLoad = () => {
    // console.log("onCubesLoad");
    setcubesLoaded(true);
  };

  useEffect(() => {
    if (particlesLoaded && cubesLoaded) {
      console.log("Hero loaded");
      setHeroLoaded(true);
    }
  }, [particlesLoaded, cubesLoaded]);

  return (
    <section id='hero' className='flex flex-col h-[100svh]'>
      <div
        className={twMerge(
          "flex flex-col grow items-center overflow-hidden mt-28",
          className
        )}>
        <section className='flex flex-col items-center justify-center w-full space-y-5 text-center grow '>
          <h1 className='text-[17vw] md:text-8xl lg:text-9xl xl:text-[9rem] mix-blend-difference font-exodus-striped h-full my-4 relative grow w-full'>
            <span className='absolute md:-translate-x-[67%] w-full top-0 text-transparent -translate-x-1/2 select-none left-1/2 bg-gradient-to-t from-neutral-600 to-nier-300 bg-clip-text'>
              DESIGN
            </span>
            <span className='absolute w-full text-transparent -translate-x-1/2 -translate-y-1/2 select-none left-1/2 top-1/2 bg-gradient-to-t from-neutral-600 to-nier-300 bg-clip-text'>
              DEVELOP
            </span>
            <span className='absolute md:-translate-x-[33%] w-full bottom-0 text-transparent -translate-x-1/2 select-none left-1/2 bg-gradient-to-t from-neutral-600 to-nier-300 bg-clip-text'>
              DELIVER
            </span>
          </h1>
        </section>

        <motion.a
          className='w-40 my-10 opacity-50 h-7'
          href='#about'
          whileHover={{ scale: 1.3, opacity: 1 }}>
          <DownArrow className='w-full h-full fill-nier-400 mix-blend-difference' />
        </motion.a>
      </div>
      <StarsBackground
        onLoad={onParticleLoad}
        className='absolute top-0 left-0 w-full h-full -z-50'
      />
      <Cubes3D
        onLoad={onCubesLoad}
        className='absolute top-0 left-0 w-full h-full -z-40'
      />
    </section>
  );
};

export default Hero;
