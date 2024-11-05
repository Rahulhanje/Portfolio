'use client'
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";
import { FolderGit2, Link2 } from "lucide-react";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center items-center">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
          <BackgroundGradient >
            <img src="/linknest.png" alt="Next Website" className="w-full h-full rounded-t-[26px]" />
            <div className=" px-2 py-4 rounded-b-2xl ">
              <p className="font-bold text-xl">LinkNest</p>
              <p>LinkNest is a web application built with React and Appwrite, enabling users to share and discover posts. The application features user authentication, imgs posting, search functionality, and user profiles. It leverages React Query for data fetching and caching, and Tailwind CSS for styling</p>
              <div className="cursor-pointer pt-5 flex gap-5">

                <Link href="https://github.com/Rahulhanje/LinkNest.git" passHref>
                  <p className="hover:scale-105 transition-transform duration-200">
                    <FolderGit2 />
                  </p>
                </Link>
                <Link href={"https://link-nest-dusky.vercel.app/"}>
                  <p className="hover:scale-105 transition-transform duration-200">
                    <Link2 />
                  </p>
                </Link>
              </div>
            </div>
          </BackgroundGradient>

          <BackgroundGradient >
            <img  src="/Feedbackhub.png" alt="Next Website" className="w-full h-full rounded-t-[26px]" />
            <div className=" px-2 py-4 rounded-b-2xl ">
              <p className="font-bold text-xl">Feedbackhub</p>
              <p>Users can create projects and receive embeddable codes to integrate into their websites, while managing user subscriptions and viewing project instructions. The feedback system allows visitors to submit ratings, which can be easily managed and sorted in the dashboard</p>
              <div className="cursor-pointer pt-5 flex gap-5 b-0">

                <Link href="https://github.com/Rahulhanje/feedbackHub.git" passHref>
                  <p className="hover:scale-105 transition-transform duration-200">
                    <FolderGit2 />
                  </p>
                </Link>
                <Link href={"https://feedbackhub-eight.vercel.app/"}>
                  <p className="hover:scale-105 transition-transform duration-200">
                    <Link2 />
                  </p>
                </Link>
              </div>
            </div>

          </BackgroundGradient>

          <BackgroundGradient >
            <img src="/SolanaDap.png" alt="Next Website" className="w-full h-full rounded-t-[26px]" />
            <div className=" px-2 py-4 rounded-b-2xl ">
              <p className="font-bold text-xl">Solana Dapp</p>
              <p>This project is a Solana DApp built with Next.js, Tailwind CSS, and Solana Web3.js, enabling users to interact with the Solana blockchain by sending and receiving tokens and viewing their balances. Key features include a modern user interface, seamless integration with Solana through Web3.js, token sending and receiving capabilities, and the ability to display users' current token balances</p>
              <div className="cursor-pointer pt-5 flex gap-5">

                <Link href="https://github.com/Rahulhanje/Wallet_Adapter.git" passHref>
                  <p className="hover:scale-105 transition-transform duration-200">
                    <FolderGit2 />
                  </p>
                </Link>
                <Link href={"https://wallet-adapter-phi.vercel.app/"}>
                  <p className="hover:scale-105 transition-transform duration-200">
                    <Link2 />
                  </p>
                </Link>
              </div>
            </div>
          </BackgroundGradient>

          <BackgroundGradient >
            <img src="/solanaWalletgenerator.png" alt="Next Website" className="w-full h-full rounded-t-[26px]" />
            <div className=" px-2 py-4 rounded-b-2xl ">
              <p className="font-bold text-xl">SolanaWalletGenerator</p>
              <p>This project is a wallet application built with Next.js, designed for managing digital assets. It includes features such as wallet creation for generating and managing secure wallets, along with mnemonic phrase management for storing and retrieving seed phrases for wallet recovery</p>
              <div className="cursor-pointer pt-5 flex gap-5">

                <Link href="https://www.instagram.com/_sagar0418/" passHref>
                  <p className="hover:scale-105 transition-transform duration-200">
                    <FolderGit2 />
                  </p>
                </Link>
                <Link href={"https://solana-wallet-generator-ashy.vercel.app/"}>
                  <p className="hover:scale-105 transition-transform duration-200">
                    <Link2 />
                  </p>
                </Link>
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient >
            <img src="/Blogingapp.png" alt="Next Website" className="w-full h-full rounded-t-[26px]" />
            <div className=" px-2 py-4 rounded-b-2xl ">
              <p className="font-bold text-xl">Daily bloging application</p>
              <p>
                This project is a full-stack blog application that utilizes React for the frontend and Node.js with Prisma ORM for the backend, allowing users to create, read, update, and delete blog posts. It offers a comprehensive platform for content creation and sharing.</p>
              <div className="cursor-pointer pt-5 flex gap-5">

                <Link href="https://github.com/Rahulhanje/Daily-Bloging-Application.git" passHref>
                  <p className="hover:scale-105 transition-transform duration-200">
                    <FolderGit2 />
                  </p>
                </Link>
                <Link href={"https://daily-bloging-application.vercel.app/"}>
                  <p className="hover:scale-105 transition-transform duration-200">
                    <Link2 />
                  </p>
                </Link>
              </div>
            </div>
          </BackgroundGradient>

        </div>
        {/* <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
        {/* <ProjectCard
          src="/Cardimg.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
      </div>
    </div>
  );
};

export default Projects;