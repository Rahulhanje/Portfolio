'use client'
import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideInFromLeft } from '@/utils/motion';
const SkillsNew = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
        >
            <div className='sm:mx-10 mx-6 h-[250px]'>

                <motion.div className='h-full grid sm:grid-cols-3 grid-cols-1 gap-2'
                    variants={slideInFromLeft(0.5)}>
                    <div className="border-l h-full relative pt-5">
                        <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 absolute left-[-6.2px]"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r  from-sky-400 to-white text-2xl font-bold flex items-center pl-4">
                            Programming Languages
                        </div>
                        <div className='pl-4  grid grid-cols-4 gap-5 pt-5 w-[300px]  '>
                            <img src={"/c.png"} alt="python" className="w-10 h-10" />
                            <img src={"/cpp.png"} alt="python" className="w-10 h-10" />
                            <img src={"/java.png"} alt="python" className="w-10 h-10" />
                            <img src={"/javascript.png"} alt="python" className="w-10 h-10" />
                            <img src={"/typescript.png"} alt="python" className="w-9 h-10" />
                            <img src={"/python.png"} alt="python" className="w-9 h-10" />
                            <img src={"/html.png"} alt="python" className="w-10 h-10" />
                            <img src={"/css.png"} alt="python" className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="border-l h-full relative pt-5">
                        <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 absolute left-[-6.2px]"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r  from-sky-400 to-white text-2xl font-bold flex items-center pl-4">
                            FrameWorks & DataBase
                        </div>
                        <div className='pl-4  grid grid-cols-4 gap-5 pt-5 w-[300px]  '>
                            <img src={"/node-js.png"} alt="python" className="w-10 h-10" />

                            <img src={"/express.png"} alt="python" className="w-10 h-10" />
                            <img src={"/react.png"} alt="python" className="w-10 h-10" />
                            <img src={"/tailwind.png"} alt="python" className="w-10 h-10" />
                            <img src={"/next.png"} alt="python" className="w-10 h-10" />
                            <img src={"/hono.png"} alt="python" className="w-9 h-10" />
                            <img src={"/python.png"} alt="python" className="w-9 h-10" />
                            <img src={"/html.png"} alt="python" className="w-10 h-10" />
                            <img src={"/css.png"} alt="python" className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="border-l h-full relative pt-5">
                        <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 absolute left-[-6.2px]"></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r  from-sky-400 to-white text-2xl font-bold flex items-center pl-4">
                            Programming Languages
                        </div>
                        <div className='pl-4  grid grid-cols-4 gap-5 pt-5 w-[300px]  '>
                            <img src={"/nodejs.png"} alt="python" className="w-10 h-10" />
                            <img src={"/cpp.png"} alt="python" className="w-10 h-10" />
                            <img src={"/java.png"} alt="python" className="w-10 h-10" />
                            <img src={"/javascript.png"} alt="python" className="w-10 h-10" />
                            <img src={"/typescript.png"} alt="python" className="w-9 h-10" />
                            <img src={"/python.png"} alt="python" className="w-9 h-10" />
                            <img src={"/html.png"} alt="python" className="w-10 h-10" />
                            <img src={"/css.png"} alt="python" className="w-10 h-10" />
                        </div>
                    </div>


                </motion.div>
            </div>

        </motion.div>
    )
}

export default SkillsNew
