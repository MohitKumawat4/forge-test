"use client";

import { motion } from "framer-motion";

// IntegrationsVisual - Environment and code integration display
export function IntegrationsVisual() {
    return (
        <div className="w-full h-full relative p-8 isolate">
            {/* Grid Background - Edge Fade Enabled */}
            <div className="absolute inset-y-0 -left-64 -right-64 -z-10 mask-[radial-gradient(closest-side,black_40%,transparent_100%)]">
                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                        backgroundSize: "24px 24px"
                    }}
                />
            </div>

            {/* Content Container - Shifted Right */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 translate-x-[60px]">

                {/* Top Row: Environments */}
                <div className="flex gap-4">
                    {/* Card 1 - Production */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            borderStyle: "dashed",
                            boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.2 }}
                        className="bg-white border border-zinc-200 border-solid rounded-lg p-4 w-40 shadow-sm cursor-pointer"
                    >
                        <div className="text-[10px] text-zinc-400 font-medium mb-1">Environment</div>
                        <div className="text-zinc-800 font-medium text-lg">Production</div>
                    </motion.div>
                    {/* Card 2 - Experimental */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            borderStyle: "dashed",
                            boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="bg-white border border-zinc-200 border-solid rounded-lg p-4 w-40 shadow-sm cursor-pointer"
                    >
                        <div className="text-[10px] text-zinc-400 font-medium mb-1">Environment</div>
                        <div className="text-zinc-800 font-medium text-lg">Experimental</div>
                    </motion.div>
                    {/* Card 3 - Staging */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            borderStyle: "dashed",
                            boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className="bg-white border border-zinc-200 border-solid rounded-lg p-4 w-40 shadow-sm relative cursor-pointer"
                    >
                        <div className="text-[10px] text-zinc-400 font-medium mb-1">Environment</div>
                        <div className="text-zinc-800 font-medium text-lg">Staging</div>
                        {/* Connection Point Marker */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-black rounded-full" />
                    </motion.div>
                </div>

                {/* Connection Line Container - positions relative to the flex center */}
                <div className="h-32 w-full relative -my-24 z-0 pointer-events-none flex justify-center">
                    <svg width="352" height="140" className="overflow-visible">
                        {/* 
                           SVG is 352px wide (3 cards * 160px + 2 gaps * 16px = 512px... but we center on middle card)
                           Cards: w-40 = 160px, gap-4 = 16px
                           Middle card center = 176 (half of 352)
                           Staging card center = 176 + 80 + 16 + 80 = 176 + 176 = 352 ... wait
                           Let's simplify: SVG center = 176. Staging center = 176 + 176 = 352
                           Actually simpler: relative to SVG leftmost point
                           - Production center: 80
                           - Experimental center: 80 + 160 + 16 = 256... no
                           
                           Simpler approach: viewBox centered, Staging at right.
                           viewBox="-176 0 352 140" means center is at 0.
                           Production center: -176
                           Experimental center: 0
                           Staging center: +176
                        */}
                        <motion.path
                            d="M 352,40 C 352,80 176,60 176,125"
                            fill="none"
                            stroke="#52525b"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        />
                        {/* Endpoint marker at "From Staging" */}
                        <rect x="164" y="125" width="24" height="2" fill="#000" rx="1" />
                    </svg>
                </div>

                {/* Bottom Row: Code */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="relative z-10 flex flex-col items-center gap-3 mt-12"
                >
                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">From Staging</div>
                    <div className="bg-zinc-50 border border-zinc-200 rounded-lg px-6 py-4 font-mono text-sm text-zinc-600 shadow-sm flex items-center">
                        <span className="text-purple-600 mr-2">import</span> {'{ prompt }'} <span className="text-purple-600 mx-2">from</span> <span className="text-green-600">&quot;Forge&quot;</span>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
