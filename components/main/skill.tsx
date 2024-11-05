'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

const SkillsNew = () => {
    return (
        <motion.div id='skills'
            initial="hidden"
            animate="visible"
            className='h-full sm:pb-0 pb-32 w-screen '
        >
            <h1 className="text-[40px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Skills
            </h1>
            <div className='sm:mx-10 mx-6 h-[250px] w-full'>
                <motion.div className='h-full grid sm:grid-cols-3 grid-cols-1 gap-2'
                    variants={slideInFromLeft(0.5)}>
                    <div className="border-l h-full relative py-5 ">
                        <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 absolute left-[-6.2px]"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white text-2xl font-bold flex items-center pl-4">
                            Programming Languages
                        </div>
                        <div className='pl-4 grid grid-cols-4 gap-5 pt-5 w-[300px]'>
                            <img src="/c.png" alt="C" className="w-10 h-10" />
                            <img src="/cpp.png" alt="C++" className="w-10 h-10" />
                            <img src="/java.png" alt="Java" className="w-10 h-10" />
                            <img src="/javascript.png" alt="JavaScript" className="w-10 h-10" />
                            <img src="/typescript.png" alt="TypeScript" className="w-9 h-10" />
                            <img src="/python.png" alt="Python" className="w-9 h-10" />
                            <img src="/html.png" alt="HTML" className="w-10 h-10" />
                            <img src="/css.png" alt="CSS" className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="border-l h-full relative pt-5">
                        <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 absolute left-[-6.2px]"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white text-2xl font-bold flex items-center pl-4">
                            Frameworks & Databases
                        </div>
                        <div className='pl-4 grid grid-cols-4 gap-5 pt-5 w-[300px]'>
                            <img src="/node-js.png" alt="Node.js" className="w-10 h-10" />
                            <img src="/express.png" alt="Express" className="w-10 h-10" />
                            <img src="/react.png" alt="React" className="w-10 h-10" />
                            <img src="/tailwind.png" alt="Tailwind CSS" className="w-10 h-10" />
                            <img src="/next.png" alt="Next.js" className="w-10 h-10" />
                            <img src="/hono.png" alt="Hono" className="w-9 h-10" />
                            <img src="/mysql.png" alt="MySQL" className="w-9 h-10" />
                            <img src="/mongodb.png" alt="MongoDB" className="w-10 h-10" />
                            <img src="/postger.png" alt="PostgreSQL" className="w-10 h-10" />
                            <img src="/prisma.webp" alt="Prisma" className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="border-l h-full relative pt-5">
                        <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 absolute left-[-6.2px]"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white text-2xl font-bold flex items-center pl-4">
                            Tools
                        </div>
                        <div className='pl-4 grid grid-cols-4 gap-5 pt-5 w-[300px]'>
                            <img src="/docker.webp" alt="Docker" className="w-10 h-10" />
                            <img src="/appwrite.png" alt="Appwrite" className="w-10 h-10" />
                            <img src="/visual-studio-code.png" alt="Visual Studio Code" className="w-10 h-10" />
                            <img src="/git.png" alt="Git" className="w-9 h-10" />
                            <img src="/github.png" alt="GitHub" className="w-9 h-10" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default SkillsNew;
