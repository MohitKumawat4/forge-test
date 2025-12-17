"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { MessageSquare, ShoppingCart, Users, FileText, Headphones, ArrowRight } from "lucide-react";

const useCases = [
    {
        name: "Customer Support",
        description: "AI agents that handle customer inquiries 24/7 with instant, accurate responses. Reduce wait times and improve satisfaction scores immediately.",
        icon: Headphones,
        color: "bg-[#8A9A8B]", // Olive Green
        gradient: "from-[#8A9A8B] to-[#7A8A7B]",
        textColor: "text-[#8A9A8B]",
    },
    {
        name: "Sales Automation",
        description: "Qualify leads, schedule meetings, and close deals faster with AI assistance. Your sales team can focus on closing while AI handles the prospecting.",
        icon: ShoppingCart,
        color: "bg-[#A67C6D]", // Terracotta/Brown
        gradient: "from-[#A67C6D] to-[#966C5D]",
        textColor: "text-[#A67C6D]",
    },
    {
        name: "HR & Recruiting",
        description: "Streamline hiring, onboarding, and employee management processes. Automate resume screening and interview scheduling effortlessly.",
        icon: Users,
        color: "bg-[#7C9082]", // Sage Green
        gradient: "from-[#7C9082] to-[#6C8072]",
        textColor: "text-[#7C9082]",
    },
    {
        name: "Content Generation",
        description: "Create marketing content, reports, and documentation at scale. Maintain brand consistency while producing content 10x faster.",
        icon: FileText,
        color: "bg-[#B5A390]", // Warm Taupe
        gradient: "from-[#B5A390] to-[#A59380]",
        textColor: "text-[#B5A390]",
    },
    {
        name: "Internal Communication",
        description: "Improve team collaboration with AI-powered chat and knowledge bases. Break down silos and ensure everyone has access to the right information.",
        icon: MessageSquare,
        color: "bg-[#8C8C8C]", // Neutral Grey
        gradient: "from-[#8C8C8C] to-[#7C7C7C]",
        textColor: "text-[#8C8C8C]",
    },
];

interface UseCasesProps {
    className?: string;
}

export function UseCases({ className = "" }: UseCasesProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const length = useCases.length;
            const step = 1 / length;
            const index = Math.min(
                Math.floor(latest / step),
                length - 1
            );
            setActiveIndex(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div
            ref={containerRef}
            className={`relative h-[600vh] bg-white ${className}`}
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-stone-100/50 via-white to-white" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-stone-100/50 via-white to-white" />
                <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black to-transparent z-10" />
            </div>

            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                {/* Background Image */}
                {/* <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/USE_BG.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                /> */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Side: Static Header + Dynamic Bullet Point */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-12">
                                <h2 className="text-base font-semibold leading-7 text-[#A67C6D]">Use Cases</h2>
                                <p className="mt-2 text-h2-apple text-zinc-900">
                                    Transform Every Department
                                </p>
                                <p className="mt-6 text-p1-apple text-zinc-800 leading-[25px] lg:leading-7">
                                    Our AI platform adapts to your business needs, whether you're in e-commerce, SaaS, finance, or any other industry.
                                </p>
                            </div>

                            {/* Dynamic Bullet Point Container */}
                            <div className="relative h-48">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <div className="flex gap-x-6">
                                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${useCases[activeIndex].color} bg-opacity-15`}>
                                                {(() => {
                                                    const Icon = useCases[activeIndex].icon;
                                                    return <Icon className={`h-6 w-6 ${useCases[activeIndex].textColor}`} aria-hidden="true" />;
                                                })()}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold leading-7 text-zinc-900 mb-2">
                                                    {useCases[activeIndex].name}
                                                </h3>
                                                <p className="text-body-apple text-zinc-900 leading-[25px] lg:leading-7">
                                                    {useCases[activeIndex].description}
                                                </p>
                                                <div className={`mt-4 flex items-center ${useCases[activeIndex].textColor} text-sm font-bold cursor-pointer hover:opacity-80 transition-opacity`}>
                                                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Right Side: Card Deck */}
                        <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
                            {useCases.map((useCase, index) => {
                                // Determine state relative to active index
                                const isActive = index === activeIndex;
                                const isUpcoming = index > activeIndex;
                                const isPast = index < activeIndex;

                                // Calculate offset for upcoming cards to create "deck" look
                                const offset = index - activeIndex;

                                return (
                                    <motion.div
                                        key={useCase.name}
                                        className="absolute w-full max-w-md aspect-4/3 rounded-2xl border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] overflow-hidden bg-white/90 backdrop-blur-sm"
                                        initial={false}
                                        animate={{
                                            zIndex: isUpcoming ? 50 - offset : (isActive ? 50 : 0),
                                            scale: isUpcoming ? 1 - (offset * 0.05) : (isActive ? 1 : 1.1),
                                            y: isUpcoming ? offset * 15 : (isActive ? 0 : -50),
                                            opacity: isUpcoming ? 1 - (offset * 0.2) : (isActive ? 1 : 0),
                                            rotateX: isPast ? -40 : 0,
                                            filter: isUpcoming ? `blur(${offset * 2}px)` : 'blur(0px)',
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.32, 0.72, 0, 1],
                                        }}
                                        style={{
                                            transformOrigin: "bottom center",
                                            boxShadow: isActive ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "none"
                                        }}
                                    >
                                        <div className={`absolute inset-0 bg-linear-to-br ${useCase.gradient} opacity-20`} />

                                        <div className="relative h-full p-8 flex flex-col">
                                            <div className="flex items-center justify-between border-b border-zinc-200/50 pb-4 mb-6">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-3 h-3 rounded-full ${useCase.color}`} />
                                                    <span className="text-sm font-semibold text-zinc-700">
                                                        {useCase.name} Dashboard
                                                    </span>
                                                </div>
                                                <div className="flex gap-1.5">
                                                    <div className="w-2 h-2 rounded-full bg-zinc-300" />
                                                    <div className="w-2 h-2 rounded-full bg-zinc-300" />
                                                </div>
                                            </div>

                                            {/* Abstract UI Content */}
                                            <div className="flex-1 space-y-4">
                                                <div className="flex gap-4">
                                                    <div className="w-1/3 h-20 rounded-lg bg-white shadow-sm border border-zinc-100" />
                                                    <div className="w-1/3 h-20 rounded-lg bg-white shadow-sm border border-zinc-100" />
                                                    <div className="w-1/3 h-20 rounded-lg bg-white shadow-sm border border-zinc-100" />
                                                </div>
                                                <div className="h-32 rounded-lg bg-white shadow-sm border border-zinc-100 w-full p-4">
                                                    <div className="w-full h-2 bg-zinc-100 rounded mb-2" />
                                                    <div className="w-2/3 h-2 bg-zinc-100 rounded mb-2" />
                                                    <div className="w-1/2 h-2 bg-zinc-100 rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
