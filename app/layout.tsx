import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import StartCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RahulHanje",
  description: "rahul's  portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <div className="absolute inset-0 -z-10">
          <StartCanvas />
        </div>
        <div className="hidden sm:block">
        <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
