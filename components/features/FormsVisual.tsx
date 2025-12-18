"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// FormsVisual - Rainbow outline drawing animation then content fade-in
export function FormsVisual() {
    const [animationPhase, setAnimationPhase] = useState<'drawing' | 'filling'>('drawing');

    // After the outline draws, transition to filling phase
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationPhase('filling');
        }, 2000); // Wait for outline to finish drawing
        return () => clearTimeout(timer);
    }, []);

    // Card dimensions for the SVG path
    const cardWidth = 340;
    const cardHeight = 440;
    const borderRadius = 20;

    // Create rounded rectangle path
    const roundedRectPath = `
        M ${borderRadius} 0
        L ${cardWidth - borderRadius} 0
        Q ${cardWidth} 0 ${cardWidth} ${borderRadius}
        L ${cardWidth} ${cardHeight - borderRadius}
        Q ${cardWidth} ${cardHeight} ${cardWidth - borderRadius} ${cardHeight}
        L ${borderRadius} ${cardHeight}
        Q 0 ${cardHeight} 0 ${cardHeight - borderRadius}
        L 0 ${borderRadius}
        Q 0 0 ${borderRadius} 0
    `;

    return (
        <div className="w-full h-full flex items-center justify-center relative">
            {/* Container for animation */}
            <div className="relative" style={{ width: cardWidth, height: cardHeight }}>

                {/* Rainbow Gradient SVG Outline */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox={`-4 -4 ${cardWidth + 8} ${cardHeight + 8}`}
                    fill="none"
                >
                    {/* Gradient Definition */}
                    <defs>
                        <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="25%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="75%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#f97316" />
                        </linearGradient>
                    </defs>

                    {/* Animated Path - Rainbow outline that draws itself */}
                    <motion.path
                        d={roundedRectPath}
                        stroke="url(#rainbowGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 1 }}
                        animate={{
                            pathLength: 1,
                            opacity: animationPhase === 'filling' ? 0 : 1
                        }}
                        transition={{
                            pathLength: { duration: 1.8, ease: "easeInOut" },
                            opacity: { duration: 0.5, delay: animationPhase === 'filling' ? 0 : 0 }
                        }}
                    />
                </svg>

                {/* Form Content Card - Fades in after outline completes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: animationPhase === 'filling' ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-zinc-200 p-5 flex flex-col"
                >
                    {/* Form Header */}
                    <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
                        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-400 to-cyan-600 flex items-center justify-center text-white text-lg">
                            📋
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-zinc-900">New Request Form</h3>
                            <p className="text-xs text-zinc-500">Step 2 of 3</p>
                        </div>
                        <div className="ml-auto text-[10px] text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full font-medium">
                            Auto-saving
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="flex-1 mt-4 space-y-3">
                        {/* Name Field */}
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wide">Full Name</label>
                            <div className="h-9 bg-zinc-50 border border-zinc-200 rounded-lg px-3 flex items-center text-sm text-zinc-700">
                                John Smith
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wide">Email</label>
                            <div className="h-9 bg-zinc-50 border border-zinc-200 rounded-lg px-3 flex items-center text-sm text-zinc-700">
                                john@company.com
                            </div>
                        </div>

                        {/* Department Dropdown */}
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wide">Department</label>
                            <div className="h-9 bg-zinc-50 border border-zinc-200 rounded-lg px-3 flex items-center justify-between text-sm text-zinc-700">
                                <span>Engineering</span>
                                <span className="text-zinc-400">▼</span>
                            </div>
                        </div>

                        {/* Date Field */}
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wide">Start Date</label>
                            <div className="h-9 bg-zinc-50 border border-zinc-200 rounded-lg px-3 flex items-center justify-between text-sm text-zinc-600">
                                <span>December 15, 2024</span>
                                <span className="text-zinc-400">📅</span>
                            </div>
                        </div>

                        {/* File Upload */}
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wide">Attachments</label>
                            <div className="h-10 bg-zinc-50 border border-dashed border-zinc-300 rounded-lg px-3 flex items-center justify-between text-xs text-zinc-500">
                                <div className="flex items-center gap-2">
                                    <span>📎</span>
                                    <span>proposal.pdf</span>
                                    <span className="text-zinc-400">(2.4 MB)</span>
                                </div>
                                <span className="text-cyan-500">✓</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-4 pt-4 border-t border-zinc-100">
                        <button className="flex-1 h-10 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
                            Back
                        </button>
                        <button className="flex-1 h-10 bg-zinc-900 rounded-lg text-sm font-medium text-white hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                            Continue
                            <span className="text-xs">→</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
