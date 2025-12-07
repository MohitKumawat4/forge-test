"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { LeftArrow, RightArrow } from "./HandDrawnArrow";
import { AnnouncementCard } from "./AnnouncementCard";

interface HeroProps {
    className?: string;
}

const words = [
    "AI-Powered Enterprise Apps",
    "Autonomous AI Workflows",
    "Enterprise AI Solutions",
    "Intelligent AI Agents",
    "AI-Optimized Internal Tools"
];

export function Hero({ className = "" }: HeroProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 1800); // Wait 1.5s + 0.3s transition
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`relative flex min-h-screen flex-col justify-start overflow-hidden pt-48 ${className}`}
            style={{
                // background: 'radial-gradient(circle at 20% 20%, #f8f8ff 0%, #e0e8ff 25%, #cce0ff 60%, #b8c8e0 100%)'
            }}
        >
            {/* 3D Spline Background */}
            <div className="absolute inset-0 z-0">
                <Spline
                    scene="/MASCOT_FINAL_.spline"
                    className="w-full h-full bg-transparent"
                />
            </div>

            {/* Background Gradients/Blobs - Moved after Spline to overlay if Spline is opaque */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-200/40 blur-[120px] mix-blend-multiply" />
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-200/40 blur-[120px] mix-blend-multiply" />
                <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-pink-200/40 blur-[120px] mix-blend-multiply" />
            </div> */}

            {/* Content */}
            <div className="relative z-50 mx-auto max-w-7xl px-6 lg:px-8 w-full pointer-events-none">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-start text-left pt-10 lg:pt-0 pointer-events-auto -mt-15">
                        {/* Announcement Card */}
                        <div className="mb-8">
                            <AnnouncementCard />
                        </div>

                        {/* New H1 and P block with rotating text */}
                        <div className="font-bold tracking-tight text-black text-5xl sm:text-6xl lg:text-7xl mb-8 leading-[1.1] flex flex-wrap gap-x-4 items-center">
                            <span>Deploy</span>
                            <div className="relative h-[1.1em] overflow-hidden min-w-[12ch]">
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-100%" }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="block h-[1.1em] text-[#5ccee5] whitespace-nowrap"
                                    >
                                        {words[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>

                        <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-3xl mb-10 block">
                            The complete enterprise AI intelligence layer. Agents that engineer solutions,
                            build custom tools, discover opportunities, optimize workflows and operations,
                            orchestrate teams, and drive growth. Stop managing operations and start scaling.
                            You focus on strategy and growth. We handle everything else.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="mt-4 flex flex-wrap items-center gap-6"
                        >
                            <a
                                href="#"
                                className="rounded-full bg-[#5ccee5] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-teal-500 transition-all transform hover:scale-105"
                            >
                                Start Building
                            </a>
                            <a href="#" className="group flex items-center gap-2 text-base font-semibold leading-6 text-black hover:text-[#5ccee5] transition-colors">
                                See Demo
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        </motion.div>


                    </div>

                    {/* Empty column for the robot mascot */}
                    <div className="hidden lg:block" />
                </div>

                {/* Bottom Section: Enterprise Details */}




                {/* Bottom Gradient Blend to White */}
                {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent pointer-events-none z-20" /> */}
            </div>
        </div>
    );
}
