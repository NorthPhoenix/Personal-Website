import React from "react"

import ProjectEntry from "./ProjectEntry"
import ProjectShowLimiter from "./ProjectShowLimiter"
import ShowMoreButton from "./ShowMoreButton"
import SectionTitle from "~/app/_components/SectionTitle"
import InViewDetector from "~/app/_components/InViewDetector"
import ProjectsAnimator from "./ProjectsAnimator"
import projects, { Project } from "~/lib/projectsConfig"

function sortProjectsByComplitionDataDesc(a: Project, b: Project) {
  if (!a.completeDate && !b.completeDate) {
    return 0
  }
  if (!a.completeDate) {
    return -1
  }
  if (!b.completeDate) {
    return 1
  }
  if (a.completeDate > b.completeDate) {
    return -1
  }
  if (a.completeDate < b.completeDate) {
    return 1
  }
  return 0
}

const Projects = async () => {
  return (
    <InViewDetector>
      <section
        id="projects"
        className="flex w-full flex-col items-center justify-center py-4 pt-24 text-xl md:pt-32"
      >
        <SectionTitle title="Projects" />
        {/* Projects */}
        <ProjectsAnimator>
          <div
            id="projectGrid"
            className="grid max-w-7xl auto-cols-auto auto-rows-auto grid-cols-1 gap-8 p-6 md:grid-cols-2 md:pt-10 xl:grid-cols-3"
          >
            <ProjectShowLimiter>
              {projects
                .sort(sortProjectsByComplitionDataDesc)
                .map((project) => {
                  return <ProjectEntry key={project.title} project={project} />
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
