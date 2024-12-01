"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Player from 'lottie-react'; // Ensure that 'Player' is imported correctly from 'lottie-react'
import introanimation from '../public/introanimation.json'

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center dark:bg-black/80 absolute">
        <p className='text-lg text-slate-600'>Loading portfolio. Please wait...</p>
      </div>
    )
  }

  return (
    <section
      ref={ref}
      id="home"
      className="h-screen flex items-center justify-center text-center sm:mb-0 max-w-[60rem] scroll-mt-[100rem]"
    >
      <div className="flex flex-col items-center ">
        {/* Lottie Animation */}
        <div className=" -top-4">
          <Player
            autoplay
            loop
            animationData={introanimation}
            style={{
              width: '350px',
              height: '350px',
            }}
          />
        </div>



        <motion.h1
          className="mb-10 mt-2 px-2 text-2xl bg-gradient-to-r from-blue-500 via-violet-500 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <TypewriterEffect
            words={[
              { text: "Hello, I'm Rahul.", className: "font-bold" },
              { text: "I'm a", className: "" },
              { text: "full-stack developer", className: "font-bold" },
            ]}
          />
        </motion.h1>

        <motion.div
          className="flex flex-col gap-3 justify-center items-center px-4 text-lg font-medium sm:flex-row"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Download Resume Button */}
          <a
            className="flex gap-2 items-center py-3 px-7 bg-gray-50 rounded-full transition cursor-pointer outline-none active:scale-95 group borderBlack dark:bg-white/10"
            href="/resume.pdf"
            target="_blank"
          >
            Download Resume{" "}
            <HiDownload className="opacity-60 transition group-hover:opacity-95 group-hover:scale-105 group-hover:translate-y-1" />
          </a>

          {/* Contact Link */}
          <Link
            href="#contact"
            className="flex gap-2 items-center py-3 px-7 dark:text-white bg-transparent border border-gray-300 hover:opacity-80 rounded-full transition outline-none active:scale-95 group dark:hover:bg-gray-950"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 transition group-hover:opacity-95 group-hover:scale-105 group-hover:translate-x-1" />
          </Link>

          {/* Social Links */}
          <div className="flex gap-3 w-full md:w-fit justify-center">
            <a
              className="flex gap-2 items-center p-4 text-gray-700 bg-white rounded-full transition cursor-pointer active:scale-105 group borderBlack dark:bg-white/10 dark:text-white/60 hover:text-gray-950"
              href="https://www.linkedin.com/in/rahul-hanje-b31812252/"
              target="_blank"
            >
              <BsLinkedin className="transition group-hover:scale-110 " />
            </a>

            <a
              className="flex gap-2 items-center p-4 text-gray-700 bg-white rounded-full transition cursor-pointer active:scale-105 group text-[1.35rem] borderBlack dark:bg-white/10 dark:text-white/60 hover:text-gray-950"
              href="https://github.com/Rahulhanje"
              target="_blank"
            >
              <FaGithubSquare className="transition group-hover:scale-110 " />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function GridBackground({ children }: { children: ReactNode }) {
  return (
    <div className="h-[60rem] w-full relative flex items-center justify-center dark:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[radial-gradient(circle,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[length:20px_20px]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
