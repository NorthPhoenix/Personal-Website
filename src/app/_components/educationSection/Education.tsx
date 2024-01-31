"use client"

import { LazyMotion, domAnimation, m } from "framer-motion"
import Image from "next/image"
import React from "react"
import CreditsCounter from "./CreditsCounter"
import Link from "next/link"
import SectionTitle from "~/app/_components/SectionTitle"
import BadgeIcon from "/public/design/badge.png"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

const Education = () => {
  const [inView, setInView] = React.useState(false)
  const variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut",
      },
    },
  }
  return (
    <LazyMotion strict features={domAnimation}>
      <m.section
        initial="hidden"
        whileInView="visible"
        onViewportEnter={() => {
          setInView(true)
        }}
        viewport={{ once: true, margin: "-30%" }}
        id="education"
        className="mb-16 flex w-full flex-col items-center justify-start p-2 py-12 pt-24 font-helvetica md:mb-20 md:p-6 md:pt-32"
      >
        <SectionTitle title="Education" />
        {/* Content */}
        <m.div variants={variants} className="w-full max-w-7xl">
          {/* Screen size - sm+ */}
          <div className="nier-block-left-sm md:nier-block-left relative my-0 ml-4 mr-2 hidden px-0 py-2 sm:m-4 sm:block sm:p-2 md:p-8">
            <article className=" flex flex-col items-stretch justify-start bg-nier-200 shadow-xl">
              <div className="-mb-4 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-start">
                  <Link
                    prefetch={false}
                    target="_blank"
                    href="https://www.utdallas.edu/"
                  >
                    <Image
                      width={512}
                      height={512}
                      src="/images/utd-logo.png"
                      alt="UTD Logo"
                      className="ml-3 box-content aspect-square h-16 w-auto p-1 md:ml-4 md:h-20 md:p-2 lg:h-24"
                    />
                  </Link>
                  <div className="ml-1 mt-1 flex flex-col items-start justify-start gap-1 p-2 md:ml-2 md:mt-2">
                    <div className="flex items-center gap-2">
                      <Link
                        prefetch={false}
                        target="_blank"
                        href="https://www.utdallas.edu/"
                      >
                        <span className="text-shadow text-base font-bold tracking-wide transition-colors duration-150 hover:text-amber-700 lg:text-xl">
                          The University of Texas at Dallas
                        </span>
                      </Link>
                      <TooltipProvider delayDuration={300}>
                        <Link
                          href={
                            "https://www.utdallas.edu/deans-list/spring-2023/#ecs"
                          }
                          target="_blank"
                          prefetch={false}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src={BadgeIcon}
                                alt="Dean's List Spring 2023"
                                className="h-5 w-5 translate-y-px transform transition-all duration-150 hover:scale-110"
                              />
                            </TooltipTrigger>
                            <TooltipContent
                              sideOffset={5}
                              side="top"
                              className="border-nier-400 bg-nier-200"
                            >
                              <p>Dean's List Spring 2023</p>
                            </TooltipContent>
                          </Tooltip>
                        </Link>
                        <Link
                          href={
                            "https://www.utdallas.edu/deans-list/spring-2022/#ecs"
                          }
                          target="_blank"
                          prefetch={false}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src={BadgeIcon}
                                alt="Dean's List Spring 2022"
                                className="h-5 w-5 translate-y-px transform transition-all duration-150 hover:scale-110"
                              />
                            </TooltipTrigger>
                            <TooltipContent
                              sideOffset={5}
                              side="top"
                              className="border-nier-400 bg-nier-200"
                            >
                              <p>Dean's List Spring 2022</p>
                            </TooltipContent>
                          </Tooltip>
                        </Link>
                      </TooltipProvider>
                    </div>
                    <div className="flex flex-col items-start justify-start text-xs font-semibold leading-5 opacity-60 md:text-sm lg:text-base">
                      <span>Bachelor of Science in Computer Science</span>
                      <span>GPA: 3.66</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4 mr-3 flex flex-col items-end justify-start gap-1 p-2 text-xs md:mb-3 md:mr-4 md:text-sm lg:text-base">
                  <span className="font-semibold opacity-80">
                    Spring Class of 2023
                  </span>
                  <span className=" font-semibold opacity-60">
                    Richardson, TX, USA
                  </span>
                </div>
              </div>
              <CreditsCounter
                startAnimation={inView}
                credits={135}
                counterSide="right"
              />
            </article>
          </div>
          {/* Screen size - xs */}
          <div className="nier-block-left-sm relative my-0 ml-4 mr-2 px-0 py-2 sm:hidden ">
            <article className=" flex flex-col items-stretch justify-start bg-nier-200 shadow-xl">
              <div className="-mb-4">
                <Link
                  prefetch={false}
                  target="_blank"
                  href="https://www.utdallas.edu/"
                  className="group flex flex-row items-center justify-start"
                >
                  <Image
                    width={512}
                    height={512}
                    src="/images/utd-logo.png"
                    alt="UTD Logo"
                    className="ml-2 box-content aspect-square h-12 w-auto p-1 "
                  />
                  <div className="flex flex-col items-start justify-start gap-1 p-2">
                    <span className="text-shadow text-base font-bold tracking-wide transition-colors duration-150 group-hover:text-amber-700">
                      The University of Texas at Dallas
                    </span>
                    <div className="flex flex-col items-start justify-start text-xs font-semibold leading-4 opacity-60 ">
                      <span>Bachelor of Science in Computer Science</span>
                      <span>GPA: 3.66</span>
                    </div>
                  </div>
                </Link>
              </div>
              <CreditsCounter
                startAnimation={inView}
                credits={135}
                counterSide="right"
              />
              <div className="-mt-4 mb-1 flex flex-row items-center justify-between px-4 py-2 text-xs ">
                <span className="font-semibold opacity-80">
                  Spring Class of 2023
                </span>
                <span className=" font-semibold opacity-60">
                  Richardson, TX, USA
                </span>
              </div>
            </article>
          </div>
        </m.div>
      </m.section>
    </LazyMotion>
  )
}

export default Education
