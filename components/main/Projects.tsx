'use client'
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";
import { FolderGit2, Link2 } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="text-center w-full"
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
      id="projects"
    >
      <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full px-4 md:px-8">
        <h1 className="text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20">
          My Projects
        </h1>
        
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* LinkNest Project */}
            <BackgroundGradient className="h-full">
              <div className="flex flex-col h-full">
                <img 
                  src="/Linknest.png" 
                  alt="LinkNest" 
                  className="w-full aspect-video object-cover rounded-t-[26px]" 
                />
                <div className="px-4 py-4 flex-1 flex flex-col text-left">
                  <p className="font-bold text-xl mb-2">LinkNest</p>
                  <p className="text-sm md:text-base flex-1">
                    LinkNest is a social platform where users can share posts and discover content from others. Built with React and Appwrite, it includes features like authentication, post uploads, search, and user profiles. React Query handles data caching, and Tailwind CSS enhances styling.
                  </p>
                  <div className="flex gap-5 pt-4">
                    <Link href="https://github.com/Rahulhanje/LinkNest.git">
                      <p className="hover:scale-105 transition-transform duration-200">
                        <FolderGit2 className="w-5 h-5" />
                      </p>
                    </Link>
                    <Link href="https://link-nest-dusky.vercel.app/">
                      <p className="hover:scale-105 transition-transform duration-200">
                        <Link2 className="w-5 h-5" />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </BackgroundGradient>

            {/* Feedbackhub Project */}
            <BackgroundGradient className="h-full">
              <div className="flex flex-col h-full">
                <img 
                  src="/Feedbackhub.png" 
                  alt="Feedbackhub" 
                  className="w-full aspect-video object-cover rounded-t-[26px]" 
                />
                <div className="px-4 py-4 flex-1 flex flex-col text-left">
                  <p className="font-bold text-xl mb-2">Feedbackhub</p>
                  <p className="text-sm md:text-base flex-1">
                    Feedbackhub lets users create projects, get embeddable codes for easy integration, and manage ratings and feedback. It includes a dashboard for monitoring feedback, subscriptions, and ratings management.
                  </p>
                  <div className="flex gap-5 pt-4">
                    <Link href="https://github.com/Rahulhanje/feedbackHub.git">
                      <p className="hover:scale-105 transition-transform duration-200">
                        <FolderGit2 className="w-5 h-5" />
                      </p>
                    </Link>
                    <Link href="https://feedbackhub-eight.vercel.app/">
                      <p className="hover:scale-105 transition-transform duration-200">
                        <Link2 className="w-5 h-5" />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </BackgroundGradient>

            {/* Solana Dapp Project */}
            <BackgroundGradient className="h-full">
              <div className="flex flex-col h-full">
                <img 
                  src="/SolanaDap.png" 
                  alt="Solana Dapp" 
                  className="w-full aspect-video object-cover rounded-t-[26px]" 
                />
                <div className="px-4 py-4 flex-1 flex flex-col text-left">
                  <p className="font-bold text-xl mb-2">Solana Dapp</p>
                  <p className="text-sm md:text-base flex-1">
                    A decentralized application (DApp) built on Solana, allowing users to send and receive tokens and view their balances. Developed with Next.js, Tailwind CSS, and Solana Web3.js for a smooth blockchain interaction.
                  </p>
                  <div className="flex gap-5 pt-4">
                    <Link href="https://github.com/Rahulhanje/Wallet_Adapter.git">
                      <p className="hover:scale-105 transition-transform duration-200">
                        <FolderGit2 className="w-5 h-5" />
                      </p>
                    </Link>
                    <Link href="https://wallet-adapter-phi.vercel.app/">
                      <p className="hover:scale-105 transition-transform duration-200">
                        <Link2 className="w-5 h-5" />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </BackgroundGradient>

            {/* SolanaWalletGenerator Project */}
            <BackgroundGradient className="h-full">
              <div className="flex flex-col h-full">
                <img 
                  src="/solanaWalletgenerator.png" 
                  alt="SolanaWalletGenerator" 
                  className="w-full aspect-video object-cover rounded-t-[26px]" 
                />
                <div className="px-4 py-4 flex-1 flex flex-col text-left">
                  <p className="font-bold text-xl mb-2">Solana Wallet Generator</p>
                  <p className="text-sm md:text-base flex-1">
                    This wallet application allows users to securely create and manage their digital assets. Developed using Next.js, it supports wallet creation and includes secure key management.
                  </p>
                  <div className="flex gap-5 pt-4">
                    <Link href="https://www.instagram.com/_sagar0418/">
                      <p className="hover:scale-105 transition-transform duration-200">
                        <FolderGit2 className="w-5 h-5" />
                      </p>
                    </Link>
                    <Link href="https://solana-wallet-generator-ashy.vercel.app/">
                      <p className="hover:scale-105 transition-transform duration-200">
                        <Link2 className="w-5 h-5" />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </BackgroundGradient>

            {/* Daily Blogging Application Project */}
            <BackgroundGradient className="h-full">
              <div className="flex flex-col h-full">
                <img 
                  src="/Blogingapp.png" 
                  alt="Daily Blogging Application" 
                  className="w-full aspect-video object-cover rounded-t-[26px]" 
                />
                <div className="px-4 py-4 flex-1 flex flex-col text-left">
                  <p className="font-bold text-xl mb-2">Daily Blogging Application</p>
                  <p className="text-sm md:text-base flex-1">
                    A full-stack blog application where users can create, edit, and manage posts. Built with React for the frontend and Node.js with Prisma ORM for efficient backend operations.
                  </p>
                  <div className="flex gap-5 pt-4">
                    <Link href="https://github.com/Rahulhanje/Daily-Bloging-Application.git">
                      <p className="hover:scale-105 transition-transform duration-200">
                        <FolderGit2 className="w-5 h-5" />
                      </p>
                    </Link>
                    <Link href="https://daily-bloging-application.vercel.app/">
                      <p className="hover:scale-105 transition-transform duration-200">
                        <Link2 className="w-5 h-5" />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
