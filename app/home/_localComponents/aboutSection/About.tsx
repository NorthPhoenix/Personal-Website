import React from "react"
import About3D from "./About3D"

const About = () => {
  return (
    <section
      id='about'
      className='relative mb-16 flex w-full items-center justify-center overflow-y-visible p-2 py-12 font-helvetica selection:bg-nier-700 selection:text-nier-200 md:mb-20 md:p-6'>
      <div className='relative w-full max-w-7xl shrink 2xl:max-w-[80%]'>
        <article className='nier-block-left-sm md:nier-block-left relative m-0 ml-4 mr-2 flex min-h-[40vmin] w-auto flex-col items-start justify-center p-0 py-5 sm:m-4 sm:p-2 md:p-8 lg:w-3/5'>
          <div className='mb-8 bg-nier-200 bg-opacity-80 p-4 shadow-md md:bg-opacity-100 '>
            <header className='mb-4 w-full border-b border-nier-700 pb-4'>
              <h2 className='text-shadow mb-3 text-3xl font-normal uppercase tracking-[0.5rem] md:whitespace-nowrap md:text-4xl'>
                Nikita Istomin
              </h2>
              <h3 className='flex w-full flex-col items-start justify-start gap-2 text-lg uppercase md:text-xl xl:flex-row xl:items-center xl:gap-4 '>
                <span>Software developer.</span>
                <span>Deep thinker.</span>
                <span>Life enjoyer.</span>
              </h3>
            </header>
            <p className='text-lg '>
              I'm a frontend web developer with a passion for creating beautiful
              and useful things. I was introduced to programming in 2015 and
              since then I was dragged into the world of technology. I'm a
              recent computer science grad from the University of Texas at
              Dallas, and I'm exited to start my career in the industry.
            </p>
          </div>
          <div className='grid shrink grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2 sm:grid-rows-2'>
            <div className='flex flex-col items-center justify-start gap-2 bg-nier-200 bg-opacity-80 p-2 text-center shadow-md md:bg-opacity-100 '>
              <h4 className='text-shadow mt-2 text-lg font-semibold uppercase tracking-widest md:text-xl'>
                Motivated
              </h4>
              <hr className='h-px w-1/3 border-nier-700' />
              <p className='text-base'>
                As a quick-thinking software engineer, I embrace challenges and
                never shy away from asking questions. Eager to learn, I use my
                inquisitive nature to stay at the cutting edge of this
                ever-evolving field.
              </p>
            </div>
            <div className='flex flex-col items-center justify-start gap-2 bg-nier-200 bg-opacity-80 p-2 text-center shadow-md md:bg-opacity-100'>
              <h4 className='text-shadow mt-2 text-lg font-semibold uppercase tracking-widest md:text-xl'>
                Effective
              </h4>
              <hr className='h-px w-1/3 border-nier-700' />
              <p className='text-base'>
                I blend passion, precision, and a user-centric approach to craft
                efficient solutions. Embracing cutting-edge technologies and an
                agile mindset, I thrive on solving complex challenges.
              </p>
            </div>
            <div className='flex flex-col items-center justify-start gap-2 bg-nier-200 bg-opacity-80 p-2 text-center shadow-md md:bg-opacity-100'>
              <h4 className='text-shadow mt-2 text-lg font-semibold uppercase tracking-widest md:text-xl'>
                Consistent
              </h4>
              <hr className='h-px w-1/3 border-nier-700' />
              <p className='text-base'>
                I bring unwavering commitment to excellence, ensuring remarkable
                results on any team. I build projects that adhere to the highest
                standards and delivering consistent and lasting value to clients
                and end-users.
              </p>
            </div>
            <div className='flex flex-col items-center justify-start gap-2 bg-nier-200 bg-opacity-80 p-2 text-center shadow-md md:bg-opacity-100'>
              <h4 className='text-shadow mt-2 text-lg font-semibold uppercase tracking-widest md:text-xl'>
                Collaborative
              </h4>
              <hr className='h-px w-1/3 border-nier-700' />
              <p className='text-base'>
                I thrive in team environments, valuing open communication and
                diverse perspectives. I strive to empower and uplift my team,
                creating an atmosphere where everyone can shine and succeed
                together.
              </p>
            </div>
          </div>
        </article>
      </div>
      <div className='absolute left-0 right-0 top-1/2 -z-10 h-0 '>
        <About3D className='!absolute left-0 right-0 !h-[1000px] -translate-y-1/2 !overflow-visible md:left-[unset] md:!w-[800px]' />
      </div>
    </section>
  )
}

export default About
