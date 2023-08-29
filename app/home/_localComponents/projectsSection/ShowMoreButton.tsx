"use client"

import { currentProjectDisplayedCountAtom } from "lib/state"
import { useAtom } from "jotai"
import NierButton from "app/_globalComponents/NierButton"

const ShowMoreButton = ({
  projectCount: totalProjectCount,
}: {
  projectCount: number
}) => {
  const [currentProjectCount, setCurrentProjectCount] = useAtom(
    currentProjectDisplayedCountAtom
  )
  return (
    <>
      {currentProjectCount !== null &&
        currentProjectCount < totalProjectCount && (
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
