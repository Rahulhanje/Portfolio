"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { GlobeDemo } from "./githubEarth";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="relative mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* Globe Background */}
      <div className="absolute top-0 w-full h-full opacity-90">
        <GlobeDemo />
      </div>

      {/* Content */}
      <div className="relative pt-10">
        <SectionHeading>About me</SectionHeading>
        <motion.p className="mb-3">
          I am currently pursuing a B.E in{" "}
          <span className="font-medium">Information Science and Engineering</span> at
          Don Bosco Institute of Technology, Bangalore. I am in my third year of
          studies, expected to graduate in 2026. My journey into programming started
          with a passion for{" "}
          <span className="font-medium">problem-solving</span> and the excitement of
          solving complex challenges. One of the most fulfilling aspects of
          programming is finding elegant solutions to difficult problems.
        </motion.p>
        <motion.p className="mb-3">
          During my studies, I have worked on several projects, with the most
          notable being <span className="font-medium">LinkNest</span>, a social media
          platform, and <span className="font-medium">FeedbackHub</span>, a feedback
          collection platform. These projects allowed me to gain experience in
          full-stack development using{" "}
          <span className="font-medium">Next.js</span>,{" "}
          <span className="font-medium">Express.js</span>,{" "}
          <span className="font-medium">Appwrite</span>,{" "}
          <span className="font-medium">MySQL</span>, and{" "}
          <span className="font-medium">MongoDB</span>.
        </motion.p>
        <motion.p className="mb-3">
          I am particularly proficient with{" "}
          <span className="font-medium">JavaScript</span>,{" "}
          <span className="font-medium">TypeScript</span>,{" "}
          <span className="font-medium">React.js</span>, and{" "}
          <span className="font-medium">Tailwind CSS</span>. I am also familiar with{" "}
          <span className="font-medium">Solidity</span> and{" "}
          <span className="font-medium">Web3 technologies</span>, which I am learning
          to build decentralized applications. I am also gaining experience with{" "}
          <span className="font-medium">Docker</span> and expanding my knowledge in
          scalable and efficient architectures.
        </motion.p>
        <motion.p>
          Outside of programming, I enjoy{" "}
          <span className="font-medium">traveling</span> and{" "}
          <span className="font-medium">gaming</span>. These hobbies help me
          unwind and also inspire creativity in my work. I am passionate about
          continuous learning and excited to contribute to innovative projects as a
          full-stack developer.
        </motion.p>
      </div>
    </motion.section>
  );
}
