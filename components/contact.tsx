"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { GrResume } from "react-icons/gr";
import { useSectionInView } from "@/lib/hooks";
import Player from "lottie-react";
import contact from "../public/contact.json";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full px-4 text-center"
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
      <p className="text-gray-700 dark:text-white/80 py-5 text-sm sm:text-base">
            Please contact me directly at{" "}
            <a
              className="underline text-blue-500 hover:text-blue-700 transition"
              href="mailto:rahulhanje0.7@gmail.com"
            >
              rahulhanje0.7@gmail.com
            </a>
          </p>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-x-32 w-full">
        {/* Lottie Animation */}
        <div className="mb-8 sm:mb-0 flex justify-center">
          <Player
            autoplay
            loop
            animationData={contact}
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]"
          />
        </div>

        <div className="w-full max-w-lg">
          

          <motion.div
            className="text-center"
            whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.75 }}
          >
            <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-300 font-semibold">
              {/* Contact Items */}
              <div className="flex flex-col gap-4">
                <ContactItem
                  icon={<MdAlternateEmail className="text-orange-500 text-lg" />}
                  label="rahulhanje0.7@gmail.com"
                />
                <ContactItem
                  icon={<IoMdCall className="text-green-500 text-lg" />}
                  label="+91-7204169306"
                />
                <ContactItem
                  icon={<CiLocationOn className="text-red-700 text-lg" />}
                  label="Belagavi, Karnataka"
                />
              </div>

              {/* Link Items */}
              <div className="flex flex-col gap-4">
                <LinkItem
                  icon={<FaInstagram className="text-pink-500 text-lg" />}
                  href="https://www.instagram.com/rahulhanje07/"
                  label="rahulhanje07"
                />
                <LinkItem
                  icon={<FaLinkedin className="text-blue-500 text-lg" />}
                  href="https://www.linkedin.com/in/rahul-hanje-b31812252/"
                  label="Rahul Hanje"
                />
                <LinkItem
                  icon={<FaGithub className="text-black text-lg" />}
                  href="https://github.com/Rahulhanje"
                  label="Rahulhanje"
                />
                <LinkItem
                  icon={<GrResume className="text-black text-lg" />}
                  href="https://drive.google.com/file/d/1cyQbmoy75Acfh3VlueSPGpKSCK_DHlIT/view?usp=sharing"
                  label="Resume"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

const ContactItem = ({ icon, label }: { icon: JSX.Element; label: string }) => (
  <div className="flex items-center justify-center bg-[#1a1a2e] rounded-lg p-3 hover:bg-[#23233d] shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
    {icon}
    <p className="text-sm font-bold ml-2 text-center">{label}</p>
  </div>
);

const LinkItem = ({
  icon,
  href,
  label,
}: {
  icon: JSX.Element;
  href: string;
  label: string;
}) => (
  <Link href={href} passHref legacyBehavior>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-[#1a1a2e] rounded-lg p-3 hover:bg-[#23233d] shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
    >
      {icon}
      <p className="text-sm font-bold ml-2 text-center">{label}</p>
    </a>
  </Link>
);
