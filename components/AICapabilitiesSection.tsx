"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Bot, Network, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
    {
        title: "AI Requirements Analyst",
        description: "Our first-stage AI conducts an intelligent discovery process, understanding your business model, workflows, team structure, and operational needs. It produces a detailed specification document that captures every requirement with precision and accuracy.",
        badge: "Days instead of months of requirements gathering",
        icon: Brain,
    },
    {
        title: "Autonomous Tool Builder",
        description: "The builder agent takes the specification and creates every internal tool your business needs—HRMS, CRM, accounting software, inventory management, payroll systems, and all ERP verticals. Can't find what you need? It generates entirely new tools on demand.",
        badge: "Infinite scalability and customization",
        icon: Bot,
    },
    {
        title: "AI Management Team",
        description: "Dedicated AI agents continuously monitor, optimize, and maintain your platform. Business Expert agents handle strategy, HR agents manage people operations, and specialized agents keep every system running flawlessly.",
        badge: "24/7 intelligent maintenance and optimization",
        icon: Network,
    }
];

// Reusable Card Component
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
    const Icon = feature.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative flex flex-col h-full bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all duration-300 min-w-[280px]"
        >
            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                </h3>

                <p className="text-slate-600 mb-8 leading-[25px] lg:leading-7 grow">
                    {feature.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-200">
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
                        <Sparkles size={14} className="fill-emerald-700/20" />
                        {feature.badge}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function MobileAICarousel({ items }: { items: React.ReactNode[] }) {
    // Mobile AI Carousel Component -M
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + items.length) % items.length);
    };

    return (
        <div className="relative w-full overflow-visible px-4 py-5 ">
            <div className="relative h-[600px] w-full">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute w-full h-full"
                    >
                        {items[current]}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-600 shadow-md hover:bg-slate-50 z-20"
                    onClick={() => paginate(-1)}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500 text-white shadow-md hover:bg-emerald-600 z-20"
                    onClick={() => paginate(1)}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > current ? 1 : -1);
                            setCurrent(idx);
                        }}
                        className={`
                            h-1.5 rounded-full transition-all duration-300 
                            ${idx === current ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-300'}
                        `}
                    />
                ))}
            </div>
        </div>
    );
}

export function AICapabilitiesSection() {
    // Create carousel items using the card components
    const carouselItems = features.map((feature, index) => (
        <FeatureCard key={feature.title} feature={feature} index={index} />
    ));

    return (
        <section className="py-5 md:py-24 bg-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[20px_20px] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-left lg:text-center mb-8 lg:mb-20">
                    {/* Category Label - Mobile only -M */}
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-0.5 mt-5 md:hidden">
                        AI Capabilities
                    </p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 lg:mb-6"
                    >
                        Intelligent. Autonomous. <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-cyan-600 md:inline">Built for You.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-black text-base lg:text-lg max-w-3xl lg:mx-auto leading-[25px] lg:leading-7 mb-3 lg:mb-0"
                    >
                        Our AI doesn't just generate code—it understands your business. Through deep-dive analysis, it creates a comprehensive specification of every internal tool you need, then architects and deploys a fully integrated platform tailored to your operations.
                    </motion.p>

                    {/* Border separator - Mobile only */}
                    {/* <div className="md:hidden border-t border-slate-900 border-1.5"></div> */}
                </div>

                {/* Mobile Carousel - Hidden on md and up -M */}
                <div className="md:hidden">
                    <MobileAICarousel items={carouselItems} />
                </div>

                {/* Desktop Grid - Hidden on mobile -W */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
