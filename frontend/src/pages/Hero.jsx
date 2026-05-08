import React, { useLayoutEffect,useEffect, useRef, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiMoebiusTriangle } from "react-icons/gi";
import bgImage from '../assets/smoke.webp'
import InfiniteSlider from '../components/InfiniteSlider ';
import heroImg from '../assets/hero2.png'

import '../index.css'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom';
import { GoDownload } from "react-icons/go";
import DownloadCVButton from '../components/DownloadCVButton';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {

  const lettersRef = useRef([]);

  const name = "Soumen";

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
                <p className='md:text-[20px] text-sm text-white'>
                  Computer Science undergraduate with hands-on experience in building full-stack web
                  applications. Strong foundation in data structures, REST APIs, and database design, seeking
                  internship or entry-level opportunities in web development.
                </p>
                
                <div className="flex gap-x-3 mt-3">
                  
                    <Link
                      to="/all-projects"
                      className="
                        relative overflow-hidden
                        py-2 px-7 text-[18px] font-medium
                        border-2 border-[#B6F500]
                        text-black bg-[#B6F500]
                        transition-colors duration-300
                        before:absolute before:inset-0
                        before:bg-black
                        before:translate-y-full
                        before:transition-transform before:duration-300
                        hover:before:translate-y-0
                        hover:text-[#B6F500]
                        z-10
                      "
                    >
                      <span className="relative z-20">Projects</span>
                    </Link>

                    <a
                      href="#about"
                      className="
                        relative overflow-hidden
                        py-2 px-7 text-[18px] font-medium
                        border-2 border-[#B6F500]
                        text-[#B6F500]
                        transition-colors duration-300
                        before:absolute before:inset-0
                        before:bg-[#B6F500]
                        before:translate-y-full
                        before:transition-transform before:duration-300
                        hover:before:translate-y-0
                        hover:text-black
                        z-10
                      "
                    >
                      <span className="relative z-20">About Me</span>
                    </a>

                  </div>

                <div className="flex mt-3 gap-x-3">

                <a
                  href="https://github.com/soumen-github-account"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    relative p-2 rounded-md
                    text-[26px]
                    border border-gray-700
                    text-white
                    transition-all duration-300
                    hover:bg-purple-900
                    hover:scale-110
                    hover:shadow-[0_0_15px_#9333ea]
                  "
                >
                  <FiGithub />
                </a>

                <a
                  href="https://linkedin.com/in/soumen-das-07b2b2328"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    relative overflow-hidden p-2 rounded-md
                    text-[26px]
                    border border-gray-700
                    text-white
                    before:absolute before:inset-0
                    before:bg-blue-500
                    before:translate-y-full
                    before:transition-transform before:duration-300
                    hover:before:translate-y-0
                    hover:scale-110
                  "
                >
                  <span className="relative z-10">
                    <FaLinkedinIn />
                  </span>
                </a>

                <a
                  href="https://leetcode.com/soumen-leetcode/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    relative p-2 rounded-md
                    text-[26px]
                    border border-gray-700
                    text-white
                    transition-all duration-300
                    hover:bg-orange-600
                    hover:rotate-6
                    hover:scale-110
                  "
                >
                  <SiLeetcode />
                </a>
                <DownloadCVButton />

              </div>

            </div>
            <div>
          </div>
          
          </div>
          <div className='image z-10 mt-10 rounded-full lg:w-[25vw] lg:h-[25vw] w-[50vw] h-[50vw] flex justify-center items-center overflow-hidden bg-gradient-to-b from-[#B6F500] to-black'>
            <div className='mt-20 animate-pulse'>
              <img src={heroImg} alt="" className='w-65 lg:mr-3 max-sm:w-50 max-sm:mb-8' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;


