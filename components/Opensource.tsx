"use client";
import React from "react";
import { BackgroundGradient } from "./ui/card";
import Link from "next/link";
import { LuGitPullRequest } from "react-icons/lu";
import { BsBug } from "react-icons/bs";
import { LinkPreview } from "./ui/link-preview";
import SectionHeading from "./section-heading";

const OpensourceData = [
  {
    title: "Processing Website Project",
    description:
      "Resolved an issue and successfully merged a pull request to the main codebase.View Pull Request.",
    issueUrl: "https://github.com/processing/processing-website/issues/544",
    pullReqUrl: "https://github.com/processing/processing-website/pull/550",
  },
]

export function Opensource() {
  return (
    <div className="sm:py-15 py-10" id="experience">
      <SectionHeading>Open Source Contribution</SectionHeading>
      {
        OpensourceData.map((Opensource, index) => (
          <BackgroundGradient key={index} className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {Opensource.title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {Opensource.description}
        </p>
        <div className="flex gap-5 pt-5">
          <LinkPreview url={Opensource.issueUrl}>
            <BsBug size={24} className="hover:scale-125 transition-transform duration-300 ease-in-out" />
          </LinkPreview>
          <LinkPreview url={Opensource.pullReqUrl}><LuGitPullRequest size={24} className="hover:scale-125 transition-transform duration-300 ease-in-out" /></LinkPreview>

        </div>
      </BackgroundGradient>
        ))
      }
    </div>
  );
}
