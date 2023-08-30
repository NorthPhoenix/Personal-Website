import React from "react"

import { prismaClient } from "lib/prisma"
import ProjectEntry from "./ProjectEntry"
import ProjectShowLimiter from "./ProjectShowLimiter"
import ShowMoreButton from "./ShowMoreButton"

const getProjects = async () => {
  const projects = await prismaClient.project.findMany({
    orderBy: { completeDate: "desc" },
  })
  return projects
}

const Projects = async () => {
  const projects = await getProjects()
  return (
    <section
      id='projects'
      className='flex w-full flex-col items-center justify-center py-4 text-xl'>
      {/* Title */}
      <div className='my-4 flex w-full flex-col items-center justify-center gap-4'>
        <div className='flex w-full max-w-7xl flex-row items-center justify-center gap-2 px-4'>
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
          <span className='h-[2px] grow bg-nier-700' />
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
        </div>
        <h2 className='text-shadow -translate-y-[2px] px-4 text-center font-exodus-striped text-5xl uppercase tracking-[0.5rem] sm:text-6xl'>
          Projects
        </h2>
        <div className='flex w-full max-w-7xl flex-row items-center justify-center gap-2 px-4'>
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
          <span className='h-[2px] grow bg-nier-700' />
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
        </div>
      </div>
      {/* Projects */}
      <div
        id='projectGrid'
        className='grid max-w-7xl auto-cols-auto auto-rows-auto grid-cols-1 gap-8 p-6 md:grid-cols-2 md:pt-10 xl:grid-cols-3'>
        <ProjectShowLimiter>
          {projects.map((project) => {
            return <ProjectEntry key={project.id} project={project} />
          })}
        </ProjectShowLimiter>
      </div>
      <ShowMoreButton projectCount={projects.length} />
    </section>
  )
}

export default Projects
