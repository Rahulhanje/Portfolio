"use client";

import { motion } from "framer-motion";
import { 
  FaTerminal, FaGlobe, FaServer, FaDatabase, 
  FaCogs, FaCode, FaPython, FaJava, FaReact, 
  FaNodeJs, FaDocker, FaGit, FaHtml5, FaCss3, 
  FaJs, 
  FaGithubSquare,
  FaGitAlt
} from "react-icons/fa";

import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma, 
         SiMongodb, SiPostgresql, SiMysql, SiSupabase, 
         SiVercel, SiPostman, SiVite, 
         SiNpm, SiExpress,SiSolidity , 
         SiHonor,
         SiTurborepo} from "react-icons/si";

import { BsSourceforge } from "react-icons/bs";
import { TbBrandCpp, TbBrandFramerMotion,TbBrandVscode  } from "react-icons/tb";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const skillCategories = {
  "Languages": {
    icon: <FaTerminal className="w-6 h-6" />,
    skills: [
      { name: "C", icon: <FaCode className="w-5 h-5" /> },
      { name: "C++", icon: <TbBrandCpp   className="w-5 h-5" /> },
      { name: "Java", icon: <FaJava className="w-5 h-5" /> },
      { name: "Python", icon: <FaPython className="w-5 h-5" /> },
      { name: "JavaScript", icon: <FaJs className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
      {name: "Solidity", icon: <SiSolidity className="w-5 h-5" /> }
    ]
  },
  "Frontend Technologies": {
    icon: <FaGlobe className="w-6 h-6" />,
    skills: [
      { name: "HTML", icon: <FaHtml5 className="w-5 h-5" /> },
      { name: "CSS", icon: <FaCss3 className="w-5 h-5" /> },
      { name: "JavaScript", icon: <FaJs className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
      { name: "React", icon: <FaReact className="w-5 h-5" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion className="w-5 h-5" /> }
    ]
  },
  "Backend Technologies": {
    icon: <FaServer className="w-6 h-6" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-5 h-5" /> },
      { name: "Express.js", icon: <SiExpress className="w-5 h-5" /> },
      { name: "Hono", icon: <SiHonor className="w-5 h-5" /> },
      { name: "Prisma", icon: <SiPrisma className="w-5 h-5" /> }
    ]
  },
  "Databases & ORM": {
    icon: <FaDatabase className="w-6 h-6" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5" /> },
      { name: "Supabase", icon: <SiSupabase className="w-5 h-5" /> }
    ]
  },
  "DevOps & Tools": {
    icon: <FaCogs className="w-6 h-6" />,
    skills: [
      { name: "Git", icon: <FaGitAlt  className="w-5 h-5" /> },
      { name: "GitHub", icon: <FaGithubSquare className="w-5 h-5" /> },
      { name: "Docker", icon: <FaDocker className="w-5 h-5" /> },
      { name: "Vercel", icon: <SiVercel className="w-5 h-5" /> },
      { name: "VSCode", icon: <TbBrandVscode className="w-5 h-5" /> }
    ]
  },
  "Other Tools & Skills": {
    icon: <FaCode className="w-6 h-6" />,
    skills: [
      { name: "Postman", icon: <SiPostman className="w-5 h-5" /> },
      { name: "Vite", icon: <SiVite className="w-5 h-5" /> },
      { name: "Turborepo", icon: <SiTurborepo  className="w-5 h-5" /> },
      { name: "npm", icon: <SiNpm className="w-5 h-5" /> },
      { name: "Forge", icon: <BsSourceforge className="w-5 h-5" /> }
    ]
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
                  <motion.div
                    key={skill.name}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium 
                             bg-gray-100 dark:bg-gray-900
                             text-gray-900 dark:text-gray-200
                             transition-all duration-300
                             hover:bg-gray-300 dark:hover:bg-slate-600
                             cursor-pointer"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}