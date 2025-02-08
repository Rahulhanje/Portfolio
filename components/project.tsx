"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Meteors } from "./ui/meteors";
import Link from "next/link";
import { Button } from "./ui/button";
import { LinkPreview } from "./ui/link-preview";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group min-h-[20rem] md:min-h-[32rem] w-full"
    >
      <section className="bg-gray-100 group w-full max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative h-full hover:bg-gray-200 transition dark:text-white dark:bg-gray-500/10 dark:hover:bg-white/5">
        <Meteors number={40} className="group-hover:hidden block" />
        
        {/* Content container with responsive padding */}
        <div className="flex flex-col h-full p-4 md:p-6 lg:p-8">
          {/* Mobile image */}
          <div className="md:hidden w-full mb-4">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              className="w-full rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              quality={95}
            />
          </div>

          {/* Content section */}
          <div className="flex flex-col h-full sm:max-w-[50%] sm:group-even:ml-[18rem]">
            <div className="text-xl md:text-2xl font-semibold group-hover:underline underline-offset-4 mb-3">
              <LinkPreview url={demoUrl}>{title}</LinkPreview>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>

            {/* Tags and buttons container */}
            <div className="mt-auto pt-4">
              <ul className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <button className="px-3 py-1 bg-black text-gray-100 dark:bg-white/5 dark:hover:border-gray-500 border border-gray-900 rounded-2xl">
                    Demo
                  </button>
                </a>

                <Link href={githubUrl} target="_blank">
                  <button className="px-3 py-1 text-black dark:text-gray-200 dark:hover:border-gray-500 border border-gray-300 hover:border-gray-400 dark:border-gray-600 rounded-2xl">
                    Github
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop image */}
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden md:block pt-7 top-8 rounded-md -right-40 w-[28.25rem] pl-2 shadow-2xl transition 
              group-hover:scale-[1.04] 
              group-hover:-translate-x-3 
              group-hover:translate-y-3 
              group-hover:-rotate-2
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2
              group-even:right-[initial] 
              group-even:-left-40"
          />
        </div>
      </section>
    </motion.div>
  );
}

export function CreateProject() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group min-h-[20rem] md:min-h-[32rem] w-full"
    >
      <section className="bg-gray-100 group w-full max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative h-full hover:bg-gray-200 transition dark:text-white dark:bg-gray-500/10 dark:hover:bg-white/5">
        <div className="flex flex-col h-full p-4 md:p-6 lg:p-8">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Meteors number={20} className="absolute inset-0" />
            
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h1 className="text-xl md:text-2xl font-semibold text-black dark:text-white">
                Adding soon...
              </h1>
              
              <p className="text-sm md:text-base text-gray-700 dark:text-white/70">
                Check out my GitHub for more projects and upcoming additions.
              </p>
              
              <Link
                href="https://github.com/Rahulhanje"
                target="_blank"
                className="mt-4"
              >
                <Button
                  variant="outline"
                  className="dark:text-white dark:border-white/50 bg-white/5 hover:bg-white/10"
                >
                  Check Github
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}