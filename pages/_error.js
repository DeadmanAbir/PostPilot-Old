import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
function ErrorPage() {
    const router = useRouter();
    return (
        <div className="bg-[#04091E]">
            <Head>
                <title>404-Error</title>

            </Head>
            <div className="py-20 flex flex-col justify-center items-center text-white text-center">
                <Image src="/error-vect.svg" width={500}
                    height={500} alt="Error Pic" />
                <h1 className="text-[48px] font-[700] leading-[56px] py-12">
                    Oops! Page not found.
                </h1>
                <div className="flex lg:flex-row flex-col gap-10">
                    <button className="aai-gradient-outline-btn" onClick={() => {
                        router.push("/");
                    }}>Back to Home</button>
                    <button className="aai-gradient-outline-btn" onClick={() => {
                        router.push("/contactus");
                    }}>Contact Us</button>
                </div>
            </div>
        </div>
    );

}

export default ErrorPage