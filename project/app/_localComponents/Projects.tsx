import Link from "next/link";
import React from "react";

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
];

const Projects = () => {
  return (
    <section
      id='projects'
      className='flex flex-col items-center justify-center w-full text-xl'>
      <h2 className='p-10 m-6 text-6xl font-exodus-striped uppercase tracking-[0.5rem] text-shadow'>
        Projects
      </h2>
      <div
        id='projectFilters'
        className='grid w-full h-16 shadow-xl max-w-7xl bg-nier-700 text-nier-200 place-content-center'>
        Project filters Placeholder
      </div>
      <div
        id='projectGrid'
        className='grid grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto auto-cols-auto max-w-7xl'>
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className='relative flex flex-col items-center justify-center w-full h-full p-4 overflow-hidden shadow-xl bg-nier-200'>
              <div className='relative w-full h-64'>
                <img
                  className='absolute object-cover w-full h-full'
                  src={project.image}
                  alt={project.title}
                />
                <div className='absolute inset-0 w-full h-full bg-gradient-to-t from-nier-700 to-transparent' />
              </div>
              <div className='relative flex flex-col items-center justify-center w-full h-full p-4'>
                <h3 className='text-3xl font-semibold tracking-widest uppercase text-shadow'>
                  {project.title}
                </h3>
                <hr className='w-1/3 h-px border-nier-700' />
                <p className='text-base'>{project.description}</p>
              </div>
              <Link
                href={project.link}
                className='absolute bottom-0 left-0 w-full h-16 text-center text-nier-200 bg-nier-700'>
                Learn more
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
