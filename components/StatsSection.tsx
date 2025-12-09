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

    // Duplicate stats for seamless loop
    const duplicatedStats = [...stats, ...stats];

    return (
        <div className={`bg-white py-8 overflow-hidden ${className}`}>
            <div className="relative">
                {/* Gradient overlays for fade effect on edges */}
                {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-zinc-950 to-transparent z-10" /> */}
                {/* <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-zinc-950 to-transparent z-10" /> */}

                {/* Scrolling container */}
                <motion.div
                    className="flex gap-16"
                    animate={{
                        x: [0, -50 * stats.length * 16], // Move by total width of original stats
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 100, // Adjust speed here (lower = faster)
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
