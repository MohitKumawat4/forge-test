"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// BoardsVisual - Interactive Kanban with Drag & Drop Reordering
const initialColumns = [
    { id: 'todo', title: 'To Do', cards: ['Planning', 'Discovery'] },
    { id: 'progress', title: 'In Progress', cards: ['Research'] },
    { id: 'done', title: 'Done', cards: ['Setup', 'Design System'] }
];

export function BoardsVisual() {
    const [columns, setColumns] = useState(initialColumns);
    const columnRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const handleDragEnd = (_event: any, info: any, fromColId: string, cardIndex: number) => {
        const x = info.point.x;
        const y = info.point.y;

        // Find which column we dropped into
        let targetColId = fromColId;
        Object.entries(columnRefs.current).forEach(([id, el]) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            if (x >= rect.left && x <= rect.right) {
                targetColId = id;
            }
        });

        // Find the index within that column
        const targetCol = columns.find(c => c.id === targetColId);
        if (!targetCol) return;

        let targetIndex = targetCol.cards.length;
        const colEl = columnRefs.current[targetColId];
        if (colEl) {
            const cardElements = Array.from(colEl.querySelectorAll('.kanban-card'));
            for (let i = 0; i < cardElements.length; i++) {
                const rect = cardElements[i].getBoundingClientRect();
                const centerY = rect.top + rect.height / 2;
                if (y < centerY) {
                    targetIndex = i;
                    break;
                }
            }
        }

        // Only update if something actually changed
        if (targetColId === fromColId && targetIndex === cardIndex) return;
        // If it's the same column and same position (after account for potential shift)
        if (targetColId === fromColId && (targetIndex === cardIndex || targetIndex === cardIndex + 1)) return;

        const newColumns = columns.map(col => ({ ...col, cards: [...col.cards] }));
        const sourceColIdx = newColumns.findIndex(c => c.id === fromColId);
        const destColIdx = newColumns.findIndex(c => c.id === targetColId);

        const [movedCard] = newColumns[sourceColIdx].cards.splice(cardIndex, 1);

        // If moving within same column and target was after, adjust index
        let adjustedTargetIdx = targetIndex;
        if (fromColId === targetColId && targetIndex > cardIndex) {
            adjustedTargetIdx = targetIndex - 1;
        }

        newColumns[destColIdx].cards.splice(adjustedTargetIdx, 0, movedCard);
        setColumns(newColumns);
    };

    return (
        <div className="w-full h-full relative p-8 isolate">
            {/* Grid Background */}
            <div className="absolute inset-y-0 left-0 right-0 md:-left-48 md:-right-48 -z-10 mask-[radial-gradient(closest-side,black_40%,transparent_100%)]">
                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                        backgroundSize: "24px 24px"
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3 md:gap-4 p-3 md:p-4"
                >
                    {columns.map((col, i) => (
                        <motion.div
                            key={col.id}
                            ref={(el) => { columnRefs.current[col.id] = el }}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="w-36 md:w-40 flex flex-col group/column"
                        >
                            {/* Column Header -M -W */}
                            <div className="flex items-center gap-2 mb-3 px-1 md:px-2">
                                <div className={`w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-zinc-400' : i === 1 ? 'bg-blue-500' : 'bg-emerald-500'} shadow-sm`} />
                                <span className="text-[13px] font-bold text-zinc-700 tracking-tight truncate">{col.title}</span>
                                <span className="ml-auto text-[10px] md:text-[11px] text-zinc-400 font-bold">{col.cards.length}</span>
                            </div>

                            {/* Cards Area - Transparent logical container */}
                            <div className="space-y-3 md:space-y-4 flex-1 min-h-[300px] md:min-h-[400px] p-1.5 md:p-2">
                                <AnimatePresence mode="popLayout">
                                    {col.cards.map((card, j) => (
                                        <motion.div
                                            key={card}
                                            layout
                                            drag
                                            dragSnapToOrigin
                                            onDragEnd={(e, info) => handleDragEnd(e, info, col.id, j)}
                                            whileDrag={{
                                                scale: 1.02,
                                                zIndex: 100,
                                                cursor: 'grabbing',
                                                boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.12)"
                                            }}
                                            whileHover={{ y: -1, boxShadow: "0 4px 10px -2px rgba(0, 0, 0, 0.04)" }}
                                            className="kanban-card relative group cursor-grab w-full isolate"
                                        >
                                            <motion.div
                                                className="bg-white rounded-[10px] md:rounded-[14px] p-3 md:p-4 border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all group-hover:border-zinc-300 group-active:border-blue-400"
                                            >
                                                <p className="text-[13px] font-bold text-zinc-800 tracking-tight mb-3 md:mb-4">{card}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex -space-x-1.5 md:-space-x-2">
                                                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white bg-zinc-100 ring-1 ring-zinc-200/50" />
                                                        {j === 0 && <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white bg-blue-100 ring-1 ring-blue-200/50" />}
                                                    </div>
                                                    <div className="flex items-center gap-1 px-1.5 md:px-2 py-0.5 bg-zinc-50 rounded md:rounded-md border border-zinc-100">
                                                        <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-zinc-300" />
                                                        <span className="text-[9px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Dec 15</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
