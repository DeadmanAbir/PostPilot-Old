import { SignIn } from "@clerk/nextjs";
import Head from "next/head";
export default function Page() {
  return (
    <div className="bg-[url('/signInBg.jpeg')] flex justify-center items-center h-screen">
       <Head>
        <title>Sign In</title>
      </Head>
      <SignIn />
    </div>
  )
}