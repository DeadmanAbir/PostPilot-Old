import { faLinkedin, faDiscord, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const Footer = () => {
    return (
      <div className="bg-[url('/footer-bg.jpeg')] text-white lg:pt-44">
        <div className="flex flex-col lg:w-[70%] mx-auto">
          <div className="flex lg:flex-row flex-col lg:items-center lg:px-0 px-6 lg:justify-evenly">
            <div className="flex flex-col gap-6 lg:w-[30%]">
             
              <Image
                src="/PostPilot.png"
                alt=""
                width={100}
                height={100}
                className="cursor-pointer"
              />
             
              <p className="text-[18px] font-[400] leading-[27px]">
                Posting AI Generated News Content Everyday with Ease.
              </p>
              <div className="flex gap-5">
                <div className="bg-gray-800 rounded-full w-10 h-10 flex justify-center items-center">
                  <a href="https://www.linkedin.com/in/abir-dutta-408759223/" target="_blank" rel="noopener noreferrer" className=" text-gray-400">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
                <div className="bg-gray-800 rounded-full w-10 h-10 flex justify-center items-center">
                  <a href="https://twitter.com/ItsDutta99" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className=" text-gray-400" />
                  </a>
                </div>
                <div className="bg-gray-800 rounded-full w-10 h-10 flex justify-center items-center">
                  <a href="http://discordapp.com/users/929439553264156742" target="_blank" rel="noopener noreferrer" className=" text-gray-400">
                    <FontAwesomeIcon icon={faDiscord} />
                  </a>
                </div>
                <div className="bg-gray-800 rounded-full w-10 h-10 flex justify-center items-center">
                  <a href="https://github.com/DeadmanAbir/PostPilot" target="_blank" rel="noopener noreferrer" className=" text-gray-400">
                  <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
                
              </div>
            </div>
            
            <div className="flex flex-col my-8 lg:my-0 gap-5">
              <h1 className="text-[24px] font-[700] leading-[34px]">Socials</h1>
              <a className="text-[16px] font-[400] leading-[24px] hover:text-orange-400" href="http://discordapp.com/users/929439553264156742" target="_blank" rel="noopener noreferrer">
               Discord
              </a>
              <a className="text-[16px] font-[400] leading-[24px] hover:text-orange-400" href="https://www.linkedin.com/in/abir-dutta-408759223/" target="_blank" rel="noopener noreferrer">
                Linkedln
              </a>
              <a className="text-[16px] font-[400] leading-[24px] hover:text-orange-400" href="https://twitter.com/ItsDutta99" target="_blank" rel="noopener noreferrer">
               X(Formerly Twitter)
              </a>
              <a className="text-[16px] font-[400] leading-[24px] hover:text-orange-400" href="https://youtu.be/XU2uxFrCKj4?si=j2hx8OwK0iisZ969" target="_blank" rel="noopener noreferrer">
                Demo Video
              </a>
              <a className="text-[16px] font-[400] leading-[24px] hover:text-orange-400" href="https://github.com/DeadmanAbir/PostPilot" target="_blank">
                Github
              </a>
            </div>
          </div>
          <div className="text-center lg:py-20 py-10">
            <hr className="py-2 text-gray-600" />
            <p className="text-[18px] font-[400] leading-[28px]">
              Copyright @2023 PostPilot inc.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;