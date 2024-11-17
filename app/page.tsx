import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/Education";
import Experience from "@/components/experience";
import {Opensource} from "@/components/Opensource";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";


export default function Home() {
  return (

    <main className="flex flex-col items-center px-4">
      {/* <SectionDivider /> */}
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Opensource/>
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}
