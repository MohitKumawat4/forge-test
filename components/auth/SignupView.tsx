"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    Mail,
    Lock,
    User,
    CheckCircle2,
    Github,
    Chrome
} from "lucide-react";

export function SignupView() {
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
        <div className="w-full max-w-[480px] space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Create your account</h2>
                <p className="text-zinc-500 font-medium">Start forging your enterprise future today.</p>
            </div>

            {!isSuccess ? (
                <div className="space-y-6">
                    {/* Social Auth */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors group">
                            <Chrome size={18} className="text-zinc-500" />
                            <span className="text-sm font-bold text-zinc-700">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors group">
                            <Github size={18} className="text-zinc-500" />
                            <span className="text-sm font-bold text-zinc-700">GitHub</span>
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-zinc-100"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-4 text-zinc-400 font-bold tracking-widest">Or continue with</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-1">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                                        <User size={18} />
                                    </div>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Carter"
                                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium placeholder:text-zinc-400 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium placeholder:text-zinc-400 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-1">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                                        <Lock size={18} />
                                    </div>
                                    <input
                                        required
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium placeholder:text-zinc-400 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group relative overflow-hidden transition-all hover:bg-zinc-800 disabled:bg-zinc-400 active:scale-[0.98] mt-6"
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
                                        Create Account
                                        <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </form>

                    <div className="text-center space-y-4">
                        <p className="text-sm text-zinc-500">
                            Already have an account? <Link href="/signin" className="text-blue-600 font-bold hover:underline">Sign in</Link>
                        </p>
                        <p className="text-[11px] text-zinc-400 leading-relaxed px-8">
                            By creating an account, you agree to our <Link href="#" className="underline hover:text-blue-600">Terms of Service</Link> and <Link href="#" className="underline hover:text-blue-600">Privacy Policy</Link>.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="py-12 bg-white rounded-3xl border border-zinc-200 shadow-xl flex flex-col items-center justify-center text-center space-y-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12 }}
                        className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2"
                    >
                        <CheckCircle2 size={40} />
                    </motion.div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Welcome Aboard!</h2>
                        <p className="text-zinc-500 max-w-xs mx-auto">Your forge is ready. Check your inbox to verify your email and start building.</p>
                    </div>
                    <Link
                        href="/"
                        className="text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            )}
        </div>
    );
}
