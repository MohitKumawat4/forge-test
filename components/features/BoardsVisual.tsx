"use client";

import { motion } from "framer-motion";

// BoardsVisual - Ultra Clean Kanban Display
export function BoardsVisual() {
    const columns = [
        { title: 'To Do', cards: ['Research', 'Planning'] },
        { title: 'In Progress', cards: ['Design System'] },
        { title: 'Done', cards: ['Setup'] }
    ];

    return (
        <div className="w-full h-full flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4"
            >
                {columns.map((col, i) => (
                    <motion.div
                        key={col.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="w-40"
                    >
                        {/* Column Header */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-zinc-400' : i === 1 ? 'bg-blue-500' : 'bg-emerald-500'}`} />
                            <span className="text-xs font-semibold text-zinc-600">{col.title}</span>
                        </div>

                        {/* Cards */}
                        <div className="space-y-2">
                            {col.cards.map((card, j) => (
                                <motion.div
                                    key={card}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 + j * 0.05 }}
                                    whileHover={{ y: -2 }}
                                    className="bg-white rounded-lg p-3 border border-zinc-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                                >
                                    <p className="text-sm font-medium text-zinc-800">{card}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="w-5 h-5 rounded-full bg-zinc-100" />
                                        <span className="text-[10px] text-zinc-400">Dec 15</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
