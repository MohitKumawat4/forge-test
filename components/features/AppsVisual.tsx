"use client";

import { motion } from "framer-motion";

// AppsVisual - Shows a detailed app preview with multi-device support
export function AppsVisual() {
    return (
        <div className="w-full h-full relative p-8 isolate">
            {/* Grid Background - Edge Fade Enabled */}
            <div className="absolute inset-y-0 -left-64 -right-64 -z-10 mask-[radial-gradient(closest-side,black_40%,transparent_100%)]">
                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                        backgroundSize: "24px 24px"
                    }}
                />
            </div>

            {/* Content Container - Shifted Right */}
            <div className="absolute inset-0 flex items-center justify-center translate-x-[60px]">

                {/* Main Container with Desktop + Mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-end gap-6"
                >
                    {/* Desktop App Window */}
                    <div className="w-72 h-[340px] bg-white border border-zinc-200 rounded-xl shadow-xl overflow-hidden">
                        {/* Window Header */}
                        <div className="h-9 bg-zinc-50 border-b border-zinc-200 flex items-center px-3 gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                            <div className="ml-auto flex items-center gap-2">
                                <div className="text-[9px] text-zinc-400 font-medium bg-zinc-100 px-2 py-0.5 rounded">forge.app</div>
                            </div>
                        </div>

                        {/* App Layout with Sidebar */}
                        <div className="flex h-[calc(100%-36px)]">
                            {/* Sidebar */}
                            <div className="w-12 bg-zinc-900 flex flex-col items-center py-3 gap-3">
                                <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded bg-white" />
                                </div>
                                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                                    <div className="w-3 h-0.5 bg-white/50 rounded" />
                                </div>
                                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white/50" />
                                </div>
                                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                                    <div className="w-3 h-3 border border-white/50 rounded" />
                                </div>
                                <div className="mt-auto">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-3 bg-zinc-50/50">
                                {/* Top Bar */}
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-[10px] font-semibold text-zinc-700">Dashboard</div>
                                    <div className="flex gap-1">
                                        <div className="w-4 h-4 rounded bg-zinc-200" />
                                        <div className="w-4 h-4 rounded bg-zinc-200" />
                                    </div>
                                </div>

                                {/* Stats Row */}
                                <div className="flex gap-2 mb-3">
                                    <div className="flex-1 bg-white rounded-lg p-2 border border-zinc-100 shadow-sm">
                                        <div className="text-[8px] text-zinc-400">Revenue</div>
                                        <div className="text-[11px] font-bold text-zinc-800">$12,456</div>
                                        <div className="text-[7px] text-green-500">+12.5%</div>
                                    </div>
                                    <div className="flex-1 bg-white rounded-lg p-2 border border-zinc-100 shadow-sm">
                                        <div className="text-[8px] text-zinc-400">Users</div>
                                        <div className="text-[11px] font-bold text-zinc-800">1,234</div>
                                        <div className="text-[7px] text-green-500">+8.2%</div>
                                    </div>
                                    <div className="flex-1 bg-white rounded-lg p-2 border border-zinc-100 shadow-sm">
                                        <div className="text-[8px] text-zinc-400">Orders</div>
                                        <div className="text-[11px] font-bold text-zinc-800">567</div>
                                        <div className="text-[7px] text-red-500">-2.1%</div>
                                    </div>
                                </div>

                                {/* Chart Placeholder */}
                                <div className="bg-white rounded-lg p-2 border border-zinc-100 shadow-sm mb-3">
                                    <div className="text-[8px] text-zinc-400 mb-2">Activity</div>
                                    <div className="flex items-end gap-1 h-10">
                                        {[4, 6, 3, 8, 5, 7, 9, 6, 4, 7, 5, 8].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex-1 bg-blue-400 rounded-t"
                                                style={{ height: `${h * 4}px` }}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h * 4}px` }}
                                                transition={{ delay: 0.5 + i * 0.05 }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Items */}
                                <div className="bg-white rounded-lg p-2 border border-zinc-100 shadow-sm">
                                    <div className="text-[8px] text-zinc-400 mb-2">Recent</div>
                                    <div className="space-y-1.5">
                                        {[
                                            { name: 'John D.', status: 'Completed', color: 'bg-green-400' },
                                            { name: 'Sarah M.', status: 'Pending', color: 'bg-yellow-400' },
                                            { name: 'Mike R.', status: 'Processing', color: 'bg-blue-400' },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-center gap-2"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.8 + i * 0.1 }}
                                            >
                                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-400" />
                                                <div className="flex-1">
                                                    <div className="text-[8px] font-medium text-zinc-700">{item.name}</div>
                                                </div>
                                                <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile App Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="w-24 h-48 bg-white border-2 border-zinc-800 rounded-2xl shadow-lg overflow-hidden relative"
                    >
                        {/* Notch */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-zinc-800 rounded-full" />

                        {/* Mobile Content */}
                        <div className="pt-5 px-2 pb-2 h-full flex flex-col">
                            {/* Mobile Header */}
                            <div className="flex items-center justify-between mb-2">
                                <div className="text-[7px] font-semibold text-zinc-700">Dashboard</div>
                                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                            </div>

                            {/* Mobile Stats */}
                            <div className="grid grid-cols-2 gap-1 mb-2">
                                <div className="bg-zinc-100 rounded p-1">
                                    <div className="text-[6px] text-zinc-400">Revenue</div>
                                    <div className="text-[8px] font-bold text-zinc-800">$12.4k</div>
                                </div>
                                <div className="bg-zinc-100 rounded p-1">
                                    <div className="text-[6px] text-zinc-400">Users</div>
                                    <div className="text-[8px] font-bold text-zinc-800">1,234</div>
                                </div>
                            </div>

                            {/* Mobile Chart */}
                            <div className="bg-zinc-100 rounded p-1 flex-1 mb-1">
                                <div className="flex items-end gap-0.5 h-full">
                                    {[3, 5, 4, 6, 4, 5].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-blue-400 rounded-t"
                                            style={{ height: `${h * 3}px` }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Nav */}
                            <div className="flex justify-around pt-1 border-t border-zinc-200">
                                <div className="w-3 h-3 rounded bg-zinc-800" />
                                <div className="w-3 h-3 rounded bg-zinc-300" />
                                <div className="w-3 h-3 rounded bg-zinc-300" />
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                            </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-zinc-300 rounded-full" />
                    </motion.div>

                    {/* Floating "Responsive" Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[9px] font-medium px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Responsive Design
                    </motion.div>

                    {/* Floating Component Hints */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute -left-16 top-20 bg-white border border-zinc-200 rounded-lg shadow-md p-2 cursor-pointer"
                    >
                        <div className="text-[7px] text-zinc-400 mb-1">Components</div>
                        <div className="flex gap-1">
                            <div className="w-4 h-4 rounded bg-blue-100 border border-blue-200" />
                            <div className="w-4 h-4 rounded bg-green-100 border border-green-200" />
                            <div className="w-4 h-4 rounded bg-purple-100 border border-purple-200" />
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </div>
    );
}
