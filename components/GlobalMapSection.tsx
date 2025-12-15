"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

// Import the Globe component with no SSR (required for three.js)
const GlobeDemo = dynamic(
    () => import("@/components/ui/globe").then((mod) => mod.GlobeDemo),
    { ssr: false, loading: () => <div className="w-full h-full flex items-center justify-center"><div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" /></div> }
);

// Animated Counter Component - animates numbers with smooth easeOut effect
function AnimatedCounter({
    value,
    prefix = "",
    suffix = ""
}: {
    value: number;
    prefix?: string;
    suffix?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 5000; // 5 seconds
        const startTime = Date.now();
        const startValue = 0;
        const endValue = value;

        // Ease-out cubic function: starts fast, ends slow
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const currentValue = Math.round(startValue + (endValue - startValue) * easedProgress);

            setDisplayValue(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {prefix}
            <span>{displayValue}</span>
            {suffix}
        </span>
    );
}

interface GlobalMapSectionProps {
    className?: string;
}

export function GlobalMapSection({ className = "" }: GlobalMapSectionProps) {
    return (
        <div className={`relative py-16 md:py-32 sm:py-40 lg:py-48 min-h-screen bg-black overflow-hidden ${className}`}>
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
                />

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
                    className="mx-auto max-w-2xl text-center mb-12"
                >
                    <h2 className="text-h2-apple text-white drop-shadow-lg">
                        Serving Enterprises from 30+ Countries
                    </h2>
                    <p className="mt-6 text-p1-apple text-zinc-300">
                        Our AI-powered platform is trusted by businesses worldwide, delivering intelligent automation across continents.
                    </p>
                </motion.div>


                {/* Globe Container - Square aspect ratio for perfectly round globe */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mx-auto w-full max-w-[800px] aspect-square"
                >
                    <GlobeDemo
                        globeConfig={{
                            pointSize: 4,
                            globeColor: "#062056",
                            showAtmosphere: true,
                            atmosphereColor: "#38bdf8",
                            atmosphereAltitude: 0.15,
                            emissive: "#062056",
                            emissiveIntensity: 0.1,
                            shininess: 0.9,
                            polygonColor: "rgba(255,255,255,0.7)",
                            ambientLight: "#38bdf8",
                            directionalLeftLight: "#ffffff",
                            directionalTopLight: "#ffffff",
                            pointLight: "#ffffff",
                            arcTime: 3000,
                            arcLength: 0.4,
                            rings: 3,
                            maxRings: 5,
                            autoRotate: true,
                            autoRotateSpeed: 0.5,
                        }}
                    />
                </motion.div>

                {/* Stats below globe */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4"
                >
                    {[
                        { numericVal: 30, prefix: "", suffix: "+", label: "Countries Served" },
                        { numericVal: 5, prefix: "", suffix: "", label: "Continents" },
                        { numericVal: 150, prefix: "", suffix: "+", label: "Global Clients" },
                        { numericVal: 24, prefix: "", suffix: "/7", label: "Worldwide Support" }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
                                <AnimatedCounter
                                    value={stat.numericVal}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                />
                            </div>
                            <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
