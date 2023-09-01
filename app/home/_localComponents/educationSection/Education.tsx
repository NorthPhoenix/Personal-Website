import Image from "next/image"
import React from "react"
import CreditsCounter from "./CreditsCounter"
import Link from "next/link"

const Education = () => {
  return (
    <section
      id='education'
      className='mb-16 flex w-full flex-col items-center justify-start p-2 py-12 font-helvetica md:mb-20 md:p-6'>
      {/* Title */}
      <div className='mb-6 flex w-full flex-col items-center justify-center gap-4'>
        <div className='flex w-full max-w-7xl flex-row items-center justify-center gap-2 px-4'>
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
          <span className='h-[2px] grow bg-nier-700' />
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
        </div>
        <h2 className='text-shadow -translate-y-[2px] px-4 text-center font-exodus-striped text-5xl uppercase tracking-[0.5rem] sm:text-6xl'>
          Education
        </h2>
        <div className='flex w-full max-w-7xl flex-row items-center justify-center gap-2 px-4'>
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
          <span className='h-[2px] grow bg-nier-700' />
          <span className='h-[2px] w-5 grow-0 bg-nier-700' />
        </div>
      </div>
      {/* Content */}
      <div className='w-full max-w-7xl'>
        <div className='nier-block-left-sm md:nier-block-left relative my-0 ml-4 mr-2 px-0 py-2 sm:m-4 sm:p-2 md:p-8'>
          <article className=' flex flex-col items-stretch justify-start bg-nier-200 shadow-xl'>
            <div className='-mb-4 flex flex-row items-center justify-between'>
              <Link
                prefetch={false}
                target='_blank'
                href='https://www.utdallas.edu/'
                className='group flex flex-row items-center justify-start'>
                <Image
                  width={512}
                  height={512}
                  src='/images/utd-logo.png'
                  alt='UTD Logo'
                  className='ml-4 box-content aspect-square h-24 w-auto p-2'
                />
                <div className='ml-2 mt-2 flex flex-col items-start justify-start gap-1 p-2'>
                  <span className='text-shadow text-xl font-bold tracking-wide transition-colors duration-150 group-hover:text-amber-700'>
                    The University of Texas at Dallas
                  </span>
                  <div className='flex flex-col items-start justify-start font-semibold leading-4 opacity-60'>
                    <span>Bachelor of Science in Computer Science</span>
                    <span>GPA: 3.66</span>
                  </div>
                </div>
              </Link>
              <div className='mr-4 flex flex-col items-end justify-start gap-1 p-2'>
                <span className=' font-semibold opacity-60'>
                  Richardson, TX, USA
                </span>
                <span className='font-semibold opacity-80'>
                  Graduated Spring 2023
                </span>
              </div>
            </div>
            <CreditsCounter credits={135} />
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education
