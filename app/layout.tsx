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

import Head from 'next/head';

const poppins = Poppins({
  fallback: ["sans-serif"],
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700", "800", "900"],
  adjustFontFallback: true,
});

export const metadata = {
  title: "Rahul | Personal Portfolio",
  description: "Official website of Rahul Hanje – a passionate full stack web developer building modern web apps using React, Node.js, and MERN stack.",
  keywords: ["Rahul Hanje", "Full Stack Developer", "Rahul Hanje Portfolio", "Rahul Hanje Web Developer", "Rahul Hanje Personal Website", "Rahul Hanje Resume", "Rahul Hanje CV", "Rahul Hanje Contact", "Rahul Hanje Projects", "Rahul Hanje Skills", "Rahul Hanje About Me", "Rahul Hanje Education", "Rahul Hanje Experience"],
  author: "Rahul Hanje",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Rahul Hanje | Full Stack Developer",
    description: "Official portfolio of Rahul Hanje. Explore projects, blogs, and contact details.",
    url: "https://rahulhanje.in",
    site_name: "Rahul Hanje",
  },
  verification: {
    google: "FVtN87WJzLdzUHzErxqphSyJUJ3Wbo-AifCv5EV-9jg",
  },
  twitter: {
  // card: "summary_large_image",
  title: "Rahul Hanje | Portfolio",
  description: "The official website of Rahul Hanje – full stack web developer.",
  // images: ["/og-image.png"]
}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
       <Head>
        <meta name="google-site-verification" content="FVtN87WJzLdzUHzErxqphSyJUJ3Wbo-AifCv5EV-9jg" />
        {/* Your existing meta tags */}

        {/* Add JSON-LD structured data here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rahul Hanje",
              url: "https://rahulhanje.in",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/Rahulhanje",
                "https://linkedin.com/in/rahulhanje"
              ],
            }),
          }}
        />
      </Head>
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
            <Header />
            {/* <SplashCursor /> */}

            {children}
            <Analytics />

            <MusicPlayer />
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
