"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";

export default function ComingSoonPage() {
    const [email, setEmail] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    // Mouse tracking for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white flex flex-col relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid & Spotlight */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Ambient Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[128px] mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] mix-blend-screen animate-pulse-slow delay-700" />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center z-50 mix-blend-difference">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    ENTERPRISE FORGE
                </Link>
                <div className="text-xs font-mono opacity-50">
                    EST. 2025
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center space-y-8 max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium tracking-widest uppercase">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        System Upgrade In Progress
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-[0.85]">
                        FUTURE<br />
                        BOUND
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-lg leading-relaxed font-light">
                        We are forging the next generation of enterprise intelligence. Be the first to witness the evolution.
                    </p>

                    {/* Magnetic Input Form */}
                    <motion.div
                        className="w-full max-w-md relative group mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                        <form className="relative flex p-1 bg-zinc-900/90 rounded-xl border border-white/10 backdrop-blur-xl">
                            <input
                                type="email"
                                placeholder="enter@void.com"
                                className="flex-1 bg-transparent px-4 py-3 outline-none text-white placeholder:text-zinc-600 font-mono text-sm"
                            />
                            <button
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="bg-white text-black px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-transform active:scale-95 flex items-center gap-2"
                            >
                                JOIN
                                <ArrowRight size={16} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                            </button>
                        </form>
                    </motion.div>

                    <div className="flex gap-8 pt-12 text-zinc-500 text-sm font-mono">
                        <div className="flex flex-col items-center gap-2">
                            <Sparkles size={16} />
                            <span>AI NATIVE</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Star size={16} />
                            <span>ELITE TIER</span>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="p-8 w-full flex justify-between items-end text-xs text-zinc-600 font-mono z-10">
                <div className="max-w-[200px]">
                    ENGINEERED FOR EXCELLENCE.
                    <br />
                    DEPLOYING WORLDWIDE.
                </div>
                <div>
                    © 2025
                </div>
            </footer>
        </div>
    );
}
