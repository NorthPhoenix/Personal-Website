"use client";

import Image from "next/image";
import { useState } from "react";
import { Skill } from "utils/skillsConfig";
import Skills3D from "./Skills3D";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<Skill>(null!);

  const activateSkill = (skill: Skill) => {
    setActiveSkill(skill);
  };

  return (
    <section className='flex flex-col items-center justify-start w-full'>
      <div className='flex flex-row items-center justify-center w-full gap-2 p-4 max-w-7xl'>
        <div className='h-[2px] grow-0 w-5 bg-nier-700' />
        <div className='h-[2px] grow bg-nier-700' />
        <div className='h-[2px] grow-0 w-5 bg-nier-700' />
      </div>
      <h2 className='p-6  text-6xl font-exodus-striped uppercase tracking-[0.5rem] text-shadow text-center align-middle'>
        Skills
      </h2>
      <div className='flex flex-row items-center justify-center w-full gap-2 p-4 max-w-7xl'>
        <div className='h-[2px] grow-0 w-5 bg-nier-700' />
        <div className='h-[2px] grow bg-nier-700' />
        <div className='h-[2px] grow-0 w-5 bg-nier-700' />
      </div>
      <div className='relative flex flex-row items-center justify-end w-full max-w-7xl min-h-[800px] my-12'>
        <Skills3D
          activateSkill={activateSkill}
          className='absolute left-0 z-10 p-4 -translate-x-[15%] -translate-y-1/2 top-1/2 aspect-square h-[120%] '
        />
        <div className='flex items-center justify-center p-4 mr-8 font-helvetica'>
          <div className='relative flex flex-col items-center justify-center max-w-lg p-10 nier-block-right'>
            {activeSkill === null ? (
              <>
                <div className='text-3xl font-bold text-center'>
                  Click on a skill
                </div>
                <div className='text-xl text-center h-7'>
                  to see more information
                </div>
              </>
            ) : (
              <>
                <div className='h-64 p-4 aspect-square'>
                  <Image
                    loading='eager'
                    src={activeSkill.icon.svg!}
                    alt={activeSkill.name}
                    height={256}
                    width={256}
                  />
                </div>
                <div className='flex flex-col items-center justify-start gap-2 p-2 mt-2 text-center shadow-md bg-nier-200'>
                  <h3 className='text-xl font-semibold tracking-widest uppercase text-shadow'>
                    {activeSkill.name}
                  </h3>
                  <hr className='w-1/3 h-px border-nier-700' />
                  <div className='text-xl text-center'>
                    {activeSkill.description !== undefined
                      ? activeSkill.description
                      : "No description available"}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
