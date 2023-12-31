import Image from "next/image"
import portrait from "/public/images/portrait.png"
import content from "./content"
import { type Variants } from "framer-motion"
import Motion from "./Motion"

const About = () => {
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
      <section
        id="about"
        className="relative mb-16 flex w-full items-center justify-center overflow-y-visible p-2 py-12 pt-20 font-helvetica md:hidden"
      >
        <article className="nier-block-left-sm relative ml-4 mr-2 flex min-h-[40vmin] w-full flex-col items-start justify-center py-5">
          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30%" }}
            variants={smallBlockVariants}
            className="mb-8 bg-nier-200 bg-opacity-80 p-4 shadow-md "
          >
            <Motion
              as="header"
              variants={blockContentVariants}
              className="mt-2 flex w-full flex-col items-center"
            >
              <h2 className="text-shadow text-center text-3xl font-normal uppercase tracking-[0.5rem] ">
                {content.name}
              </h2>

              <div className="w-2/3 py-2">
                <hr className="h-px w-full border-nier-700" />
              </div>
              <h3 className="flex w-full flex-row flex-wrap items-center justify-around text-base uppercase">
                {content.subtitles.map((subtitle) => (
                  <span key={subtitle} className="px-2">
                    {subtitle}
                  </span>
                ))}
              </h3>
            </Motion>
            <Motion variants={blockContentVariants} className="px-2 py-4">
              <div className="w-fit border-4 border-double border-nier-400 p-2 ">
                <Image
                  src={portrait}
                  alt="portrait"
                  className="border-2 border-nier-700 border-opacity-50 p-1"
                />
              </div>
            </Motion>
            <Motion
              as="p"
              variants={blockContentVariants}
              className="text-center text-base"
            >
              {content.description}
            </Motion>
          </Motion>
          <div className="grid shrink grid-cols-1 grid-rows-1 gap-6 ">
            {content.qualities.map((quality) => (
              <Motion
                key={quality.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30%" }}
                variants={smallBlockVariants}
                className="flex flex-col items-center justify-start gap-2 bg-nier-200 bg-opacity-80 p-2 text-center shadow-md"
              >
                <h4 className="text-shadow mt-2 text-lg font-semibold uppercase tracking-widest">
                  {quality.title}
                </h4>
                <hr className="h-px w-1/3 border-nier-700" />
                <p className="text-sm">{quality.description}</p>
              </Motion>
            ))}
          </div>
        </article>
      </section>
      <Motion
        as="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30%" }}
        id="about"
        className="relative mb-20 hidden w-full items-center justify-center overflow-y-visible p-6 py-12 pt-28 font-helvetica md:flex"
      >
        <div className="relative w-full max-w-7xl shrink 2xl:max-w-[80%]">
          <Motion
            as="article"
            variants={articleVariants}
            className="nier-block-left relative ml-4 mr-2 flex min-h-[40vmin] w-full flex-col items-start justify-center p-8 py-5"
          >
            <Motion
              variants={largeBlockVariants}
              className="mb-8 flex flex-row items-center justify-between bg-nier-200 p-4 shadow-md "
            >
              <div className="basis-2/3 px-4">
                <header className="mb-4 w-full border-b border-nier-700 pb-4">
                  <h2 className="text-shadow mb-3 whitespace-nowrap text-4xl font-normal uppercase tracking-[0.5rem]">
                    {content.name}
                  </h2>
                  <h3 className="flex w-full flex-col items-start justify-start gap-2 text-xl uppercase xl:flex-row xl:items-center xl:gap-4 ">
                    {content.subtitles.map((subtitle) => (
                      <span key={subtitle}>{subtitle}</span>
                    ))}
                  </h3>
                </header>
                <p className="text-lg ">{content.description}</p>
              </div>
              <Motion
                variants={blockContentVariants}
                className="basis-1/3 px-2 py-4"
              >
                <div className="w-fit border-4 border-double border-nier-400 p-2 ">
                  <Image
                    src={portrait}
                    alt="portrait"
                    className="border-2 border-nier-700 border-opacity-50 p-1"
                  />
                </div>
              </Motion>
            </Motion>
            <div className="grid shrink grid-cols-2 grid-rows-2 gap-6">
              {content.qualities.map((quality) => (
                <Motion
                  variants={largeBlockVariants}
                  className="flex flex-col items-center justify-start gap-2 bg-nier-200 p-2 text-center shadow-md"
                  key={quality.title}
                >
                  <h4 className="text-shadow mt-2 text-xl font-semibold uppercase tracking-widest">
                    {quality.title}
                  </h4>
                  <hr className="h-px w-1/3 border-nier-700" />
                  <p className="text-base">{quality.description}</p>
                </Motion>
              ))}
            </div>
          </Motion>
        </div>
      </Motion>
    </>
  )
}

export default About
