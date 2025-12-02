"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GlobalMapSectionProps {
    className?: string;
}

export function GlobalMapSection({ className = "" }: GlobalMapSectionProps) {
    return (
        <div className={`bg-black py-24 sm:py-32 ${className}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Serving Enterprises from 30+ Countries
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Our AI-powered platform is trusted by businesses worldwide, delivering intelligent automation across continents.
                    </p>
                </motion.div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900/50 ring-1 ring-white/10"
                >
                    <Image
                        src="/_map.png"
                        alt="Global presence map showing 30+ countries"
                        fill
                        className="object-contain"
                        priority
                    />

                    {/* Gradient overlay for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
                </motion.div>

                {/* Optional: Stats below map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">30+</div>
                        <div className="mt-2 text-sm text-zinc-400">Countries Served</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">5</div>
                        <div className="mt-2 text-sm text-zinc-400">Continents</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">150+</div>
                        <div className="mt-2 text-sm text-zinc-400">Global Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">24/7</div>
                        <div className="mt-2 text-sm text-zinc-400">Worldwide Support</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
