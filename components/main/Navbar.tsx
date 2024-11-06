'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Socials } from '@/constants';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="flex">
          <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              <p>&lt;Rahul/&gt;</p>
            </span>
          </a>
          <Link href={"https://drive.google.com/file/d/1cyQbmoy75Acfh3VlueSPGpKSCK_DHlIT/view?usp=sharing"} passHref>
            <p className=" text-slate-300 hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text pl-5">Resume</p>
          </Link>
        </div>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text">
              About me
            </a>
            <a href="#education" className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text">
              Education
            </a>
            <a href="#skills" className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text">
              Contact
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-md hover:bg-[#03001440] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 absolute top-[65px] left-0 w-full px-10 py-5 z-40">
          <div className="flex flex-col gap-4 text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text">
              About me
            </a>
            <a href="#education" className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text">
              Education
            </a>
            <a href="#skills" className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-white hover:text-transparent hover:bg-clip-text">
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;