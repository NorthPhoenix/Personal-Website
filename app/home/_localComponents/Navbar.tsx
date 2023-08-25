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
          "fixed left-0 right-0 top-0 z-50 flex flex-col items-center mix-blend-difference transition-transform duration-500",
          className
        )}>
        <nav className='flex h-20 w-full max-w-7xl flex-row items-center justify-between bg-transparent px-12 sm:px-10 md:h-24 md:px-9'>
          <Link href={"/"} className='group h-12 object-scale-down md:h-14'>
            <Logo className='h-full w-auto fill-nier-200 transition-transform group-hover:scale-105' />
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
          <ul className='hidden w-auto flex-row items-center gap-x-5 font-exodus-regular md:flex'>
            {navigationLinks.map(({ href, label, id }) => {
              return (
                <li key={id} className='p-3 transition hover:scale-105'>
                  <a
                    href={href}
                    className={`text-nier-200  ${
                      id === "contact"
                        ? "underline decoration-nier-200 decoration-solid decoration-1 underline-offset-4"
                        : ""
                    }`}>
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className='relative h-[2px] w-3/4 bg-nier-400 before:absolute before:-left-[25px] before:top-px before:h-[3px] before:w-[15px] before:-translate-y-1/2 before:bg-nier-400 after:absolute after:-right-[25px] after:top-px after:h-[3px] after:w-[15px] after:-translate-y-1/2 after:bg-nier-400' />
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
