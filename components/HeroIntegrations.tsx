"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Globe, Cloud, MessageSquare, CreditCard } from "lucide-react";

// Shifted slightly upward as requested
const nodes = [
    { id: 1, label: "PostgreSQL", icon: Database, x: 60, y: 16, color: "text-blue-600" },
    { id: 2, label: "Stripe", icon: CreditCard, x: 55, y: 28, color: "text-violet-600" },
    { id: 3, label: "Slack", icon: MessageSquare, x: 45, y: 41, color: "text-amber-600" },
    { id: 4, label: "AWS S3", icon: Cloud, x: 55, y: 56, color: "text-orange-600" },
    { id: 5, label: "GraphQL", icon: Globe, x: 65, y: 70, color: "text-pink-600" },
];

export function HeroIntegrations() {
    return (
        <div className="absolute inset-0 z-20 pointer-events-none" style={{ perspective: '1000px' }}>
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 z-10 w-full h-full overflow-visible"
            >
                <defs>
                    <linearGradient id="clean-line-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#94a3b8" stopOpacity="0" />
                        <stop offset="20%" stopColor="#cbd5e1" stopOpacity="1" />
                        <stop offset="100%" stopColor="#94a3b8" stopOpacity="1" />
                    </linearGradient>
                </defs>
                {nodes.map((node, i) => (
                    <PreciseLine key={node.id} node={node} index={i} total={nodes.length} />
                ))}
            </svg>

            {nodes.map((node) => (
                <IntegrationNode key={node.id} node={node} />
            ))}
        </div>
    );
}

function PreciseLine({ node, index, total }: { node: typeof nodes[0], index: number, total: number }) {
    // 1. Source (Right Wall)
    const startX = 105;
    const startY = 42 + (index - (total - 1) / 1.0) * 1.5; // Adjusted spacing slightly

    // 2. Target (Right Edge of Node)
    const endX = node.x;
    const endY = node.y;

    // 3. Sigmoid Curve with Horizontal Entry
    const runStart = endX + 5;

    // Control Points
    const cpX = (startX + runStart) / 2;

    const d = `
        M ${startX} ${startY} 
        C ${cpX} ${startY}, ${cpX} ${endY}, ${runStart} ${endY}
        L ${endX} ${endY}
    `;

    return (
        <motion.path
            d={d}
            fill="none"
            stroke="url(#clean-line-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        />
    );
}

function IntegrationNode({ node }: { node: typeof nodes[0] }) {
    return (
        <motion.div
            className="absolute flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-slate-100 z-30"
            style={{
                right: `${100 - node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(0%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.5 + node.id * 0.1,
                type: "spring"
            }}
        >
            <div className={`p-1 rounded-full bg-slate-50 ${node.color}`}>
                <node.icon size={12} strokeWidth={2} />
            </div>

            <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">{node.label}</span>

            <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-1 bg-slate-300 rounded-full" />
        </motion.div>
    );
}
