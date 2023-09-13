"use client"

import React from "react"
import { Variants, motion } from "framer-motion"
import Image from "next/image"
import portrait from "/public/images/portrait.png"

const AboutWithImage = () => {
  const articleVariants: Variants = {
    hidden: {
      scaleY: 0,
      y: "-50%",
    },
    visible: {
      scaleY: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeIn",
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }
  const largeBlockVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  }
  const blockContentVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }
  const smallBlockVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <>
      {/* <=sm screen version */}
      <section
        id='about'
        className='relative mb-16 flex w-full items-center justify-center overflow-y-visible p-2 py-12 pt-20 font-helvetica md:hidden'>
        <article className='nier-block-left-sm relative ml-4 mr-2 flex min-h-[40vmin] w-full flex-col items-start justify-center py-5'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-40%" }}
            variants={smallBlockVariants}
            className='mb-8 bg-nier-200 bg-opacity-80 p-4 shadow-md '>
            <motion.header
              variants={blockContentVariants}
              className='mt-2 flex w-full flex-col items-center'>
              <h2 className='text-shadow text-center text-3xl font-normal uppercase tracking-[0.5rem] '>
                Nikita Istomin
              </h2>

              <div className='w-2/3 py-2'>
                <hr className='h-px w-full border-nier-700' />
              </div>
              <h3 className='flex w-full flex-row flex-wrap items-center justify-around text-base uppercase'>
                <span className='px-2'>Software developer</span>
                <span className='px-2'>Deep thinker</span>
                <span className='px-2'>Life enjoyer</span>
              </h3>
            </motion.header>
            <motion.div variants={blockContentVariants} className='px-2 py-4'>
              <div className='w-fit border-4 border-double border-nier-400 p-2 '>
                <Image
                  src={portrait}
                  alt='portrait'
                  className='border-2 border-nier-700 border-opacity-50 p-1'
                />
              </div>
            </motion.div>
            <motion.p
              variants={blockContentVariants}
              className='text-center text-base '>
              I'm a frontend web developer with a passion for creating beautiful
              and useful things. I was introduced to programming in 2015 and
              since then I was dragged into the world of technology. I'm a
              recent computer science grad from the University of Texas at
              Dallas, and I'm exited to start my career in the industry.
            </motion.p>
          </motion.div>
          <div className='grid shrink grid-cols-1 grid-rows-1 gap-6 '>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: "-30%" }}
              variants={smallBlockVariants}
              className='flex flex-col items-center justify-start gap-2 bg-nier-200 bg-opacity-80 p-2 text-center shadow-md  '>
              <h4 className='text-shadow mt-2 text-lg font-semibold uppercase tracking-widest'>
                Motivated
              </h4>
              <hr className='h-px w-1/3 border-nier-700' />
              <p className='text-sm'>
                As a quick-thinking software engineer, I embrace challenges and
                never shy away from asking questions. Eager to learn, I use my
                inquisitive nature to stay at the cutting edge of this
                ever-evolving field.
              </p>
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: "-30%" }}
              variants={smallBlockVariants}
              className='flex flex-col items-center justify-start gap-2 bg-nier-200 bg-opacity-80 p-2 text-center shadow-md'>
              <h4 className='text-shadow mt-2 text-lg font-semibold uppercase tracking-widest '>
                Effective
              </h4>
              <hr className='h-px w-1/3 border-nier-700' />
              <p className='text-sm'>
                I blend passion, precision, and a user-centric approach to craft
                efficient solutions. Embracing cutting-edge technologies and an
                agile mindset, I thrive on solving complex challenges.
              </p>
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: "-30%" }}
              variants={smallBlockVariants}
              className='flex flex-col items-center justify-start gap-2 bg-nier-200 bg-opacity-80 p-2 text-center shadow-md '>
              <h4 className='text-shadow mt-2 text-lg font-semibold uppercase tracking-widest '>
                Consistent
              </h4>
              <hr className='h-px w-1/3 border-nier-700' />
              <p className='text-sm'>
                I bring unwavering commitment to excellence, ensuring remarkable
                results on any team. I build projects that adhere to the highest
                standards and delivering consistent and lasting value to clients
                and end-users.
              </p>
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: "-30%" }}
              variants={smallBlockVariants}
              className='flex flex-col items-center justify-start gap-2 bg-nier-200 bg-opacity-80 p-2 text-center shadow-md '>
              <h4 className='text-shadow mt-2 text-lg font-semibold uppercase tracking-widest '>
                Collaborative
              </h4>
              <hr className='h-px w-1/3 border-nier-700' />
              <p className='text-sm'>
                I thrive in team environments, valuing open communication and
                diverse perspectives. I strive to empower and uplift my team,
                creating an atmosphere where everyone can shine and succeed
                together.
              </p>
            </motion.div>
          </div>
        </article>
      </section>

      {/* >=md screen version */}
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-40%" }}
        id='about'
        className='relative mb-20 flex w-full items-center justify-center overflow-y-visible p-6 py-12 pt-28 font-helvetica max-sm:hidden'>
        <div className='relative w-full max-w-7xl shrink 2xl:max-w-[80%]'>
          <motion.article
            variants={articleVariants}
            className='nier-block-left relative ml-4 mr-2 flex min-h-[40vmin] w-full flex-col items-start justify-center p-8 py-5'>
            <motion.div
              variants={largeBlockVariants}
              className='mb-8 flex flex-row items-center justify-between bg-nier-200 p-4 shadow-md '>
              <div className='basis-2/3 px-4'>
                <header className='mb-4 w-full border-b border-nier-700 pb-4'>
                  <h2 className='text-shadow mb-3 whitespace-nowrap text-4xl font-normal uppercase tracking-[0.5rem]'>
                    Nikita Istomin
                  </h2>
                  <h3 className='flex w-full flex-col items-start justify-start gap-2 text-xl uppercase xl:flex-row xl:items-center xl:gap-4 '>
                    <span>Software developer.</span>
                    <span>Deep thinker.</span>
                    <span>Life enjoyer.</span>
                  </h3>
                </header>
                <p className='text-lg '>
                  I'm a frontend web developer with a passion for creating
                  beautiful and useful things. I was introduced to programming
                  in 2015 and since then I was dragged into the world of
                  technology. I'm a recent computer science grad from the
                  University of Texas at Dallas, and I'm exited to start my
                  career in the industry.
                </p>
              </div>
              <motion.div
                variants={blockContentVariants}
                className='basis-1/3 px-2 py-4'>
                <div className='w-fit border-4 border-double border-nier-400 p-2 '>
                  <Image
                    src={portrait}
                    alt='portrait'
                    className='border-2 border-nier-700 border-opacity-50 p-1'
                  />
                </div>
              </motion.div>
            </motion.div>
            <div className='grid shrink grid-cols-2 grid-rows-2 gap-6'>
              <motion.div
                variants={largeBlockVariants}
                className='flex flex-col items-center justify-start gap-2 bg-nier-200 p-2 text-center shadow-md '>
                <h4 className='text-shadow mt-2 text-xl font-semibold uppercase tracking-widest'>
                  Motivated
                </h4>
                <hr className='h-px w-1/3 border-nier-700' />
                <p className='text-base'>
                  As a quick-thinking software engineer, I embrace challenges
                  and never shy away from asking questions. Eager to learn, I
                  use my inquisitive nature to stay at the cutting edge of this
                  ever-evolving field.
                </p>
              </motion.div>
              <motion.div
                variants={largeBlockVariants}
                className='flex flex-col items-center justify-start gap-2 bg-nier-200 p-2 text-center shadow-md '>
                <h4 className='text-shadow mt-2 text-xl font-semibold uppercase tracking-widest'>
                  Effective
                </h4>
                <hr className='h-px w-1/3 border-nier-700' />
                <p className='text-base'>
                  I blend passion, precision, and a user-centric approach to
                  craft efficient solutions. Embracing cutting-edge technologies
                  and an agile mindset, I thrive on solving complex challenges.
                </p>
              </motion.div>
              <motion.div
                variants={largeBlockVariants}
                className='flex flex-col items-center justify-start gap-2 bg-nier-200 p-2 text-center shadow-md '>
                <h4 className='text-shadow mt-2 text-xl font-semibold uppercase tracking-widest'>
                  Consistent
                </h4>
                <hr className='h-px w-1/3 border-nier-700' />
                <p className='text-base'>
                  I bring unwavering commitment to excellence, ensuring
                  remarkable results on any team. I build projects that adhere
                  to the highest standards and delivering consistent and lasting
                  value to clients and end-users.
                </p>
              </motion.div>
              <motion.div
                variants={largeBlockVariants}
                className='flex flex-col items-center justify-start gap-2 bg-nier-200 p-2 text-center shadow-md '>
                <h4 className='text-shadow mt-2 text-xl font-semibold uppercase tracking-widest'>
                  Collaborative
                </h4>
                <hr className='h-px w-1/3 border-nier-700' />
                <p className='text-base'>
                  I thrive in team environments, valuing open communication and
                  diverse perspectives. I strive to empower and uplift my team,
                  creating an atmosphere where everyone can shine and succeed
                  together.
                </p>
              </motion.div>
            </div>
          </motion.article>
        </div>
      </motion.section>
    </>
  )
}

export default AboutWithImage