import Link from "next/link";

const Navbar = () => {
    return (
        <nav className=' h-20 w-full bg-transparent'>
            <div className='mx-auto flex h-full max-w-7xl flex-row items-center justify-between px-5'>
                <Link
                    href={"/"}
                    className='h-full object-contain py-3 transition-transform hover:scale-105 '>
                    <svg
                        className='h-full w-auto fill-nier-700'
                        width='392'
                        height='598'
                        viewBox='0 0 392 598'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M57 491.5L0 448L0.5 149L56.5 106L168.5 220.5V21.5L196.5 0L224.5 21.5V278L335.5 391V106L391.5 149V448.5L335 492L224.5 378.5V576.5L196 598L168.5 576.5V321L57 206.5V491.5Z' />
                    </svg>
                </Link>
                <ul className='flex w-auto flex-row items-center gap-x-5'>
                    <li className=' p-3 transition hover:scale-105'>
                        <a href='#about'>About</a>
                    </li>
                    <li className=' p-3 transition hover:scale-105'>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li className='rounded-full border-2 border-nier-700 bg-nier-300 p-3 transition duration-300 ease-in-out hover:scale-105 hover:bg-nier-400'>
                        <Link href='/connect'>Get in touch</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
