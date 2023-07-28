"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// My components
import Footer from "./_localComponents/Footer";
import Test from "./_localComponents/Test";
import About from "./_localComponents/About";
import Projects from "./_localComponents/Projects";
import ContactMe from "./_localComponents/ContactMe";
import LoadingScreen from "app/_globalComponents/LoadingScreen";
import Cubes3D from "./_localComponents/Cubes3D";
import Hero from "./_localComponents/Hero";
import Navbar from "./_localComponents/Navbar";
import StarsBackground from "./_localComponents/StarsBackground";
import DiamondTransition from "./_globalComponents/design/DiamondTransition";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const [cubesLoaded, setcubesLoaded] = useState(false);

  const onParticleLoad = () => {
    console.log("onParticleLoad");
    setParticlesLoaded(true);
  };

  const onCubesLoad = () => {
    console.log("onCubesLoad");
    setcubesLoaded(true);
  };

  useEffect(() => {
    // prevent scrolling while loading
    document.body.style.overflow = "hidden";

    if (particlesLoaded && cubesLoaded) {
      setTimeout(() => {
        setLoading(false);
      }, 500);

      // allow scrolling after loading
      document.body.style.overflow = "auto";
    }
  }, [particlesLoaded, cubesLoaded]);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      {/* Front screen of the website */}
      <section id='hero' className='flex flex-col h-[100svh]'>
        <Navbar />
        <Hero />
        <StarsBackground
          onLoad={onParticleLoad}
          className='absolute top-0 left-0 w-full h-full -z-50'
        />
        <Cubes3D
          onLoad={onCubesLoad}
          className='absolute top-0 left-0 w-full h-full -z-40'
        />
      </section>
      <DiamondTransition
        twTransitionFill='fill-black'
        twTransitionStroke='stroke-nier-700'
        unitWidth={150}
      />
      <About />
      <Projects />
      <ContactMe />
      <Test />
      <Footer />
    </>
  );
};

export default Home;
