"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
// import { LeftArrow, RightArrow } from "./HandDrawnArrow";
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
            {/* 3D Spline Background - Desktop Only */}
            <div className="hidden lg:block absolute inset-0 z-0">
                <Spline
                    scene="/MASCOT_FINAL_.spline"
                    className="w-full h-full bg-transparent"
                />
            </div>

            {/* Mobile Fallback Background - Visible only on mobile/tablet */}
            <div className="lg:hidden absolute inset-0 z-0 bg-linear-to-b from-blue-50/50 to-white overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl" />
                <div className="absolute top-40 -left-20 w-60 h-60 bg-blue-300/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-linear-to-t from-white via-white/80 to-transparent" />
            </div>

            {/* Background Gradients/Blobs - Moved after Spline to overlay if Spline is opaque */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-200/40 blur-[120px] mix-blend-multiply" />
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-200/40 blur-[120px] mix-blend-multiply" />
                <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-pink-200/40 blur-[120px] mix-blend-multiply" />
            </div> */}

            {/* Content */}
            <div className="relative z-50 mx-auto max-w-7xl px-6 lg:px-8 w-full pointer-events-none">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-12 lg:pt-0 pointer-events-auto -mt-10 lg:-mt-15 relative z-10">
                        {/* Announcement Card */}
                        <div className="mb-6 lg:mb-8 w-auto inline-flex justify-center lg:justify-start">
                            {/* <AnnouncementCard /> */}
                        </div>

                        {/* Headline Block */}
                        <div className="font-bold tracking-tight text-black text-4xl sm:text-5xl lg:text-7xl mb-6 lg:mb-8 leading-[1.1] flex flex-col items-center lg:items-start gap-2 lg:gap-x-4 lg:flex-row lg:flex-wrap w-full max-w-[90vw] lg:max-w-none">
                            <span>Deploy</span>
                            <div className="relative h-[1.3em] lg:h-[1.3em] w-full lg:w-auto min-w-[10ch] lg:min-w-[12ch] flex justify-center lg:justify-start">
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="block text-[#5ccee5] whitespace-normal lg:whitespace-nowrap text-center lg:text-left leading-tight"
                                    >
                                        {words[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>

                        <p className="mt-8 lg:mt-6 text-base lg:text-lg leading-7 lg:leading-8 text-zinc-600 max-w-[90%] lg:max-w-3xl mb-8 lg:mb-10 block">
                            The complete enterprise AI intelligence layer. Agents that engineer solutions,
                            build custom tools, discover opportunities, and drive growth.
                        </p>

                        {/* Buttons & Social Proof */}
                        <div className="flex flex-col items-center lg:items-start w-full gap-8">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                className="flex flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
                            >
                                <a
                                    href="#"
                                    className="flex-1 sm:flex-none text-center rounded-full bg-[#5ccee5] px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-semibold text-white shadow-lg hover:bg-teal-500 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
                                >
                                    Start Building
                                </a>
                                <a href="#" className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm lg:text-base font-semibold leading-6 text-black hover:text-[#5ccee5] transition-colors py-3 px-4 rounded-full border border-gray-200 lg:border-none bg-white lg:bg-transparent">
                                    See Demo
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            </motion.div>

                            {/* Mobile Only: Extra Content to fill emptiness */}
                            <div className="lg:hidden w-full pt-8 border-t border-gray-100/50 flex flex-col items-center gap-4">
                                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Trusted by Industry Leaders</p>
                                <div className="flex items-center gap-6 opacity-60 grayscale">
                                    {/* Simple Placeholder Logos or Text for Mobile Filler */}
                                    <div className="h-6 w-20 bg-zinc-300 rounded animate-pulse" />
                                    <div className="h-6 w-20 bg-zinc-300 rounded animate-pulse" />
                                    <div className="h-6 w-20 bg-zinc-300 rounded animate-pulse" />
                                </div>

                                {/* Feature Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100">Enterprise Ready</span>
                                    <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full border border-purple-100">SOC2 Compliant</span>
                                    <span className="px-3 py-1 bg-teal-50 text-teal-600 text-xs font-medium rounded-full border border-teal-100">99.9% Uptime</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Empty column for the robot mascot */}
                    <div className="hidden lg:block" />
                </div>
            </div>

            {/* Background Elements for Mobile - To reduce "Bad Design" feel */}
            <div className="lg:hidden absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
            </div>
        </div>
    );
}
