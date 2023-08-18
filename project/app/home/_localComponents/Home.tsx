"use client";

import type { NextPage } from "next";

// My components
import Footer from "./Footer";
import Test from "./Test";
import About from "./aboutSection/About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Hero from "./heroSection/Hero";
import Navbar from "./Navbar";
import DiamondTransition from "app/_globalComponents/design/DiamondTransition";
import LinesThroughCircleDesign from "app/_globalComponents/design/LinesThroughCircleDesign";
import Skills from "./skillsSection/Skills";
const Home: NextPage = () => {
  return (
    <>
      {/* Home page of the website */}
      <Navbar />
      <Hero />
      <div className='relative overflow-hidden'>
        <LinesThroughCircleDesign className='absolute top-0 left-0 h-[90vw] -translate-x-[40%] -translate-y-48 -z-20 fill-none stroke-nier-400 opacity-60' />
        <LinesThroughCircleDesign className='absolute top-[800px] right-0 h-[90vw] rotate-180 translate-x-[40%] -translate-y-[400px] -z-20 fill-none stroke-nier-400 opacity-60' />
        <DiamondTransition
          twTransitionFill='fill-black'
          twTransitionStroke='stroke-nier-700'
          unitWidth={150}
          padding={"50px"}
        />
        <About />
        <Skills />
        <Projects />
      </div>
      <DiamondTransition
        twTransitionFill='fill-black'
        twTransitionStroke='stroke-nier-700'
        unitWidth={150}
        padding={"50px"}
        reverse
      />
      {/* <ContactMe /> */}
      <Footer />
      {/* <Test /> */}
    </>
  );
};

export default Home;
