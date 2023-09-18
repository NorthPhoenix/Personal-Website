"use client"

import { useEffect, useState } from "react"

export const ProjectImage = ({ s3Path }: { s3Path: string }) => {
  const [imageS3URL, setImageS3URL] = useState<string>("")

  useEffect(() => {
    fetch(`/api/s3Photo?key=${s3Path}`, {
      next: { revalidate: 3600 },
      method: "GET",
    })
      .then((res) => res.json())
      .then((url) => {
        // console.log(s3Path, url)
        setImageS3URL(url)
      })
      .catch((err) => {
        setImageS3URL("public/images/blank.jpg")
        // console.log(err)
      })
  }, [])

  return imageS3URL ? (
    <img
      src={imageS3URL}
      width={512}
      height={512}
      style={{
        width: "100%",
        height: "auto",
      }}
      alt={s3Path}
      className='object-cover'
    />
  ) : (
    // loading state
    <div className='bg-nier-100 aspect-square h-full w-auto' />
  )
}
