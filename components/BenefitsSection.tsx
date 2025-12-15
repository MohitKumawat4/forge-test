"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Layers, Settings, Zap } from "lucide-react";
import Image from "next/image";

const benefits = [
    {
        title: "Use a pre-integrated platform",
        description: "Explore our library to find out-of-the-box solutions that connect with your existing stack instantly.",
        cta: "Explore directory",
        icon: Layers,
        color: "bg-blue-500",
        image: "/features/ai-agents.png" // Fallback to existing asset if needed or use icon
    },
    {
        title: "Build with AI-certified experts",
        description: "Work with a consulting partner that can integrate and deploy custom AI solutions for you.",
        cta: "View partners",
        icon: Settings,
        color: "bg-purple-500",
        image: "/features/workflow.png"
    },
    {
        title: "Try our no-code products",
        description: "Set up intelligent automation, accept inputs, and generate outputs directly from your Dashboard.",
        cta: "Start building",
        icon: Box,
        color: "bg-emerald-500",
        image: "/features/analytics.png"
    }
];

const graphicContainerVariants = {
    initial: { height: 280 },
    hover: { height: 200, transition: { duration: 0.4, ease: "easeOut" } }
} as const;

const imageVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 0.85, y: -10, transition: { duration: 0.4, ease: "easeOut" } }
} as const;

const textVariants = {
    initial: { y: 0 },
    hover: { y: 0, transition: { duration: 0.4, ease: "easeOut" } } // Text doesn't need to move if container shrinks, flow pulls it up? 
    // Actually, if we shrink height, text moves up. Let's rely on flow or slight adjust.
    // If we want text content to "move closer", shrinking image height does that.
} as const;

const ctaVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.1 } }
} as const;

export function BenefitsSection({ className = "" }: { className?: string }) {
    return (
        <section className={`py-32 bg-white relative overflow-hidden ${className}`}>
            {/* Background Grid Lines (Stripe-like) */}
            <div className="absolute inset-0 mx-auto w-full md:w-[90%] max-w-screen-2xl px-6 md:px-8 pointer-events-none">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full border-l border-r border-dashed border-slate-200/60 mx-auto">
                    <div className="hidden md:block border-r border-dashed border-slate-200/60 h-full" />
                    <div className="hidden md:block border-r border-dashed border-slate-200/60 h-full" />
                </div>
            </div>

            <div className="relative mx-auto w-full md:w-[90%] max-w-screen-2xl px-6 md:px-8">

                {/* Header Section */}
                <div className="max-w-2xl mb-24 text-left relative z-10">
                    <h3 className="text-sm font-bold text-[#635bff] tracking-wider uppercase mb-5">
                        Launch with ease
                    </h3>
                    <h2 className="text-4xl md:text-[46px] font-bold text-[#0a2540] mb-8 tracking-tight leading-[1.15]">
                        Low- and no-code options for<br />
                        getting started
                    </h2>
                    <p className="text-lg text-[#425466] leading-relaxed max-w-xl">
                        If you'd like to use Enterprise Forge for your business but don't have developers on staff, no problem. We have a few options depending on your needs.
                    </p>
                </div>

                {/* Cards Grid / Horizontal Scroll */}
                <div className="flex md:grid md:grid-cols-3 flex-nowrap overflow-x-auto md:overflow-visible gap-5 md:gap-8 snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0 relative z-10 scrollbar-hide">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial="initial"
                            whileHover="hover"
                            className="min-w-[85vw] md:min-w-0 snap-center group relative flex flex-col rounded-lg overflow-hidden bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300 transform-gpu bg-white"
                        >
                            {/* Graphic Area (Container) */}
                            <motion.div
                                variants={graphicContainerVariants}
                                className="w-full bg-[#f6f9fc] flex items-center justify-center overflow-hidden relative border-b border-slate-100 h-[240px] md:h-auto"
                            >
                                <motion.div
                                    variants={imageVariants}
                                    className="relative w-full h-full flex items-center justify-center p-8"
                                >
                                    {/* Placeholder Illustration Components */}
                                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                                        {/* Inner Content Box (The "Visible Container" user asked for?) */}
                                        <div className="relative w-full max-w-[200px] aspect-square rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                                            {/* Icon/Content */}
                                            <div className="relative z-10">
                                                <benefit.icon className={`w-12 h-12 ${benefit.color.replace('bg-', 'text-')}`} />
                                            </div>

                                            {/* Decorative colored blobs inside the box */}
                                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full ${benefit.color} opacity-10 blur-xl`} />
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Content Area */}
                            <div className="flex-1 px-8 pt-8 pb-10 relative bg-white z-20 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-[19px] font-bold text-[#0a2540] mb-3 leading-snug">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-[15px] text-[#425466] leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>

                                {/* CTA Link */}
                                <motion.div
                                    variants={ctaVariants}
                                    className="mt-6 flex items-center"
                                >
                                    <a href="#" className="flex items-center gap-1.5 text-[#635bff] font-semibold text-[15px] hover:text-[#0a2540] transition-colors group-hover:gap-2">
                                        {benefit.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
