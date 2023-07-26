"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// My components
import Footer from "./Footer";
import Test from "./Test";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import LoadingScreen from "app/_components/LoadingScreen";
import Cubes3D from "./Cubes3D";
import Hero from "./Hero";
import Navbar from "./Navbar";
import StarsBackground from "./StarsBackground";

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
      <section className='flex flex-col h-[100svh]'>
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
      <About />
      <Projects />
      <ContactMe />
      <Test />
      <Footer />
    </>
  );
};

export default Home;
