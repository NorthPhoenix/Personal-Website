"use client"

import React, { forwardRef, useEffect, useRef, useState } from "react"
import {
  type Variants,
  motion,
  useInView,
  type ForwardRefComponent,
} from "framer-motion"
import SectionTitle from "~/app/_components/SectionTitle"
import projects, { type Project } from "~/lib/projectsConfig"
import { Suspense } from "react"
import Link from "next/link"
import NierButton from "~/app/_components/NierButton"
import Image from "next/image"
import { useAtomValue } from "jotai"
import { initialProjectDisplayedCountAtom } from "~/lib/state"

function sortProjectsByComplitionDateDesc(a: Project, b: Project) {
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

function processDate(date: Date) {
  // formate date as follows: "Jan 2021", "Feb 2019", etc.
  return `${date.toLocaleString("en-US", {
    month: "short",
  })} ${date.getFullYear()}`
}

const initialAnimationDelay = 0.3
const staggerAnimationDelay = 0.1

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (props: { i: number; initialDelay: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: props.i * staggerAnimationDelay + props.initialDelay,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
}

const Projects = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30%" })
  const [projectDisplayCount, setProjectDisplayCount] = useState(0)
  const initialProjectDisplayCount = useAtomValue(
    initialProjectDisplayedCountAtom,
  )
  useEffect(() => {
    if (initialProjectDisplayCount > projectDisplayCount) {
      setProjectDisplayCount(initialProjectDisplayCount)
    }
  }, [initialProjectDisplayCount])
  return (
    <section
      ref={ref}
      id="projects"
      className="flex w-full flex-col items-center justify-center py-4 pt-24 text-xl md:pt-32"
    >
      <SectionTitle title="Projects" />
      {/* Projects */}
      <div
        className="grid max-w-7xl auto-cols-auto auto-rows-auto grid-cols-1 gap-8 p-6 md:grid-cols-2 md:pt-10 xl:grid-cols-3"
        id="projectGrid"
      >
        {projects
          .sort(sortProjectsByComplitionDateDesc)
          .filter((_, index) => index < projectDisplayCount)
          .map((project, index) => {
            return (
              <ProjectEntry
                custom={{
                  i: Math.max(
                    0,
                    index - (projectDisplayCount - initialProjectDisplayCount),
                  ),
                  initialDelay:
                    projectDisplayCount === initialProjectDisplayCount ?
                      initialAnimationDelay
                    : 0,
                }}
                key={project.title}
                project={project}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="h-full w-full"
              />
            )
          })}
      </div>
      {projectDisplayCount < projects.length && (
        <NierButton
          as="button"
          onClick={() => {
            setProjectDisplayCount((count) => count + 5)
          }}
          className="m-2 px-6"
        >
          Show More
        </NierButton>
      )}
    </section>
  )
}

const ProjectEntry: ForwardRefComponent<
  React.ElementRef<typeof motion.div>,
  React.ComponentPropsWithoutRef<typeof motion.div> & {
    project: Project
  }
> = forwardRef(({ project, ...props }, ref) => {
  return (
    <motion.div {...props} ref={ref}>
      <div className="flex h-full flex-col items-center justify-start overflow-hidden bg-nier-200 shadow-xl">
        <Suspense fallback={null}>
          <div className="flex aspect-square w-full items-center justify-center bg-nier-400">
            <Image
              src={`/images/projects/${project.thumbnail}`}
              alt={`${project.title}'s thumbnail`}
              height={512}
              width={512}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="flex w-full grow flex-col items-center justify-between p-4">
            <div className="flex w-full flex-col items-center justify-start">
              <h3 className="mb-2 flex w-full flex-col">
                <span className="text-shadow line-clamp-2 w-full text-lg font-semibold uppercase tracking-widest">
                  {project.title}
                </span>
                {!!project.type && (
                  <span className="w-full text-base leading-5 ">
                    {project.type}
                  </span>
                )}
                {!!project.completeDate && (
                  <span className=" w-full text-base leading-5 opacity-70">
                    {processDate(project.completeDate)}
                  </span>
                )}
              </h3>
              <p className=" text-sm md:text-base">{project.description}</p>
            </div>
            {(!!project.links?.sourceCode ||
              !!project.links?.deployedProject) && (
              <div className="mt-3 flex w-full flex-row items-center justify-between gap-3 justify-self-end">
                {!!project.links.sourceCode && (
                  <Link href={project.links.sourceCode} className="w-full grow">
                    <NierButton as="div">Source Code</NierButton>
                  </Link>
                )}
                {!!project.links.deployedProject && (
                  <Link
                    href={project.links.deployedProject}
                    className="w-full grow"
                  >
                    <NierButton as="div">Go to Project</NierButton>
                  </Link>
                )}
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </motion.div>
  )
})

export default Projects
