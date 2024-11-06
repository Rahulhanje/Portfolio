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
                    LinkNest is a web application built with React and Appwrite, enabling users to share and discover posts. The application features user authentication, img posting, search functionality, and user profiles. It leverages React Query for data fetching and caching, and Tailwind CSS for styling.
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
                    Users can create projects and receive embeddable codes to integrate into their websites, while managing user subscriptions and viewing project instructions. The feedback system allows visitors to submit ratings, which can be easily managed and sorted in the dashboard.
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
                    This project is a Solana DApp built with Next.js, Tailwind CSS, and Solana Web3.js, enabling users to interact with the Solana blockchain by sending and receiving tokens and viewing their balances.
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
                  <p className="font-bold text-xl mb-2">SolanaWalletGenerator</p>
                  <p className="text-sm md:text-base flex-1">
                    This project is a wallet application built with Next.js, designed for managing digital assets. It includes features such as wallet creation for generating and managing secure wallets.
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
                    This project is a full-stack blog application that utilizes React for the frontend and Node.js with Prisma ORM for the backend, allowing users to create, read, update, and delete blog posts.
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
