'use client'
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { BackgroundGradient } from "../ui/background-gradient";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center items-center">
         <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
         <BackgroundGradient >
          <img  src="/NextWebsite.png" alt="Next Website" className="w-full h-full rounded-[26px]" />
         </BackgroundGradient>
         
         <BackgroundGradient >
          <img  src="/NextWebsite.png" alt="Next Website" className="w-full h-full rounded-[26px]" />
         </BackgroundGradient>
         
         <BackgroundGradient >
          <img  src="/NextWebsite.png" alt="Next Website" className="w-full h-full rounded-[26px]" />
          <button className="m-2 absolute bottom-0  z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm">Code</button>
         </BackgroundGradient>
         
         </div>
        {/* <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
        {/* <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
      </div>
    </div>
  );
};

export default Projects;