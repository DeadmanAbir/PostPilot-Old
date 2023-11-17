import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { RxCross1 } from "react-icons/rx";
import { useAuth } from '@clerk/nextjs';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function dashboard() {
  const searchParams = useSearchParams()
  const providerName = searchParams.get('social')
  const [type, setType] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [name, setName] = useState(null);
  const router = useRouter();
  const { userId } = useAuth();

  async function startAutomation(event) {
    event.preventDefault();
    console.log(type, schedule, name);
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/linkedin/saveCredentials`, {
        name: name,
        newsType: type,
        schedule: schedule
      }, {
        headers: {
          Authorization: `Bearer ${userId}`,
        }
      })

      const post = await axios.post(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/linkedin/instantPost`, {
        name,
        type
      }, {
        headers: {
          Authorization: `Bearer ${userId}`,
        }
      })
      router.push("/projectsection");
      const timeoutId = setTimeout(() => {
        toast.success("New Project Added successfully, and a demo post has benn done from yout account. Please check");

      }, 3000);
    } catch (e) {
      console.log(e.message);
      router.push("/projectsection");
      const timeoutId = setTimeout(() => {
        toast.error("Internal Error");

      }, 3000);
    }



  }

  return (
    <div className=" bg-[url('/signInBg.jpeg')] h-screen lg:gap-20 flex justify-center items-center">
      <Head>
        <title>Fill Details</title>
      </Head>
      <Image src="/ai-ills.svg" width={600} height={600} alt="" className="lg:block hidden" />
      <form className="bg-[#04091E] mx-4 lg:mx-0 py-5 px-4 text-center lg:px-9 text-white lg:w-[35rem] rounded-2xl border border-white relative" onSubmit={startAutomation}>
        {/* <RxCross1 className="text-[25px] text-end absolute right-5 top-4" /> */}

        <div>
          <h1 className="text-[32px] font-[700] leading-[28px] py-12">
            {providerName} Automation Dashboard
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-8 lg:mt-0 mt-5">
            <label
              htmlFor="schedule"
              className="text-[28px] font-[400] leading-[16px] px-4"
            >
              News Category :
            </label>
            <select
              className="px-16 bg-[#0E1327] border border-white py-3 text-[20px] rounded-2xl"
              id="schedule"
              required
              onChange={(e) => {
                setType(e.target.value)
              }}
            >
              <option >Select...</option>
              <option>Technology</option>
              <option>Startups</option>
              <option>Funding</option>
            </select>
          </div>
          <div className="mb-12 flex flex-col lg:mt-0 mt-5">
            <label
              htmlFor="catagory"
              className="text-[28px] font-[400] leading-[16px] px-4 py-10"
            >
              Schedule :
            </label>
            <select
              className="px-16 bg-[#0E1327] border border-white py-3 text-[20px] rounded-2xl"
              required
              id="catagory"
              onChange={(e) => {
                setSchedule(e.target.value)
              }}
            >
              <option >Select...</option>
              <option >Daily</option>

            </select>
          </div>
          <div className="flex lg:flex-row flex-col gap-2">
            <input
              type="text"
              placeholder="Name"

              className="bg-[#080E26] border border-white py-3 lg:py-4 px-2 rounded-2xl"
              required
              onChange={(e) => {
                setName(e.target.value)
              }}
            />

          </div>

          <button type='submit' className="aai-gradient-outline-btn">Start Automation</button>
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
      </form>
    </div>
  );



}

export default dashboard