"use client"
import { ReactNode, useLayoutEffect } from "react"
import {
  initialProjectDisplayedCountAtom,
  currentProjectDisplayedCountAtom,
} from "lib/state"
import { useAtom, useAtomValue } from "jotai"

const ProjectShowLimiter = ({
  children,
}: {
  children: Iterable<ReactNode>
}) => {
  const initialProjectDisplayedCount = useAtomValue(
    initialProjectDisplayedCountAtom
  )
  const [currentProjectDisplayedCount, setCurrentProjectDisplayedCount] =
    useAtom(currentProjectDisplayedCountAtom)

  useLayoutEffect(() => {
    if (currentProjectDisplayedCount === null) {
      // need to set initial project count
      setCurrentProjectDisplayedCount(initialProjectDisplayedCount)
    }
  }, [])

  return (
    <>
      {Array.from(children).filter(
        (_, index) => index < currentProjectDisplayedCount!
      )}
    </>
  )
}

export default ProjectShowLimiter
