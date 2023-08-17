"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Skill, SkillTag, Tags } from "utils/skillsConfig";
import { motion, AnimatePresence } from "framer-motion";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { atom, useAtom } from "jotai";
import Skills3D from "./Skills3D";
import NierButton from "app/_globalComponents/NierButton";

export const activeSkillAtom = atom<Skill | null>(null);
export const selectedTagsAtom = atom<SkillTag[]>([]);

const Skills = () => {
  const [activeSkill, setActiveSkill] = useAtom(activeSkillAtom);
  const [selectedTags, setSelectedTags] = useAtom(selectedTagsAtom);

  return (
    <section
      id='skills'
      className='flex flex-col items-center justify-start w-full'>
      <div className='flex flex-col items-center justify-center w-full gap-4 mb-6'>
        <div className='flex flex-row items-center justify-center w-full gap-2 px-4 max-w-7xl'>
          <span className='h-[2px] grow-0 w-5 bg-nier-700' />
          <span className='h-[2px] grow bg-nier-700' />
          <span className='h-[2px] grow-0 w-5 bg-nier-700' />
        </div>
        <h2 className='px-4 text-6xl font-exodus-striped uppercase tracking-[0.5rem] text-shadow text-center -translate-y-[2px]'>
          Skills
        </h2>
        <div className='flex flex-row items-center justify-center w-full gap-2 px-4 max-w-7xl'>
          <span className='h-[2px] grow-0 w-5 bg-nier-700' />
          <span className='h-[2px] grow bg-nier-700' />
          <span className='h-[2px] grow-0 w-5 bg-nier-700' />
        </div>
      </div>
      <div className='relative px-4 mx-6 text-lg shadow-md bg-nier-200 font-helvetica'>
        <p className='p-2 mt-2 text-center'>
          <span className='inline-block'>
            I've had experience with many different technologies over the years
          </span>
          <span className='inline-block'>
            and I'm always eager to learn more and gain new experiences.
          </span>{" "}
          <br />
          Here are some of the technologies I know:
        </p>
        <p className='p-2 my-2 text-center'>
          I specialize in{" "}
          <span className='font-semibold underline'>React.js</span>,{" "}
          <span className='font-semibold underline'>Next.js</span>,{" "}
          <span className='font-semibold underline'>TypeScript</span>, and{" "}
          <span className='font-semibold underline'>Unity</span>.
        </p>
        <div className='absolute z-20 flex flex-col items-center gap-2 mx-4 -translate-x-1/2 translate-y-2 sm:flex-row sm:gap-4 top-full left-1/2'>
          <Listbox
            value={selectedTags}
            onChange={setSelectedTags}
            multiple
            horizontal>
            <div className='relative w-80'>
              <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left shadow-md cursor-default bg-nier-200 focus:outline-none focus-visible:border-nier-400 focus-visible:ring-2 focus-visible:ring-nier-700 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-nier-200 sm:text-sm'>
                {selectedTags.length === 0 ? (
                  <span className='block truncate'>Filter</span>
                ) : (
                  <span className='block'>
                    {selectedTags.map((tag) => Object.keys(tag)[0]).join(", ")}
                  </span>
                )}
                <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                  <ChevronUpDownIcon
                    className='w-5 h-5 text-gray-400'
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
                <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base shadow-lg bg-nier-200 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {Tags.map((tag, tagIdx) => (
                    <Listbox.Option
                      key={tagIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-nier-700"
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
                              <CheckIcon
                                className='w-5 h-5'
                                aria-hidden='true'
                              />
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
            className='w-40 font-normal'
            onClick={() => setSelectedTags([])}>
            Clear
          </NierButton>
        </div>
      </div>
      <div className='relative flex flex-row items-center justify-end w-full max-w-7xl min-h-[800px] my-16 font-helvetica'>
        <Skills3D className='absolute left-0 z-10 -translate-x-[30%] xl:-translate-x-[15%] -translate-y-1/2 top-1/2 aspect-square w-[75%] max-h-[120%] ' />
        <AnimatePresence mode='popLayout'>
          {activeSkill === null ? (
            <motion.div
              className='relative flex flex-col items-center justify-center max-w-lg px-4 py-10 mr-10 nier-block-right'
              key={0}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}>
              <h3 className='text-3xl font-bold text-center'>
                Click on a skill
              </h3>
              <p className='text-xl text-center h-7'>to see more information</p>
            </motion.div>
          ) : (
            <motion.div
              className='relative flex flex-col items-center justify-center max-w-[26rem] px-4 py-10 mr-10 lg:max-w-lg nier-block-right'
              key={activeSkill.uuid}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}>
              <p className='h-64 p-4 aspect-square'>
                <Image
                  loading='eager'
                  src={activeSkill.icon.svg!}
                  alt={activeSkill.name}
                  height={256}
                  width={256}
                />
              </p>
              <div className='flex flex-col items-center justify-start gap-2 px-2 py-4 mt-2 text-center shadow-md bg-nier-200'>
                <h3 className='text-xl font-semibold tracking-widest uppercase text-shadow'>
                  {activeSkill.name}
                </h3>
                <hr className='w-1/3 h-px border-nier-700' />
                <p className='text-xl text-center'>
                  {activeSkill.description !== undefined ||
                  activeSkill.description !== ""
                    ? activeSkill.description
                    : "No description available"}
                </p>
                {!!activeSkill.link && (
                  <NierButton
                    className='z-10 flex flex-row items-center justify-start px-3 group'
                    as='a'
                    target='_blank'
                    href={activeSkill.link}>
                    <FontAwesomeIcon
                      icon={faLink}
                      className='h-16 transition-all duration-200 ease-in-out text-nier-700 group-hover:text-nier-200 group-active:text-nier-700'
                    />
                    <span className='w-0 ml-0 overflow-hidden text-left transition-all duration-200 ease-in-out text-nier-700 group-hover:text-nier-200 group-active:text-nier-700 group-hover:ml-4 whitespace-nowrap group-hover:w-24'>
                      Learn More
                    </span>
                  </NierButton>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
