import React from 'react'
import BrandingCard from '../components/BrandCard'
import Gradient1 from '../assets/Gradient1.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async'

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  
  useGSAP(()=>{

  gsap.to("#project", {
      scrollTrigger:{
        scroller:"#project",
        start: "top top",
        end: "+=100%", 
        scrub:true
      }

    })
  },[])
  return (
    <>
      <Helmet>
        <title>Projects | Soumen Das - MERN Stack Developer</title>

        <meta
          name="description"
          content="Explore all projects built by Soumen Das including React, Node.js, and full-stack MERN applications with modern UI/UX and scalable architecture."
        />

        <meta
          name="keywords"
          content="Soumen Das Projects, MERN Stack Projects, React Projects, Full Stack Developer Portfolio, Web Development Projects"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://portfolio-soumen-dev.netlify.app/#project"
        />

        {/* Open Graph */}
        <meta property="og:title" content="All Projects | Soumen Das" />
        <meta
          property="og:description"
          content="Showcasing MERN Stack and React projects built by Soumen Das."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-soumen-dev.netlify.app/#project"
        />
      </Helmet>
      <div id='project' className="min-h-screen bg-black p-4 mb-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-gradient-to-r from-blue-700 via-emerald-700 to-pink-500 rounded-full blur-[180px] opacity-70 z-0" />
        <h1 className='text-center text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500'>Projects</h1>
        <div className="absolute bottom-[50%] right-[40%] w-[350px] h-[350px] bg-gradient-to-r from-blue-700 via-emerald-700 to-pink-500 rounded-full blur-[180px] opacity-70 z-0" />
        <div className='flex items-center mt-10'>
          <BrandingCard />
        </div>
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-gradient-to-r from-blue-700 via-emerald-700 to-pink-500 rounded-full blur-[180px] opacity-70 z-0" />
        
      </div>
    </>
  )
}

export default Projects
