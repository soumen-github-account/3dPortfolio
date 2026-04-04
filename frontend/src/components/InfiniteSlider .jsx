import React from 'react';
import './InfiniteSlider.css'; // For animation
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { TbBrandHackerrank } from "react-icons/tb";
import { SiCodechef } from "react-icons/si";
import { LuGithub } from "react-icons/lu";
import { FaAws } from "react-icons/fa";
import { SiHostinger } from "react-icons/si";

const InfiniteSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-6 flex items-center justify-center">
      <div className="slider flex gap-8 animate-slide">
        <SiGeeksforgeeks className="text-white h-16 w-[40px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 text-[10px]"/>
        <SiCodechef className="text-white h-16 w-[40px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 text-[10px]"/>
        <SiLeetcode className="text-white h-16 w-[40px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 text-[10px]"/>
        <TbBrandHackerrank className="text-white h-16 w-[40px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 text-[10px]"/>
        <LuGithub className="text-white h-16 w-[40px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 text-[10px]"/>
        <FaAws className="text-white h-16 w-[40px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 text-[10px]"/>
        <SiHostinger className="text-white h-16 w-[40px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 text-[10px]"/>
      </div>
    </div>
  );
};

export default InfiniteSlider;
