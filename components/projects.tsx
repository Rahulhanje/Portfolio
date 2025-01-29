"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project, { CreateProject } from "./project";
import { useSectionInView } from "@/lib/hooks";
import { TracingBeam } from "./ui/tracingbeam";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <TracingBeam className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="pl-4 space-y-8">
          <SectionHeading>My projects</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {projectsData.map((project) => (
              <div key={project.title} className="w-full">
                <Project {...project} />
              </div>
            ))}
            <div className="w-full">
              <CreateProject />
            </div>
            {projectsData.length % 2 !== 0 && (
              <div className="hidden sm:block w-full" />
            )}
          </div>
        </div>
      </TracingBeam>
    </section>
  );
}
