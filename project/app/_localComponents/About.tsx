import React from "react";

const About = () => {
  return (
    <section
      id='about'
      className='flex items-center justify-center w-full mb-20 mt-[550px] font-helvetica overflow-hidden'>
      <div className='flex flex-row items-center justify-center w-full max-w-7xl'>
        <div className='bg-gray-200 bg-opacity-70 rounded-xl shadow-xl  basis-2/5 min-h-[40vmin] m-4 flex items-center justify-center'>
          <span className='text-3xl'>Rotating 3D model</span>
        </div>
        <div className='bg-gray-200 bg-opacity-70 backdrop-blur-md rounded-xl shadow-xl  basis-3/5 min-h-[40vmin] m-4 flex flex-col items-start justify-center text-2xl p-8'>
          <h2 className='whitespace-nowrap'>Hello, I'm Nikita Istomin</h2>
          <h3>
            <span className='whitespace-nowrap'>Software developer.</span>{" "}
            <span className='whitespace-nowrap'>Deep thinker.</span>{" "}
            <span className='whitespace-nowrap'>Pasionate life enjoyer.</span>{" "}
          </h3>
          <p className=''>
            I'm a software developer with a passion for creating beautiful and
            useful things. I was introduced to programming in 2015 and since
            then I was dragged into the world of technology. I'm a recent
            computer science grad from the University of Texas at Dallas, and
            I'm exited to start my career in the industry.
          </p>
          <div>
            <h4>Motivated</h4>
            <p className='text-base'>
              As a quick-thinking software engineer, I embrace challenges and
              never shy away from asking questions. Eager to learn, I use my
              inquisitive nature to stay at the cutting edge of this
              ever-evolving field.
            </p>
          </div>
          <div>
            <h4>Effective</h4>
            <p className='text-base'>
              I blend passion, precision, and a user-centric approach to craft
              efficient solutions. Embracing cutting-edge technologies and an
              agile mindset, I thrive on solving complex challenges.
            </p>
          </div>
          <div>
            <h4>Consistent</h4>
            <p className='text-base'>
              I bring unwavering commitment to excellence, ensuring remarkable
              results on any team. I build projects that adhere to the highest
              standards and delivering consistent and lasting value to clients
              and end-users.
            </p>
          </div>
          <div>
            <h4>Collaborative</h4>
            <p className='text-base'>
              I thrive in team environments, valuing open communication and
              diverse perspectives. With empathy and encouragement, I strive to
              empower and uplift my team, creating an atmosphere where everyone
              can shine and succeed together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
