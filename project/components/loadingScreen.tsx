import Logo from "./design/Logo";

const LoadingScreen = () => {
    return (
        <div className=' absolute h-screen w-screen overflow-hidden bg-nier-700'>
            <Logo className='absolute top-1/2 left-1/2 z-30 h-1/6 -translate-x-1/2 -translate-y-1/2 fill-gray-300' />
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

export default LoadingScreen;
