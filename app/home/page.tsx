// My components
import Footer from "./_localComponents/Footer";
import Test from "./_localComponents/Test";
import About from "./_localComponents/aboutSection/About";
import Projects from "./_localComponents/Projects";
import ContactMe from "./_localComponents/ContactMe";
import Hero from "./_localComponents/heroSection/Hero";
import Navbar from "./_localComponents/Navbar";
import DiamondTransition from "app/_globalComponents/design/DiamondTransition";
import LinesThroughCircleDesign from "app/_globalComponents/design/LinesThroughCircleDesign";
import Skills from "./_localComponents/skillsSection/Skills";
const Home = () => {
  return (
    <>
      {/* Home page of the website */}
      <Navbar />
      <Hero />
      <div className='relative overflow-hidden'>
        <LinesThroughCircleDesign className='absolute top-0 left-0 h-[90vw] -translate-x-[40%] -translate-y-48 -z-20 fill-none stroke-nier-400 opacity-60' />
        <LinesThroughCircleDesign className='absolute top-[800px] right-0 h-[90vw] rotate-180 translate-x-[40%] -translate-y-[400px] -z-20 fill-none stroke-nier-400 opacity-60' />
        <DiamondTransition
          twTransitionFill='fill-black'
          twTransitionStroke='stroke-nier-700'
          unitWidth={150}
          padding={"50px"}
        />
        <About />
        <Skills />
        <Projects />
      </div>
      <DiamondTransition
        twTransitionFill='fill-black'
        twTransitionStroke='stroke-nier-700'
        unitWidth={150}
        padding={"50px"}
        reverse
      />
      {/* <ContactMe /> */}
      <Footer />
      <Test />
    </>
  );
};

export default Home;
