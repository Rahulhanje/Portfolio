"use client";

import React, {useRef } from "react";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { GrResume } from "react-icons/gr";
import { useSectionInView } from "@/lib/hooks";


export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 py-5">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:rahulhanje0.7@gmail.com">
          rahulhanje0.7@gmail.com
        </a>{" "}
      
      </p>
      
            <motion.div
                className="text-center"
                whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                transition={{ duration: 0.75 }}
            >
              

                <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 text-gray-300 font-semibold">
                    <div className="flex flex-col gap-3 md:gap-6 font-poppins">
                        <ContactItem icon={<MdAlternateEmail className="text-orange-500 text-lg" />} label="rahulhanje0.7@gmail.com" />
                        <ContactItem icon={<IoMdCall className="text-green-500 text-lg" />} label="+91-7204169306" />
                        <ContactItem icon={<CiLocationOn className="text-red-700 text-lg" />} label="Belagavi, Karnataka" />
                    </div>
                    
                    <div className="flex flex-col gap-3 md:gap-6 font-poppins">
                        <LinkItem icon={<FaInstagram className="text-pink-500 text-lg" />} href="https://www.instagram.com/rahulhanje07/" label="rahulhanje07" />
                        <LinkItem icon={<FaLinkedin className="text-blue-500 text-lg" />} href="https://www.linkedin.com/in/rahul-hanje-b31812252/" label="Rahul Hanje" />
                        <LinkItem icon={<FaGithub color="white" className="text-black text-lg" />} href="https://github.com/Rahulhanje" label="Rahulhanje" />
                        <div className="sm:hidden">
                            <LinkItem icon={<GrResume color="white" className="text-black text-lg" />} href="https://drive.google.com/file/d/1cyQbmoy75Acfh3VlueSPGpKSCK_DHlIT/view?usp=sharing" label="Resume" />
                        </div>
                    </div>
                </div> 
                <p className="font-semibold pt-5"> Developed by ✨ @Rahul ✨</p>
            </motion.div>
       
    
    </motion.section>
  );
}
const ContactItem = ({ icon, label }: { icon: JSX.Element; label: string }) => (
  <div className="flex items-center justify-center bg-[#1a1a2e] rounded-lg p-3 hover:bg-[#23233d] shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
      {icon}
      <p className="text-sm font-bold ml-2 text-center">{label}</p>
  </div>
);

const LinkItem = ({ icon, href, label }: { icon: JSX.Element; href: string; label: string }) => (
  <Link href={href} passHref legacyBehavior>
      <a target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#1a1a2e] rounded-lg p-3 hover:bg-[#23233d] shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
          {icon}
          <p className="text-sm font-bold ml-2 text-center">{label}</p>
      </a>
  </Link>
);
