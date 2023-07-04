import Link from "next/link";
import Logo from "./design/Logo";

const Navbar = () => {
    return (
        <nav className=' h-20 w-full bg-transparent'>
            <div className='mx-auto flex h-full max-w-7xl flex-row items-center justify-between px-5'>
                <Link
                    href={"/"}
                    className='flex h-14 items-center gap-2 object-scale-down transition-transform hover:scale-105'>
                    <Logo className='h-full w-auto' />
                    <h2>Nikta Istomin</h2>
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
