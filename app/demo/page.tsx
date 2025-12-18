"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DemoView } from "@/components/auth/DemoView";

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-white relative font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">

            {/* Nav Header */}
            <div className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-20">
                <Link href="/" className="flex items-center gap-2 group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-900">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor" />
                    </svg>
                    <span className="font-bold text-lg tracking-tight text-zinc-900">Enterprise Forge</span>
                </Link>

                <Link href="/" className="group flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>
            </div>

            <main className="flex-1 flex flex-col justify-center px-6 pb-12 relative z-10">
                <DemoView />
            </main>

            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none -z-10 bg-[#f8f9fa]" />
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        </div>
    );
}
