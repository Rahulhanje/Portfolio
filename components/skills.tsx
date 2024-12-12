"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const categorizedSkills = {
  "Languages":[
    "C",
    "C++",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
  ],
  "Frontend Technologies": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
  ],
  "Backend Technologies": [
    "Node.js",
    "Express.js",
    "Prisma",
    "Hono",
  
  ],
  "Databases & ORM": ["MongoDB", "PostgreSQL", "MySQL","Supabase"],
  "DevOps & Tools": [
    "Git",
    "GitHub",
    "Docker",
    "Vercel",
    "Vscode",
    
  ],
  "Other Tools & Skills": [
    "Postman",
    "Vite",
    "npm",
  ],
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    > 
      <SectionHeading>My Skills</SectionHeading>
      {Object.entries(categorizedSkills).map(
        ([category, skills], categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 dark:text-white/80">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="bg-white hover:bg-gray-100 border hover:scale-105  transition-all cursor-pointer   border-gray-300 dark:border-gray-700 rounded-xl px-5 py-2 dark:bg-white/5 dark:hover:bg-white/10"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        )
      )}
    </section>
  );
}

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// export default function Skills() {
//   const { ref } = useSectionInView("Skills");

//   return (
//     <section
//       id="skills"
//       ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
//     >
//       <SectionHeading>My skills</SectionHeading>
//       <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
//         {skillsData.map((skill, index) => (
//           <motion.li
//             className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
//             key={index}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//               once: true,
//             }}
//             custom={index}
//           >
//             {skill}
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// }
