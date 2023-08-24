import { prismaClient } from "lib/prisma"
import { getObjectSignedUrl } from "lib/s3"
import { Suspense } from "react"

const getProjects = async () => {
  const projects = await prismaClient.project.findMany()
  return projects
}

const Projects = async () => {
  const projects = await getProjects()
  return (
    <div className='flex flex-row flex-wrap items-center justify-start gap-8'>
      {projects.map((project) => (
        <div className='flex flex-col items-center justify-start gap-6'>
          <h1 className='text-4xl font-helvetica'>{project.title}</h1>
          <p className='text-base font-helvetica'>{project.description}</p>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectImage s3Path={project.thumbnailS3Image.path} />
          </Suspense>
        </div>
      ))}
    </div>
  )
}

const ProjectImage = async ({ s3Path }: { s3Path: string }) => {
  const image = await getObjectSignedUrl(s3Path)
  return (
    <img
      src={image}
      alt='None'
      className='object-cover w-96 h-96 rounded-2xl'
    />
  )
}

export default Projects
