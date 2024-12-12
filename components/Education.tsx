// educationTimeline.tsx
"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.1", "end 0.5"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollValue(latest);
  });

  return (
    <section
      id="education"
    >
      <div 
      className="w-full font-sans md:px-10 pb-8 relative"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4x font-bold text-center"
        >
          My Education Journey
        </motion.h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center"
              >
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500"
              >
                {item.title}
              </motion.h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500"
              >
                {item.title}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-2"
              >
                {item.content}
              </motion.div>
            </div>
          </div>
        ))}
        
        <motion.div
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{
            height: height + "px",
          }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            style={{
              height: `${scrollValue * height}px`,
              opacity: scrollValue,
            }}
          />
        </motion.div>
      </div>
    </div>
    </section>
  );
};

// Education.tsx
const timelineData: TimelineEntry[] = [
  {
    title: "2022-Present",
    content: (
      <div className="flex flex-col gap-2">
        <div className="text-md text-slate-500 font-bold">
          B.E IN INFORMATION SCIENCE AND ENGINEERING
        </div>
        <div className="font-bold text-3xl  text-slate-800 dark:text-slate-400">
          Don Bosco Institute of Technology Bangalore
        </div>
      </div>
    ),
  },
  {
    title: "2020 - 2022",
    content: (
      <div className="flex flex-col gap-2">
        <div className="text-md text-slate-400 font-bold">
          PRE UNIVERSITY COURSE
        </div>
        <div className="font-bold text-3xl text-slate-800 dark:text-slate-400">
          Rashtrotthan Vidya Kendra TAPAS Bengaluru
        </div>
      </div>
    ),
  },
  {
    title: "2010 - 2020",
    content: (
      <div className="flex flex-col gap-2">
        <div className="text-md text-slate-400 font-bold">
          PRIMARY AND HIGH SCHOOL
        </div>
        <div className="font-bold text-3xl text-slate-800 dark:text-slate-400">
          Janata Education Society Harugeri Belagavi.
        </div>
      </div>
    ),
  },
];

const Education = () => {
  return (
    <div className="sm:pb-20 pb-10">
      <Timeline data={timelineData} />
    </div>
  );
};

export default Education;
