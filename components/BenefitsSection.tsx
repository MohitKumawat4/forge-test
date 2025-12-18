"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Box, Layers, Settings, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const benefits = [
    {
        title: "Use a pre-integrated platform",
        description: "Explore our library to find out-of-the-box solutions that connect with your existing stack instantly.",
        cta: "Explore directory",
        icon: Layers,
        color: "bg-blue-500",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Build with AI-certified experts",
        description: "Work with a consulting partner that can integrate and deploy custom AI solutions for you.",
        cta: "View partners",
        icon: Settings,
        color: "bg-purple-500",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Try our no-code products",
        description: "Set up intelligent automation, accept inputs, and generate outputs directly from your Dashboard.",
        cta: "Start building",
        icon: Box,
        color: "bg-blue-600",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
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

const fullImageVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
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

function BenefitCard({ benefit }: { benefit: typeof benefits[0] }) {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            className="group relative flex flex-col rounded-lg overflow-hidden bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300 transform-gpu h-full border border-slate-100/50"
        >
            {/* Graphic Area (Container) */}
            <motion.div
                variants={graphicContainerVariants}
                className="w-full bg-[#f6f9fc] flex items-center justify-center overflow-hidden relative border-b border-slate-100 h-[240px] md:h-auto"
            >
                {benefit.image && benefit.image.startsWith('http') ? (
                    <motion.div
                        variants={fullImageVariants}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={benefit.image}
                            alt={benefit.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        variants={imageVariants}
                        className="relative w-full h-full flex items-center justify-center p-8"
                    >
                        <div className="relative z-10 flex items-center justify-center w-full h-full">
                            {/* Inner Content Box */}
                            <div className="relative w-full max-w-[200px] aspect-square rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
                                {/* Icon/Content */}
                                <div className="relative z-10">
                                    <benefit.icon className={`w-12 h-12 ${benefit.color.replace('bg-', 'text-')}`} />
                                </div>

                                {/* Decorative colored blobs inside the box */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full ${benefit.color} opacity-10 blur-xl`} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>

            {/* Content Area */}
            <div className="flex-1 px-8 pt-8 pb-10 relative bg-white z-20 flex flex-col justify-between">
                <div>
                    <h3 className="text-[19px] font-bold text-[#0a2540] mb-3 leading-snug">
                        {benefit.title}
                    </h3>
                    <p className="text-[15px] text-[#425466] leading-[25px] lg:leading-7">
                        {benefit.description}
                    </p>
                </div>

                {/* CTA Link */}
                <motion.div
                    variants={ctaVariants}
                    className="mt-6 flex items-center"
                >
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("open-waitlist"))}
                        className="flex items-center gap-1.5 text-[#635bff] font-semibold text-[15px] hover:text-[#0a2540] transition-colors group-hover:gap-2 cursor-pointer"
                    >
                        {benefit.cta}
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}

function MobileBenefitsCarousel({ items }: { items: React.ReactNode[] }) {
    // Mobile Carousel Component -M
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
        <div className="relative w-full overflow-visible">
            <div className="relative h-[480px] w-full">
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
                    className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white shadow-md hover:bg-blue-700 z-20"
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
                            ${idx === current ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'}
                        `}
                    />
                ))}
            </div>
        </div>
    );
}

export function BenefitsSection({ className = "" }: { className?: string }) {
    return (
        <section className={`py-5 md:py-32 bg-white relative overflow-hidden ${className}`}>
            {/* Background Grid Lines (Stripe-like) */}
            <div className="absolute inset-0 mx-auto w-full md:w-[90%] max-w-screen-2xl px-6 md:px-8 pointer-events-none">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full border-l border-r border-dashed border-slate-200/60 mx-auto">
                    <div className="hidden md:block border-r border-dashed border-slate-200/60 h-full" />
                    <div className="hidden md:block border-r border-dashed border-slate-200/60 h-full" />
                </div>
            </div>

            <div className="relative mx-auto w-full md:w-[90%] max-w-screen-2xl px-6 md:px-8">

                {/* Header Section */}
                <div className="max-w-2xl mb-8 lg:mb-24 text-left relative z-10">
                    <h3 className="text-sm font-bold text-[#635bff] tracking-wider uppercase mb-0.5 lg:mb-5">
                        Launch with ease
                    </h3>
                    <h2 className="text-3xl md:text-[46px] font-bold text-[#0a2540] mb-4 lg:mb-8 tracking-tight leading-[1.15]">
                        Low- and no-code options for<span className="md:hidden"> </span><br className="hidden md:block" />
                        getting started
                    </h2>
                    <p className="text-base lg:text-lg text-[#425466] leading-[25px] lg:leading-7 max-w-xl mb-3 lg:mb-0">
                        If you'd like to use Enterprise Forge for your business but don't have developers on staff, no problem. We have a few options depending on your needs.
                    </p>

                    {/* Border separator - Mobile only */}
                    {/* <div className="md:hidden border-t border-slate-900 border-1.5"></div> */}
                </div>

                {/* Mobile Carousel - Hidden on md and up -M */}
                <div className="md:hidden">
                    <MobileBenefitsCarousel items={benefits.map((benefit, index) => (
                        <BenefitCard key={index} benefit={benefit} />
                    ))} />
                </div>

                {/* Desktop Grid - Hidden on mobile -W */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 relative z-10">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} benefit={benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
}
