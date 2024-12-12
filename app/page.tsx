import About from "@/components/about";
import AboutMe from "@/components/aboutme";

import Contact from "@/components/contact";
import Education from "@/components/Education";

import { GridBackground } from "@/components/intro";
import {Opensource} from "@/components/Opensource";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";



export default function Home() {
  return (

    <main className="flex flex-col items-center px-4">
      {/* <SectionDivider /> */}
      {/* <GridBackground> */}
      <div className="absolute top-12 left-12 w-96 h-96 bg-blue-800 rounded-full filter blur-[120px] opacity-40" />
      <div className="absolute  right-0 w-96 h-96 bg-blue-800 rounded-full filter blur-[100px] opacity-40" />
      {/* <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/30 dark:bg-none rounded-full filter blur-2xl" /> */}
      <AboutMe/>
      {/* </GridBackground> */}
      <Education/>
      <Skills />
     
      <Projects />

      <Opensource/>
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}
