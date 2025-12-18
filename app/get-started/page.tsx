"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Check,
    Sparkles,
    Rocket,
    Lock,
    BarChart3,
    ArrowLeft
} from "lucide-react";

export default function GetStartedPage() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus("success");
    };

    return (
        <div className="min-h-screen bg-[#eeeeee] font-sans selection:bg-black selection:text-white flex flex-col">
            {/* Header */}
            <header className="px-6 py-6 md:px-12 md:py-8 flex items-center justify-between z-10 w-full max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform">
                        E
                    </div>
                    <span className="font-bold text-xl tracking-tight text-zinc-900 hidden sm:block">Enterprise Forge</span>
                </Link>
                <Link
                    href="/"
                    className="text-sm font-semibold text-zinc-500 hover:text-black transition-colors flex items-center gap-2"
                >
                    <ArrowLeft size={16} />
                    Back
                </Link>
            </header>

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center relative overflow-hidden pb-20">
                {/* Background Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-tr from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -z-10 animate-pulse-slow" />

                <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-zinc-600 text-xs font-bold uppercase tracking-wider"
                            >
                                <Rocket size={14} className="text-black" />
                                Early Access
                            </motion.div>
                            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.1]">
                                Start building <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-900 to-zinc-500">
                                    the future.
                                </span>
                            </h1>
                            <p className="text-lg text-zinc-600 leading-relaxed max-w-md">
                                Join the exclusive list of enterprises transforming their potential with our advanced AI engine.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: Sparkles, text: "Access to GPT-4 Turbo & Claude 3" },
                                { icon: Lock, text: "Enterprise-grade data privacy" },
                                { icon: BarChart3, text: "Real-time analytics dashboard" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center gap-3 text-zinc-700 font-medium"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-black shadow-sm">
                                        <item.icon size={14} />
                                    </div>
                                    {item.text}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-10 transform translate-y-4" />
                        <div className="bg-white border border-zinc-200 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-10 space-y-4"
                                >
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Check size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-zinc-900">You're on the list!</h3>
                                    <p className="text-zinc-500">We've sent a confirmation email to {email}.<br />Prepare for takeoff.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 text-sm font-bold text-zinc-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
                                    >
                                        Register another email
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-zinc-900">Request Early Access</h3>
                                        <p className="text-sm text-zinc-500">Spots are limited. Secure your workspace today.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-[11px] uppercase tracking-widest font-bold text-zinc-400">Work Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="name@company.com"
                                                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black transition-all outline-none text-sm font-medium"
                                            />
                                        </div>
                                        <button
                                            disabled={status === "loading"}
                                            className="w-full bg-black text-white h-12 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-zinc-800 disabled:bg-zinc-800 transition-all active:scale-[0.98]"
                                        >
                                            {status === "loading" ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Get Started
                                                    <ArrowRight size={16} />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    <div className="pt-6 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400">
                                        <span>No credit card required</span>
                                        <span>Cancel anytime</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
