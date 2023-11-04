import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-[url('/signInBg.jpeg')] flex justify-center items-center h-screen">
      <SignIn />
    </div>
  )
}