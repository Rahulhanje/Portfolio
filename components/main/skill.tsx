'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import Image from 'next/image';

const SkillsNew = () => {
    return (
        <motion.div
            whileInView={{ y: [-35, 0], opacity: [0, 1] }}
            transition={{ duration: 1.2 }}
            id="skills"
            className="min-h-screen w-full px-4 pl-10 sm:px-6 lg:px-8 pb-12 sm:pb-16"
        >
            <h1 className="text-3xl sm:text-[40px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-20">
                Skills
            </h1>
            
            <div className="w-full max-w-7xl mx-auto">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={slideInFromLeft(0.5)}
                >
                    {/* Programming Languages Section */}
                    <div className="border-l relative p-4 sm:p-6">
                        <div className="w-3 h-3 bg-slate-400 rounded-full absolute left-[-6px] top-7"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white text-xl sm:text-2xl font-bold mb-6">
                            Programming Languages
                        </div>
                        <div className="grid grid-cols-4 gap-4 sm:gap-5 w-full sm:w-[300px]">
                            <Image src="/c.png" alt="C" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/cpp.png" alt="C++" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/java.png" alt="Java" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/javascript.png" alt="JavaScript" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/typescript.png" alt="TypeScript" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/python.png" alt="Python" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/html.png" alt="HTML" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/css.png" alt="CSS" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                    </div>

                    {/* Frameworks & Databases Section */}
                    <div className="border-l relative p-4 sm:p-6">
                        <div className="w-3 h-3 bg-slate-400 rounded-full absolute left-[-6px] top-7"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white text-xl sm:text-2xl font-bold mb-6">
                            Frameworks & Databases
                        </div>
                        <div className="grid grid-cols-4 gap-4 sm:gap-5 w-full sm:w-[300px]">
                            <Image src="/node-js.png" alt="Node.js" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/express.png" alt="Express" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/react.png" alt="React" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/tailwind.png" alt="Tailwind CSS" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/next.png" alt="Next.js" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/hono.png" alt="Hono" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/mysql.png" alt="MySQL" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/mongodb.png" alt="MongoDB" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/postger.png" alt="PostgreSQL" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/prisma.webp" alt="Prisma" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div className="border-l relative p-4 sm:p-6">
                        <div className="w-3 h-3 bg-slate-400 rounded-full absolute left-[-6px] top-7"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white text-xl sm:text-2xl font-bold mb-6">
                            Tools
                        </div>
                        <div className="grid grid-cols-4 gap-4 sm:gap-5 w-full sm:w-[300px]">
                            <Image src="/docker.webp" alt="Docker" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/appwrite.png" alt="Appwrite" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/visual-studio-code.png" alt="Visual Studio Code" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/git.png" alt="Git" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <Image src="/github.png" alt="GitHub" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default SkillsNew;