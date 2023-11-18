import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { RxCross1 } from "react-icons/rx";
import { usePathname } from 'next/navigation'
import { useAuth as Auth, UserButton, currentUser, auth as serverAuth } from "@clerk/nextjs";
import MobileNav from './MobileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
FontAwesomeIcon
function Navbar() {
  const { userId } = Auth();
  console.log(userId)

  const pathname = usePathname()




  const[mobileNav, setMobileNav] = useState(true);
 
  const navigate = useRouter();
  return (
    <>
      <div className="bg-[#080E26] sticky top-0 z-20 px-4">
        <div className="text-white lg:flex lg:justify-between lg:items-center lg:w-[65%] py-4 lg:mx-auto">
          <div className="flex justify-between items-center overflow-hidden">
            <Link href="/">
              <Image className="h-[76px] w-[75px] lg:h-[75px] lg:w-[85px] cursor-pointer" src="/PostPilot.png" alt="" width={76} height={76} />
            </Link>
            {mobileNav ? (
              <div className=' lg:hidden visible  text-[24px]'>
              
              <FontAwesomeIcon icon={faXmark} style={{color: "white"}}  onClick={() => {
                setMobileNav(false);
                }}/>
                </div>
              

            ) : (
           
<div className='lg:hidden visible text-[24px]'>
              <FontAwesomeIcon icon={faBars}    onClick={() => {
                 setMobileNav(true);
                 }} />
                 </div>
            )}
          </div>
          <div className="lg:flex gap-6 px-9 text-[16px] font-[500] lg:visible hidden">
            <Link href="/">Home</Link>
            <Link className=" cursor-pointer" href="/projectsection"  >Dashboard</Link>
            <p
              className=" cursor-pointer"
              target="_blank"
              onClick={() => {
                if (pathname != "/") {
                  window.open("https://www.youtube.com/", "_blank");
                } else {
                  const navbar = document.getElementById("demo_section"); // Assuming 'navbar' is the id of your navbar element
                  const navbarPosition = navbar.offsetTop;

                  // Scroll to the navbar position
                  window.scrollTo({
                    top: navbarPosition,
                    behavior: "smooth", // Smooth scrolling animation
                  });
                }

              }}
            >
              Demo
            </p>
            {/* <Link href="/pricing">Pricing</Link> */}
            <Link href="/contactus">Contact</Link>
          </div>
          <div className="lg:flex flex-row gap-5 lg:visible hidden">
            {userId ? (

              <UserButton afterSignOutUrl='/' />
            ) : (
              <>
                {" "}
                <button
                  className="text-[20px] font-[300] underline underline-offset-8"
                  onClick={() => {
                   
                    navigate.push("/sign-in")
                  }}
                >
                  Login
                </button>

                <button
                  className="aai-gradient-outline-btn"
                  onClick={() => {
                   
                    navigate.push("/sign-up")
                  }}
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>

      </div>
      {mobileNav ? (
        <MobileNav  setMobileNav={setMobileNav}/>

      ) : (null)}

    </>
  )
}




export default Navbar


