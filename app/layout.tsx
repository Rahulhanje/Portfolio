import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Intro, { GridBackground } from "@/components/intro";
import { Analytics } from "@vercel/analytics/react";
import MusicPlayer from "@/components/MusicPlayer";
import LetterGlitch from "@/components/LetterGlitch";
import SplashCursor from "@/components/SplashCursor";


const poppins = Poppins({
  fallback: ["sans-serif"],
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700", "800", "900"],
  adjustFontFallback: true,
});

export const metadata = {
  title: "Rahul | Personal Portfolio",
  description:
    "Rahul is a full-stack developer  building web applications using MERN stack, React, Node.js, and Tailwind CSS.",
  keywords:
    "Rahul, full-stack developer, MERN stack, React developer, portfolio, web development, software engineer",
  author: "Rahul",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Rahul | Personal Portfolio",
    description: "Explore Vedant's work as a full-stack developer.",
    url: "https://your-portfolio-url.com", // Replace with your actual URL
    site_name: "Rahul's Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} bg-gray-200 text-gray-950 relative  dark:bg-[rgb(9,9,9)] dark:text-gray-50 dark:text-opacity-90 antialiased`}
      >
        <div className="bg-[#fbe2e3] hidden md:block   absolute top-[-6rem] -z-10 right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[30rem] dark:bg-[#946263] animate-float"></div>
        <div className="bg-[#dbd7fb] hidden md:block  absolute top-[-1rem] -z-10 left-[40rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[30rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] animate-pulseSlow"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <GridBackground>
              <Intro />
              {/* <BackgroundLinesDemo/> */}
            </GridBackground>
            <Analytics />
            <Header />
            {/* <SplashCursor /> */}

            {children}
            <MusicPlayer/>
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
            <LetterGlitch
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
  glitchSpeed={100}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
