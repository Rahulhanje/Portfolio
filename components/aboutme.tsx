'use client'

import { motion } from 'framer-motion';
import Player from 'lottie-react';
import aboutAnimation from '../public/aboutAnimation.json'

import { FaCameraRetro, FaCode, FaMusic } from 'react-icons/fa';
import { IoLogoGameControllerA } from 'react-icons/io';
import { MdOutlineSportsHandball } from 'react-icons/md';
import { LinkPreview } from "@/components/ui/link-preview";
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import LetterGlitch from '@/components/LetterGlitch';

const AboutMe: React.FC = () => {
    const { ref } = useSectionInView("About");
    return (
        <section
            id="about"
            ref={ref}
            className="mb-28 scroll-mt-28 sm:mb-40"
        >
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="min-h-screen py-10 px-4 md:px-8"
            >
                <div className="max-w-4xl mx-auto flex">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center mb-8"
                        >
                            <SectionHeading>About Me</SectionHeading>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">Passionate Developer & Tech Enthusiast</p>
                        </motion.div>

                        <div className='flex flex-col'>
                            <div>
                                <Player
                                    autoplay
                                    loop
                                    animationData={aboutAnimation}
                                    style={{ width: '500', height: '500' }}
                                />
                            </div>

                            <div>
                                {/* First card with LetterGlitch background */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-8 gradient-bg overflow-hidden relative"
                                >
                                    {/* LetterGlitch as background with reduced opacity */}
                                    <div className="absolute inset-0 opacity-10">
                                        <LetterGlitch
                                            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
                                            glitchSpeed={50}
                                            centerVignette={true}
                                            outerVignette={false}
                                            smooth={true}
                                        />
                                    </div>
                                    
                                    {/* Content on top of the glitch background */}
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">About</h2>
                                            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                                                I am currently pursuing a <span className="font-medium text-gray-900 dark:text-gray-100">B.E. in Information Science and Engineering</span> at
                                                <span className="font-medium text-gray-900 dark:text-gray-100"> Don Bosco Institute of Technology, Bangalore</span>. I am in my third year of studies,
                                                expected to graduate in <span className="font-medium text-gray-900 dark:text-gray-100">2026</span>.
                                            </div>
                                            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                                                My journey into programming started with a passion for <span className="italic text-gray-700 dark:text-gray-300">problem-solving</span> and the excitement of solving
                                                complex challenges. One of the most fulfilling aspects of programming is finding <span className="font-semibold text-gray-700 dark:text-gray-300">elegant solutions</span>
                                                to difficult problems.
                                            </div>
                                            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                                                During my studies, I have worked on several projects, with the most notable being
                                                <span className="font-medium text-gray-900 dark:text-gray-100"> <LinkPreview url="https://link-nest-dusky.vercel.app/">LinkNest</LinkPreview></span>, a social media platform, and
                                                <span className="font-medium text-gray-900 dark:text-gray-100"><LinkPreview url="https://feedbackhub-eight.vercel.app/"> FeedbackHub</LinkPreview> </span>, a feedback collection platform.
                                            </div>
                                            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                                                These projects allowed me to gain experience in <span className="font-medium text-gray-900 dark:text-gray-100">full-stack development</span> using
                                                <span className="font-medium text-gray-900 dark:text-gray-100"> Web3 technologies</span>, which I am learning to build decentralized applications.
                                            </div>
                                            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                                                I am also gaining experience with <span className="font-medium text-gray-900 dark:text-gray-100">Docker</span> and expanding my knowledge in
                                                <span className="font-medium text-gray-900 dark:text-gray-100"> scalable and efficient architectures</span>.
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.7 }}
                                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 gradient-bg"
                                >
                                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Hobbies & Interests</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                        {[ 
                                            { icon: FaCode, color: 'text-indigo-500', label: 'Coding' },
                                            { icon: IoLogoGameControllerA, color: 'text-pink-500', label: 'Gaming' },
                                            { icon: FaMusic, color: 'text-indigo-500', label: 'Music' },
                                            { icon: FaCameraRetro, color: 'text-red-500', label: 'Photography' },
                                            { icon: MdOutlineSportsHandball, color: 'text-indigo-500', label: 'Sports' },
                                        ].map(({ icon: Icon, color, label }, index) => (
                                            <motion.div
                                                key={label}
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 0.9 + index * 0.1
                                                }}
                                                className="flex flex-col items-center justify-center p-4 bg-gray-200 dark:bg-gray-700 rounded-lg"
                                            >
                                                <Icon className={`text-2xl text-${color}-600 dark:text-${color}-400 mb-2`} />
                                                <span className="text-sm text-gray-700 dark:text-gray-300 text-center">{label}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </section>
    );
};

export default AboutMe;