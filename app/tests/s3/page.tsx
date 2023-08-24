import { GetObject, getObjectSignedUrl } from "lib/s3"

export const dynamic = "force-dynamic"

const fetchPhotoURL = async (key: string) => {
  const photo = await getObjectSignedUrl(key)
  console.log("Route:/tests/s3 - Photo URL:", photo)
  return photo
}

const S3Test = async () => {
  const photoURL = await fetchPhotoURL(
    "projects/support-lists-for-moders-thumbnail.jpg"
  )
  return (
    <main className='p-8 mx-auto'>
      <div className='flex flex-col items-center justify-start gap-6'>
        <h1 className='text-4xl font-helvetica'>
          Photo fetched with signed URL
        </h1>
        <img src={photoURL} alt='' />
      </div>
    </main>
  )
}

export default S3Test
