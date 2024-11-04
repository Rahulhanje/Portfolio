
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import SkillsNew from "@/components/main/skill";
// import Skills from "@/components/main/Skills";


export default function Home() {
  
  return (
    // <div>Jai Hanuman </div>
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero />
        <SkillsNew />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
