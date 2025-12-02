"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface AnnouncementCardProps {
    className?: string;
}

export function AnnouncementCard({ className = "" }: AnnouncementCardProps) {
    return (
        <motion.a
            href="#"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`group inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-zinc-100 shadow-lg transition-all hover:bg-white/10 hover:border-white/20 ${className}`}
        >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="flex items-center gap-2">
                <span className="text-white">New Feature</span>
                <span className="h-1 w-1 rounded-full bg-zinc-800" />
                <span>Enterprise Automation 2.0</span>
            </span>
            <ArrowRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-white" />
        </motion.a>
    );
}
