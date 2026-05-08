import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import TechStack from './TechStack'
import Skills from './Skills'
import MidBanner from './MidBanner'
import Footer from './Footer'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Soumen Das | MERN Stack Developer Portfolio</title>

        <meta
          name="description"
          content="Soumen Das is a MERN Stack Developer specializing in React, Node.js, Express, and MongoDB. Explore full-stack projects, UI/UX design, and web development skills."
        />

        <meta
          name="keywords"
          content="Soumen Das, MERN Stack Developer, React Developer India, Full Stack Developer Portfolio, Node.js Developer, Web Developer Kolkata"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://portfolio-soumen-dev.netlify.app/"
        />

        {/* Open Graph (social ranking boost) */}
        <meta property="og:title" content="Soumen Das | MERN Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore MERN stack projects, React UI designs, and full-stack development work by Soumen Das."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-soumen-dev.netlify.app/"
        />
        <meta
          property="og:image"
          content="https://portfolio-soumen-dev.netlify.app/herobg.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soumen Das | MERN Developer" />
        <meta
          name="twitter:description"
          content="Full Stack MERN Developer portfolio with React, Node.js projects."
        />
        <meta
          name="twitter:image"
          content="https://portfolio-soumen-dev.netlify.app/herobg.png"
        />
      </Helmet>
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
    </>
  )
}

export default Home
