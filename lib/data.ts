
import Feedbackhub from "@/public/Feedbackhub.png";
import SolanaDap from "@/public/SolanaDap.png";
import solanaWalletgenerator from '@/public/solanaWalletgenerator.png';
import Linknest from '@/public/Linknest.png'
import tweetnest from '@/public/tweetnest.png'
import ChainDemocracy from '@/public/ChainDemocracy.png'
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
    name: "Experience",
    hash: "#experience",
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
    title: "SolanaWalletgenerator",
    description:
      "This wallet application allows users to securely create and manage their digital assets. it supports wallet creation deletion.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: solanaWalletgenerator,
    githubUrl: "https://github.com/Rahulhanje/SolanaWalletGenerator",
    demoUrl: "https://solana-wallet-generator-ashy.vercel.app/",
  },
  {
    title: "Tweetnest",
    description:
      "This project is about a social media platform. Together, they provide functionalities like user authentication, post management, notifications, and user profile management.",
    tags: ["Node.js","Express.js", "MongoDB", "React", "React Query", "Tailwind","JWT","DaisyUI"],
    imageUrl: tweetnest,
    githubUrl: "https://github.com/Rahulhanje/TweetNest",
    demoUrl: "https://tweetnest-f6uc.onrender.com/",
  },
  {
    title: "ChainDemocracy",
    description:
      "TThe Government Proposal Voting Platform is a decentralized application that allows governments to post proposals related to various sectors like social welfare, education, finance, healthcare, and culture. Citizens can vote for or against the proposals, helping the government understand whether the policy is beneficial to the people.",
    tags: ["Next.js","Solidity","Tailwind","Ethers.js","Hardht","Typescript"],
    imageUrl: ChainDemocracy,
    githubUrl: "https://github.com/Rahulhanje/ChainDemocracy",
    demoUrl: "https://chain-democracy-fe.vercel.app/",
  },
] as const;

export interface SkillsData {
  [key: string]: string[];
}

export const categorizedSkills: SkillsData = {
  "Languages": [
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
  "Databases & ORM": [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Supabase"
  ],
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
