"use client";
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export function ParallaxFooter({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    // Parallax effect: moves the footer up slightly slower than the scroll
    const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);

    return (
        <div
            ref={containerRef}
            className='relative h-[550px] md:h-[650px] lg:h-[750px]'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-0 left-0 w-full h-[550px] md:h-[650px] lg:h-[750px] -z-10'>
                <motion.div style={{ y }} className='relative w-full h-full'>
                    {children}
                </motion.div>
            </div>
        </div>
    );
}
