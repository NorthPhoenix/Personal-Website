import React from "react"

import { prismaClient } from "lib/prisma"
import Project from "./Project"

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
    <section
      id='projects'
      className='flex w-full flex-col items-center justify-center text-xl'>
      <h2 className='text-shadow m-6 p-10 font-exodus-striped text-6xl uppercase tracking-[0.5rem]'>
        Projects
      </h2>
      <div
        id='projectFilters'
        className='grid h-16 w-full max-w-7xl place-content-center bg-nier-700 text-nier-200 shadow-xl'>
        Project filters Placeholder
      </div>
      <div
        id='projectGrid'
        className='grid max-w-7xl auto-cols-auto auto-rows-auto grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project) => {
          return <Project key={project.id} project={project} />
        })}
      </div>
    </section>
  )
}

export default Projects
