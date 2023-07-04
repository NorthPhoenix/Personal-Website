import { NextPage } from "next";

const waveAnimation: NextPage = () => {
    return (
        <div className='h-screen w-screen overflow-hidden bg-neutral-500'>
            <div
                id='line-grid'
                className='absolute z-20 h-full w-full bg-transparent bg-lines-inverted bg-120 bg-repeat'
            />
            <div
                id='wave'
                className='relative -left-[50px] z-10 h-[200vh] w-28 origin-center animate-wave bg-wave  '
            />
        </div>
    );
};

export default waveAnimation;
