"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GlobalMapSectionProps {
    className?: string;
}

export function GlobalMapSection({ className = "" }: GlobalMapSectionProps) {
    return (
        <div className={`relative py-24 sm:py-32 bg-black overflow-hidden ${className}`}>
            {/* Immersive Background Layers */}
            <div className="absolute inset-0 z-0">
                {/* 1. Deep Radial Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-slate-900 via-[#050505] to-black" />

                {/* 2. Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                >
                    <motion.div
                        className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-900/10 to-transparent"
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* 3. Ambient Glow Orbs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center mb-16"
                >
                    <h2 className="text-h2-apple text-white drop-shadow-lg">
                        Serving Enterprises from 30+ Countries
                    </h2>
                    <p className="mt-6 text-p1-apple text-zinc-300">
                        Our AI-powered platform is trusted by businesses worldwide, delivering intelligent automation across continents.
                    </p>
                </motion.div>

                {/* Map Container - floating directly on background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-video"
                >
                    <Image
                        src="/_map.png"
                        alt="Global presence map showing 30+ countries"
                        fill
                        className="object-contain opacity-90"
                        priority
                    />

                    {/* Gradient overlay for better integration */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/50 pointer-events-none" />

                    {/* Scanning Line Effect on Map */}
                    <motion.div
                        className="absolute inset-0 w-full h-[2px] bg-cyan-400/30 blur-sm"
                        animate={{ top: ['0%', '100%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>

                {/* Optional: Stats below map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4"
                >
                    {[
                        { val: "30+", label: "Countries Served" },
                        { val: "5", label: "Continents" },
                        { val: "150+", label: "Global Clients" },
                        { val: "24/7", label: "Worldwide Support" }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
                                {stat.val}
                            </div>
                            <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
