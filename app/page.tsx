import Hero from "@/components/main/Hero";
import Image from "next/image";

export default function Home() {
  return (
    // <div>Jai Hanuman </div>
   <main className="h-full w-full">
    <div className="flex flex-col h-[800px] gap-20">
      <Hero/>

    </div>
   </main>
  );
}
