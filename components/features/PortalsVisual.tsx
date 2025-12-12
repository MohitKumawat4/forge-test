"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// PortalsVisual - Secure client portal interface
export function PortalsVisual() {
    const [activeUser, setActiveUser] = useState<number | null>(null);

    const users = [
        { id: 1, name: 'Acme Corp', role: 'Client', avatar: 'A', color: 'from-blue-400 to-blue-600', status: 'active' },
        { id: 2, name: 'TechStart Inc', role: 'Partner', avatar: 'T', color: 'from-purple-400 to-purple-600', status: 'active' },
        { id: 3, name: 'Global Trade', role: 'Vendor', avatar: 'G', color: 'from-emerald-400 to-emerald-600', status: 'pending' },
    ];

    const documents = [
        { name: 'Q4_Report.pdf', size: '2.4 MB', shared: true },
        { name: 'Contract_Draft.docx', size: '156 KB', shared: true },
        { name: 'Invoice_2024.xlsx', size: '89 KB', shared: false },
    ];

    return (
        <div className="w-full h-full relative p-4 isolate">
            {/* Grid Background */}
            <div className="absolute inset-y-0 -left-64 -right-64 -z-10 mask-[radial-gradient(closest-side,black_40%,transparent_100%)]">
                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                        backgroundSize: "24px 24px"
                    }}
                />
            </div>

            <div className="absolute inset-0 flex items-center justify-center translate-x-[60px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-[400px] bg-white border border-zinc-200 rounded-xl shadow-xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="px-4 py-3 bg-gradient-to-r from-zinc-800 to-zinc-900 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                <span className="text-white text-sm">🔐</span>
                            </div>
                            <div>
                                <div className="text-[10px] text-zinc-400 uppercase">Secure Portal</div>
                                <div className="text-sm font-semibold text-white">Client Access Hub</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-400" />
                            <span className="text-[9px] text-zinc-400">256-bit SSL</span>
                        </div>
                    </div>

                    {/* User Cards */}
                    <div className="p-3 border-b border-zinc-100">
                        <div className="text-[9px] text-zinc-400 uppercase mb-2">Portal Members</div>
                        <div className="flex gap-2">
                            {users.map((user, i) => (
                                <motion.div
                                    key={user.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    onMouseEnter={() => setActiveUser(user.id)}
                                    onMouseLeave={() => setActiveUser(null)}
                                    className={`flex-1 p-2 rounded-lg border cursor-pointer transition-all ${activeUser === user.id
                                        ? 'border-blue-300 bg-blue-50'
                                        : 'border-zinc-100 bg-zinc-50 hover:border-zinc-200'
                                        }`}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${user.color} flex items-center justify-center text-white text-[10px] font-bold`}>
                                            {user.avatar}
                                        </div>
                                        <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                                    </div>
                                    <div className="text-[9px] font-medium text-zinc-700 truncate">{user.name}</div>
                                    <div className="text-[8px] text-zinc-400">{user.role}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Document List */}
                    <div className="p-3 border-b border-zinc-100">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[9px] text-zinc-400 uppercase">Shared Documents</span>
                            <button className="text-[8px] text-blue-500 hover:underline">+ Upload</button>
                        </div>
                        <div className="space-y-1.5">
                            {documents.map((doc, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-2 p-2 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-zinc-200 cursor-pointer transition-all"
                                >
                                    <div className="w-6 h-6 rounded bg-red-50 flex items-center justify-center text-[10px]">📄</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[10px] font-medium text-zinc-700 truncate">{doc.name}</div>
                                        <div className="text-[8px] text-zinc-400">{doc.size}</div>
                                    </div>
                                    {doc.shared && (
                                        <div className="text-[8px] text-green-500 flex items-center gap-0.5">
                                            <span className="w-1 h-1 rounded-full bg-green-400" />
                                            Shared
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="p-3">
                        <div className="text-[9px] text-zinc-400 uppercase mb-2">Recent Activity</div>
                        <div className="space-y-2">
                            {[
                                { action: 'Document viewed', user: 'Acme Corp', time: '2m ago' },
                                { action: 'Comment added', user: 'TechStart Inc', time: '15m ago' },
                            ].map((activity, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-center gap-2 text-[9px]"
                                >
                                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                                    <span className="text-zinc-600">{activity.action} by</span>
                                    <span className="font-medium text-zinc-700">{activity.user}</span>
                                    <span className="text-zinc-400 ml-auto">{activity.time}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-3 py-2 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
                        <div className="text-[8px] text-zinc-400 flex items-center gap-1">
                            🔒 End-to-end encrypted
                        </div>
                        <button className="text-[9px] px-3 py-1 bg-zinc-900 text-white rounded font-medium hover:bg-zinc-800">
                            Manage Portal →
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
