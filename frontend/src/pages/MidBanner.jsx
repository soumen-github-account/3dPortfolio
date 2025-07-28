// MidBanner.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { LuSendHorizontal } from "react-icons/lu";
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const MidBanner = () => {

  return (
    <>
      {/* <div
        className='min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center md:px-6 px-3'
      >
        <div className="relative lg:w-[70vw] w-full md:h-[450px] h-[400px] px-5 flex items-center gap-y-20 justify-center bg-gradient-to-br to-[#B6F500] from-lime-400 opacity-78 rounded-3xl overflow-hidden shadow-xl">


          <div className="absolute inset-0 overflow-hidden z-0">
            {[...Array(30)].map((_, i) => (
              <span
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  opacity: Math.random() * 0.6 + 0.2,
                }}
              ></span>
            ))}
          </div>

          <div className="z-10 text-start">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Let's create great things together
            </h1>
            <p className="text-[20px] md:text-base text-black mb-6">
              Drop your email and I’ll contact you soon ;)
            </p>
            <div className="relative flex justify-center rounded-full bg-gradient-to-br from-gray-200 to-gray-300">
              <input
                type="email"
                placeholder="email here..."
                className="w-[300px] md:w-[400px] px-2 py-4 text-black placeholder-gray-600 focus:outline-none shadow-md"
              />
              <button className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-2xl text-black font-bold">
                <LuSendHorizontal />
              </button>
            </div>
          </div>
        </div>
      </div> */}

<div id='contact' class="max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#8ab701] to-black rounded-2xl p-10 text-white">
    <p class="px-6 py-2 rounded-full text-sm border border-[#fff] bg-gradient-to-r from-[#fff] to-[#f2eae8] bg-clip-text text-transparent">
        Commnunity & Support
    </p>
    <h1 class="text-4xl md:text-5xl md:leading-[60px] font-medium max-w-2xl mt-5">
        Let's create great things together
        <span class="bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent"> in the Community</span>
    </h1>
    <p class="text-white text-sm mt-2">Drop your email and I’ll contact you soon ;)</p>
    {/* <button class="px-12 py-2.5 mt-6 rounded-full text-sm border border-[#54487B] bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent">
        Get Started
    </button> */}
    <div className="relative flex justify-center rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mt-4">
              <input
                type="email"
                placeholder="email here..."
                className="w-[300px] md:w-[400px] px-3 py-2 text-black placeholder-gray-600 focus:outline-none shadow-md"
              />
              <button className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-2xl text-black font-bold">
                <LuSendHorizontal />
              </button>
            </div>
</div>
    </>
  );
};

export default MidBanner;


