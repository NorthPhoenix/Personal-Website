"use client"

import ErrorPopup from "~/app/_components/ErrorPopup"

const resume = () => {
  return (
    <ErrorPopup
      header={"header"}
      message={"message"}
      close={() => {
        undefined
      }}
      closeAfter={1000000}
    />
  )
}

export default resume
