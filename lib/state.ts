import { atom } from "jotai"

// loading states
export const homeLoadedAtom = atom<boolean>(false)
export const heroLoadedAtom = atom<boolean>(false)
export const aboutLoadedAtom = atom<boolean>(false)
export const skillsLoadedAtom = atom<boolean>(false)

type ScreenSizeType = "small" | "medium" | "large" | null
// screen size atom
export const screenSizeAtom = atom<ScreenSizeType>(null)

// the number of projects displayed in project section on small/medium/large screens
const INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_SMALL_SCREEN = 3
const INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_MEDIUM_SCREEN = 4
const INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_LARGE_SCREEN = 6
export const initialProjectDisplayedCountAtom = atom<number>((get) => {
  const screenSize = get(screenSizeAtom)
  switch (screenSize) {
    case "small":
      return INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_SMALL_SCREEN
    case "medium":
      return INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_MEDIUM_SCREEN
    case "large":
      return INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_LARGE_SCREEN
    default:
      return 0
  }
})
export const currentProjectDisplayedCountAtom = atom<number | null>(null)
