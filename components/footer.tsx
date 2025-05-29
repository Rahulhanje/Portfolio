'use client'
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Retrieve the count from localStorage
    const storedCount = localStorage.getItem("visitorCount");
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;

    // Increment the count and save it back to localStorage
    const newCount = currentCount + 1;
    localStorage.setItem("visitorCount", newCount.toString()); // Convert number to string

    // Update the state with the new count
    setCount(newCount);
  }, []);
  const year = new Date().getFullYear();


  return (
    <footer className="px-4 text-center border-t border-slate-800 text-gray-400 py-3">
      <div className="max-w-5xl mx-auto flex justify-between">
        <small className="mb-2 block text-sm text-gray-800 dark:text-gray-100">
          &copy;  {year} @Rahul Hanje. All rights reserved
        </small>
        {/* <div className="flex items-center gap-3">
          <Link
            href={/"}
            className=" hover:text-black dark:hover:text-white transition-all ease-in duration-200"
            target="_blank"
          >
            <BsTwitter />
          </Link>
          <Link
            href={""}
            target="_blank"
            className=" hover:text-black dark:hover:text-white transition-all ease-in duration-200"
          >
            <BsGithub />
          </Link>
        </div> */}
        <div>{count}</div>
      </div>
    </footer>
  );
}
