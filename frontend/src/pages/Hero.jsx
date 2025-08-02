import React, { useLayoutEffect,useEffect, useRef, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiMoebiusTriangle } from "react-icons/gi";
import bgImage from '../assets/smoke.webp'
import InfiniteSlider from '../components/InfiniteSlider ';
import heroImg from '../assets/hero.png'

import '../index.css'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {

  const lettersRef = useRef([]);

  const name = "Soumen";

  // Animate letters on mount
  useGSAP(() => {
    gsap.from(lettersRef.current, {
      rotateX:360,
      opacity:0,
      y:50,
      repeat: -1,
      duration: 1,
      ease: "linear",
      stagger: 0.2,
    });

      gsap.from(".th1",{
        y:200,
        opacity:0,
        duration: 1,
        delay:1,
        stagger:1,
      })

    gsap.from(".image", {
      x:500,
      duration:1,
      ease:"linear"
    });
    
    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      pinSpacing: false,
    }
  });
  tl.to("#hero", { opacity: 0.5, scale: 0.95 })

  }, []);

  return (

    <div id='hero' className='min-h-screen rounded-2xl mb-4 w-full bg-center bg-cover overflow-hidden' style={{backgroundImage: "url('/herobg.png')"}}>
      <div className='flex items-center main w-full h-full lg:justify-between lg:px-50 px-4 max-sm:flex-col-reverse'>
        <div className='flex justify-between z-10 lg:px-40 py-10 mt-4 max-sm:flex-col px-3 bg-cover bg-center relative'>
          <div className='text-white lg:max-w-[40vw] w-full'>
            {/* <img src={bgImage} className='absolute left-10 w-[100vw] max-sm:h-[70%] -z-0' alt="" /> */}
              <h1 className='th1 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-gray-400 to-white'>
                I am {' '}
                {name.split('').map((char, i) => (
                  <span
                    key={i}
                    ref={(el) => (lettersRef.current[i] = el)}
                    className="inline-block text-[#B6F500]"
                  >
                    {char}
                  </span>
                ))}
                </h1>
              <div className='flex flex-col my-4'>
                <span className='md:text-5xl text-[#B6F500] text-[40px]'>
                <Typewriter
                  options={{
                  strings: ['FullStack Developer', 'Designer', 'Java Developer'],
                  autoStart: true,
                  loop: true,
                }}
                />
                </span>
              </div>
              <p className='md:text-[20px] text-sm font-medium text-white'>
                I am an experienced Full-Stack Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.

                {/* My passion for web development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project. */}
              </p>
              
                <div className='flex gap-x-3 mt-3'>
                  <a href='#project' className='py-2 px-7 text-[18px] font-medium bg-[#B6F500] cursor-pointer text-black'>Projects</a>
                  <a href='#about' className='py-2 px-7 text-[18px] font-medium border-2 border-[#B6F500] cursor-pointer text-[#B6F500]'>About Me</a>
                </div>
                <div className='flex mt-3 gap-x-3'>
                  <span className='rounded-md p-2 z-10 text-[26px] hover:bg-gray-900 border-1 border-gray-700 cursor-pointer'><FiGithub /></span>
                  <span className='rounded-md p-2 z-10 text-[26px] hover:bg-blue-400 border-1 border-gray-700 cursor-pointer'><FaLinkedinIn /></span>
                  <span className='rounded-md p-2 z-10 text-[26px] hover:bg-pink-900 border-1 border-gray-700 cursor-pointer'><FaInstagram /></span>
                  <span className='rounded-md p-2 z-10 text-[26px] hover:bg-[#B6F500] border-1 border-gray-700 cursor-pointer hover:text-black'><GiMoebiusTriangle /></span>
                </div>
          </div>
          <div>
        </div>
        
        </div>
        <div className='image z-10 mt-10 rounded-full lg:w-[25vw] lg:h-[25vw] w-[50vw] h-[50vw] flex justify-center items-center overflow-hidden bg-gradient-to-b from-[#B6F500] to-black'>
          <div className='mt-20 animate-pulse'>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


