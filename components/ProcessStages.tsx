"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView, AnimatePresence, LayoutGroup, useScroll, useMotionValueEvent } from "framer-motion";
import { Check } from "lucide-react";


// Vertical Accordion Component (Controlled)
function VerticalAccordion({ currentStage }: { currentStage: number }) {
    return (
        <div className="flex flex-col gap-2 w-full pb-12 px-4 transition-all duration-800">
            {stages.map((stage, i) => {
                const isActive = currentStage === i;
                return (
                    <motion.div
                        key={stage.id}
                        layout
                        animate={{
                            backgroundColor: isActive ? "rgb(255, 255, 255)" : "rgb(248, 250, 252)",
                            borderColor: isActive ? "rgb(52, 211, 153)" : "rgb(226, 232, 240)",
                            height: isActive ? "auto" : 68
                        }}
                        className={`
                            relative rounded-2xl border overflow-hidden
                            ${isActive ? 'shadow-md shadow-emerald-500/10' : ''}
                        `}
                    >
                        {/* Header / Banner */}
                        <div className="absolute top-0 left-0 right-0 p-5 flex items-center gap-4 h-[68px] z-20">
                            {/* Badge */}
                            <motion.div
                                animate={{
                                    backgroundColor: isActive ? "rgb(209, 250, 229)" : "rgb(241, 245, 249)",
                                    color: isActive ? "rgb(5, 150, 105)" : "rgb(100, 116, 139)",
                                    scale: isActive ? 1 : 0.9
                                }}
                                className="w-10 h-10 rounded-full font-bold text-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                            >
                                {stage.id}
                            </motion.div>

                            <motion.h3
                                animate={{ color: isActive ? "rgb(15, 23, 42)" : "rgb(71, 85, 105)" }}
                                className="text-lg font-bold transition-colors duration-300"
                            >
                                {stage.title}
                            </motion.h3>

                            {/* Arrow */}
                            <div className="ml-auto">
                                <motion.div
                                    animate={{ rotate: isActive ? 180 : 0 }}
                                    className="text-slate-400"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                </motion.div>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        <div className="pt-[68px] px-5 pb-1">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -20 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                                className="flex flex-col h-full"
                            >
                                <div className="text-emerald-600 font-semibold text-sm mb-4 uppercase tracking-wide">
                                    {stage.timeline || "Phase " + stage.id}
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {stage.items.map((item, k) => (
                                        <li key={k} className="flex items-start gap-3 text-slate-600 text-sm">
                                            <div className="mt-0.5 min-w-4 text-emerald-500">
                                                <Check size={16} strokeWidth={3} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 border-t border-slate-100 mt-4">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Output</div>
                                    <div className="text-sm font-semibold text-slate-800">{stage.output}</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

const stages = [
    {
        id: 1,
        title: "Discovery",
        timeline: "",
        items: [
            "AI-powered interviews and requirement analysis",
            "Business process mapping",
            "Stakeholder input gathering"
        ],
        output: "Comprehensive specification document"
    },
    {
        id: 2,
        title: "Architecture",
        timeline: "",
        items: [
            "System design and tool selection",
            "Integration planning",
            "Dashboard wireframing"
        ],
        output: "Complete technical blueprint"
    },
    {
        id: 3,
        title: "Build",
        timeline: "",
        items: [
            "Autonomous tool generation",
            "Custom dashboard creation",
            "Integration and testing"
        ],
        output: "Fully functional platform"
    },
    {
        id: 4,
        title: "Deploy & Manage",
        timeline: "",
        items: [
            "Platform deployment",
            "AI agent activation",
            "Continuous optimization"
        ],
        output: "Self-managing business infrastructure"
    }
];

// Mobile Scroll Process Wrapper
function MobileScrollProcess() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeStage, setActiveStage] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        // Map 0-1 to 0-3 stages
        // 0.0 - 0.25 -> 0
        // 0.25 - 0.5 -> 1
        // 0.5 - 0.75 -> 2
        // 0.75 - 1.0 -> 3
        const stage = Math.min(3, Math.floor(latest * 4));
        if (stage !== activeStage) {
            setActiveStage(stage);
        }
    });

    return (
        <div ref={containerRef} className="relative h-[400vh] -mt-40 md:mt-0 bg-white "> {/* Tall container to allow scroll */}
            <div className="sticky top-0 h-screen flex flex-col pt-19 bg-white z-10 overflow-hidden">
                {/* Header Section (Replicated for Mobile Sticky View) */}
                <div className="text-left px-4 mb-2 shrink-0">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                        Our Process
                    </p>
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
                        From Zero to Full Platform in <span className="text-emerald-500">4 Stages</span>
                    </h2>
                    <p className="text-black text-base leading-[25px] lg:leading-7">
                        Our streamlined process takes you from initial discovery to a fully deployed, self-managing business infrastructure.
                    </p>
                </div>

                {/* Accordion List */}
                <VerticalAccordion currentStage={activeStage} />
            </div>
        </div>
    );
}

// Reusable Stage Card Component (Desktop)
function StageCard({ stage }: { stage: typeof stages[0] }) {
    return (
        <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-200 hover:border-emerald-400 transition-all duration-300 flex flex-col relative group overflow-hidden hover:shadow-lg hover:shadow-emerald-500/10 min-w-[280px]">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Badge */}
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ring-4 ring-white">
                    {stage.id}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1">{stage.title}</h3>
                <div className="text-emerald-600 font-semibold text-sm mb-6 uppercase tracking-wide">{stage.timeline}</div>

                <ul className="space-y-4 mb-8 grow">
                    {stage.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm group-hover:text-slate-700 transition-colors">
                            <div className="mt-0.5 min-w-4 text-emerald-500">
                                <Check size={16} strokeWidth={3} />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="pt-6 border-t border-slate-200 mt-auto group-hover:border-emerald-100 transition-colors">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-hover:text-emerald-600/70 transition-colors">Output</div>
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">{stage.output}</div>
                </div>
            </div>
        </div>
    );
}

// Tilt Wrapper
function TiltCard({ children, delay }: { children: React.ReactNode, delay: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            style={{
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="h-full"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="h-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

export function ProcessStages() {
    return (
        <section className="py-0 md:py-24 bg-white relative md:overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"></div>

            {/* Mobile Scroll Component - Handles its own Sticky Header & Accordion */}
            <div className="md:hidden">
                <MobileScrollProcess />
            </div>

            {/* Desktop View */}
            <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        From Zero to Full Platform in <span className="text-emerald-500">4 Stages</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-[25px] lg:leading-7">
                        Our streamlined process takes you from initial discovery to a fully deployed, self-managing business infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stages.map((stage, index) => (
                        <TiltCard key={stage.id} delay={index * 0.1}>
                            <StageCard stage={stage} />
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
