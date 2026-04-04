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
      rotate: 1440, 
      scrollTrigger: {
        trigger: "body",        
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
  const handleScroll = () => {
      setBlur(window.scrollY > 0);
  };

  window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className='w-full px-3 pt-3 fixed z-100'>
      <div className='rounded-full relative flex items-center justify-between px-3 py-1 overflow-hidden'> 
        <div className={`${blur ? 'bg-gradient-to-br from-gray-700 to-gray-950' :"bg-transparent"} absolute w-full left-0 h-full blur-sm delay-300`} />
        <GiMoebiusTriangle className='text-[50px] logo text-[#B6F500] z-0' />
        
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
