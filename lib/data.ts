
import Feedbackhub from "@/public/Feedbackhub.png";
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


