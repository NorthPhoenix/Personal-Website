import { getObjectSignedUrl } from "lib/s3"
import Image from "next/image"
import blankImg from "public/images/blank.jpg"

const checkURL = async (url: string): Promise<Boolean> => {
  const res = await fetch(url)
  if (res.ok) {
    // console.log("Image found", url.substring(68, 90))
    return true
  }
  // console.log("Error fetching image", url.substring(68, 90))
  return false
}

export const ProjectImage = async ({ s3Path }: { s3Path: string }) => {
  const imageS3URL = await getObjectSignedUrl(s3Path)
  const isURLValid = await checkURL(imageS3URL)

  return isURLValid ? (
    <Image
      loading='eager'
      src={imageS3URL}
      width={512}
      height={512}
      style={{
        width: "100%",
        height: "auto",
      }}
      alt={imageS3URL}
      className='object-cover'
    />
  ) : (
    <Image
      loading='eager'
      placeholder='blur'
      src={blankImg}
      width={512}
      height={512}
      style={{
        width: "100%",
        height: "auto",
      }}
      alt=''
      className='object-cover'
    />
  )
}
