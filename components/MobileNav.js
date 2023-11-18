
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Image from "next/image";
function MobileNav({ setMobileNav }) {
    const { userId } = useAuth();
    const router = useRouter();
    const pathname = usePathname()

    return (
        <div className="w-[80%] lg:hidden visible h-screen bg-[#04091E] absolute z-50 mt-[-33%]">
            <div className="text-white">
                <Link href="/">
                    <Image
                        src="/PostPilot.png"
                        alt=""
                        height={76}
                        width={76}
                        className="cursor-pointer"
                    />
                </Link>
                <div className="text-[18px] font-[400] leading-normal py-10 px-6 flex flex-col gap-5">
                    <Link href="/" onClick={() => {
                        setMobileNav(false);
                    }}>Home</Link>
                    <hr />
                    <Link href="/projectsection">Dashboard </Link>
                    <hr />
                    <p onClick={() => {
                        if (pathname != "/") {
                            window.open("https://youtu.be/XU2uxFrCKj4?si=j2hx8OwK0iisZ969", "_blank");
                        } else {
                            const navbar = document.getElementById("demo_section"); // Assuming 'navbar' is the id of your navbar element
                            const navbarPosition = navbar.offsetTop;

                            // Scroll to the navbar position
                            window.scrollTo({
                                top: navbarPosition,
                                behavior: "smooth", // Smooth scrolling animation
                            });
                        }
                        setMobileNav(false);
                    }}>Demo</p>
                    <hr />

                    <Link href="/contactus" onClick={() => {
                        setMobileNav(false);
                    }}>Contact</Link>
                    <hr />
                </div>
                {userId ? (
                    <div className="ml-5" >
                    <UserButton afterSignOutUrl='/'  />
                    </div>

                ) : (
                    <div className="flex flex-col gap-8">
                        {" "}
                        <button
                            className="text-[20px] font-[300] underline underline-offset-8 "
                            onClick={() => {
                                router.push("/sign-in")
                                setMobileNav(false);
                            }}
                        >
                            Login
                        </button>

                        <button
                            className="aai-gradient-outline-btn mx-16"
                            onClick={() => {
                                router.push("/sign-up");
                                setMobileNav(false);
                            }}
                        >
                            Signup
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default MobileNav