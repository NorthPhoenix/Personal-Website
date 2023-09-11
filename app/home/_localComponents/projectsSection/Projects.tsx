import React from "react"

import { prismaClient } from "lib/prisma"
import ProjectEntry from "./ProjectEntry"
import ProjectShowLimiter from "./ProjectShowLimiter"
import ShowMoreButton from "./ShowMoreButton"
import SectionTitle from "app/_globalComponents/SectionTitle"
import InViewDetector from "./InViewDetector"
import ProjectsAnimator from "./ProjectsAnimator"

const getProjects = async () => {
  const projects = await prismaClient.project.findMany({
    orderBy: { completeDate: "desc" },
  })
  return projects
}

const Projects = async () => {
  const projects = await getProjects()
  return (
    <InViewDetector>
      <section
        id='projects'
        className='flex w-full flex-col items-center justify-center py-4 pt-24 text-xl md:pt-32'>
        <SectionTitle title='Projects' />
        {/* Projects */}
        <ProjectsAnimator>
          <div
            id='projectGrid'
            className='grid max-w-7xl auto-cols-auto auto-rows-auto grid-cols-1 gap-8 p-6 md:grid-cols-2 md:pt-10 xl:grid-cols-3'>
            <ProjectShowLimiter>
              {projects.map((project) => {
                return <ProjectEntry key={project.id} project={project} />
              })}
            </ProjectShowLimiter>
          </div>
        </ProjectsAnimator>
        <ShowMoreButton projectCount={projects.length} />
      </section>
    </InViewDetector>
  )
}

export default Projects
