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
import Hero from "./_localComponents/heroSection/Hero";
import Navbar from "./_localComponents/heroSection/Navbar";
import DiamondTransition from "./_globalComponents/design/DiamondTransition";

const Home: NextPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    if (heroLoaded) {
      console.log("Page loaded");
      setLoaded(true);
      // Allow scrolling after loading (scrolling is prevented by default, see global.css)
      document.body.style.overflow = "auto";
    }
  }, [heroLoaded]);

  return (
    <>
      <AnimatePresence>{!loaded && <LoadingScreen />}</AnimatePresence>
      {/* Front screen of the website */}
      <Navbar />
      <Hero setLoaded={setHeroLoaded} />
      <DiamondTransition
        twTransitionFill='fill-black'
        twTransitionStroke='stroke-nier-700'
        unitWidth={150}
        padding={"50px"}
      />
      <About />
      <Projects />
      <DiamondTransition
        twTransitionFill='fill-black'
        twTransitionStroke='stroke-nier-700'
        unitWidth={150}
        padding={"50px"}
        reverse
      />
      <ContactMe />
      <Test />
      <Footer />
    </>
  );
};

export default Home;
