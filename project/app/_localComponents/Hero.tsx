import DownArrow from "../_globalComponents/design/DownArrow";
import { twMerge } from "tailwind-merge";

const Hero: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col grow items-center overflow-hidden",
        className
      )}>
      <section className='flex flex-col items-center justify-center w-full space-y-5 text-center grow '>
        <h1 className='text-[17vw] md:text-8xl lg:text-9xl xl:text-[9rem] mix-blend-difference font-exodus-striped h-full my-4 relative grow w-full'>
          <span className='absolute md:-translate-x-[67%] w-full top-0 text-transparent -translate-x-1/2 select-none left-1/2 bg-gradient-to-t from-neutral-600 to-nier-300 bg-clip-text'>
            DESIGN
          </span>
          <span className='absolute w-full text-transparent -translate-x-1/2 -translate-y-1/2 select-none left-1/2 top-1/2 bg-gradient-to-t from-neutral-600 to-nier-300 bg-clip-text'>
            DEVELOP
          </span>
          <span className='absolute md:-translate-x-[33%] w-full bottom-0 text-transparent -translate-x-1/2 select-none left-1/2 bg-gradient-to-t from-neutral-600 to-nier-300 bg-clip-text'>
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
