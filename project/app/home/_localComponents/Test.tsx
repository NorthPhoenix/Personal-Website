import Link from "next/link";
import React from "react";

const Test = () => {
  return (
    <ul className='flex flex-col gap-6 mx-auto my-4 text-center max-w-7xl'>
      <li>
        <Link href='/tests/wave-animation'>
          <button className='px-5 py-1 border-2 border-transparent rounded-full bg-nier-400 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
            <span className='text-5xl'>Standalone Loading Animation</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href='/tests/nier-border'>
          <button className='px-5 py-1 border-2 border-transparent rounded-full bg-nier-400 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
            <span className='text-5xl'>Nier Border</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href='/tests/loading-screen'>
          <button className='px-5 py-1 border-2 border-transparent rounded-full bg-nier-400 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
            <span className='text-5xl'>Loading Screen</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href='/tests/resume'>
          <button className='px-5 py-1 border-2 border-transparent rounded-full bg-nier-400 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
            <span className='text-5xl'>Resume</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href='/tests/diamond-transition'>
          <button className='px-5 py-1 border-2 border-transparent rounded-full bg-nier-400 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
            <span className='text-5xl'>Diamond Transition</span>
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default Test;
