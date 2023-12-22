"use client"
import { type ReactNode } from "react"
import { currentProjectDisplayedCountAtom } from "~/lib/state"
import { useAtomValue } from "jotai"

const ProjectShowLimiter = ({
  children,
}: {
  children: Iterable<ReactNode>
}) => {
  const currentProjectDisplayedCount = useAtomValue(
    currentProjectDisplayedCountAtom,
  )

  return (
    <>
      {currentProjectDisplayedCount !== null ?
        Array.from(children).filter(
          (_, index) => index < currentProjectDisplayedCount,
        )
      : children}
    </>
  )
}

export default ProjectShowLimiter
