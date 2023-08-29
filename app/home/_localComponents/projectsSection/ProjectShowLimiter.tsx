"use client"
import { ReactNode } from "react"
import { projectDisplayedCountOnMobileAtom, isMobileAtom } from "lib/state"
import { useAtomValue } from "jotai"

const ProjectShowLimiter = ({
  children,
}: {
  children: Iterable<ReactNode>
}) => {
  const projectDisplayedCountOnMobile = useAtomValue(
    projectDisplayedCountOnMobileAtom
  )
  const isMobile = useAtomValue(isMobileAtom)

  return (
    <>
      {isMobile
        ? Array.from(children).filter(
            (_, index) => index < projectDisplayedCountOnMobile
          )
        : children}
    </>
  )
}

export default ProjectShowLimiter
