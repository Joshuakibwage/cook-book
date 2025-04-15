import CallToAction from "../components/CallToAction"
 import RecipeFinder from "../components/RecipeFinder"
 import Hero from "../components/Hero"
 import Featured from "../components/Featured"
 import HowItWorks from "../components/HowItWorks"
 import Benefits from "../components/Benefits"
 import Testimonials from "../components/Testimonials"
 import NewsLetter from "../components/NewsLetter"
 
 
  const Home = () => {
    return (
      <section>
        <Hero />
        <RecipeFinder />
        <Featured />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <CallToAction />
        <NewsLetter />
      </section>
    )
  }
 
 export default Home
 