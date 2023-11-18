import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useAuth } from '@clerk/nextjs';
function Demo() {
const router=useRouter();
const {userId}=useAuth();
  return (
    <div
      className="bg-[url('/service-1.jpeg')] text-white"
      id="demo_section"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center lg:px-0 px-6 py-20 lg:py-28">
        <div className="">
        
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XU2uxFrCKj4?si=cn4imRIzHnC0M8_W"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-[210px] lg:w-[560px] lg:h-[315px]  rounded-lg"
          ></iframe>
        </div>
        <div className="lg:w-[35%] flex flex-col gap-6 lg:gap-8">
          <h1 className="lg:text-[48px] text-[36px] font-[700] leading-[56px]">
            Create Content in Single Click with AI Power
          </h1>
          <p className="lg:text-[18px] text-[16px] font-[400] leading-[28px]">
            Give PostPilot a few descriptions and we will automatically post AI generated news content everyday.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCircleCheck} />
              <p className="text-[18px] font-[400] leading-[27px]">
                Daily Posting
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCircleCheck} />

              <p>New Content Everyday</p>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCircleCheck} />

              <p>GPT Powered Posts</p>
            </div>
          </div>
          <button
            className="aai-gradient-outline-btn w-44"
            onClick={() => {
              if(userId){
                router.push("projectsection")
              }else{
             router.push("/sign-in")

              }
            }}
          >
            
              Get Started
       
          </button>
        </div>
      </div>
    </div>

  )
}

export default Demo