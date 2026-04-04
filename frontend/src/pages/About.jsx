import React from 'react'
import { MdArrowOutward } from "react-icons/md";

import { MdOutlineDesignServices } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { MdOutlineVideoSettings } from "react-icons/md";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const About = () => {

  useGSAP(()=>{
    gsap.from(".texth",{
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 30%", 
      end: "top 50%",
      toggleActions: "play none none reverse",
    }
    })


  gsap.from(".feature-card", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 30%",
      end: "top 10%",
      toggleActions: "play none none reverse"
    }
  });

    gsap.to("#about", {
      scrollTrigger:{
        scroller:"#about",
        start: "top top",
        end: "+=100%", 
        scrub:true
      }
    })

    
    gsap.to("#allabout", {
    x: 100,
    rotate: 50,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#about",
      start: "10%",
      end: "50%",
      scrub: true,
    }
  });

 const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      pinSpacing: false,
    }
  });
  tl.to("#about", { scale: 0.95 })


  },[])

  return (
    <div id='about' className='bg-black overflow-hidden w-full min-h-[100vh] text-white py-4 lg:px-40 px-3 flex items-center justify-center mb-10'>
      <div id='allabout' className='rounded-2xl inset-shadow-sm inset-shadow-gray-400 lg:p-20 p-5'>
        <h1 className='texth md:text-5xl text-3xl my-3 bg-clip-text text-transparent bg-gradient-to-t from-gray-400 to-white'>Design layouts intelligently</h1>
        <p className='texth md:text-xl text-[16px]'>My passion for web development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
        <div className='w-full'>
          <div className='flex items-center justify-between my-3 flex-wrap max-sm:flex-col'>
            <div className='feature-card lg:max-w-[30vw] rounded-2xl inset-shadow-sm inset-shadow-gray-400 p-6'>
              <div className='relative inline-block'>
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gray-700 blur-sm z-0" />

              <MdOutlineDesignServices className='absolute -top-3 -left-3 z-10 text-gray-300 text-[30px]' />

              <p className='md:text-2xl text-[20px] text-white relative z-20'>DESIGN</p>
            </div>
                <p className='text-gray-300 md:text-[17px] text-[15px]'>I design clean, user-friendly interfaces with a focus on usability, accessibility, and modern UI/UX principles. I transform ideas into intuitive digital experiences.</p>
              </div>
            <div className='feature-card lg:max-w-[30vw] rounded-2xl inset-shadow-sm inset-shadow-gray-400 p-6'>
              <div className='relative inline-block'>
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gray-700 blur-sm z-0" />
                <VscTools className='absolute -top-3 -left-3 z-10 text-gray-300 text-[30px]'  />
                <p className='md:text-2xl text-[20px] text-white relative z-20'>DEVELOPMENT</p>
              </div>
              <p className='text-gray-300 md:text-[17px] text-[15px]'>I build responsive, scalable web applications using modern technologies. From frontend interactions to backend logic, I focus on performance, security, and clean code.</p>
            </div>
          </div>
          <div className='feature-card flex items-center justify-center my-4'>
            <div className='lg:max-w-[30vw] rounded-2xl inset-shadow-sm inset-shadow-gray-400 p-6'>
              <div className='relative inline-block'>

                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gray-700 blur-sm z-0" />
                
                <MdOutlineVideoSettings  className='absolute -top-3 -left-3 z-10 text-gray-300 text-[30px]' />
                <p className='md:text-2xl text-[15px] text-white relative z-20'>MAINTENANCE</p>
              </div>
              <p className='text-gray-300 md:text-[17px] text-[15px]'>I ensure applications stay reliable through regular updates, bug fixes, performance optimization, and feature enhancements to keep systems running smoothly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
