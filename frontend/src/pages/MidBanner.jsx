// MidBanner.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { LuSendHorizontal } from "react-icons/lu";
import Footer from './Footer';
import toast from 'react-hot-toast';
import { AiOutlineLoading } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

const MidBanner = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) =>{
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "f1e1ecd0-c81e-4c3d-9583-4c74677ddbb0");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res)=>res.json());

    if(res.success){
      setEmail('');
      setLoading(false);
      toast.success("Submitted");
    }

  }
  return (
    <>
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
        <form onSubmit={onSubmit} className="relative flex justify-center rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mt-4">
          <input
            type="email" name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="email here..."
            className="w-[300px] md:w-[400px] px-3 py-2 text-black placeholder-gray-600 focus:outline-none shadow-md"
            required
          />
          <button type='submit' className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-2xl text-black font-bold">
            {
              loading ? <AiOutlineLoading className='animate-spin ease-in duration-75' /> : <LuSendHorizontal />
            }
          </button>
        </form>
    </div>
    </>
  );
};

export default MidBanner;


