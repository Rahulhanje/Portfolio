'use client';
import React from 'react';
import { useRef } from 'react';
import { useInView as useInViewFramer } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    animationDelay?: number;
}

const SkillDataProvider = ({ src, width, height, index, animationDelay = 0.2 }: Props) => {
    const ref = useRef(null);
    const isInView = useInViewFramer(ref, {
        once: true,
        amount: 0.1, // Use 'amount' instead of 'threshold'
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ delay: index * animationDelay }}
        >
            <Image src={src} width={width} height={height} alt="skill" />
        </motion.div>
    );
};

export default SkillDataProvider;