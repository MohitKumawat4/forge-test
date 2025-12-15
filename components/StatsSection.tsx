"use client";

import { motion } from "framer-motion";

interface StatsSectionProps {
    className?: string;
}

export function StatsSection({ className = "" }: StatsSectionProps) {
    // Extended stats array with more points
    const stats = [
        { value: "50+", label: "Enterprise Clients" },
        { value: "99.9%", label: "Uptime SLA" },
        { value: "24/7", label: "Support Available" },
        { value: "150+", label: "Global Enterprises" },
        { value: "10M+", label: "Tasks Automated" },
        { value: "95%", label: "Cost Reduction" },
        { value: "5x", label: "Faster Deployment" },
        { value: "200+", label: "Integrations" },
        { value: "1M+", label: "Active Users" },
        { value: "50ms", label: "Response Time" },
    ];

    // Duplicate stats multiple times for seamless infinite loop
    const duplicatedStats = [...stats, ...stats, ...stats];

    // Calculate the width of one set of stats (min-w-[200px] + gap-16 = 200 + 64 = 264px per stat)
    const singleSetWidth = stats.length * (200 + 64); // 10 stats * 264px = 2640px

    return (
        <div className={`bg-white py-4 mb-4 md:py-1 overflow-visible ${className}`}>
            <div className="relative w-full w-full md:w-[90%] max-w-screen-2xl mx-auto px-6 md:px-8 overflow-hidden">
                {/* Gradient overlays for fade effect on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10" />

                {/* Scrolling container */}
                <motion.div
                    className="flex gap-16"
                    animate={{
                        x: [0, -singleSetWidth], // Move exactly one set width for seamless loop
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // 30 seconds for one complete loop
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedStats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center min-w-[200px] shrink-0"
                        >
                            <dt className="text-3xl font-bold tracking-tight text-black sm:text-4xl whitespace-nowrap">
                                {stat.value}
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-zinc-400 whitespace-nowrap">
                                {stat.label}
                            </dd>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
