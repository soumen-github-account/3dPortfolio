
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';
const Footer = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  const finalPath = "M 10 100 Q 500 100 990 100";

  useEffect(() => {
    const svgElement = svgRef.current;

    const handleMouseMove = (e) => {
      const rect = svgElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dynamicPath = `M 10 100 Q ${x} ${y} 990 100`;

      gsap.to(pathRef.current, {
        attr: { d: dynamicPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: finalPath },
        duration: 1.8,
        ease: "elastic.out(1, 0.2)",
      });
    };

    if (svgElement) {
      svgElement.addEventListener("mousemove", handleMouseMove);
      svgElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (svgElement) {
        svgElement.removeEventListener("mousemove", handleMouseMove);
        svgElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Soumen Das | MERN Stack Developer</title>

        <meta
          name="description"
          content="Get in touch with Soumen Das, MERN Stack Developer. Contact for freelance web development, React projects, and full-stack applications."
        />

        <meta
          name="keywords"
          content="Contact Soumen Das, MERN Developer Contact, React Developer India, Freelance Web Developer, Full Stack Developer Contact"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://portfolio-soumen-dev.netlify.app/#contact"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Soumen Das | Developer" />
        <meta
          property="og:description"
          content="Contact Soumen Das for freelance MERN stack development and React projects."
        />
        <meta
          property="og:url"
          content="https://portfolio-soumen-dev.netlify.app/#contact"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className='min-h-[50vh] bg-[#212121] md:px-20 pl-10 text-white pt-10 pb-13'>
        <div className='md:flex justify-between items-center'>
          <div className='flex gap-x-10 text-[20px]'>
            <ul>
              <li className='cursor-pointer hover:text-[#B6F500] hover:translate-x-1'>Home</li>
              <li className='cursor-pointer hover:text-[#B6F500] hover:translate-x-1'>About</li>
              <li className='cursor-pointer hover:text-[#B6F500] hover:translate-x-1'>Projects</li>
              <li className='cursor-pointer hover:text-[#B6F500] hover:translate-x-1'>Contact me</li>
            </ul>

            <ul>
              <li className='cursor-pointer hover:text-[#B6F500] hover:translate-x-1'>Github</li>
              <li className='cursor-pointer hover:text-[#B6F500] hover:translate-x-1'>LinkedIn</li>
              <li className='cursor-pointer hover:text-[#B6F500] hover:translate-x-1'>X (Twitter)</li>
              <li className='cursor-pointer hover:text-[#B6F500] hover:translate-x-1'>Instagram</li>
            </ul>
          </div>

          <div className='text-white flex flex-wrap gap-4 items-center max-sm:mt-3'>
            <div className='flex items-center text-[20px] gap-3 text-[#B6F500] hover:text-[#fff] hover:translate-x-1 cursor-pointer'>
              <MdOutlineMailOutline />
              <p>sd8220335@gmail.com</p>
            </div>

            <div className='flex items-center text-[20px] gap-3 text-[#B6F500] hover:text-[#fff] hover:translate-x-1 cursor-pointer'>
              <FaPhone />
              <p>+91-7584818990</p>
            </div>
          </div>

          <div>
            <button className='rounded-full text-black w-40 h-40 max-sm:mt-5 items-center justify-center text-2xl bg-[#acd339] text-wrap cursor-crosshair'>
              Message <br /> me
            </button>
          </div>
        </div>

        <div className='lg:block hidden mt-10'>
          <svg width="1000" height="200" ref={svgRef}>
            <path
              ref={pathRef}
              d="M 10 100 Q 500 100 990 100"
              stroke="white"
              fill="transparent"
            />
          </svg>
        </div>

        <div className='md:flex justify-between items-center'>
          <h1 className='text-5xl mt-4'>SOUMEN DAS</h1>
          <p className='max-sm:my-5'>
            Copyright 2024 @ sdking.dev - All Rights Reserved.
          </p>
          <div onClick={()=>scrollTo(0,0)} className='flex items-center justify-center rounded-md w-[40px] bg-[#B6F500] shadow-md shadow-[#B6F500] text-black p-2 cursor-pointer  text-[20px]'>
            <FaArrowUpLong className='animate-bounce duration-300' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
