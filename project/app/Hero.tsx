import DownArrow from "./_components/design/DownArrow";
import { twMerge } from "tailwind-merge";

const Hero: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center overflow-hidden",
        className
      )}>
      <section className='flex flex-col items-center justify-center w-full space-y-5 text-center grow '>
        <h1 className='text-[17vw] md:text-8xl lg:text-9xl xl:text-[9rem] mix-blend-difference font-exodus-striped h-full flex flex-col justify-around grow'>
          <span className='md:-translate-x-[20%] text-transparent bg-gradient-to-t from-neutral-600 select-none to-nier-300 bg-clip-text'>
            DESIGN
          </span>
          <span className='md:translate-x-[0%] text-transparent bg-gradient-to-t from-neutral-600 select-none to-nier-300 bg-clip-text'>
            DEVELOP
          </span>
          <span className='md:translate-x-[20%] text-transparent bg-gradient-to-t from-neutral-600 select-none to-nier-300 bg-clip-text'>
            DELIVER
          </span>
        </h1>
      </section>
      <a className='w-40 my-3 h-7' href='#about'>
        <DownArrow className='w-full h-full fill-nier-200 mix-blend-exclusion' />
      </a>
    </div>
  );
};

export default Hero;
