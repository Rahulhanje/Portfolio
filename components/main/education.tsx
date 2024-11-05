'use client'
import React from 'react'
import { motion } from "framer-motion";
import { slideInFromLeft } from '@/utils/motion';

const Education = () => {
    return (
        <motion.div id='education'
            initial="hidden"
            animate="visible"
        >

            <motion.div
                variants={slideInFromLeft(0.5)}>
                <h1 className="text-[40px]  text-center  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-5">
                    Education
                </h1>
                <div className='w-screen flex flex-col justify-center items-center mx-2 gap-5 '>
                    <div className="shadow-md shadow-violet-600 bg-gradient-to-br from-[#0a0710] via-[#280c4d] to-[#18032c] backdrop-blur-md sm:w-[600px] rounded-lg">
                        <div className="text-white text-center flex flex-col gap-2 p-4">
                            <p>2022 - Present</p>
                            <h1 className="text-lg font-semibold">B.E IN INFORMATION SCIENCE AND ENGINEERING</h1>
                            <h2 className="text-md font-medium">Don Bosco Institute of Technology Bangalore</h2>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-violet-600 bg-gradient-to-br from-[#0a0710] via-[#280c4d] to-[#18032c] backdrop-blur-md sm:w-[600px] rounded-lg'>
                        <div className='text-white text-center flex flex-col gap-2 p-4'>

                            <p>20220 - 2022</p>
                            <h1>PRE UNIVERSITY COURSE</h1>
                            <h2>Rashtrotthan Vidya Kendra, "TAPAS" Bengaluru</h2>
                        </div>
                    </div>
                    <div className='shadow-lg shadow-violet-600 bg-gradient-to-br from-[#0a0710] via-[#280c4d] to-[#18032c] backdrop-blur-md sm:w-[600px] rounded-lg'>
                        <div className='text-white text-center flex flex-col gap-2 p-4'>
                            <p>2010 - 2020</p>
                            <h1>PRIMARY AND HIGH SCHOOL</h1>
                            <h2>Janata Education Society, Harugeri Belagavi</h2>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Education
