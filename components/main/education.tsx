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
    className='sm:pl-0 mx-2'
> 

            <motion.div
                variants={slideInFromLeft(0.5)}>
                <h1 className=" text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-5 sm:text-[48px]">
                    Education
                </h1>
                <div className='w-full flex flex-col justify-center items-center mx-2 gap-5'>
                    <div className="shadow-md shadow-violet-600 bg-gradient-to-br from-[#0a0710] via-[#280c4d] to-[#18032c] backdrop-blur-md rounded-lg w-full sm:w-[600px]">
                        <div className="text-white text-center flex flex-col gap-2 p-4">
                            <p>2022 - Present</p>
                            <h1 className="text-lg font-semibold sm:text-xl">B.E IN INFORMATION SCIENCE AND ENGINEERING</h1>
                            <h2 className="text-md font-medium sm:text-lg">Don Bosco Institute of Technology Bangalore</h2>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-violet-600 bg-gradient-to-br from-[#0a0710] via-[#280c4d] to-[#18032c] backdrop-blur-md rounded-lg w-full sm:w-[600px]'>
                        <div className='text-white text-center flex flex-col gap-2 p-4'>

                            <p>2020 - 2022</p>
                            <h1 className="text-lg font-semibold sm:text-xl" >PRE UNIVERSITY COURSE</h1>
                            <h2 className="text-md font-medium sm:text-lg">Rashtrotthan Vidya Kendra TAPAS Bengaluru</h2>
                        </div>
                    </div>
                    <div className='shadow-lg shadow-violet-600 bg-gradient-to-br from-[#0a0710] via-[#280c4d] to-[#18032c] backdrop-blur-md rounded-lg w-full sm:w-[600px]'>
                        <div className='text-white text-center flex flex-col gap-2 p-4'>
                            <p>2010 - 2020</p>
                            <h1 className="text-lg font-semibold sm:text-xl">PRIMARY AND HIGH SCHOOL</h1>
                            <h2 className="text-md font-medium sm:text-lg">Janata Education Society Harugeri Belagavi</h2>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Education