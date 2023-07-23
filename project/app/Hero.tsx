import DownArrow from "../components/design/DownArrow";
import { twMerge } from "tailwind-merge";

const Hero: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div
            className={twMerge(
                "flex flex-col items-center overflow-hidden",
                className
            )}>
            <section className='grow space-y-5 text-center flex flex-col items-center justify-center w-full '>
                <h1 className='text-[9rem] mix-blend-difference font-exodus-striped h-full flex flex-col justify-around grow w-full'>
                    <span className='-translate-x-[20%] text-transparent bg-gradient-to-t from-neutral-600 select-none to-nier-300 bg-clip-text'>
                        DESIGN
                    </span>
                    <span className='translate-x-[0%] text-transparent bg-gradient-to-t from-neutral-600 select-none to-nier-300 bg-clip-text'>
                        DEVELOP
                    </span>
                    <span className='translate-x-[20%] text-transparent bg-gradient-to-t from-neutral-600 select-none to-nier-300 bg-clip-text'>
                        DELIVER
                    </span>
                </h1>
            </section>
            <a className='my-3 h-7 w-40' href='#about'>
                <DownArrow className=' h-full w-full fill-nier-200 mix-blend-exclusion' />
            </a>
        </div>
    );
};

export default Hero;
