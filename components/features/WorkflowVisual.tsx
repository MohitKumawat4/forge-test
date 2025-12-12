"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// WorkflowVisual - Animated workflow diagram with nodes and connections
export function WorkflowVisual() {
    // State for tracking hovered node
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <div className="w-full h-full relative p-4 isolate">
            {/* Grid Background */}
            <div className="absolute inset-y-0 -left-64 -right-64 -z-10 mask-[radial-gradient(closest-side,black_40%,transparent_100%)]">
                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                        backgroundSize: "24px 24px"
                    }}
                />
            </div>

            {/* Workflow Container - Shifted Right */}
            <div className="absolute inset-0 flex flex-col items-center justify-center translate-x-[60px] gap-3">

                {/* START NODE - API Request */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onMouseEnter={() => setHoveredNode('start')}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="bg-white border border-zinc-200 rounded-xl px-5 py-3.5 shadow-sm flex items-center gap-3 w-60 cursor-pointer relative group transition-all duration-300"
                >
                    <div className="w-9 h-9 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-100 transition-colors">
                        <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Trigger</div>
                        <div className="text-sm font-semibold text-zinc-800">API Request</div>
                    </div>
                    {/* Connection indicator */}
                    <motion.div
                        className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-zinc-800 transition-colors"
                        animate={{ scale: hoveredNode === 'start' ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>

                {/* Animated Line 1 */}
                <svg className="w-1 h-8 overflow-visible">
                    <path d="M0.5,0 v32" fill="none" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 4" />
                    <motion.path
                        d="M0.5,0 v32"
                        fill="none"
                        stroke="#27272a"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 1 }}
                        animate={{ pathLength: [0, 1], opacity: [1, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
                    />
                </svg>

                {/* TRANSFORM NODE - Data Transform */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    onMouseEnter={() => setHoveredNode('transform')}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className="bg-white border border-zinc-200 rounded-xl px-5 py-3.5 shadow-sm flex items-center gap-3 w-60 cursor-pointer group transition-all duration-300"
                >
                    <div className="w-9 h-9 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-100 transition-colors">
                        <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Process</div>
                        <div className="text-sm font-semibold text-zinc-800">Data Transform</div>
                    </div>
                </motion.div>

                {/* Animated Line 2 */}
                <svg className="w-1 h-8 overflow-visible">
                    <path d="M0.5,0 v32" fill="none" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 4" />
                    <motion.path
                        d="M0.5,0 v32"
                        fill="none"
                        stroke="#27272a"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 1 }}
                        animate={{ pathLength: [0, 1], opacity: [1, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5, delay: 0.5 }}
                    />
                </svg>

                {/* CONDITION NODE - Validate */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    onMouseEnter={() => setHoveredNode('condition')}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className="bg-zinc-50/50 border border-zinc-200 rounded-xl px-5 py-3.5 shadow-sm flex items-center gap-3 w-60 cursor-pointer group transition-all duration-300"
                >
                    <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
                        <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Condition</div>
                        <div className="text-sm font-semibold text-zinc-800">Validate Schema</div>
                    </div>
                </motion.div>

                {/* Branching Lines with Labels */}
                <div className="relative h-10 w-[300px]">
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                        {/* Left branch line (Success) */}
                        <path d="M150,0 v12 H70 v28" fill="none" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 4" />
                        <motion.path
                            d="M150,0 v12 H70 v28"
                            fill="none"
                            stroke="#27272a"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 1 }}
                            animate={{ pathLength: [0, 1], opacity: [1, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1, delay: 1 }}
                        />
                        {/* Right branch line (Error) */}
                        <path d="M150,0 v12 H230 v28" fill="none" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 4" />
                        <motion.path
                            d="M150,0 v12 H230 v28"
                            fill="none"
                            stroke="#27272a"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 1 }}
                            animate={{ pathLength: [0, 1], opacity: [1, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1, delay: 1 }}
                        />
                    </svg>
                    {/* Labels - positioned exactly on the horizontal line parts */}
                    <span className="absolute left-[85px] top-[4px] text-[9px] font-bold text-zinc-400 uppercase tracking-widest bg-white/80 px-1 backdrop-blur-sm">Pass</span>
                    <span className="absolute right-[85px] top-[4px] text-[9px] font-bold text-zinc-400 uppercase tracking-widest bg-white/80 px-1 backdrop-blur-sm">Fail</span>
                </div>

                {/* BRANCH NODES */}
                <div className="flex gap-8">
                    {/* Left - Success Handler */}
                    <motion.div
                        onMouseEnter={() => setHoveredNode('success')}
                        onMouseLeave={() => setHoveredNode(null)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                        className={`bg-white border rounded-xl px-4 py-3 shadow-sm w-36 cursor-pointer transition-all duration-300 ${hoveredNode === 'success' ? 'border-zinc-400' : 'border-zinc-200'
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="text-xs font-semibold text-zinc-800">Success</div>
                        </div>
                        <div className="text-[9px] text-zinc-400 font-medium space-y-0.5 pl-0.5">
                            <div>• Cache result</div>
                            <div>• Log metrics</div>
                        </div>
                    </motion.div>

                    {/* Right - Error Handler */}
                    <motion.div
                        onMouseEnter={() => setHoveredNode('error')}
                        onMouseLeave={() => setHoveredNode(null)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                        className={`bg-white border rounded-xl px-4 py-3 shadow-sm w-36 cursor-pointer transition-all duration-300 ${hoveredNode === 'error' ? 'border-zinc-400' : 'border-zinc-200'
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div className="text-xs font-semibold text-zinc-800">Error</div>
                        </div>
                        <div className="text-[9px] text-zinc-400 font-medium space-y-0.5 pl-0.5">
                            <div>• Retry logic</div>
                            <div>• Alert team</div>
                        </div>
                    </motion.div>
                </div>

                {/* Merge Lines */}
                <div className="relative h-10 w-[300px]">
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                        <path d="M70,0 v12 H150 v28" fill="none" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 4" />
                        <motion.path
                            d="M70,0 v12 H150 v28"
                            fill="none"
                            stroke="#27272a"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 1 }}
                            animate={{ pathLength: [0, 1], opacity: [1, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1, delay: 2.5 }}
                        />
                        <path d="M230,0 v12 H150 v28" fill="none" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 4" />
                        <motion.path
                            d="M230,0 v12 H150 v28"
                            fill="none"
                            stroke="#27272a"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 1 }}
                            animate={{ pathLength: [0, 1], opacity: [1, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1, delay: 2.5 }}
                        />
                    </svg>
                </div>

                {/* END NODE - Response */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onMouseEnter={() => setHoveredNode('end')}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className="bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-3.5 shadow-lg flex items-center gap-3 w-60 cursor-pointer group transition-all duration-300"
                >
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                        <svg className="w-5 h-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Complete</div>
                        <div className="text-sm font-semibold text-white">Send Response</div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
