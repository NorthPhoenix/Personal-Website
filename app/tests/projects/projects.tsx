import { prismaClient } from "lib/prisma"
import { getObjectSignedUrl } from "lib/s3"
import Image from "next/image"
import { Suspense } from "react"

export const dynamic = "force-dynamic"

const getProjects = async () => {
  const projects = await prismaClient.project.findMany({
    orderBy: { completeDate: "desc" },
  })
  return projects
}

const Projects = async () => {
  const projects = await getProjects()
  return (
    <div className='flex flex-row flex-wrap items-center justify-start gap-8'>
      {projects.map((project) => (
        <div
          className='flex w-full flex-col items-center justify-start gap-6'
          key={project.id}>
          <h1 className='font-helvetica text-4xl'>{project.title}</h1>
          <p className='font-helvetica text-base'>{project.description}</p>
          <Suspense
            fallback={
              <div className='aspect-square h-screen w-[512px] max-w-4xl animate-pulse bg-gray-400 animate-infinite'></div>
            }>
            <ProjectImage s3Path={project.thumbnailS3Image.path} />
          </Suspense>
        </div>
      ))}
    </div>
  )
}

const checkURL = async (url: string): Promise<Boolean> => {
  const res = await fetch(url)
  if (res.ok) {
    // console.log("Image found", url.substring(68, 90))
    return true
  }
  // console.log("Error fetching image", url.substring(68, 90))
  return false
}

const ProjectImage = async ({ s3Path }: { s3Path: string }) => {
  const imageS3URL = await getObjectSignedUrl(s3Path)
  const isURLValid = await checkURL(imageS3URL)

  return (
    isURLValid && (
      <Image
        src={imageS3URL}
        width={512}
        height={512}
        alt='None'
        className='rounded-2xl object-cover'
      />
    )
  )
}

export default Projects
