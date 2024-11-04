'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


const HeroContent = () => (
    <motion.div
        initial="hidden"
        animate="visible"
        className="flex sm:flex-row flex-col items-center justify-between w-full sm:px-10 px-5 mt-20 z-[20]"
    >
        <div className="flex flex-col sm:gap-5 gap-2">
            <motion.div
                variants={slideInFromLeft(0.5)}
                className="flex flex-col gap-6 mt-6 sm:text-5xl text-3xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
                Hi there I am Rahul 👋
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Full Stack Developer
                </span>
            </motion.div>
            <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-lg text-gray-400 my-5 max-w-[600px] -z-10"
            >
                I&apos;m a full stack developer with a passion for building scalable and efficient web applications.
            </motion.p>
        </div>

        {/* Image on the right */}
        <motion.div
            variants={slideInFromRight(0.8)}
            className="flex justify-center items-center"
        >
            <Image
                src="/mainIconsdark.svg"
                alt="Work Icons"
                width={650}
                height={650}
                className="object-contain"
            />
        </motion.div>
    </motion.div>
)

export default HeroContent
