'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

const SkillText: React.FC = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" aria-hidden="true" />
        <h1 className="Welcome-text text-[13px]">Skills</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        I&apos;m a full stack developer with a passion for building scalable and efficient web applications.
      </motion.div>
    </div>
  );
}

export default SkillText;
