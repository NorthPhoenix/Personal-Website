import { atom } from "jotai"

// loading states
export const homeLoadedAtom = atom(false)
export const heroLoadedAtom = atom(false)
export const aboutLoadedAtom = atom(false)
export const skillsLoadedAtom = atom(false)

// the number of projects displayed in project section on mobile screens
export const initialProjectDisplayedCount = 4
export const projectDisplayedCountOnMobileAtom = atom(
  initialProjectDisplayedCount
)

// weather the screen is mobile or not
export const isMobileAtom = atom(false)
