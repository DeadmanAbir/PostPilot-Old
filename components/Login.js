import {useState} from 'react'
import { RxCross1 } from "react-icons/rx";
import { useSetRecoilState } from 'recoil';
import { checkState } from '../Store/Variables';
import { useRouter } from 'next/router'

function Login() {
  const setLogin = useSetRecoilState(checkState);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
const navigate=useRouter();
  async function signIn(event) {
     event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLogin({
        isLoginOpen: false,
        isSignUpOpen: false
      })
      navigate.push("/projectsection")

    } catch (e) {
      console.log(e)
    }
  }

  async function google() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider)
        .then(async () => {
          setLogin({
            isLoginOpen: false,
            isSignUpOpen: false
          })
          
          navigate.push("/projectsection")
        }).catch((err) => {
          console.log("internal server error", err)
        })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className=" flex items-center text-center text-white absolute lg:px-0 px-4 top-32 lg:left-[35%] z-10">
    <div className=" border-2 border-white bg-[#080E26] rounded-3xl flex flex-col relative">
      <div className="lg:px-14 px-4">
        <RxCross1
          className="text-[25px] text-end absolute right-5 top-4 cursor-pointer"
          onClick={() => {
            setLogin({
              isLoginOpen: false,
              isSignUpOpen: false,
            });
          }}
        />
        <div>
          <h1 className="text-[36px] font-[600] leading-[48px] text-center text-white pt-14 lg:pt-10">
            Sign in for an account
          </h1>
          <p className="text-[18px] font-[400] leading-[27px] text-gray-400 text-center ">
            Send, spend and save smarter
          </p>
        </div>
        <div
          className="border-2 border-gray-500 my-6 rounded-[20px] flex justify-center gap-4 items-center py-3"
          onClick={google}
        >
          <div>
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1258 11.2139C21.1258 10.4225 21.0603 9.84497 20.9185 9.24609H11.6973V12.818H17.1099C17.0008 13.7057 16.4115 15.0425 15.102 15.9408L15.0836 16.0603L17.9992 18.2738L18.2012 18.2936C20.0563 16.6145 21.1258 14.1441 21.1258 11.2139"
                fill="#4285F4"
              ></path>
              <path
                d="M11.6976 20.6248C14.3494 20.6248 16.5755 19.7692 18.2016 18.2934L15.1024 15.9405C14.273 16.5073 13.1599 16.903 11.6976 16.903C9.10043 16.903 6.89609 15.224 6.11031 12.9033L5.99513 12.9129L2.96347 15.2122L2.92383 15.3202C4.53888 18.4644 7.85634 20.6248 11.6976 20.6248Z"
                fill="#34A853"
              ></path>
              <path
                d="M6.10908 12.9034C5.90174 12.3045 5.78175 11.6628 5.78175 10.9997C5.78175 10.3366 5.90174 9.695 6.09817 9.09612L6.09268 8.96857L3.02303 6.63232L2.92259 6.67914C2.25695 7.98388 1.875 9.44905 1.875 10.9997C1.875 12.5504 2.25695 14.0155 2.92259 15.3203L6.10908 12.9034"
                fill="#FBBC05"
              ></path>
              <path
                d="M11.6977 5.09664C13.5419 5.09664 14.7859 5.87733 15.4953 6.52974L18.2671 3.8775C16.5648 2.32681 14.3494 1.375 11.6977 1.375C7.85637 1.375 4.53889 3.53526 2.92383 6.6794L6.09942 9.09638C6.89612 6.77569 9.10047 5.09664 11.6977 5.09664"
                fill="#EB4335"
              ></path>
            </svg>
          </div>
          <div>Sign Up with Google</div>
        </div>
        <div className="flex justify-center text-white">
          <hr />
          <p className="text-[20px] font-[400] text-gray-500">
            Or with email
          </p>
          <hr />
        </div>
        <form
          action=""
          className="flex flex-col gap-7 text-gray-500 py-6"
          onSubmit={signIn}
        >
          <div className="flex flex-col gap-8">
            <input
              type="Username or email"
              placeholder="Email"
              name="email"
              className="bg-[#080E26] border-2 border-white py-3 lg:py-4 px-2 rounded-[20px]"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="bg-[#080E26] border-2 border-white py-3 lg:py-4 px-2 rounded-[20px]"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="pt-10 aai-gradient-outline-btn text-[16px] "
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p className="pb-10 pt-6 lg:px-0 px-6 text-gray-500">
          Already have an account?{" "}
          <span
            className="underline underline-offset-8 text-white text-[16px] cursor-pointer hover:text-orange-400"
            onClick={() => {
              setLogin({
                isLoginOpen: false,
                isSignUpOpen: true,
              });
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  </div>
);

  
}

export default Login