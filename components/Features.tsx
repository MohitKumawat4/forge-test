"use client";

import {
    Bot,
    Workflow,
    LineChart,
    Zap,
    Shield,
    Users,
    ArrowRight,
    Globe
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    {
        name: "AI Agents & Automation",
        description: "Deploy intelligent AI agents that handle customer support, sales, and operations 24/7 with human-like interactions.",
        icon: Bot,
        className: "lg:col-span-2 lg:row-span-2",
        image: "/features/ai-agents.png",
        gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
        name: "Workflow Automation",
        description: "Streamline complex business processes with no-code automation.",
        icon: Workflow,
        className: "lg:col-span-1 lg:row-span-1",
        image: "/features/workflow.png",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        name: "Real-time Analytics",
        description: "Get actionable insights from your data with AI-powered analytics.",
        icon: LineChart,
        className: "lg:col-span-1 lg:row-span-1",
        image: "/features/analytics.png",
        gradient: "from-pink-500/20 to-orange-500/20"
    },
    {
        name: "Lightning Fast",
        description: "Built on cutting-edge infrastructure for instant responses.",
        icon: Zap,
        className: "lg:col-span-1 lg:row-span-1",
        image: "/features/speed.png",
        gradient: "from-yellow-500/20 to-red-500/20"
    },
    {
        name: "Enterprise Security",
        description: "Bank-grade encryption, SOC2 compliance, and advanced security features.",
        icon: Shield,
        className: "lg:col-span-2 lg:row-span-1",
        image: "/features/security.png",
        gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
        name: "Team Collaboration",
        description: "Seamless collaboration tools for your entire team.",
        icon: Users,
        className: "lg:col-span-1 lg:row-span-1",
        image: "/features/collaboration.png",
        gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
        name: "Global Infrastructure",
        description: "Deploy your applications to a global edge network for low latency and high availability anywhere in the world.",
        icon: Globe,
        className: "lg:col-span-2 lg:row-span-1",
        image: "/features/global.png",
        gradient: "from-indigo-500/20 to-cyan-500/20"
    },
];

interface FeaturesProps {
    className?: string;
}

export function Features({ className = "" }: FeaturesProps) {
    return (
        <section className={`relative bg-white py-24 sm:py-32 overflow-hidden -mt-1 ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/BLUE_BG.png"
                    alt="Blue Background"
                    fill
                    className="object-cover object-center"
                    quality={100}
                    priority
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-base font-semibold leading-7 text-blue-400"
                    >
                        Everything you need
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-2 text-h2-apple text-white"
                    >
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Scale & Speed</span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-p1-apple text-zinc-300"
                    >
                        From AI-powered automation to advanced analytics, our platform provides all the tools you need to transform your business operations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`relative group overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md p-8 hover:border-white/30 hover:bg-black/40 transition-all duration-300 ${feature.className}`}
                        >
                            {/* Background Image - Subtle overlay */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={feature.image}
                                    alt={feature.name}
                                    fill
                                    className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            </div>

                            {/* Hover Gradient Background (Overlay) */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0`} />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-md group-hover:bg-white/20 transition-colors">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-semibold leading-7 text-white mb-2 drop-shadow-md">
                                        {feature.name}
                                    </h3>
                                    <p className="text-base leading-7 text-zinc-300 group-hover:text-white transition-colors">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
