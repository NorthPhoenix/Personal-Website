"use client";

import Link from "next/link";
import Logo from "../components/design/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const links = [
    { href: "#about", label: "About", id: "about" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Get in touch", id: "contact" },
];

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div
            className={twMerge(
                "relative flex flex-col items-center",
                className
            )}>
            <nav className='flex h-24 w-full max-w-7xl flex-row items-center justify-between bg-transparent px-8'>
                <Link href={"/"} className=' group h-14 object-scale-down'>
                    <Logo className='h-full w-auto fill-nier-200 mix-blend-exclusion transition-transform group-hover:scale-105' />
                </Link>
                <div className=' relative md:hidden'>
                    <button
                        type='button'
                        className='p-1'
                        onClick={() => {
                            setIsMenuOpen((state: Boolean) => {
                                return !state;
                            });
                        }}>
                        <FontAwesomeIcon
                            icon={faBars}
                            size='2xl'
                            style={{ color: "inherit" }}
                        />
                    </button>
                </div>
                {/* flexbox menu on large screens */}
                <ul className='hidden w-auto flex-row items-center font-exodus-regular gap-x-5 md:flex'>
                    {links.map(({ href, label, id }) => {
                        return (
                            <li
                                key={id}
                                className=' p-3 transition hover:scale-105'>
                                <a
                                    href={href}
                                    className={`text-nier-200 mix-blend-exclusion ${
                                        id === "contact"
                                            ? "underline underline-offset-4 decoration-1 decoration-solid decoration-nier-200"
                                            : ""
                                    }`}>
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            {/* Dropdown menu on small screens */}
            {isMenuOpen === true && (
                <ul className='absolute top-full w-full flex-col items-center gap-y-5 text-nier-200 text-center'>
                    {links.map(({ href, label, id }) => {
                        return (
                            <li key={id} className='p-3 '>
                                <a href={href}>{label}</a>
                            </li>
                        );
                    })}
                </ul>
            )}
            <div className='bg-nier-700 w-3/4 mix-blend-difference h-[2px] relative before:w-[15px] before:h-[3px] before:absolute before:top-px before:-left-[25px] before:-translate-y-1/2 before:bg-nier-700 after:w-[15px] after:h-[3px] after:absolute after:top-px after:-right-[25px] after:-translate-y-1/2 after:bg-nier-700' />
        </div>
    );
};

export default Navbar;
