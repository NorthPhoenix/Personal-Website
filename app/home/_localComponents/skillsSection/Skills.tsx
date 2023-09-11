"use client"

import Image from "next/image"
import { Fragment } from "react"
import { Skill, SkillTag, Tags } from "lib/utils/skillsConfig"
import { motion, AnimatePresence } from "framer-motion"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { atom, useAtom } from "jotai"
import Skills3D from "./Skills3D"
import NierButton from "app/_globalComponents/NierButton"

export const activeSkillAtom = atom<Skill | null>(null)
export const selectedTagsAtom = atom<SkillTag[]>([])

const Skills = () => {
  const [activeSkill, setActiveSkill] = useAtom(activeSkillAtom)
  const [selectedTags, setSelectedTags] = useAtom(selectedTagsAtom)

  const topTitleLineVariants = {
    hidden: {
      scaleX: 0,
      x: "-50%",
    },
    visible: {
      x: 0,
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  }
  const bottomTitleLineVariants = {
    hidden: {
      scaleX: 0,
      x: "50%",
    },
    visible: {
      x: 0,
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  }
  const titleVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  }
  const blockVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => {
      const delay = i * 0.2
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
          delay,
        },
      }
    },
  }
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: "-40%" }}
      id='skills'
      className='flex w-full flex-col items-center justify-start py-6 pt-24 md:pt-32'>
      {/* Title */}
      <div className='mb-6 flex w-full flex-col items-center justify-center gap-4'>
        <motion.div
          variants={topTitleLineVariants}
          className='flex w-full max-w-7xl flex-row items-center justify-center gap-2 px-4'>
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
          <span className='h-[2px] grow bg-nier-700' />
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
        </motion.div>
        <motion.h2
          variants={titleVariants}
          className='text-shadow -translate-y-[2px] px-4 text-center font-exodus-striped text-5xl uppercase tracking-[0.5rem] lg:text-6xl'>
          Skills
        </motion.h2>
        <motion.div
          variants={bottomTitleLineVariants}
          className='flex w-full max-w-7xl flex-row items-center justify-center gap-2 px-4'>
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
          <span className='h-[2px] grow bg-nier-700' />
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
        </motion.div>
      </div>
      {/* Intro paragraphs */}
      <motion.div
        variants={blockVariants}
        custom={0}
        className='relative mx-4 bg-nier-200 px-4 font-helvetica text-lg shadow-md'>
        <p className='mt-2 p-2 text-center'>
          <span className='inline-block'>
            I've had experience with many different technologies over the years
          </span>
          <span className='inline-block'>
            and I'm always eager to learn more and gain new experiences.
          </span>{" "}
          <br />
          Here are some of the technologies I know:
        </p>
        <p className='my-2 p-2 text-center'>
          I specialize in{" "}
          <span className='font-semibold underline'>React.js</span>,{" "}
          <span className='font-semibold underline'>Next.js</span>, and{" "}
          <span className='font-semibold underline'>TypeScript</span>.
        </p>
      </motion.div>
      {/* Filters */}
      <motion.div
        variants={blockVariants}
        custom={1}
        className='z-20 mt-6 flex max-w-full flex-row items-center justify-center gap-2 px-4'>
        <Listbox
          value={selectedTags}
          onChange={setSelectedTags}
          multiple
          horizontal>
          <div className='relative w-80 shrink basis-auto'>
            <Listbox.Button className='relative w-full cursor-default bg-nier-200 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-nier-400 focus-visible:ring-2 focus-visible:ring-nier-700 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-nier-200 sm:text-sm'>
              {selectedTags.length === 0 ? (
                <span className='block truncate'>Filter</span>
              ) : (
                <span className='block'>
                  {selectedTags.map((tag) => Object.keys(tag)[0]).join(", ")}
                </span>
              )}
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-150 origin-top'
              leaveFrom='opacity-100 scale-y-100'
              leaveTo='opacity-0 scale-y-0'
              enter=' trasition ease-in duration-150 origin-top'
              enterFrom='opacity-0 scale-y-0'
              enterTo='opacity-100 scale-y-100'>
              <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto bg-nier-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {Tags.map((tag, tagIdx) => (
                  <Listbox.Option
                    key={tagIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-nier-700"
                      }`
                    }
                    value={tag}>
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}>
                          {Object.keys(tag)[0]}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <NierButton
          className='w-40 shrink basis-auto font-normal'
          onClick={(e: MouseEvent) => {
            setSelectedTags([])
            // unselect button
            const target = e.currentTarget as HTMLButtonElement
            target.blur()
          }}>
          Clear
        </NierButton>
      </motion.div>
      {/* Skill description & 3D scene */}
      <motion.div
        variants={contentVariants}
        className=' relative w-full max-w-7xl font-helvetica md:flex md:min-h-[800px] md:flex-row md:items-center md:justify-end lg:my-16'>
        <Skills3D className='relative block aspect-square h-auto w-full md:absolute md:left-0 md:top-1/2 md:z-10 md:max-h-[120%] md:w-[75%] md:-translate-x-[30%] md:-translate-y-1/2 xl:-translate-x-[15%] ' />
        <AnimatePresence mode='popLayout'>
          {activeSkill === null ? (
            <motion.div
              className='nier-block-right relative mx-auto my-6 mr-5 flex flex-col items-center justify-center px-4 py-5 md:mx-0 md:my-0 md:mr-10 md:max-w-lg md:py-10'
              key={0}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}>
              <h3 className='text-center text-2xl font-bold md:text-3xl'>
                Click on a skill
              </h3>
              <p className='h-7 text-center text-lg md:text-xl'>
                to see more information
              </p>
            </motion.div>
          ) : (
            <motion.div
              className='md:nier-block-right nier-block-right-sm relative ml-4 mr-6 flex flex-col items-center justify-center px-0 py-5 md:ml-0 md:mr-10 md:max-w-[26rem] md:px-4 md:py-10 lg:max-w-lg'
              key={activeSkill.uuid}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}>
              {/* image layout for medium+ size screens */}
              <p className='hidden aspect-square h-64 p-4 md:block'>
                <Image
                  loading='eager'
                  src={activeSkill.icon.svg!}
                  alt={activeSkill.name}
                  height={256}
                  width={256}
                />
              </p>
              <div className='bg-nier-200 p-4 text-center shadow-md sm:flex sm:flex-row sm:items-center sm:justify-start md:mt-2 md:flex-col md:gap-2 md:px-2 md:py-4'>
                {/* image layout for up to medium screens */}
                <p className='mr-3 aspect-square h-28 max-sm:float-left max-sm:-mb-2 md:hidden'>
                  <Image
                    loading='eager'
                    src={activeSkill.icon.svg!}
                    alt={activeSkill.name}
                    height={256}
                    width={256}
                  />
                </p>
                <div className='contents sm:ml-2 sm:block md:ml-0 md:contents'>
                  <h3 className='text-shadow text-xl font-semibold uppercase tracking-widest'>
                    {activeSkill.name}
                  </h3>
                  <hr className='my-2 h-px w-auto border-nier-700 md:my-0 md:w-1/3 md:px-0' />
                  <p className='text-left text-base max-md:mb-2 md:text-center '>
                    {activeSkill.description !== undefined ||
                    activeSkill.description !== ""
                      ? activeSkill.description
                      : "No description available"}
                  </p>
                  {!!activeSkill.link && (
                    <NierButton
                      className='group z-10 mx-auto px-3'
                      as='a'
                      target='_blank'
                      href={activeSkill.link}>
                      <FontAwesomeIcon
                        icon={faLink}
                        className='text-nier-700 transition-all duration-200 ease-in-out group-hover:text-nier-200 group-active:text-nier-700'
                      />
                      <span className='ml-2 whitespace-nowrap text-center text-nier-700 group-hover:text-nier-200 group-active:text-nier-700'>
                        Learn More
                      </span>
                    </NierButton>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  )
}

export default Skills
