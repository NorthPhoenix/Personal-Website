"use client"

import Link from "next/link"
import Logo from "app/_globalComponents/design/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { twMerge } from "tailwind-merge"
import { useState, useEffect, useRef } from "react"
import SideOverMenu from "./SideOverMenu"

const navigationLinks = [
  { href: "#about", label: "About Me", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Get in touch", id: "contact" },
]

type NavbarProps = {
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const hideNav = () => {
    const navbar = navRef.current
    if (navbar) {
      navbar.classList.add("-translate-y-[105%]")
    }
  }

  const showNav = () => {
    const navbar = navRef.current
    if (navbar) {
      navbar.classList.remove("-translate-y-[105%]")
    }
  }

  useEffect(() => {
    // On resize, check if the screen is tailwind's md breakpoint or larger
    // If so, close the side menu
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSideMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)

    // On scroll down - hide the navbar, on scroll up - show it
    let prevScrollpos = window.scrollY
    const handleScroll = () => {
      if (window.scrollY > prevScrollpos) {
        hideNav()
      }
      if (window.scrollY < prevScrollpos) {
        showNav()
      }
      prevScrollpos = window.scrollY
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header
        ref={navRef}
        className={twMerge(
          "fixed left-0 top-0 right-0 flex z-50 flex-col items-center transition-transform duration-500 mix-blend-difference",
          className
        )}>
        <nav className='flex flex-row items-center justify-between w-full h-20 px-12 bg-transparent sm:px-10 md:px-9 md:h-24 max-w-7xl'>
          <Link href={"/"} className='object-scale-down h-12 group md:h-14'>
            <Logo className='w-auto h-full transition-transform fill-nier-200 group-hover:scale-105' />
          </Link>
          {/* hamburger menu on small screens */}
          <div className='relative md:hidden'>
            <button
              type='button'
              className='p-1 text-nier-400'
              onClick={() => {
                hideNav()
                setSideMenuOpen((state: Boolean) => {
                  return !state
                })
              }}>
              <FontAwesomeIcon
                icon={faBars}
                size='2xl'
                style={{ color: "inherit" }}
              />
            </button>
          </div>
          {/* flexbox menu on large screens */}
          <ul className='flex-row items-center hidden w-auto font-exodus-regular gap-x-5 md:flex'>
            {navigationLinks.map(({ href, label, id }) => {
              return (
                <li key={id} className='p-3 transition hover:scale-105'>
                  <a
                    href={href}
                    className={`text-nier-200  ${
                      id === "contact"
                        ? "underline underline-offset-4 decoration-1 decoration-solid decoration-nier-200"
                        : ""
                    }`}>
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className='bg-nier-400 w-3/4 h-[2px] relative before:w-[15px] before:h-[3px] before:absolute before:top-px before:-left-[25px] before:-translate-y-1/2 before:bg-nier-400 after:w-[15px] after:h-[3px] after:absolute after:top-px after:-right-[25px] after:-translate-y-1/2 after:bg-nier-400' />
      </header>
      <SideOverMenu
        open={sideMenuOpen}
        setOpen={setSideMenuOpen}
        links={navigationLinks}
      />
    </>
  )
}

export default Navbar
