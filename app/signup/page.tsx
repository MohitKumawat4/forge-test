"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SignupView } from "@/components/auth/SignupView";

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden flex flex-col">
            {/* Header */}
            <div className="w-full px-6 py-6 md:px-12 flex justify-between items-center relative z-20">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                        <div className="w-4 h-4 border-2 border-white rounded-full" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-zinc-900 group-hover:text-zinc-700 transition-colors">Enterprise Forge</span>
                </Link>

                <Link href="/" className="group flex items-center gap-1.5 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors px-4 py-2 rounded-full hover:bg-zinc-100/80">
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>
            </div>

            <main className="flex-1 flex items-center justify-center p-6 md:p-12 relative z-10">
                <SignupView />
            </main>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        </div>
    );
}
