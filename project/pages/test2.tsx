import { NextPage } from "next";

const Test: NextPage = () => {
    return (
        <div className='h-screen w-screen overflow-hidden bg-nier-300'>
            <div className='absolute top-3 left-0 h-[2px] w-full bg-nier-700' />{" "}
            {/* Top line */}
            <div className=' my-3 grid grid-flow-col-dense justify-center stroke-nier-700'>
                {/* Far left square of the pattern */}
                <svg
                    width='5'
                    height='6'
                    viewBox='0 0 5 6'
                    xmlns='http://www.w3.org/2000/svg'>
                    <line y1='3' x2='5' y2='3' stroke-width='6' />
                </svg>
                {/* Repeats the pattern */}
                {[...Array(10)].map((_, i) => {
                    return (
                        <svg
                            key={i}
                            className='fill-nier-700 stroke-nier-700'
                            width='78'
                            height='27'
                            viewBox='0 0 78 27'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g id='border' clip-path='url(#clip0_7_2)'>
                                <line
                                    id='lign-top'
                                    x1='8.74228e-08'
                                    y1='1'
                                    x2='78'
                                    y2='1.00001'
                                    stroke-width='2'
                                />
                                <line
                                    id='line-left'
                                    y1='3'
                                    x2='5'
                                    y2='3'
                                    stroke-width='6'
                                />
                                <line
                                    id='line-right'
                                    x1='73'
                                    y1='3'
                                    x2='78'
                                    y2='3'
                                    stroke-width='6'
                                />
                                <circle id='dot-left' cx='31' cy='12' r='2.5' />
                                <circle
                                    id='dot-right'
                                    cx='47'
                                    cy='12'
                                    r='2.5'
                                />
                                <circle id='dot-bot' cx='39' cy='24' r='2.5' />
                            </g>
                        </svg>
                    );
                })}
                {/* Far right square of the pattern */}
                <svg
                    width='5'
                    height='6'
                    viewBox='0 0 5 6'
                    xmlns='http://www.w3.org/2000/svg'>
                    <line y1='3' x2='5' y2='3' stroke-width='6' />
                </svg>
            </div>
        </div>
    );
};

export default Test;
