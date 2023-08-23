"use client";

import { twMerge } from "tailwind-merge";
import { useCallback } from "react";
import type { Container, Engine, ParticlesOptions } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import options from "lib/utils/particles-options.js";

type StarsBackgroundProps = {
  className?: string;
  onLoad?: () => void;
};

const StarsBackground: React.FC<StarsBackgroundProps> = ({
  className,
  onLoad,
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // console.log("StarsBackground useCallback");
      onLoad?.();
    },
    []
  );
  return (
    <>
      <Particles
        className={twMerge("bg-black", className)}
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={options as unknown as ParticlesOptions}
      />
      <div className={twMerge("bg-radial-gradient", className)}></div>
    </>
  );
};

export default StarsBackground;
