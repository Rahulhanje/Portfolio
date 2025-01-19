"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Server, Settings, Terminal } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const skillCategories = {
  "Languages": {
    icon: <Terminal className="w-6 h-6" />,
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"]
  },
  "Frontend Technologies": {
    icon: <Globe className="w-6 h-6" />,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  "Backend Technologies": {
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Express.js", "Prisma", "Hono"]
  },
  "Databases & ORM": {
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"]
  },
  "DevOps & Tools": {
    icon: <Settings className="w-6 h-6" />,
    skills: ["Git", "GitHub", "Docker", "Vercel", "VSCode"]
  },
  "Other Tools & Skills": {
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Postman", "Vite", "npm"]
  }
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index }
  })
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 scroll-mt-28 sm:mb-40"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading>My Skills</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skillCategories).map(([category, { icon, skills }], categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-xl border border-gray-200 dark:border-gray-700 
                         bg-white dark:bg-gray-800 
                         p-6 transition-all duration-300 
                         hover:shadow-lg dark:hover:shadow-gray-700/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-gray-900 dark:text-white">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-md text-sm font-medium 
                             bg-gray-100 dark:bg-gray-900
                             text-gray-900 dark:text-gray-200
                             transition-all duration-300
                             hover:bg-gray-300 dark:hover:bg-slate-600
                             cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}