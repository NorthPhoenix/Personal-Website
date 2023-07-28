import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section
      id='about'
      className='flex items-center justify-center w-full mb-20 mt-[300px] font-helvetica'>
      <div className='flex flex-row items-center justify-center w-full max-w-7xl'>
        <div className='bg-gray-200 rounded-xl shadow-xl  basis-2/5 min-h-[40vmin] m-4 flex items-center justify-center'>
          <span className='text-3xl'>Rotating 3D model</span>
        </div>
        <div className='bg-gray-200 rounded-xl shadow-xl  basis-3/5 min-h-[40vmin] m-4 flex flex-col items-start justify-center text-2xl p-8'>
          <h2 className='whitespace-nowrap'>Hello, I'm Nikita</h2>
          <h3>
            <span className='whitespace-nowrap'>Software developer.</span>{" "}
            <span className='whitespace-nowrap'>Deep thinker.</span>{" "}
            <span className='whitespace-nowrap'>Pasionate life enjoyer.</span>{" "}
          </h3>
          <p className=''>
            I'm a software developer with a passion for creating beautiful and
            useful things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
