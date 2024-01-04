import React from "react"

import SectionTitle from "~/app/_components/SectionTitle"
import InViewDetector from "~/app/_components/InViewDetector"
import WorkEntryAnimatedContainer from "./WorkEntryAnimatedContainer"
import WorkList from "./WorkList"
import Image from "next/image"
import capitalize from "~/lib/utils/capitalize"
import WorkDropdown from "./WorkDropdown"

type TPosition = {
  id: string
  position: string
  company: string
  startDate: Date
  endDate: Date | null
  description: TPositionDescription
  location: string
  companyLogo?: string
}

type TPositionDescription = {
  bulletPoints: string[]
  extra?: string
}

const positions: TPosition[] = [
  {
    id: "framed-fullstack",
    position: "Full Stack Developer",
    company: "Framed",
    startDate: new Date("2023-09-26"),
    endDate: null,
    description: {
      bulletPoints: [
        "Developed and deployed Next.js web application as a solo engineer.",
        "Continuously communicated with my contractor to deliver quality work and specify deadlines.",
        "Worked flexibly to accommodate shifting design and functionality requirements.",
        "Developed with technologies like: Next.js, Typescript, TRPC, Prisma, Clerk, Planetscale, VimeoAPI, and more.",
      ],
    },
    location: "Remote",
    companyLogo: "/images/workLogos/Framed.png",
  },
]

const Work = async () => {
  return (
    <InViewDetector>
      <section
        id="work"
        className="flex w-full flex-col items-center justify-center py-4 pt-24 text-xl md:pt-32"
      >
        <SectionTitle title="Work" />
        <WorkList className="flex w-full max-w-7xl flex-col items-stretch gap-8 p-4 pl-6 md:p-6 md:pl-10 md:pt-10 ">
          {positions.map((position) => {
            return <WorkEntry key={position.id} position={position} />
          })}
        </WorkList>
      </section>
    </InViewDetector>
  )
}

const WorkEntry: React.FC<{ position: TPosition }> = ({ position }) => {
  return (
    <WorkEntryAnimatedContainer className="w-full font-helvetica">
      <div className="nier-block-left-sm md:nier-block-left relative w-full px-0 py-4 md:px-2 md:pl-6">
        <div className="flex w-full flex-col gap-3 bg-nier-200 p-6 shadow-md">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-8">
            <Image
              src={position.companyLogo ?? "/images/blank.jpg"}
              alt={`${capitalize(position.company)}'s logo`}
              width={1024}
              height={1024}
              className="aspect-square w-40 flex-none border-4 border-double border-nier-400 object-contain p-3 outline outline-2 -outline-offset-[10px] outline-nier-400"
            />
            <div className="flex flex-1 flex-col">
              <div className="contents md:flex md:flex-row md:flex-nowrap md:items-center md:justify-between md:gap-4">
                <h3 className="text-shadow order-first text-center text-2xl font-bold md:text-left lg:text-3xl">
                  {position.position}
                </h3>
                <p className="text-center text-lg font-semibold md:text-left">
                  {position.startDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}{" "}
                  -{" "}
                  {position.endDate ?
                    position.endDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })
                  : "Present"}
                </p>
              </div>
              <p className="-order-1 text-center text-xl font-semibold md:text-left">
                @{position.company}
              </p>
              <p className="text-center text-lg md:text-left">
                {position.location}
              </p>
            </div>
          </div>
          <ul className="flex list-disc flex-col pl-4 md:pl-8">
            {position.description.bulletPoints.map((bulletPoint) => (
              <li key={bulletPoint} className="text-lg">
                {bulletPoint}
              </li>
            ))}
          </ul>
          {!!position.description.extra && (
            <WorkDropdown
              btnContainerClassName="flex w-full items-center justify-center px-2 py-1"
              btnClassName="px-12"
            >
              <p className="text-lg">{position.description.extra}</p>
            </WorkDropdown>
          )}
        </div>
      </div>
    </WorkEntryAnimatedContainer>
  )
}

export default Work
