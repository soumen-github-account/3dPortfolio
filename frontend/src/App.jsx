import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import MidBanner from './pages/MidBanner'
import TechStack from './pages/TechStack'

const App = () => {
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

export default App
