"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingLines from "@/components/FloatingLines";

export default function PricingPage() {
    // Keeping logic for future use, though design shows specific prices
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

    const plans = [
        {
            category: "FREE",
            name: "BASIC",
            price: 0,
            description: "Start building with essential AI agents.",
            includes: "Perfect for individuals and hobbyists",
            features: ["5 Active Agents", "Basic Reasoning Models", "Community Templates"]
        },
        {
            category: "PRO",
            name: "ADVANCE",
            price: 49,
            description: "Power your team with autonomous workflows.",
            includes: "For growing teams scaling operations",
            features: ["Unlimited Agents", "Advanced Chain-of-Thought", "API Access", "Priority Support"]
        },
        {
            category: "ENTERPRISE",
            name: "PROFESSIONAL",
            price: 199,
            description: "Full-scale intelligence and infrastructure.",
            includes: "For large organizations requiring control",
            features: ["Custom Model Training", "SSO & Audit Logs", "Dedicated Compute", "On-Premise Option"]
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-500 selection:text-white">
            <div className="relative z-50">
                <Navbar className="bg-transparent border-none text-white" />
            </div>

            {/* --- Hero Section (Lighter Blue Background) --- */}
            <section className="relative h-[650px] bg-[#000] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <FloatingLines
                        linesGradient={["#4f46e5", "#3b82f6", "#60a5fa"]}
                        animationSpeed={0.5}
                    />
                </div>

                {/* Decorative Elements (Blue Lines) */}
                <div className="absolute right-0 top-1/3 w-[300px] h-[100px] border-2 border-cyan-400 rounded-l-full opacity-30 translate-x-1/2 pointer-events-none" />
                <div className="absolute left-0 top-1/2 w-[200px] h-[60px] border-2 border-cyan-400 rounded-r-full opacity-30 -translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 w-full md:w-[90%] max-w-screen-2xl mx-auto px-6 md:px-8 h-full flex flex-col items-center pt-32 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-h1-apple tracking-tight mb-6"
                    >
                        Your Plan, Your Choice
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-p1-apple text-white/90 max-w-xl leading-[25px] lg:leading-7"
                    >
                        The best YOU is closer than you think. Find the right plan for your health and wellness needs.
                    </motion.p>
                </div>
            </section>

            {/* --- Pricing Cards Section --- */}
            <section className="relative z-20 -mt-64 pb-32 px-6 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                        {plans.map((plan, index) => (
                            <div key={plan.name} className="flex flex-col items-center group">
                                {/* MAIN CARD */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                    className="bg-white rounded-[40px] px-6 py-10 pb-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col items-center text-center relative w-full border border-white/50 transition-transform duration-300 group-hover:-translate-y-2 z-10"
                                >
                                    {/* Category */}
                                    <span className="text-cyan-500 font-bold text-[10px] tracking-[0.25em] uppercase mb-6 drop-shadow-sm font-sans">
                                        {plan.category}
                                    </span>

                                    {/* Plan Name Pill with strong float effect */}
                                    <div className="bg-[#1e293b] text-white px-8 py-4 rounded-full font-bold tracking-widest text-xs mb-8 w-full max-w-[200px] shadow-[0_15px_30px_-5px_rgba(15,23,42,0.4),0_6px_0_#0f172a] transform transition-transform group-hover:scale-105">
                                        {plan.name}
                                    </div>

                                    {/* Price */}
                                    <div className="mb-2 relative">
                                        <span className="text-blue-600 font-extrabold text-6xl tracking-tighter drop-shadow-[0_8px_20px_rgba(37,99,235,0.25)]">
                                            <span className="text-3xl align-top mr-1 font-bold">$</span>{plan.price}
                                        </span>
                                    </div>
                                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-6">per month</span>

                                    {/* Description */}
                                    <p className="text-slate-500 text-xs leading-[25px] lg:leading-7 max-w-[180px] mb-2 min-h-[40px] font-medium">
                                        {plan.description}
                                    </p>

                                    {/* CTA Button - Positioned absolutely to overlap bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-1/2">
                                        <button className="bg-linear-to-b from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0369a1] text-white px-10 py-3.5 rounded-full font-bold text-[10px] tracking-widest transition-all shadow-[0_15px_30px_-8px_rgba(14,165,233,0.6),0_6px_0_#0369a1] active:translate-y-[4px] active:shadow-none min-w-[140px] group-hover:shadow-[0_20px_40px_-8px_rgba(14,165,233,0.7),0_6px_0_#0369a1]">
                                            SIGN UP
                                        </button>
                                    </div>
                                </motion.div>

                                {/* DETAILS BELOW CARD */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="mt-10 text-center px-4 flex flex-col items-center"
                                >
                                    <span className="text-[9px] text-slate-400 font-black tracking-[0.2em] uppercase mb-4 block opacity-70">
                                        INCLUDES:
                                    </span>
                                    <p className="text-xs text-slate-500 font-medium leading-[25px] lg:leading-7 max-w-[200px] mb-6">
                                        {plan.includes}
                                    </p>

                                    {/* Subtle dots decoration */}
                                    <div className="flex gap-1.5 opacity-20">
                                        <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                        <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                        <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visit Site Button (Mock from image) */}
                <div className="fixed bottom-8 left-8 z-50 md:hidden">
                    {/* Mobile CTA if needed */}
                </div>
            </section>

            <Footer />
        </div>
    );
}
