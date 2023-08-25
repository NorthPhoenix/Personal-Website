import Link from "next/link"
import React from "react"

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300?random=1",
    link: "https://google.com",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300?random=2",
    link: "https://google.com",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300?random=3",
    link: "https://google.com",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300?random=4",
    link: "https://google.com",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300?random=5",
    link: "https://google.com",
  },
  {
    title: "Project 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300?random=6",
    link: "https://google.com",
  },
]

const Projects = () => {
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
          return (
            <div
              key={project.title}
              className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-nier-200 p-4 shadow-xl'>
              <div className='relative h-64 w-full'>
                <img
                  className='absolute h-full w-full object-cover'
                  src={project.image}
                  alt={project.title}
                />
                <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-nier-700 to-transparent' />
              </div>
              <div className='relative flex h-full w-full flex-col items-center justify-center p-4'>
                <h3 className='text-shadow text-3xl font-semibold uppercase tracking-widest'>
                  {project.title}
                </h3>
                <hr className='h-px w-1/3 border-nier-700' />
                <p className='text-base'>{project.description}</p>
              </div>
              <Link
                href={project.link}
                className='absolute bottom-0 left-0 h-16 w-full bg-nier-700 text-center text-nier-200'>
                Learn more
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
