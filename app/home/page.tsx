// My components
import Footer from "./_localComponents/Footer"
import Test from "./_localComponents/Test"
import Projects from "./_localComponents/projectsSection/Projects"
import ContactMe from "./_localComponents/contactMeSection/ContactMe"
import Hero from "./_localComponents/heroSection/Hero"
import Navbar from "./_localComponents/Navbar"
import DiamondTransition from "app/_globalComponents/design/DiamondTransition"
import LinesThroughCircleDesign from "app/_globalComponents/design/LinesThroughCircleDesign"
import Skills from "./_localComponents/skillsSection/Skills"
import Education from "./_localComponents/educationSection/Education"
import AboutWithImage from "./_localComponents/aboutSection/AboutWithImage"

export const dynamic = "force-dynamic"

const Home = () => {
  return (
    <>
      {/* Home page of the website */}
      <Navbar />
      <Hero />
      <div className='relative overflow-clip'>
        <div className='absolute left-0 right-0 top-[5%] -z-40 h-[100vw] lg:top-0'>
          <LinesThroughCircleDesign className='absolute -top-[10%] left-0 h-[90vw] -translate-x-[40%] fill-none stroke-nier-400 opacity-60' />
          <LinesThroughCircleDesign className='absolute right-0 top-[40%] h-[90vw] translate-x-[40%] rotate-180 fill-none stroke-nier-400 opacity-60' />
        </div>
        <div className='absolute left-0 right-0 top-[25%] -z-40 h-[100vw] sm:top-[20%] md:top-[22%] lg:top-[20%] xl:top-[33%]'>
          <LinesThroughCircleDesign className='absolute -top-[10%] left-0 h-[90vw] -translate-x-[40%] fill-none stroke-nier-400 opacity-60' />
          <LinesThroughCircleDesign className='absolute right-0 top-[40%] h-[90vw] translate-x-[40%] rotate-180 fill-none stroke-nier-400 opacity-60' />
        </div>
        <div className='absolute left-0 right-0 top-[45%] -z-40 h-[100vw] sm:top-[40%] md:top-[44%] lg:top-[40%] xl:bottom-[5%] xl:top-[unset]'>
          <LinesThroughCircleDesign className='absolute -top-[10%] left-0 h-[90vw] -translate-x-[40%] fill-none stroke-nier-400 opacity-60' />
          <LinesThroughCircleDesign className='absolute right-0 top-[40%] h-[90vw] translate-x-[40%] rotate-180 fill-none stroke-nier-400 opacity-60' />
        </div>
        <div className='absolute bottom-[10%] left-0 right-0 -z-40 h-[100vw] sm:bottom-[7%] md:bottom-[8%] lg:bottom-[7%] xl:hidden'>
          <LinesThroughCircleDesign className='absolute -top-[10%] left-0 h-[90vw] -translate-x-[40%] fill-none stroke-nier-400 opacity-60' />
          <LinesThroughCircleDesign className='absolute right-0 top-[40%] h-[90vw] translate-x-[40%] rotate-180 fill-none stroke-nier-400 opacity-60' />
        </div>
        <DiamondTransition
          twTransitionFill='fill-black'
          twTransitionStroke='stroke-nier-700'
          unitWidth={150}
          padding={"50px"}
        />
        <AboutWithImage />
        <Skills />
        <Projects />
        <Education />
        <DiamondTransition
          twTransitionFill='fill-black'
          twTransitionStroke='stroke-nier-700'
          unitWidth={150}
          padding={"50px"}
          reverse
        />
      </div>
      <div className='flex min-h-screen flex-col justify-between bg-black '>
        <ContactMe className='' />
        <Footer />
      </div>
      {process.env.NODE_ENV === "development" && <Test />}
    </>
  )
}

export default Home
