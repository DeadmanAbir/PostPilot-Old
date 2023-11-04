import React, { useState , useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { checkState } from '../Store/Variables';
import { userName } from '../Store/Getters';
import { userProfileDetails } from '../Store/Variables';
import { useRouter } from 'next/router';
import { auth } from '../Firebase/Firebase';
import { RxCross1 } from "react-icons/rx";
import { signOut } from 'firebase/auth';
import dynamic from 'next/dynamic';
import { connectedCredentials } from '../Store/Variables';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuth as Auth, UserButton, currentUser, auth as serverAuth } from "@clerk/nextjs";


function Navbar() {
  const {userId}=Auth();
  console.log(userId)
  const setUserCredentials = useSetRecoilState(connectedCredentials);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
    // console.log(auth);
      if (user) {
        const id = await auth.currentUser.getIdToken();
        // cookies().set('uid', id, { secure: true })
        setUserCredentials({
          name: user.email,
          token: id
        })
      } else {

        setUserCredentials({
          name: null,
          token: null
        })
      }
    });

  }, []);





  const [mobileNav, setMobileNav] = useState(false);
  const setLogin = useSetRecoilState(checkState);
  const getUserName = useRecoilValue(userName);
  const setUserProfile = useSetRecoilState(userProfileDetails);
  const navigate=useRouter();
  const [isToggleOn, setToggle] = useState(false);
  const photoUrl = auth.currentUser && auth.currentUser.photoURL? auth.currentUser.photoURL: "/profile.png";
  return (
    <>
      <div className="bg-[#080E26] sticky top-0 z-20 px-4">
        <div className="text-white lg:flex lg:justify-between lg:items-center lg:w-[65%] py-4 lg:mx-auto">
          <div className="flex justify-between items-center overflow-hidden">
            <Link href="/">
              <Image className="h-[76px] w-[75px] lg:h-[75px] lg:w-[85px] cursor-pointer" src="/PostPilot.png" alt="" width={76} height={76} />
            </Link>
            {mobileNav ? (
              <i className="fa-solid fa-xmark lg:hidden visible text-[24px]" onClick={() => {
                setMobileNav(false);
              }}></i>

            ) : (
              <i className="fa-solid fa-bars lg:hidden visible text-[24px]" onClick={() => {
                setMobileNav(true);
              }}></i>

            )}
          </div>
          <div className="lg:flex gap-6 px-9 text-[16px] font-[500] lg:visible hidden">
            <Link href="/">Home</Link>
            <Link className=" cursor-pointer" href="sign-in"  >About Us</Link>
            <p
              className=" cursor-pointer"
              onClick={() => {
                const navbar = document.getElementById("demo_section"); // Assuming 'navbar' is the id of your navbar element
                const navbarPosition = navbar.offsetTop;

                // Scroll to the navbar position
                window.scrollTo({
                  top: navbarPosition,
                  behavior: "smooth", // Smooth scrolling animation
                });
              }}
            >
              Demo
            </p>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contactus">Contact</Link>
          </div>
          <div className="lg:flex flex-row gap-5 lg:visible hidden">
          {userId? (
              // <div className="lg:flex lg:justify-center lg:items-center lg:visible hidden cursor-pointer">
              //   <div className="bg-[orange] w-10 h-10 rounded-full" onClick={() => {
              //     setToggle(true)
              //   }}>
              //     <Image
              //       src={photoUrl}
              //       height={200}
              //       width={200}
              //       className="rounded-full"
              //       alt=""
              //     />
              //   </div>
              // </div>
              <UserButton afterSignOutUrl='/' />
            ) : (
              <>
                {" "}
                <button
                  className="text-[20px] font-[300] underline underline-offset-8"
                  onClick={() => {
                    // setLogin({
                    //   isSignUpOpen: false,
                    //   isLoginOpen: true,
                    // });
                    navigate.push("/sign-in")
                  }}
                >
                  Login
                </button>

                <button
                  className="aai-gradient-outline-btn"
                  onClick={() => {
                    // setLogin({
                    //   isLoginOpen: false,
                    //   isSignUpOpen: true,
                    // });
                    navigate.push("/sign-up")
                  }}
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
        {isToggleOn ? (<Toogle setToggle={setToggle} />) : (null)}

      </div>

    </>
  )
}

function Toogle({ setToggle }) {
  const photoUrl = auth.currentUser && auth.currentUser.photoURL? auth.currentUser.photoURL: "/profile.png";
  const navigate = useRouter();
  const setUserProfile = useSetRecoilState(userProfileDetails);
  async function logout() {
    try {
      const response = await signOut(auth);
      setUserProfile({
        isProfile: false
      })
      return navigate.push("/");
    } catch (e) {
      console.log(e);
    }
  }
// return(
//   <div className="absolute text-white bg-[#152637] border border-white rounded-2xl lg:mx-0 mx-3 px-10 py-10 top-28 lg:left-[46%]">
      
//       <div className="flex lg:flex-row flex-col gap-8">
    

//       <HankoProfile style={{ '--color': 'blue' }} />
//       <button>logout</button>
//       <RxCross1 className="text-[25px] text-end absolute right-5 top-4 cursor-pointer" onClick={() => {
//           setToggle(false);
//         }} />
        
//         </div>
//         </div>
// )
  return (
    <div className="absolute text-white bg-[#152637] border border-white rounded-2xl lg:mx-0 mx-3 px-10 py-10 top-28 lg:left-[46%]">
      
      <div className="flex lg:flex-row flex-col gap-8">
        <RxCross1 className="text-[25px] text-end absolute right-5 top-4 cursor-pointer" onClick={() => {
          setToggle(false);
        }} />
        <div className="bg-[blue] w-10 h-10 rounded-full" >
          <Image
            src={photoUrl}
            className="rounded-full"
            height={200}
            width={200}
            alt=""
          />
        </div>
        <div>
          <div></div>
          <div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[28px] lg:text-[32px] font-[400] leading-[28px]">
                {auth.currentUser.displayName}
              </h1>
              <p className="text-[18px] lg:text-[22px] font-[400] leading-[16px]">
                {auth.currentUser.email}
              </p>
            </div>
            <div className="my-3">
              <div className="flex gap-3 items-center my-5">
                <i className="fa-solid fa-gear"></i>
                <Link href='/projectsection' onClick={() => setToggle(false)}><p>Dashboard</p></Link>
              </div>
              <div className="flex gap-3 items-center">
                <i className="fa-solid fa-right-from-bracket"></i>
                <p onClick={() => {
                  logout();
                  setToggle(false);
                }}>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Navbar


