import { Suspense } from "react"
import { ProjectImage } from "./ProjectImage"
import Link from "next/link"
import type { Project } from "@prisma/client"
import NierButton from "app/_globalComponents/NierButton"

const processDate = (date: Date) => {
  // formate date as follows: "Jan 2021", "Feb 2019", etc.
  return `${date.toLocaleString("en-US", {
    month: "short",
  })} ${date.getFullYear()}`
}

const Project = ({ project }: { project: Project }) => {
  return (
    <div className='h-full w-full'>
      <div className='flex h-full flex-col items-center justify-start overflow-hidden bg-nier-200 shadow-xl'>
        <Suspense fallback={null}>
          <div className='relative w-full'>
            <ProjectImage s3Path={project.thumbnailS3Image.path} />
          </div>
          <div className='flex w-full grow flex-col items-center justify-between p-4'>
            <div className='flex w-full flex-col items-center justify-start'>
              <h3 className='mb-4 flex w-full flex-col'>
                <span className='text-shadow line-clamp-1 w-full text-lg font-semibold uppercase tracking-widest'>
                  {project.title}
                </span>
                {!!project.type && (
                  <span className='w-full text-lg leading-5 '>
                    {project.type}
                  </span>
                )}
                {!!project.completeDate && (
                  <span className=' w-full text-lg leading-5 opacity-70'>
                    {processDate(project.completeDate)}
                  </span>
                )}
              </h3>
              {/* <div className='my-4 h-px w-2/3 bg-nier-700' /> */}
              <p className='line-clamp-3 text-base'>{project.description}</p>
            </div>
            {(!!project.links?.sourceCode ||
              !!project.links?.deployedProject) && (
              <div className='mt-3 flex w-full flex-row items-center justify-between gap-3 justify-self-end'>
                {!!project.links.sourceCode && (
                  <Link
                    href={project.links.sourceCode as string}
                    className='w-full grow'>
                    <NierButton as='div'>Source Code</NierButton>
                  </Link>
                )}
                {!!project.links.deployedProject && (
                  <Link
                    href={project.links.deployedProject as string}
                    className='w-full grow'>
                    <NierButton as='div'>Go to Project</NierButton>
                  </Link>
                )}
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  )
}

export default Project
