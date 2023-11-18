import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { checkForUserAndUpdate } from '../Utils/call';
import { useAuth } from '@clerk/nextjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SelectApp({ setProject, userId, data }) {

  async function handleLinkedinClick() {
    if (data.length < 2) {
      try{
        await checkForUserAndUpdate({ userId });
      window.location.href = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/linkedin/authorize?userId=${userId}`;

      }catch(e){
        console.log(e.message);
        toast.error("Internal Error!");
      }
    } else {
      // alert("Can't add more than 2 projects")
      toast.error("Can't add more than 2 projects");

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
        <div className="py-2 w-[50%] lg:w-full lg:py-6 border border-gray-500 rounded-xl lg:rounded-3xl mb-10 mx-20" onClick={handleLinkedinClick}>
          <button >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-600 text-[22px] lg:text-[50px]" />

          </button>
         
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
       
      </div>
    </div >
  );
}

export default SelectApp