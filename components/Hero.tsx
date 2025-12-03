"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { LeftArrow, RightArrow } from "./HandDrawnArrow";
import { AnnouncementCard } from "./AnnouncementCard";

interface HeroProps {
    className?: string;
}

export function Hero({ className = "" }: HeroProps) {
    return (
        <div
            className={`relative flex min-h-screen flex-col justify-start overflow-hidden pt-48 ${className}`}
            style={{
                background: 'radial-gradient(circle at 20% 20%, #ffffff 0%, #fdf4ff 25%, #f5f3ff 50%, #eef2ff 100%)'
            }}
        >
            {/* 3D Spline Background */}
            <div className="absolute inset-0 z-0">
                <Spline
                    scene="/MASCOT.spline"
                    className="w-full h-full bg-transparent"
                />
            </div>

            {/* Background Gradients/Blobs - Adjusted to match reference image colors */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Top Left - Soft Purple/White Glow */}
                <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-purple-100/50 blur-[100px] mix-blend-multiply" />

                {/* Top Right - Cool Blue Accent */}
                <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-200/40 blur-[100px] mix-blend-multiply" />

                {/* Bottom Left - Strong Pink Glow */}
                <div className="absolute -bottom-[10%] left-[5%] w-[50%] h-[50%] rounded-full bg-pink-300/30 blur-[100px] mix-blend-multiply" />

                {/* Bottom Right - Soft Indigo/Lavender */}
                <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-200/30 blur-[100px] mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pointer-events-none">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-start text-left pt-10 lg:pt-0 pointer-events-auto">
                        {/* Announcement Card */}
                        <div className="mb-8">
                            <AnnouncementCard />
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-4xl text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6"
                        >
                            Transform Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                Business Logic
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="mt-4 max-w-1/2 text-lg leading-8 text-gray-600 font-light"
                        >
                            Intelligent AI agents that automate workflows,
                            enhance productivity, and drive business growth.
                            {/* Experience the future of enterprise automation today. */}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="mt-10 flex flex-wrap items-center gap-6"
                        >
                            <a
                                href="#"
                                className="rounded-full bg-teal-400 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-teal-500 transition-all transform hover:scale-105"
                            >
                                Start Building
                            </a>
                            <a href="#" className="group flex items-center gap-2 text-base font-semibold leading-6 text-blue-500 hover:text-blue-600 transition-colors">
                                View Documentation
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        </motion.div>

                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-12 flex items-center gap-4 text-sm text-zinc-500"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-8 w-8 rounded-full bg-zinc-800 ring-2 ring-black border border-zinc-700" />
                                ))}
                            </div>
                            <p>Trusted by 150+ Global Enterprises</p>
                        </motion.div> */}
                    </div>

                    {/* Empty column for the robot mascot */}
                    <div className="hidden lg:block" />
                </div>
            </div>

            {/* Hand drawn arrows */}
            <LeftArrow className="absolute bottom-10 left-10" />
            <RightArrow className="absolute bottom-10 right-10" />
        </div>
    );
}
