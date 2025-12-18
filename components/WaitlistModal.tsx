"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles } from "lucide-react";

export function WaitlistModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Listen for custom event to open modal
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("open-waitlist", handleOpen);
        return () => window.removeEventListener("open-waitlist", handleOpen);
    }, []);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const onClose = () => {
        setIsOpen(false);
        // Reset success state after a delay when closing
        if (isSuccess) {
            setTimeout(() => setIsSuccess(false), 500);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/10 backdrop-blur-[6px]"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="relative w-full max-w-[420px] bg-white/80 backdrop-blur-2xl rounded-[28px] shadow-[0_22px_70px_rgba(0,0,0,0.1)] border border-white/50 p-7 md:p-9 text-zinc-900 overflow-hidden"
                    >
                        {/* Subtle Top Shine */}
                        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-[#5ccee5]/40 to-transparent" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-600 transition-all font-medium"
                        >
                            <X size={20} strokeWidth={2.5} />
                        </button>

                        {!isSuccess ? (
                            <div className="space-y-7 relative z-10">
                                {/* Header Section */}
                                <div className="text-center space-y-4">
                                    <div className="flex justify-center flex-col items-center gap-3">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-[#5ccee5]/20 rounded-full blur-lg" />
                                            <svg
                                                className="h-10 w-10 relative z-10"
                                                viewBox="0 0 40 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="20" cy="20" r="19" stroke="#000" strokeWidth="1.5" opacity="0.1" />
                                                <path
                                                    d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20"
                                                    stroke="#5ccee5"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20"
                                                    stroke="#000"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                />
                                                <circle cx="20" cy="20" r="4" fill="#5ccee5" />
                                            </svg>
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900">Join the Forge</h2>
                                            <div className="flex items-center justify-center gap-1.5 text-[#5ccee5] text-[10px] font-black uppercase tracking-[0.25em]">
                                                <Sparkles size={11} fill="currentColor" />
                                                Priority Access
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-zinc-500 text-[13px] leading-relaxed max-w-[300px] mx-auto font-medium">
                                        Be among the first to harness autonomous enterprise agents.
                                        Secure your spot in our exclusive access program.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-0.5">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Name"
                                                className="w-full px-4 py-2.5 rounded-xl bg-zinc-100/50 border border-zinc-200/50 focus:border-[#5ccee5]/50 focus:bg-white focus:outline-none transition-all text-xs placeholder:text-zinc-400 font-semibold"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-0.5">Company <span className="text-zinc-300 font-medium lowercase tracking-normal">(optional)</span></label>
                                            <input
                                                type="text"
                                                placeholder="xyz"
                                                className="w-full px-4 py-2.5 rounded-xl bg-zinc-100/50 border border-zinc-200/50 focus:border-[#5ccee5]/50 focus:bg-white focus:outline-none transition-all text-xs placeholder:text-zinc-400 font-semibold"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-0.5">Work Email</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="john@enterprise.com"
                                            className="w-full px-4 py-2.5 rounded-xl bg-zinc-100/50 border border-zinc-200/50 focus:border-[#5ccee5]/50 focus:bg-white focus:outline-none transition-all text-xs placeholder:text-zinc-400 font-semibold"
                                        />
                                    </div>


                                    <div className="space-y-1.5 pb-2">
                                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-0.5">Phone</label>
                                        <div className="flex gap-2">
                                            <div className="relative w-[100px]">
                                                <select
                                                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-100/50 border border-zinc-200/50 focus:border-[#5ccee5]/50 focus:bg-white focus:outline-none transition-all text-xs text-zinc-600 font-semibold appearance-none cursor-pointer"
                                                >
                                                    <option value="+91">IN +91</option>
                                                    <option value="+1">US +1</option>
                                                    <option value="+44">UK +44</option>

                                                    <option value="+61">AU +61</option>
                                                    <option value="+86">CN +86</option>
                                                    <option value="+81">JP +81</option>
                                                    <option value="+49">DE +49</option>


                                                </select>
                                                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="_ _ _ _ _ _ _ _ _ _ _ _"
                                                className="flex-1 px-4 py-2.5 rounded-xl bg-zinc-100/50 border border-zinc-200/50 focus:border-[#5ccee5]/50 focus:bg-white focus:outline-none transition-all text-xs placeholder:text-zinc-400 font-semibold"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full bg-[#5ccee5] hover:bg-[#4ab8ce] text-white py-3.5 rounded-xl font-bold text-[14px] tracking-tight transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_25px_rgba(92,206,229,0.25)] flex items-center justify-center gap-2 group mt-2"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Join Waitlist
                                                <Sparkles size={16} className="transition-transform group-hover:scale-110" />
                                            </>
                                        )}
                                    </button>

                                    <div className="flex items-center justify-center gap-2 pt-2">
                                        <div className="h-px w-8 bg-zinc-200" />
                                        <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">
                                            Enterprise Ready
                                        </p>
                                        <div className="h-px w-8 bg-zinc-200" />
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="py-12 flex flex-col items-center justify-center text-center space-y-7 relative z-10"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#5ccee5]/20 rounded-full blur-xl animate-pulse" />
                                    <div className="w-20 h-20 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#5ccee5] shadow-sm relative z-10">
                                        <CheckCircle2 size={40} strokeWidth={2} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">Success!</h2>
                                    <p className="text-zinc-500 max-w-[220px] mx-auto text-[13px] font-medium leading-relaxed">
                                        Your position in the Forge is secured. We'll be in touch.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-zinc-400 font-bold hover:text-zinc-900 transition-colors text-[10px] uppercase tracking-widest flex items-center gap-2 bg-zinc-50 px-4 py-2 rounded-full border border-zinc-100"
                                >
                                    Dismiss
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
