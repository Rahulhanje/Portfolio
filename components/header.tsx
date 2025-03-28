"use client";
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

type ActiveSection = "Home" | "About" | "Education" | "Skills" | "Projects" | "Experience" | "Contact";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleSectionClick = useCallback((linkName: ActiveSection) => {
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
  }, [setActiveSection, setTimeOfLastClick]);

  return (
    <header className="z-[999] relative w-full">
      <motion.div
        className="fixed top-0 left-1/2 h-[5.2rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 text-center shadow-lg shadow-gray-100 dark:shadow-black backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.35rem] sm:w-[48rem] sm:rounded-full dark:bg-black dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] px-3 left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 pt-2 rounded-full">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-full flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "relative flex items-center justify-center px-4 py-2 rounded-full transition dark:hover:text-gray-300 hover:text-gray-950",
                  {
                    "dark:text-white text-black": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => handleSectionClick(link.name as ActiveSection)}
              >
                {link.name}

                {activeSection === link.name && (
                  <motion.span
                    className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}