import React from "react";
import About3D from "./aboutSection/About3D";

const About = () => {
  return (
    <section
      id='about'
      className='flex items-center justify-center w-full mb-20 mt-[600px] p-6 pt-[100px] font-helvetica overflow-hidden'>
      <div className='flex flex-row items-center justify-center w-full max-w-7xl 2xl:max-w-[80%]'>
        <article className='relative basis-3/5 min-h-[40vmin] m-4 flex flex-col items-start justify-center p-8 before:box-content before:border-nier-400 before:border-y-0 before:content-[""] before:absolute before:top-0 before:-left-6 before:h-full before:w-[0.3rem] before:border-solid before:border before:border-l-[0.6rem] before:border-r-[0.2rem]'>
          <div className='p-4 mb-8 shadow-md bg-nier-200 '>
            <header className='w-full pb-4 mb-4 border-b border-nier-700'>
              <h2 className='mb-3 text-4xl font-normal tracking-[0.5rem] uppercase text-shadow whitespace-nowrap'>
                Nikita Istomin
              </h2>
              <h3 className='flex flex-row items-center justify-start w-full gap-2 text-xl uppercase '>
                Software developer. Deep thinker. Life enjoyer.
              </h3>
            </header>
            <p className='text-lg'>
              I'm a software developer with a passion for creating beautiful and
              useful things. I was introduced to programming in 2015 and since
              then I was dragged into the world of technology. I'm a recent
              computer science grad from the University of Texas at Dallas, and
              I'm exited to start my career in the industry.
            </p>
          </div>
          <div className='grid grid-cols-2 grid-rows-2 gap-6 shrink'>
            <div className='flex flex-col items-center justify-start gap-2 p-2 text-center shadow-md bg-nier-200 '>
              <h4 className='mt-2 text-xl font-semibold tracking-widest uppercase text-shadow'>
                Motivated
              </h4>
              <hr className='w-1/3 h-px border-nier-700' />
              <p className='text-base'>
                As a quick-thinking software engineer, I embrace challenges and
                never shy away from asking questions. Eager to learn, I use my
                inquisitive nature to stay at the cutting edge of this
                ever-evolving field.
              </p>
            </div>
            <div className='flex flex-col items-center justify-start gap-2 p-2 text-center shadow-md bg-nier-200'>
              <h4 className='mt-2 text-xl font-semibold tracking-widest uppercase text-shadow'>
                Effective
              </h4>
              <hr className='w-1/3 h-px border-nier-700' />
              <p className='text-base'>
                I blend passion, precision, and a user-centric approach to craft
                efficient solutions. Embracing cutting-edge technologies and an
                agile mindset, I thrive on solving complex challenges.
              </p>
            </div>
            <div className='flex flex-col items-center justify-start gap-2 p-2 text-center shadow-md bg-nier-200'>
              <h4 className='mt-2 text-xl font-semibold tracking-widest uppercase text-shadow'>
                Consistent
              </h4>
              <hr className='w-1/3 h-px border-nier-700' />
              <p className='text-base'>
                I bring unwavering commitment to excellence, ensuring remarkable
                results on any team. I build projects that adhere to the highest
                standards and delivering consistent and lasting value to clients
                and end-users.
              </p>
            </div>
            <div className='flex flex-col items-center justify-start gap-2 p-2 text-center shadow-md bg-nier-200'>
              <h4 className='mt-2 text-xl font-semibold tracking-widest uppercase text-shadow'>
                Collaborative
              </h4>
              <hr className='w-1/3 h-px border-nier-700' />
              <p className='text-base'>
                I thrive in team environments, valuing open communication and
                diverse perspectives. I strive to empower and uplift my team,
                creating an atmosphere where everyone can shine and succeed
                together.
              </p>
            </div>
          </div>
        </article>
        <div className='bg-nier-300 bg-opacity-30 rounded-xl shadow-xl basis-2/5 min-h-[40vmin] m-4 flex items-center justify-center'>
          <About3D />
        </div>
      </div>
    </section>
  );
};

export default About;
