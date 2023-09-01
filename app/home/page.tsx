// My components
import Footer from "./_localComponents/Footer"
import Test from "./_localComponents/Test"
import About from "./_localComponents/aboutSection/About"
import Projects from "./_localComponents/projectsSection/Projects"
import ContactMe from "./_localComponents/ContactMe"
import Hero from "./_localComponents/heroSection/Hero"
import Navbar from "./_localComponents/Navbar"
import DiamondTransition from "app/_globalComponents/design/DiamondTransition"
import LinesThroughCircleDesign from "app/_globalComponents/design/LinesThroughCircleDesign"
import Skills from "./_localComponents/skillsSection/Skills"
import Education from "./_localComponents/educationSection/Education"
const Home = () => {
  return (
    <>
      {/* Home page of the website */}
      <Navbar />
      <Hero />
      <div className='relative overflow-hidden'>
        <LinesThroughCircleDesign className='absolute left-0 top-0 -z-20 h-[90vw] -translate-x-[40%] -translate-y-48 fill-none stroke-nier-400 opacity-60' />
        <LinesThroughCircleDesign className='absolute right-0 top-[800px] -z-20 h-[90vw] -translate-y-[400px] translate-x-[40%] rotate-180 fill-none stroke-nier-400 opacity-60' />
        <DiamondTransition
          twTransitionFill='fill-black'
          twTransitionStroke='stroke-nier-700'
          unitWidth={150}
          padding={"50px"}
        />
        <About />
        <Skills />
        <Projects />
        <Education />
      </div>
      <DiamondTransition
        twTransitionFill='fill-black'
        twTransitionStroke='stroke-nier-700'
        unitWidth={150}
        padding={"50px"}
        reverse
      />
      <ContactMe />
      <Footer />
      {process.env.NODE_ENV === "development" && <Test />}
    </>
  )
}

export default Home
