"use client";

import type { NextPage } from "next";
import { Suspense, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { atom, useAtom, useAtomValue } from "jotai";

const HomeComponent = dynamic(() => import("./_localComponents/Home"));
import LoadingScreen from "app/_globalComponents/LoadingScreen";
import {
  aboutLoadedAtom,
  heroLoadedAtom,
  homeLoadedAtom,
  skillsLoadedAtom,
} from "utils/state";

const Home: NextPage = () => {
  const [homeLoaded, setPageLoaded] = useAtom(homeLoadedAtom);
  const heroLoaded = useAtomValue(heroLoadedAtom);
  const aboutLoaded = useAtomValue(aboutLoadedAtom);
  const skillsLoaded = useAtomValue(skillsLoadedAtom);

  useEffect(() => {
    if (heroLoaded && aboutLoaded && skillsLoaded) {
      setTimeout(() => {
        // console.log("Page loaded");
        setPageLoaded(true);
        // Allow scrolling after loading (scrolling is prevented by default, see global.css)
        document.body.style.overflow = "auto";
      }, 2);
    }
  }, [heroLoaded, aboutLoaded, skillsLoaded]);

  return (
    <>
      <AnimatePresence>{!homeLoaded && <LoadingScreen />}</AnimatePresence>
      <Suspense fallback={null}>
        <HomeComponent />
      </Suspense>
    </>
  );
};

export default Home;
