import { Suspense } from "react"
import { ProjectImage } from "./ProjectImage"
import Link from "next/link"
import type { Project } from "@prisma/client"
import NierButton from "app/_globalComponents/NierButton"

const Project = ({ project }: { project: Project }) => {
  return (
    <div className='flex flex-col items-center justify-start overflow-hidden bg-nier-200 shadow-xl'>
      <Suspense fallback={null}>
        <div className='relative w-full'>
          <ProjectImage s3Path={project.thumbnailS3Image.path} />
        </div>
        <div className='container flex grow flex-col items-center justify-between p-2'>
          <h3 className='text-shadow text-3xl font-semibold uppercase tracking-widest'>
            {project.title}
          </h3>
          <p className='text-base'>{project.description}</p>
          {!!project.links && (
            <div className='flex w-full flex-row items-center justify-between gap-3'>
              {!!project.links.sourceCode && (
                <Link
                  href={project.links.sourceCode as string}
                  className='w-full grow p-2'>
                  <NierButton as='div'>Cource Code</NierButton>
                </Link>
              )}
              {!!project.links.deployedProject && (
                <Link
                  href={project.links.deployedProject as string}
                  className='w-full grow p-2'>
                  <NierButton as='div'>Go to Project</NierButton>
                </Link>
              )}
            </div>
          )}
        </div>
      </Suspense>
    </div>
  )
}

export default Project
