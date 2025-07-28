import React, { useEffect, useState } from 'react'
import { GiMoebiusTriangle } from "react-icons/gi";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [blur, setBlur] = useState(false);

useGSAP(() => {
    gsap.to(".logo", {
      rotate: 1440, // 4 full spins on scroll
      scrollTrigger: {
        trigger: "body",         // ✅ trigger is the whole page
        start: "top top",
        end: "bottom bottom",    // ✅ scroll through entire page
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
  const handleScroll = () => {
      setBlur(window.scrollY > 0); // show blur if scrolled even 1px
  };

  window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className='w-full px-3 pt-3 fixed z-100'>
      <div className='rounded-full relative flex items-center justify-between px-3 py-1 overflow-hidden'> 
        <div className={`${blur ? 'bg-gradient-to-br from-gray-700 to-gray-950' :"bg-transparent"} absolute w-full left-0 h-full blur-sm delay-300`} />
        <GiMoebiusTriangle className='text-[50px] logo text-[#B6F500] z-0' />
        {/* <button className='bg-radial-[at_25%_25%] from-green-300 to-green-600 to-75% text-black rounded-full text-[19px] px-8 py-2'>Connect</button> */}
        {/* <button className="btn1 overflow-hidden rounded-full p-[4px]">
          <div className='btn rounded-full px-8 py-2'>
            <span className='text-white text-[20px]'>Connect with me</span>
          </div>
        </button> */}
        <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
          <a href='#contact' className="px-8 text-md py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">
              Connect with me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
