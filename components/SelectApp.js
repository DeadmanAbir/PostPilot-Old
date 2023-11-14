import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { checkForUserAndUpdate } from '../Utils/call';
import { useAuth } from '@clerk/nextjs';
function SelectApp({setProject, userId, data}) {

    async function handleLinkedinClick(){
    if(data.length<2){
      await checkForUserAndUpdate({userId});
      window.location.href = `http://localhost:5000/linkedin/authorize?userId=${userId}`;
    }else{
      alert("Can't add more than 2 projects")
    }
      
    };
    
    return (
        <div className="flex  text-center text-white absolute top-[36%] lg:top-[25%] left-[10%] lg:left-[50%] z-10">
          <div className="bg-[#04091E] flex flex-col justify-center items-center lg:px-20 lg:w-[30rem] border border-white rounded-3xl relative text-white">
            <RxCross1
              className="text-[25px] text-end absolute right-5 top-4 cursor-pointer"
              onClick={() => {
                setProject(false);
              }}
            />
    
            <h1 className="text-[32px] lg:mx-0 mx-10 lg:text-[55px] font-[700] leading-[52px] pb-10 pt-20 lg:px-0 px-6">
              Select App
            </h1>
            <div className="py-2 w-[50%] lg:w-full lg:py-6 border border-gray-500 rounded-xl lg:rounded-3xl">
              <button onClick={handleLinkedinClick}>
                <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-600 text-[22px] lg:text-[50px]" />

              </button>
            </div>
            {/* <div className="py-3 w-[50%] lg:w-full lg:py-6 border border-gray-500 rounded-xl lg:rounded-3xl my-10">
              <button onClick={handleTwitterClick}>
                <FontAwesomeIcon icon={faTwitter} className='text-blue-600 trxt-[22px] lg:text-[50px]' />
              </button>
            </div> */}
   
          </div>
        </div >
      );
}

export default SelectApp