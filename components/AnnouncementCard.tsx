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
            className={`group inline-flex items-center gap-3 rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all hover:shadow-md hover:border-gray-300 ${className}`}
        >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="flex items-center gap-2">
                <span className="text-gray-900 font-semibold">New Feature</span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span>Enterprise Automation 2.0</span>
            </span>
            <ArrowRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-gray-600" />
        </motion.a>
    );
}
