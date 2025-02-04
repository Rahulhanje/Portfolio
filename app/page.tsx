
import AboutMe from "@/components/aboutme";
import Contact from "@/components/contact";
import Education from "@/components/Education";
import NewSkillsSection from "@/components/newSkillsSection";
import { Opensource } from "@/components/Opensource";
import Projects from "@/components/projects";



export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-2 md:px-6 lg:px-12">
      {/* Background Circles */}
      {/* <div className="hidden sm:block">
        <div className="absolute top-12 left-12 w-96 h-96 bg-blue-800 rounded-full filter blur-[120px] opacity-40 sm:top-6 sm:left-6 sm:w-64 sm:h-64 md:w-80 md:h-80" />
        <div className="absolute right-0 w-96 h-96 bg-blue-800 rounded-full filter blur-[100px] opacity-40 sm:w-64 sm:h-64 md:w-80 md:h-80" />
      </div> */}
      

      <AboutMe />
      <Education />
      <NewSkillsSection />
      <Projects />
      <Opensource />
      <Contact />

    </main>
  );
}
