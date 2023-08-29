"use client"

import {
  projectDisplayedCountOnMobileAtom,
  isMobileAtom,
  initialProjectDisplayedCount,
} from "lib/state"
import { useAtom, useAtomValue } from "jotai"
import NierButton from "app/_globalComponents/NierButton"

const ShowMoreButton = ({
  projectCount: totalProjectCount,
}: {
  projectCount: number
}) => {
  const [currentProjectCount, setCurrentProjectCount] = useAtom(
    projectDisplayedCountOnMobileAtom
  )
  const isMobile = useAtomValue(isMobileAtom)
  return (
    <>
      {isMobile && currentProjectCount < totalProjectCount && (
        <NierButton
          as='button'
          onClick={() => setCurrentProjectCount(totalProjectCount)}
          className='m-2'>
          Show More
        </NierButton>
      )}
    </>
  )
}
export default ShowMoreButton
