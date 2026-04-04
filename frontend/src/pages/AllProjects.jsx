import React, { useEffect, useState } from 'react'
import BrandingCard from '../components/BrandCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const AllProjects = () => {
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
    
    <div id='project' className="min-h-screen bg-black p-6 overflow-hidden">
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-gradient-to-r from-blue-700 via-emerald-700 to-pink-500 rounded-full blur-[180px] opacity-70 z-0" />
      <h1 className='text-center text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500'>All Projects</h1>
      <div className="absolute bottom-[50%] right-[40%] w-[350px] h-[350px] bg-gradient-to-r from-blue-700 via-emerald-700 to-pink-500 rounded-full blur-[180px] opacity-70 z-0" />
      <div className='flex items-center mt-10'>
        <BrandingCard />
      </div>
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-gradient-to-r from-blue-700 via-emerald-700 to-pink-500 rounded-full blur-[180px] opacity-70 z-0" />
      
    </div>
  )
}

export default AllProjects
