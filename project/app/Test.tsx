import Link from "next/link";
import React from "react";

const Test = () => {
    return (
        <ul className=' my-4 mx-auto flex max-w-7xl flex-col gap-6 text-center'>
            <li>
                <Link href='/wave-animation'>
                    <button className='rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
                        <span className='text-5xl'>
                            Standalone Loading Animation
                        </span>
                    </button>
                </Link>
            </li>
            <li>
                <Link href='/nier-border'>
                    <button className='rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
                        <span className='text-5xl'>Nier Border</span>
                    </button>
                </Link>
            </li>
            <li>
                <Link href='/loading-screen'>
                    <button className='rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
                        <span className='text-5xl'>Loading Screen</span>
                    </button>
                </Link>
            </li>
            <li>
                <Link href='/resume'>
                    <button className='rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
                        <span className='text-5xl'>Resume</span>
                    </button>
                </Link>
            </li>
        </ul>
    );
};

export default Test;
