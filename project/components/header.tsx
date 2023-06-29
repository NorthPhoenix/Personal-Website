import Image from "next/image";
import Link from "next/link";
import Logo from "../public/design/logo.svg";

const Header = () => {
    return (
        <div className='flex h-20 w-full flex-row items-center justify-between px-5 shadow-md '>
            <Link href={"/"} className='h-full object-contain py-3'>
                <Image src={Logo} alt='Home' className=' h-full w-auto' />
            </Link>
            <ul className='flex w-auto flex-row items-center gap-x-5'>
                <li className=' p-3'>
                    <a href='#about'>About</a>
                </li>
                <li className=' p-3'>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <Link
                        className='rounded-full border-2 border-yellow-600 bg-gradient-to-r from-yellow-500 to-orange-400 p-3'
                        href='/connect'>
                        Get in touch
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
