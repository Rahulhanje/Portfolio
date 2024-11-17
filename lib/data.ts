import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Feedbackhub from "@/public/Feedbackhub.png";
import rmtdevImg from "@/public/rmtdev.png";
import ninjanexImage from "@/public/ninjanex.png";
import SolanaDap from "@/public/SolanaDap.png";
import solanaWalletgenerator from '@/public/solanaWalletgenerator.png';
import Linknest from '@/public/Linknest.png'
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experince",
    hash: "#experince",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


// export const experiencesData = [
//   {
//     title: "Information Science Engineering",
//     location: ".",
//     description:
//       "Pursuing a Bachelor's in Information Science Engineering, focusing on software development and system design. Engaged in coursework covering algorithms, data structures, and databases, with active participation in coding competitions and collaborative projects.",
//     describe: [
//       "Studying algorithms, data structures, operating systems, and databases.",
//       "Participating in coding competitions and technical projects.",
//       "Developing problem-solving and software engineering skills.",
//     ],
//     icon: React.createElement(LuGraduationCap),
//     date: "Dec 2021 - May 2025",
//   },
//   {
//     title: "Full-Stack Intern (Remote)",
//     location: "Maharashtra, India.",
//     description:
//       "Completed a 10-month full-stack internship at Weareengineer, building web applications using React and Node.js. Worked on backend APIs, database management, and collaborated on version-controlled projects with Agile practices.",
//     describe: [
//       "Developed full-stack web applications using React and Node.js.",
//       "Built RESTful APIs and managed databases with MongoDB.",
//       "Collaborated with teams following Agile methodologies.",
//       "Utilized Git for version control and continuous integration.",
//     ],
//     icon: React.createElement(CgWorkAlt),
//     date: "Mar 2023 - Oct 2023",
//   },
//   {
//     title: "Front-end Intern (Remote)",
//     location: "Chandigarh, India.",
//     description:
//       "Completed a front-end development internship at Bizzyka, focusing on creating responsive user interfaces with React.js and Tailwind CSS. Worked closely with designers and back-end developers to ensure seamless project delivery.",
//     describe: [
//       "Developed responsive UI components using React.js.",
//       "Styled interfaces with Tailwind CSS for consistent design.",
//       "Collaborated with cross-functional teams to meet project goals.",
//       "Ensured browser compatibility and performance optimization.",
//     ],
//     icon: React.createElement(CgWorkAlt),
//     date: "Jan 2024 - Mar 2024",
//   },
//   {
//     title: "Full-Stack Developer. (Remote)",
//     location: "Maharashtra, India.",
//     description:
//       "Working as a freelance full-stack developer, building dynamic applications with React, Next.js, TypeScript, and Tailwind CSS. Managing end-to-end development, including back-end solutions with Prisma and MongoDB.",
//     describe: [
//       "Building scalable web applications with React and Next.js.",
//       "Learn TypeScript for robust code development.",
//       "Handling full project lifecycle from design to deployment.",
//     ],
//     icon: React.createElement(FaReact),
//     date: "Apr 2024 - Jun 2024",
//   },
//   {
//     title: "Full-Stack Developer (offline)",
//     location: "Pune, Maharashtra, India.",
//     description:
//       "Working as a full-stack javascript developer, build a dynamic applications with React, building a overall estate booking sections to manage the flats and properties related stuff. also work on chat functionality.",
//     describe: [
//       "Optimized backend queries by implementing bull.js and Redis, improving overall system responsiveness by 20%",
//       "Created a dynamic estate booking system for reallist.ai, boosting user engagement and operational efficiency by 35%",
//       "Migrated the application from React 16 to React 18, resulting in a 20% performance boost.",
//     ],
//     icon: React.createElement(CgWorkAlt),
//     date: "Jun 2024 - present",
//   },
// ] as const;

export const experiencesData = [
  {
    date: "Jan 2020 - Present",
    title: "Software Engineer",
    location: "Company Name",
    icon: "💻", // Can be an icon component or an image
    description: "Description of the role",
    describe: ["Key point 1", "Key point 2", "Key point 3"]
  },
  // More objects...
];
export const projectsData = [
  {
    title: "Feedbackhub",
    description:
    "Feedbackhub lets users create projects, get embeddable codes for easy integration, and manage ratings and feedback. It includes a dashboard for monitoring feedback, subscriptions, and ratings management..",
    tags: ["Next.js", "Typescript,", "Tailwind", "Drizzle ORM","Supabase","Stripe"],
    imageUrl: Feedbackhub,
    githubUrl: "https://github.com/Rahulhanje/feedbackHub",
    demoUrl: "https://feedbackhub-eight.vercel.app/",
  },
  {
    title: "LinkNest",
    description:
      "LinkNest is a social platform where users can share posts and discover content from others. it includes features like , post uploads, search, and user profiles.",
    tags: ["React.js", "Appwrite", "Tailwind", "React Query,", "Shadcn/ui"],
    imageUrl:Linknest, 
    githubUrl: "https://github.com/Rahulhanje/LinkNest",
    demoUrl: "https://link-nest-dusky.vercel.app/",
  },
  {
    title: "SolanaDap",
    description:
      "A decentralized application (DApp) built on Solana, allowing users to send and receive tokens and view their balances.",
    tags: ["Solana Web3.js", "TypeScript,", "Tailwind", "Next.Js,"],
    imageUrl: SolanaDap,
    githubUrl: "https://github.com/Rahulhanje/Wallet_Adapter",
    demoUrl: "https://wallet-adapter-phi.vercel.app/",
  },
  {
    title: "solanaWalletgenerator",
    description:
      "This wallet application allows users to securely create and manage their digital assets. it supports wallet creation deletion.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: solanaWalletgenerator,
    githubUrl: "https://github.com/Rahulhanje/SolanaWalletGenerator",
    demoUrl: "https://solana-wallet-generator-ashy.vercel.app/",
  },
] as const;

export const skillsData = [
  // Frontend Technologies
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "Framer Motion",
  "Bootstrap",
  "Chakra UI",

  // Backend Technologies
  "Node.js",
  "Express.js",
  "NestJS",
  "Apollo Server",
  "Prisma",
  "GraphQL",
  "REST API",
  "Kafka",

  // Databases & ORM
  "MongoDB",
  "PostgreSQL",
  "Redis",

  // DevOps & Tools
  "Git",
  "Docker",
  "Kubernetes",
  "CI/CD Pipelines",
  "GitHub Actions",
  "Jenkins",
  "Bash Scripting",
  "Linux",
  "Nginx",
  "AWS (EC2, S3)",
  "Vercel",
  "Grafana",

  // Monitoring & Logging
  "Prometheus",
  "Grafana",

  // Testing & Linting
  "Jest",
  "Cypress",
  "ESLint",
  "Prettier",

  // Other Tools & Skills
  "Figma",
  "Postman",
  "Webpack",
] as const;
