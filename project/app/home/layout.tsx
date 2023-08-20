"use client";

import { Suspense, useEffect, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";

// const HomeComponent = dynamic(() => import("./_localComponents/Home"));
import LoadingScreen from "app/_globalComponents/LoadingScreen";
import {
  aboutLoadedAtom,
  heroLoadedAtom,
  homeLoadedAtom,
  skillsLoadedAtom,
} from "utils/state";

const HomeLayout = ({ children }: { children: ReactNode }) => {
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
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default HomeLayout;
