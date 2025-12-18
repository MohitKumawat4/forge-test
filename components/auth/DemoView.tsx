"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    CheckCircle2,
    Shield,
    Zap,
    Box,
    Sparkles,
    Users
} from "lucide-react";

export function DemoView() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start lg:items-center">
            {/* Left Side: Content & Benefits */}
            <div className="flex-1 space-y-10 lg:pr-12 py-8">
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                        <Sparkles size={14} />
                        Enterprise Grade AI
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.1]"
                    >
                        Forge your future with <br />
                        <span className="text-blue-600">Enterprise AI</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-600 max-w-lg leading-relaxed"
                    >
                        Automate complex workflows, secure your data, and scale your operations with the world's most advanced AI engine built for teams.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { icon: Zap, title: "10x Faster Deployment", desc: "Launch agents in minutes, not months." },
                        { icon: Shield, title: "Military Grade Security", desc: "SOC2 Type II & GDPR compliant by default." },
                        { icon: Users, title: "Team Collaboration", desc: "Shared boards, roles, and unified permissions." },
                        { icon: Box, title: "Seamless Integration", desc: "Connect with 500+ enterprise apps." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="space-y-2 group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-blue-600 shadow-sm transition-all group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-200">
                                <item.icon size={20} />
                            </div>
                            <h3 className="font-bold text-zinc-900">{item.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-8 border-t border-zinc-200 hidden md:block"
                >
                    <div className="flex items-center gap-4 text-zinc-400">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-4 w-12 bg-zinc-300/30 rounded-full animate-pulse" />
                        ))}
                        <span className="text-xs font-bold uppercase tracking-widest ml-2">Trusted by Global Teams</span>
                    </div>
                </motion.div>
            </div>

            {/* Right Side: Form Card */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full lg:w-[480px] bg-white rounded-3xl border border-zinc-200 shadow-2xl p-8 md:p-10 relative isolate"
            >
                {!isSuccess ? (
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">Request a Demo</h3>
                            <p className="text-zinc-500 text-sm font-medium">Get a personalized walkthrough of Enterprise Forge.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-1">First Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John"
                                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium placeholder:text-zinc-400 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-1">Last Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium placeholder:text-zinc-400 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-1">Work Email</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium placeholder:text-zinc-400 outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-1">Company Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Enterprise Ltd"
                                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium placeholder:text-zinc-400 outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-1">Project Needs</label>
                                <textarea
                                    rows={3}
                                    placeholder="Tell us about your requirements..."
                                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium placeholder:text-zinc-400 resize-none outline-none"
                                />
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group relative overflow-hidden transition-all hover:bg-zinc-800 disabled:bg-zinc-400 active:scale-[0.98]"
                            >
                                <AnimatePresence mode="wait">
                                    {isSubmitting ? (
                                        <motion.div
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                        />
                                    ) : (
                                        <motion.div
                                            key="content"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            Submit Request
                                            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>

                            <p className="text-[11px] text-zinc-400 text-center px-4 leading-relaxed mt-4">
                                By submitting, you agree to our <Link href="#" className="underline hover:text-blue-600">Terms</Link> and <Link href="#" className="underline hover:text-blue-600">Privacy Policy</Link>.
                            </p>
                        </form>
                    </div>
                ) : (
                    <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 12 }}
                            className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2"
                        >
                            <CheckCircle2 size={40} />
                        </motion.div>
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-zinc-900 tracking-tight">Request Received!</h3>
                            <p className="text-zinc-500 max-w-xs mx-auto">Our team will reach out to you within orbital speed to schedule your demo.</p>
                        </div>
                        <Link
                            href="/"
                            className="text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4"
                        >
                            Back to website
                        </Link>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
