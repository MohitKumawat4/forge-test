"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";

// Animated Counter Component
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            setCount(Math.floor(percentage * value));

            if (progress < duration * 1000) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [value, duration]);

    return <>{count}</>;
};

// Start Animation when in view wrapper
const AnimateOnView = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
}

export function CompanyMetrics() {
    return (
        <section className="bg-[#0B1536] py-12 md:py-24 px-6 md:px-8 overflow-hidden rounded-3xl mx-4 md:mx-auto w-full md:w-[90%] max-w-screen-2xl mb-24 text-white relative">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

                {/* Left Column: Metrics & Progress Bars */}
                <div className="space-y-8 md:space-y-12">
                    <AnimateOnView>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight break-words">
                            Unprecedented Achievement Metrics
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10">
                            Our revolutionary approach isn't just theoretical—it's delivering measurable results across every dimension of enterprise software deployment.
                        </p>
                    </AnimateOnView>

                    <div className="space-y-8">
                        {[
                            { label: "Fortune 500 Adoption", value: 85 },
                            { label: "Developer Productivity", value: 92 },
                            { label: "System Integration", value: 78 },
                            { label: "AI Accuracy", value: 96 },
                        ].map((metric, index) => (
                            <AnimateOnView key={index}>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-end font-semibold">
                                        <span className="text-white text-lg">{metric.label}</span>
                                        <span className="text-blue-200 text-xl">
                                            <Counter value={metric.value} />%
                                        </span>
                                    </div>
                                    {/* Progress Bar Background */}
                                    <div className="h-3 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                        {/* Animated Bar */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${metric.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                                        />
                                    </div>
                                </div>
                            </AnimateOnView>
                        ))}
                    </div>
                </div>

                {/* Right Column: Bento Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

                    {/* Big Card: Developers Empowered */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
                        className="md:col-span-2 bg-[#1A2548] p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group flex flex-col items-center justify-center text-center gap-4 min-h-[280px]"
                    >
                        <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <Users size={48} />
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-white mb-2">
                                <Counter value={50} />,<Counter value={0} />00+
                            </div>
                            <div className="text-slate-300 font-medium text-lg">Developers Empowered</div>
                        </div>
                    </motion.div>

                    {/* Small Card: ROI Increase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
                        className="bg-[#1F2F57] p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-all duration-300 group flex flex-col items-center justify-center text-center gap-4 min-h-[220px]"
                    >
                        <div className="p-3 rounded-xl bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp size={32} />
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">
                                <Counter value={340} />%
                            </div>
                            <div className="text-slate-400 text-sm">ROI Increase</div>
                        </div>
                    </motion.div>

                    {/* Small Card: Avg Deploy */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
                        className="bg-[#1F2F57] p-8 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-300 group flex flex-col items-center justify-center text-center gap-4 min-h-[220px]"
                    >
                        <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                            <Zap size={32} />
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">
                                <Counter value={15} />min
                            </div>
                            <div className="text-slate-400 text-sm">Avg Deploy</div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
