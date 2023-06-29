const LoadingScreen = () => {
    return (
        <div className=' absolute h-screen w-screen overflow-hidden bg-neutral-500'>
            <svg
                width='274'
                height='160'
                viewBox='0 0 274 160'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute top-1/2 left-1/2 z-30 max-h-12 -translate-x-1/2 -translate-y-1/2 transform fill-nier-400 stroke-nier-400'>
                <path
                    d='M65 148.255L114.593 12'
                    stroke='inherit'
                    stroke-width='22'
                    stroke-linecap='round'
                />
                <path
                    d='M62 0.999901L51 0.999901L51 22.9999L62 22.9999L62 0.999901ZM182 22.9999C188.075 22.9999 193 18.075 193 11.9999C193 5.92477 188.075 0.999901 182 0.999901L182 22.9999ZM62 22.9999L182 22.9999L182 0.999901L62 0.999901L62 22.9999Z'
                    fill='inherit'
                />
                <path
                    d='M12.0909 137L1.09128 136.909L0.90947 158.909L11.9091 159L12.0909 137ZM131.905 159.991C137.98 160.042 142.945 155.158 142.996 149.083C143.046 143.008 138.162 138.042 132.087 137.992L131.905 159.991ZM11.9091 159L131.905 159.991L132.087 137.992L12.0909 137L11.9091 159Z'
                    fill='inherit'
                />
                <path
                    d='M132.418 148.465L182.011 12.2094'
                    stroke='inherit'
                    stroke-width='22'
                    stroke-linecap='round'
                />
                <path
                    d='M212.457 148.483L262.05 12.2279'
                    stroke='inherit'
                    stroke-width='22'
                    stroke-linecap='round'
                />
                <path
                    d='M212 148L182 12'
                    stroke='inherit'
                    stroke-width='22'
                    stroke-linecap='round'
                />
            </svg>

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
