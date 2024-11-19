'use client'

import { motion } from 'framer-motion';
import { FaCameraRetro, FaCode, FaMusic } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import { MdOutlineSportsHandball } from "react-icons/md";

const AboutMe: React.FC = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="min-h-screen py-10 px-4 md:px-8"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">About Me</h1>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">Passionate Developer & Tech Enthusiast</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-8 gradient-bg"
                >
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">About</h2>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                                I am currently pursuing a B.E. in Information Science and Engineering at
                                Don Bosco Institute of Technology, Bangalore. I am in my third year of
                                studies, expected to graduate in 2026. My journey into programming started
                                with a passion for problem-solving and the excitement of solving complex challenges.
                                One of the most fulfilling aspects of programming is finding elegant solutions to difficult problems.
                                During my studies, I have worked on several projects, with the most notable being
                                <span className="font-medium"> LinkNest</span>, a social media platform, and
                                <span className="font-medium"> FeedbackHub</span>, a feedback collection platform.
                                These projects allowed me to gain experience in full-stack development using
                                <span className="font-medium"> Web3 technologies</span>, which I am learning to build decentralized applications.
                                I am also gaining experience with <span className="font-medium">Docker</span> and expanding my knowledge in
                                scalable and efficient architectures.
                            </p>
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
                            { icon: FaCode, color: 'blue', label: 'Coding' },
                            { icon: IoLogoGameControllerA, color: 'pink', label: 'Gaming' },
                            { icon: FaMusic, color: 'indigo', label: 'Music' },
                            { icon: FaCameraRetro, color: 'red', label: 'Photography' },
                            { icon: MdOutlineSportsHandball, color: 'indigo', label: 'Sports' }
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
                                <Icon className={`text-2xl text-${color}-600 dark:text-${color}-400 mb-2`}/>
                                <span className="text-sm text-gray-700 dark:text-gray-300 text-center">{label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutMe;