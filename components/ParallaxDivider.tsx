"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxDivider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[600px] bg-black overflow-hidden flex items-center justify-center py-20"
        >
            {/* Parallax Background Layers */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] opacity-30"
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-[#0a0a0a] to-black" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />

                {/* 3D Grid Effect */}
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                                         linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                        transform: 'perspective(500px) rotateX(60deg) scale(2)',
                        transformOrigin: 'top center'
                    }}
                />
            </motion.div>

            {/* Glowing Orbs */}
            <motion.div
                style={{ x: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
                className="absolute left-1/4 top-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"
            />
            <motion.div
                style={{ x: useTransform(scrollYProgress, [0, 1], [100, -100]), opacity }}
                className="absolute right-1/4 top-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tighter mb-6"
                >
                    Forge the Future
                </motion.h2>
                <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
                    Experience the next generation of enterprise intelligence.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                        Start Building
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
