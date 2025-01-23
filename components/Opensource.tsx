"use client";
import React from "react";
import { BackgroundGradient } from "./ui/card";
import Link from "next/link";
import { LuGitPullRequest } from "react-icons/lu";
import { BsBug } from "react-icons/bs";

export function Opensource() {
  return (
    <div className="sm:py-15 py-10" id="experience">
        <p className="text-3xl font-medium capitalize mb-8 text-center">Open Source Contribution</p>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Processing Website Project
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Resolved an issue and successfully merged a pull request to the main
        codebase.View Pull Request
        </p>
        <div className="flex gap-5 pt-5"> 
        <Link href={"https://github.com/processing/processing-website/issues/544"}>
        <BsBug size={24} className="hover:scale-125 transition-transform duration-300 ease-in-out"/></Link>
        <Link href={"https://github.com/processing/processing-website/pull/550"}><LuGitPullRequest size={24} className="hover:scale-125 transition-transform duration-300 ease-in-out"/></Link>
        
        </div>
      </BackgroundGradient>
    </div>
  );
}
