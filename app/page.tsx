import Encryption from "@/components/main/encryptio";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    // <div>Jai Hanuman </div>
   <main className="h-full w-full">
    <div className="flex flex-col  gap-20">
      <Hero/>
      <Skills/>
      <Encryption/>
      <Projects/>
      <Footer/>
    </div>
   </main>
  );
}
