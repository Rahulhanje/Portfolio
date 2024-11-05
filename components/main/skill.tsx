'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import Image from 'next/image';

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
                            <Image src="/c.png" alt="C" width={40} height={40} />
                            <Image src="/cpp.png" alt="C++" width={40} height={40} />
                            <Image src="/java.png" alt="Java" width={40} height={40} />
                            <Image src="/javascript.png" alt="JavaScript"width={40} height={40} />
                            <Image src="/typescript.png" alt="TypeScript"width={40} height={40} />
                            <Image src="/python.png" alt="Python" width={40} height={40} />
                            <Image src="/html.png" alt="HTML"width={40} height={40} />
                            <Image src="/css.png" alt="CSS" width={40} height={40} />
                        </div>
                    </div>
                    <div className="border-l h-full relative pt-5">
                        <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 absolute left-[-6.2px]"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white text-2xl font-bold flex items-center pl-4">
                            Frameworks & Databases
                        </div>
                        <div className='pl-4 grid grid-cols-4 gap-5 pt-5 w-[300px]'>
                            <Image src="/node-js.png" alt="Node.js"width={40} height={40} />
                            <Image src="/express.png" alt="Express" width={40} height={40} />
                            <Image src="/react.png" alt="React" width={40} height={40} />
                            <Image src="/tailwind.png" alt="Tailwind CSS" width={40} height={40} />
                            <Image src="/next.png" alt="Next.js" width={40} height={40} />
                            <Image src="/hono.png" alt="Hono" width={40} height={40} />
                            <Image src="/mysql.png" alt="MySQL" width={40} height={40} />
                            <Image src="/mongodb.png" alt="MongoDB" width={40} height={40} />
                            <Image src="/postger.png" alt="PostgreSQL" width={40} height={40} />
                            <Image src="/prisma.webp" alt="Prisma" width={40} height={40} />
                        </div>
                    </div>
                    <div className="border-l h-full relative pt-5">
                        <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 absolute left-[-6.2px]"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white text-2xl font-bold flex items-center pl-4">
                            Tools
                        </div>
                        <div className='pl-4 grid grid-cols-4 gap-5 pt-5 w-[300px]'>
                            <Image src="/docker.webp" alt="Docker" width={40} height={40} />
                            <Image src="/appwrite.png" alt="Appwrite" width={40} height={40} />
                            <Image src="/visual-studio-code.png" alt="Visual Studio Code" width={40} height={40} /> 
                            <Image src="/git.png" alt="Git" width={40} height={40} />
                            <Image src="/github.png" alt="GitHub" width={40} height={40} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default SkillsNew;
