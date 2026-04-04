import React from 'react'
import { FaCode, FaDatabase, FaPalette, FaTools } from 'react-icons/fa';
import SkillsSection from '../components/SkillsSection';
import html from '../assets/port/html.png'
import css from '../assets/port/css.png'
import javascript from '../assets/port/javascript.png'
import mysql from '../assets/port/mysql.png'
import git from '../assets/port/git.png'
import github from '../assets/port/github2.png'
import django from '../assets/port/django.png'
import react from '../assets/port/react.png'
import node from '../assets/port/node.png'
import express from '../assets/port/express.png'
import mongodb from '../assets/port/mongodb.png'


const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-white font-medium">{name}</span>
      <span className="text-gray-400 text-sm">{level}%</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-2">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const TechStack = () => {
    const companyLogos1 = [
      html, css, javascript, git,github, mysql, django
    ];

    const companyLogos2 = [
      github, mysql, react, node, express, mongodb, 
    ];

    const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };
  return (
    <div className='min-h-[100vh] relative bg-[#0d0e10] py-10'>
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-gradient-to-r from-blue-700 via-emerald-700 to-pink-500 rounded-full blur-[180px] opacity-70 z-0" />
      {/* <div className='bg-gradient-to-b from-[#415015] to-[#3d4720] w-70 h-70 rounded-full blur-2xl absolute top-35 left-40' /> */}
      
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold text-gray-100">
          Technical <span className="text-[#B6F500]">Skills</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Comprehensive expertise across development technologies and methodologies
        </p>

        {/* Example Skills Grid */}
        {/* <div className="grid grid-cols-4 gap-6 mt-10 px-10">
          {["MySQL", "Git", "GitHub", "HTML", "CSS", "Python", "Django", "Docker"].map((skill, i) => (
            <div key={i} className="p-4 bg-[#1a1a1a] rounded-xl text-center text-white shadow-md hover:shadow-lg transition">
              {skill}
            </div>
          ))}
        </div> */}
        <style>{`
                .marquee-inner1 {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }

                .marquee-inner2 {
                    animation: marqueeScroll2 linear infinite;
                }

                @keyframes marqueeScroll2 {
                    0% {
                        transform: translateX(-50%);
                    }

                    100% {
                        transform: translateX(0%);
                    }
                }
            `}</style>

        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-5">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-transparent" />
                <div className="marquee-inner1 flex will-change-transform min-w-[200%]" style={{ animationDuration: "15s" }}>
                    <div className="flex">
                        {[...companyLogos1, ...companyLogos1].map((company, index) => (
                            <img key={index} src={company}
                                alt={company} className="w-17 max-sm:w-15 h-full object-cover mx-6" draggable={false} />
                        ))}
                    </div>
                </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-transparent" />
        </div>

        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-5">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-transparent to-transparent" />
                <div className="marquee-inner2 flex will-change-transform min-w-[200%]" style={{ animationDuration: "15s" }}>
                    <div className="flex">
                        {[...companyLogos2, ...companyLogos2].map((company, index) => (
                            <img key={index} src={company}
                                alt={company} className="w-17 max-sm:w-15 h-full object-cover mx-6" draggable={false} />
                        ))}
                    </div>
                </div>
              <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-transparent to-transparent" />
        </div>
      </div>
      
      <SkillsSection />

      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-gradient-to-r from-blue-700 via-emerald-700 to-pink-500 rounded-full blur-[180px] opacity-70 z-0" />

    </div>
  )
}

export default TechStack
