import React from 'react'
import Dashboard1 from "../public/dashboard-img.png"
// import Dashboard2 from "../public/dashboard-img-2.png"
import Image from 'next/image'
import { useState, useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect';


import { useRouter } from 'next/router';
function Hero() {
  
const router=useRouter();
  return (
    <div
      className="bg-[url('/hero-bg-1.jpeg')]  pb-10 lg:mt-[-107px] pt-10 lg:pt-0 overflow-x-hidden"
      id="cta_form-03-690461"
    >
      <div className="flex lg:flex-row flex-col items-center lg:gap-14 lg:justify-end lg:pt-44">
        <div className="text-white lg:w-[40%] px-4 lg:px-0">
          <h1 className="text-[36px] font-[700] lg:text-[72px] leading-[54px] lg:leading-[93.6px]">
            PostPilot :  Your automated {" "}
          </h1>

          <h1

            className="lg:text-[72px] text-[36px] font-[700] leading-[54px] lg:leading-[93.6px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          >
            <Typewriter

              options={{
                strings: ["Ghostwriter", "Social Media Handler"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="font-[500] text-[20px] leading-[30px] py-12">
            AI ghostwriting is changing how we make content. It can write and share content on your social media for a more professional online image.
          </p>
          <div className="pb-8 pl-8 lg:pb-0 lg:pl-0">
            <button
              className="aai-gradient-outline-btn w-[90%] lg:w-[180px]"
            onClick={() => {
             router.push("sign-in")
            }}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="px-5 lg:px-0">
          <Image src={Dashboard1} height={700} width={700} alt='Dashboard' />
          
        </div>
      </div>
    
    </div>
  )
}

export default Hero