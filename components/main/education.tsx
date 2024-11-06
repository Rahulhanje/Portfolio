'use client'
import React from 'react'
import { motion } from "framer-motion";
import { slideInFromLeft } from '@/utils/motion';

const Education = () => {
    return (
        <motion.div
            whileInView={{ y: [-35, 0], opacity: [0, 1] }}
            transition={{ duration: 1.2 }}
            id="education"
            className="w-full min-h-screen px-4 py-8 md:px-8 lg:px-12"
        > 
            <motion.div variants={slideInFromLeft(0.5)} className="sm:max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-8 md:pb-12">
                    Education
                </h1>
                
                <div className='w-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8'>
                    {/* Current Education */}
                    <div className="shadow-md shadow-violet-600 bg-gradient-to-br from-[#0a0710] via-[#280c4d] to-[#18032c] backdrop-blur-md rounded-lg w-full md:w-[80%] lg:w-[70%] hover:scale-105 transition-transform duration-300">
                        <div className="text-white text-center flex flex-col gap-2 p-4 md:p-6 lg:p-8">
                            <p className="text-sm md:text-base lg:text-lg opacity-90">2022 - Present</p>
                            <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                                B.E IN INFORMATION SCIENCE AND ENGINEERING
                            </h1>
                            <h2 className="text-sm md:text-base lg:text-lg font-medium opacity-90">
                                Don Bosco Institute of Technology Bangalore
                            </h2>
                        </div>
                    </div>

                    {/* Pre University */}
                    <div className='shadow-lg shadow-violet-600 bg-gradient-to-br from-[#0a0710] via-[#280c4d] to-[#18032c] backdrop-blur-md rounded-lg w-full md:w-[75%] lg:w-[65%] hover:scale-105 transition-transform duration-300'>
                        <div className='text-white text-center flex flex-col gap-2 p-4 md:p-6 lg:p-8'>
                            <p className="text-sm md:text-base lg:text-lg opacity-90">2020 - 2022</p>
                            <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                                PRE UNIVERSITY COURSE
                            </h1>
                            <h2 className="text-sm md:text-base lg:text-lg font-medium opacity-90">
                                Rashtrotthan Vidya Kendra TAPAS Bengaluru
                            </h2>
                        </div>
                    </div>

                    {/* Primary and High School */}
                    <div className='shadow-lg shadow-violet-600 bg-gradient-to-br from-[#0a0710] via-[#280c4d] to-[#18032c] backdrop-blur-md rounded-lg w-full md:w-[80%] lg:w-[70%] hover:scale-105 transition-transform duration-300'>
                        <div className='text-white text-center flex flex-col gap-2 p-4 md:p-6 lg:p-8'>
                            <p className="text-sm md:text-base lg:text-lg opacity-90">2010 - 2020</p>
                            <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                                PRIMARY AND HIGH SCHOOL
                            </h1>
                            <h2 className="text-sm md:text-base lg:text-lg font-medium opacity-90">
                                Janata Education Society Harugeri Belagavi
                            </h2>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Education