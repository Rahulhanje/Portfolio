// import { Socials } from "@/constants";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          /> */}

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            <p>&lt;Rahul/&gt;</p>

          </span>
        </a>

        <div className="w-[500px]  h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto    text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text"
            >
              Contact
            </a>
            <a
              href="#education"
              className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text"
            >
              Education
            </a>

          </div>
        </div>

        {/* <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} 
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;