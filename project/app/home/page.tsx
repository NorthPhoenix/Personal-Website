"use client";

import type { NextPage } from "next";
import { Suspense, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { atom, useAtom, useAtomValue } from "jotai";
import { pageLoadedAtom } from "./layout";

const HomeComponent = dynamic(() => import("./_localComponents/Home"));
import LoadingScreen from "app/_globalComponents/LoadingScreen";

export const heroLoadedAtom = atom(false);
export const aboutLoadedAtom = atom(false);
export const skillsLoadedAtom = atom(false);

const Home: NextPage = () => {
  const [pageLoaded, setPageLoaded] = useAtom(pageLoadedAtom);
  const heroLoaded = useAtomValue(heroLoadedAtom);
  const aboutLoaded = useAtomValue(aboutLoadedAtom);
  const skillsLoaded = useAtomValue(skillsLoadedAtom);

  useEffect(() => {
    if (heroLoaded && aboutLoaded && skillsLoaded) {
      // console.log("Page loaded");
      setPageLoaded(true);
      // Allow scrolling after loading (scrolling is prevented by default, see global.css)
      document.body.style.overflow = "auto";
    }
  }, [heroLoaded, aboutLoaded, skillsLoaded]);

  return (
    <>
      <AnimatePresence>{!pageLoaded && <LoadingScreen />}</AnimatePresence>
      <Suspense fallback={null}>
        <HomeComponent />
      </Suspense>
    </>
  );
};

export default Home;
