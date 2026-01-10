import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import TechStack from './TechStack'
import Skills from './Skills'
import MidBanner from './MidBanner'
import Footer from './Footer'


const Home = () => {
  return (
    <div className='min-h-[100vh] bg-[#000000]'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Skills />
      <MidBanner />
      <Footer />
    </div>
  )
}

export default Home
