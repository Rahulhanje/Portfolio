import About from "@/components/about";
import AboutMe from "@/components/aboutme";

import Contact from "@/components/contact";
import Education from "@/components/Education";
import Experience from "@/components/experience";
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
