"use client";

import type { NextPage } from "next";
// import { useEffect, useState, Suspense } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// My components
import Footer from "./Footer";
import Test from "./Test";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import { useState, useEffect } from "react";
import LoadingScreen from "components/LoadingScreen";
import Cubes3D from "./Cubes3D";
import Hero from "./Hero";
import Navbar from "./Navbar";
import StarsBackground from "./StarsBackground";

export const metadata = {
    title: "Nikta Istomin | Portfolio",
    description: "Nikta Istomin's portfolio website",
    image: "/design/logo.svg",
};

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
            {loading && <LoadingScreen />}
            {/* Front screen of the website */}
            <section className='flex min-h-screen flex-col sm:h-screen'>
                <Navbar />
                <Hero className='grow' />
                <StarsBackground
                    onLoad={onParticleLoad}
                    className='absolute top-0 left-0 -z-50 h-full w-full'
                />
                <Cubes3D
                    onLoad={onCubesLoad}
                    className='absolute top-0 left-0 -z-40 h-full w-full'
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
