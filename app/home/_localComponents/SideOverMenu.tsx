"use client"

import { Dispatch, Fragment, SetStateAction, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

type SideOverMenuProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  links: { href: string; label: string; id: string }[]
  showNav: () => void
}

const SideOverMenu: React.FC<SideOverMenuProps> = ({
  open = false,
  setOpen,
  links,
  showNav,
}) => {
  function closeModal() {
    setOpen(false)
    showNav()
  }

  /**
   * Native scroll to element with callback
   * @param anchor - HTMLElement to scroll to
   * @param callback - callback function to call after scrolling is done
   */
  function scrollToAnchor(anchor: HTMLElement, callback: () => void) {
    const fixedOffset = (
      anchor.getBoundingClientRect().top + window.scrollY
    ).toFixed()
    const onScroll = function () {
      // console.log("Goal: ", fixedOffset, "Current: ", window.scrollY.toFixed())
      if (window.scrollY.toFixed() === fixedOffset) {
        window.removeEventListener("scroll", onScroll)
        // Set a small timeout to allow the scroll to finish completely
        setTimeout(() => {
          callback()
        }, 100)
      }
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    anchor.scrollIntoView({
      behavior: "smooth",
    })
  }

  function handleLinkClick(targetID: string) {
    setOpen(false)
    const target = document.getElementById(targetID)
    if (target) {
      scrollToAnchor(target, showNav)
    }
  }

  const menuContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-nier-700 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        {/* Sliding panel */}
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-32'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'>
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                  {/* Close button */}
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='absolute right-0 top-0 flex pr-10 pt-6'>
                      <button
                        type='button'
                        className='rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-nier-400'
                        onClick={closeModal}>
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon className='h-10 w-10' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Content */}
                  <motion.ul
                    className='h-full w-full flex-col items-center justify-start bg-nier-700 py-14 shadow-xl'
                    variants={menuContainerVariants}
                    initial='hidden'
                    animate='show'>
                    {links.map(({ href, label, id }) => {
                      return (
                        <motion.li
                          key={id}
                          className='my-10 text-center font-exodus-regular text-xl text-nier-200 '
                          variants={menuItemVariants}>
                          <button
                            onClick={() => {
                              handleLinkClick(href.slice(1))
                            }}>
                            {label}
                          </button>
                        </motion.li>
                      )
                    })}
                  </motion.ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SideOverMenu
