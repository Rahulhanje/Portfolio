"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project, { CreateProject } from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <CreateProject />
        {projectsData.length % 2 !== 0 && <div className="hidden md:block"></div>}
      </div>
    </section>
  );
}
