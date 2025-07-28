import React, { useEffect, useRef, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { projectData} from '../assets/data.js'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'


import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const ProjectCard = ({item}) => {


  const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

  return (
      <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="project-card relative w-80 max-sm:w-full rounded-xl p-1 bg-gradient-to-br to-green-950 from-gray-900 backdrop-blur-md text-gray-800 overflow-hidden inset-shadow-sm inset-shadow-gray-400 shadow-lg cursor-pointer"
    >
      {/* Glowing mouse effect */}
      <div
        className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-[#B6F500] via-green-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ top: position.y - 120, left: position.x - 120 }}
      />
      
      {/* Card Content */}

      <a href={item.url}><div className={`absolute p-2 right-5 bottom-13 rounded-full border-2 border-gray-400 text-gray-400 cursor-pointer hover:border-[#B6F500] hover:text-[#B6F500] z-20`}>
        <MdArrowOutward className='text-[20px]'/></div></a>
      <div className="relative z-10 bg-gray-900/75 p-3 h-full w-full rounded-[11px] flex flex-col items-center justify-center text-center">
        <img src={item.image} alt="Profile Avatar" className="shadow-md my-4 rounded-md" />
        <h2 className="text-2xl font-bold text-white mb-1">{item.name}</h2>
        <p className="text-sm text-slate-400 mb-4 px-4">{item.description}</p>
      </div>
    </div>
  );
};


const BrandingCard = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Select only children inside this container
    const cards = gsap.utils.toArray(".project-card");

    gsap.from(cards, {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef }); // Ensure DOM is ready and scoped

  return (
    <div
      ref={containerRef}
      id="projects"
      className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-14"
    >
      {projectData.map((item, index) => (
        <ProjectCard key={index} item={item} />
      ))}
    </div>
  );
};


export default BrandingCard;
