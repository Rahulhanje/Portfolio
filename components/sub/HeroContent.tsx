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
        className="flex flex-row items-center justify-between w-full px-20 mt-40 z-[20]"
    >
        <div className="flex flex-col gap-5">
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">Rahul Sanjeevkumar Hanje</h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
                Rahul
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Full Stack Developer
                </span>
            </motion.div>
            <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-lg text-gray-400 my-5 max-w-[600px]"
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
