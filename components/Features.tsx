"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, CheckCircle2, Circle } from "lucide-react";
import Image from "next/image";

const tabs = [
    {
        id: "workflows",
        label: "Workflows",
        title: "Automated Workflows\nLogic without limits.",
        description: "Design complex business logic visually. From simple approvals to multi-step parallel processing chains, automate every aspect of your operations without writing a single line of glue code.",
        checklist: [
            { id: "1.1", text: "Visual drag-and-drop logic builder" },
            { id: "1.2", text: "Conditional branching and loops" },
            { id: "1.3", text: "Scheduled and event-trigger execution" },
            { id: "1.4", text: "Human-in-the-loop approval steps" },
        ],
        image: "/features/workflow.png"
    },
    {
        id: "integrations",
        label: "Integrations",
        title: "Seamless Integrations\nConnect everything instantly.",
        description: "Break down data silos. Connect with thousands of popular apps and services out of the box. Whether it's CRM, payment gateways, or communication tools, we've got you covered.",
        checklist: [
            { id: "2.1", text: "Pre-built connectors for Stripe, Slack, Salesforce" },
            { id: "2.2", text: "Custom API integration builder" },
            { id: "2.3", text: "Real-time data synchronization" },
            { id: "2.4", text: "Secure OAuth2 authentication handling" },
        ],
        image: "/features/global.png"
    },
    {
        id: "apps",
        label: "Apps",
        title: "Custom Apps\nTailored to your needs.",
        description: "Build internal tools, customer-facing portals, or mobile apps. Our platform adapts to your unique requirements, providing a unified experience across all devices.",
        checklist: [
            { id: "3.1", text: "Responsive UI components out-of-the-box" },
            { id: "3.2", text: "Role-based access control (RBAC)" },
            { id: "3.3", text: "Offline-first mobile capabilities" },
            { id: "3.4", text: "Custom branding and white-labeling" },
        ],
        image: "/features/speed.png"
    },
    {
        id: "forms",
        label: "Forms",
        title: "Intelligent Forms\nData collection evolved.",
        description: "Create smart forms that adapt to user input. Capture data efficiently with validation, conditional logic, and direct database mapping.",
        checklist: [
            { id: "4.1", text: "Multi-step wizards and conditional fields" },
            { id: "4.2", text: "Built-in data validation and sanitization" },
            { id: "4.3", text: "File uploads and signature capture" },
            { id: "4.4", text: "Auto-save and partial submission support" },
        ],
        image: "/features/blueprint-rocket.png"
    },
    {
        id: "reports",
        label: "Reports",
        title: "Dynamic Reports\nInsights at a glance.",
        description: "Transform raw data into actionable insights. Generate beautiful charts, pivot tables, and exportable reports that keep your stakeholders informed.",
        checklist: [
            { id: "5.1", text: "Interactive drag-and-drop dashboard builder" },
            { id: "5.2", text: "Real-time data visualization" },
            { id: "5.3", text: "Scheduled email reports and PDF exports" },
            { id: "5.4", text: "Drill-down capabilities for deep analysis" },
        ],
        image: "/features/analytics.png"
    },
    {
        id: "portals",
        label: "Portals",
        title: "Secure Portals\nCollaborate with confidence.",
        description: "Give your clients, partners, and vendors their own secure space. Share data, collect documents, and collaborate seamlessly in a controlled environment.",
        checklist: [
            { id: "6.1", text: "Granular permission settings per user" },
            { id: "6.2", text: "Secure document sharing and versioning" },
            { id: "6.3", text: "Audit logs for all activities" },
            { id: "6.4", text: "Customizable onboarding workflows" },
        ],
        image: "/features/global.png"
    },
    {
        id: "boards",
        label: "Boards",
        title: "Kanban Boards\nVisualize your process.",
        description: "Manage projects and tasks visually. Move items through stages, assign owners, and track progress with intuitive Kanban boards integrated directly into your data.",
        checklist: [
            { id: "7.1", text: "Drag-and-drop status updates" },
            { id: "7.2", text: "Customizable columns and swimlanes" },
            { id: "7.3", text: "Automated actions on stage changes" },
            { id: "7.4", text: "Filter, sort, and group by any field" },
        ],
        image: "/features/workflow.png"
    }
];

const indexToEmoji = (index: number) => {
    const emojis = ["⚡", "🔗", "📱", "📝", "📊", "🛡️", "📋"];
    return emojis[index % emojis.length];
};
// AppsVisual - Shows a detailed app preview with multi-device support
function AppsVisual() {
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

// PortalsVisual - Secure client portal interface
function PortalsVisual() {
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

// BoardsVisual - Kanban board interface
function BoardsVisual() {
    const [draggedCard, setDraggedCard] = useState<string | null>(null);

    const columns = [
        {
            id: 'todo',
            title: 'To Do',
            color: 'bg-zinc-400',
            cards: [
                { id: 'task1', title: 'Design system update', priority: 'high', assignee: 'JD' },
                { id: 'task2', title: 'API documentation', priority: 'medium', assignee: 'SM' },
            ]
        },
        {
            id: 'progress',
            title: 'In Progress',
            color: 'bg-blue-400',
            cards: [
                { id: 'task3', title: 'User authentication', priority: 'high', assignee: 'MR' },
            ]
        },
        {
            id: 'done',
            title: 'Done',
            color: 'bg-green-400',
            cards: [
                { id: 'task4', title: 'Database migration', priority: 'low', assignee: 'JD' },
            ]
        }
    ];

    const priorityColors: Record<string, string> = {
        high: 'bg-red-100 text-red-600',
        medium: 'bg-yellow-100 text-yellow-600',
        low: 'bg-green-100 text-green-600'
    };

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
                    className="w-[440px] bg-zinc-100 border border-zinc-200 rounded-xl shadow-xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="px-4 py-2.5 bg-white border-b border-zinc-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white text-xs">
                                📋
                            </div>
                            <div>
                                <div className="text-sm font-bold text-zinc-800">Sprint Board</div>
                                <div className="text-[9px] text-zinc-400">Q4 Product Launch</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="flex -space-x-1.5">
                                <div className="w-5 h-5 rounded-full bg-blue-400 border-2 border-white text-[8px] text-white flex items-center justify-center font-bold">JD</div>
                                <div className="w-5 h-5 rounded-full bg-purple-400 border-2 border-white text-[8px] text-white flex items-center justify-center font-bold">SM</div>
                                <div className="w-5 h-5 rounded-full bg-emerald-400 border-2 border-white text-[8px] text-white flex items-center justify-center font-bold">MR</div>
                            </div>
                            <span className="text-[9px] text-zinc-400 ml-1">+2</span>
                        </div>
                    </div>

                    {/* Board Columns */}
                    <div className="p-3 flex gap-2">
                        {columns.map((column, colIndex) => (
                            <motion.div
                                key={column.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + colIndex * 0.1 }}
                                className="flex-1 bg-white rounded-lg border border-zinc-200 overflow-hidden"
                            >
                                {/* Column Header */}
                                <div className="px-2 py-1.5 border-b border-zinc-100 flex items-center gap-1.5">
                                    <div className={`w-2 h-2 rounded-full ${column.color}`} />
                                    <span className="text-[10px] font-semibold text-zinc-700">{column.title}</span>
                                    <span className="text-[9px] text-zinc-400 ml-auto">{column.cards.length}</span>
                                </div>

                                {/* Cards */}
                                <div className="p-1.5 space-y-1.5 min-h-[120px]">
                                    {column.cards.map((card, cardIndex) => (
                                        <motion.div
                                            key={card.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 + colIndex * 0.1 + cardIndex * 0.05 }}
                                            whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                            onMouseEnter={() => setDraggedCard(card.id)}
                                            onMouseLeave={() => setDraggedCard(null)}
                                            className={`p-2 bg-zinc-50 rounded border cursor-grab transition-all ${draggedCard === card.id
                                                ? 'border-blue-300 bg-blue-50'
                                                : 'border-zinc-100'
                                                }`}
                                        >
                                            <div className="text-[9px] font-medium text-zinc-700 mb-1.5">{card.title}</div>
                                            <div className="flex items-center justify-between">
                                                <span className={`text-[7px] px-1.5 py-0.5 rounded font-medium ${priorityColors[card.priority]}`}>
                                                    {card.priority.toUpperCase()}
                                                </span>
                                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-400 text-[7px] text-white flex items-center justify-center font-bold">
                                                    {card.assignee}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Add Card Button */}
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="w-full py-1 text-[9px] text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition-colors flex items-center justify-center gap-1"
                                    >
                                        <span>+</span> Add
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="px-4 py-2 bg-white border-t border-zinc-200">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[9px] text-zinc-500">Sprint Progress</span>
                            <span className="text-[9px] font-medium text-zinc-700">4/7 tasks</span>
                        </div>
                        <div className="h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-violet-400 to-violet-600 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '57%' }}
                                transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// ReportsVisual - Complex multi-panel dashboard
function ReportsVisual() {
    const [selectedMetric, setSelectedMetric] = useState<'revenue' | 'users' | 'orders'>('revenue');
    const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

    const metrics = {
        revenue: { value: '$128.5k', change: '+18.2%', positive: true, data: [40, 65, 45, 80, 55, 90, 75, 95] },
        users: { value: '12,847', change: '+24.1%', positive: true, data: [30, 45, 60, 55, 70, 65, 85, 90] },
        orders: { value: '3,294', change: '-2.3%', positive: false, data: [70, 60, 75, 55, 65, 50, 60, 55] }
    };

    const regions = [
        { id: 'na', name: 'North America', value: 45, x: 25, y: 35 },
        { id: 'eu', name: 'Europe', value: 28, x: 52, y: 30 },
        { id: 'asia', name: 'Asia Pacific', value: 18, x: 75, y: 40 },
        { id: 'latam', name: 'Latin America', value: 9, x: 32, y: 65 },
    ];

    const tableData = [
        { product: 'Enterprise Suite', sales: 2847, revenue: '$48.2k', trend: 'up' },
        { product: 'Pro Plan', sales: 1923, revenue: '$32.1k', trend: 'up' },
        { product: 'Starter Pack', sales: 892, revenue: '$8.9k', trend: 'down' },
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

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center justify-center translate-x-[60px]">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-[420px] bg-white border border-zinc-200 rounded-xl shadow-xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="px-3 py-2 bg-zinc-900 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                <div className="w-2 h-2 rounded-full bg-green-400" />
                            </div>
                            <span className="text-[10px] text-zinc-400 font-medium">Analytics Dashboard</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-[8px] text-zinc-500">LIVE</span>
                        </div>
                    </div>

                    {/* Metrics Tabs */}
                    <div className="px-3 py-2 border-b border-zinc-100 flex gap-2">
                        {(['revenue', 'users', 'orders'] as const).map((metric) => (
                            <motion.button
                                key={metric}
                                onClick={() => setSelectedMetric(metric)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex-1 p-2 rounded-lg transition-all ${selectedMetric === metric
                                    ? 'bg-indigo-50 border border-indigo-200'
                                    : 'bg-zinc-50 border border-transparent hover:border-zinc-200'
                                    }`}
                            >
                                <div className="text-[8px] text-zinc-400 uppercase">{metric}</div>
                                <div className={`text-sm font-bold ${selectedMetric === metric ? 'text-indigo-600' : 'text-zinc-800'}`}>
                                    {metrics[metric].value}
                                </div>
                                <div className={`text-[9px] ${metrics[metric].positive ? 'text-green-500' : 'text-red-500'}`}>
                                    {metrics[metric].change}
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="p-3 grid grid-cols-2 gap-2">

                        {/* Sparkline Chart */}
                        <motion.div
                            key={selectedMetric}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="col-span-2 bg-zinc-50 rounded-lg p-2"
                        >
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[8px] text-zinc-400 uppercase">Trend Analysis</span>
                                <span className="text-[8px] text-zinc-400">Last 8 weeks</span>
                            </div>
                            <svg className="w-full h-12" viewBox="0 0 200 48">
                                <defs>
                                    <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {/* Area fill */}
                                <motion.path
                                    d={`M 0,${48 - metrics[selectedMetric].data[0] * 0.48} ${metrics[selectedMetric].data.map((d, i) => `L ${i * 28.5},${48 - d * 0.48}`).join(' ')} L 200,48 L 0,48 Z`}
                                    fill="url(#sparkGrad)"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                />
                                {/* Line */}
                                <motion.path
                                    d={`M 0,${48 - metrics[selectedMetric].data[0] * 0.48} ${metrics[selectedMetric].data.map((d, i) => `L ${i * 28.5},${48 - d * 0.48}`).join(' ')}`}
                                    fill="none"
                                    stroke="#6366f1"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1 }}
                                />
                                {/* Data points */}
                                {metrics[selectedMetric].data.map((d, i) => (
                                    <motion.circle
                                        key={i}
                                        cx={i * 28.5}
                                        cy={48 - d * 0.48}
                                        r="2.5"
                                        fill="white"
                                        stroke="#6366f1"
                                        strokeWidth="1.5"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5 + i * 0.08 }}
                                    />
                                ))}
                            </svg>
                        </motion.div>

                        {/* World Map */}
                        <div className="bg-zinc-50 rounded-lg p-2">
                            <div className="text-[8px] text-zinc-400 uppercase mb-1">Geographic Split</div>
                            <div className="relative h-16 bg-zinc-100 rounded overflow-hidden">
                                {/* Simple world representation */}
                                <svg className="w-full h-full" viewBox="0 0 100 60">
                                    {/* Continents simplified */}
                                    <ellipse cx="25" cy="30" rx="12" ry="10" fill="#e5e7eb" />
                                    <ellipse cx="52" cy="28" rx="8" ry="8" fill="#e5e7eb" />
                                    <ellipse cx="75" cy="32" rx="14" ry="12" fill="#e5e7eb" />
                                    <ellipse cx="30" cy="48" rx="8" ry="6" fill="#e5e7eb" />

                                    {/* Data points */}
                                    {regions.map((region) => (
                                        <motion.g key={region.id}>
                                            <motion.circle
                                                cx={region.x}
                                                cy={region.y}
                                                r={hoveredRegion === region.id ? 5 : 3}
                                                fill={hoveredRegion === region.id ? '#6366f1' : '#3b82f6'}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.3 + regions.indexOf(region) * 0.1 }}
                                                onMouseEnter={() => setHoveredRegion(region.id)}
                                                onMouseLeave={() => setHoveredRegion(null)}
                                                className="cursor-pointer"
                                            />
                                            {hoveredRegion === region.id && (
                                                <motion.circle
                                                    cx={region.x}
                                                    cy={region.y}
                                                    r="8"
                                                    fill="none"
                                                    stroke="#6366f1"
                                                    strokeWidth="1"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1.5, opacity: 0 }}
                                                    transition={{ repeat: Infinity, duration: 1 }}
                                                />
                                            )}
                                        </motion.g>
                                    ))}
                                </svg>
                                {/* Hover tooltip */}
                                <AnimatePresence>
                                    {hoveredRegion && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute bottom-0 left-0 right-0 bg-zinc-800/90 text-white text-[8px] py-1 px-2 flex justify-between"
                                        >
                                            <span>{regions.find(r => r.id === hoveredRegion)?.name}</span>
                                            <span className="font-bold">{regions.find(r => r.id === hoveredRegion)?.value}%</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Donut Chart */}
                        <div className="bg-zinc-50 rounded-lg p-2">
                            <div className="text-[8px] text-zinc-400 uppercase mb-1">By Channel</div>
                            <div className="flex items-center justify-center h-16">
                                <svg className="w-14 h-14" viewBox="0 0 32 32">
                                    <motion.circle cx="16" cy="16" r="10" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="31.4 62.8" strokeDashoffset="0" initial={{ strokeDasharray: "0 62.8" }} animate={{ strokeDasharray: "31.4 62.8" }} transition={{ duration: 0.8 }} />
                                    <motion.circle cx="16" cy="16" r="10" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray="18.8 62.8" strokeDashoffset="-31.4" initial={{ strokeDasharray: "0 62.8" }} animate={{ strokeDasharray: "18.8 62.8" }} transition={{ duration: 0.8, delay: 0.2 }} />
                                    <motion.circle cx="16" cy="16" r="10" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="12.6 62.8" strokeDashoffset="-50.2" initial={{ strokeDasharray: "0 62.8" }} animate={{ strokeDasharray: "12.6 62.8" }} transition={{ duration: 0.8, delay: 0.4 }} />
                                    <text x="16" y="18" textAnchor="middle" className="text-[6px] font-bold fill-zinc-700">100%</text>
                                </svg>
                                <div className="ml-2 space-y-0.5">
                                    <div className="flex items-center gap-1 text-[7px]"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Direct 50%</div>
                                    <div className="flex items-center gap-1 text-[7px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Organic 30%</div>
                                    <div className="flex items-center gap-1 text-[7px]"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Paid 20%</div>
                                </div>
                            </div>
                        </div>

                        {/* Data Table */}
                        <div className="col-span-2 bg-zinc-50 rounded-lg p-2">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[8px] text-zinc-400 uppercase">Top Products</span>
                                <span className="text-[7px] text-indigo-500 cursor-pointer hover:underline">View all</span>
                            </div>
                            <div className="space-y-1">
                                {tableData.map((row, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        className="flex items-center justify-between bg-white rounded px-2 py-1.5 border border-zinc-100"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white text-[8px] font-bold">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <div className="text-[9px] font-medium text-zinc-700">{row.product}</div>
                                                <div className="text-[7px] text-zinc-400">{row.sales} sales</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-[9px] font-bold text-zinc-800">{row.revenue}</span>
                                            <span className={`text-[8px] ${row.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                                {row.trend === 'up' ? '↑' : '↓'}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-3 py-2 border-t border-zinc-100 flex items-center justify-between bg-zinc-50">
                        <div className="flex gap-1">
                            <button className="text-[8px] px-2 py-1 rounded bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50">📤 Export</button>
                            <button className="text-[8px] px-2 py-1 rounded bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50">📅 Schedule</button>
                        </div>
                        <button className="text-[8px] px-3 py-1 rounded bg-indigo-500 text-white font-medium hover:bg-indigo-600">
                            Generate Report →
                        </button>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

function IntegrationsVisual() {
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
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 translate-x-[60px]">

                {/* Top Row: Environments */}
                <div className="flex gap-4">
                    {/* Card 1 - Production */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            borderStyle: "dashed",
                            boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.2 }}
                        className="bg-white border border-zinc-200 border-solid rounded-lg p-4 w-40 shadow-sm cursor-pointer"
                    >
                        <div className="text-[10px] text-zinc-400 font-medium mb-1">Environment</div>
                        <div className="text-zinc-800 font-medium text-lg">Production</div>
                    </motion.div>
                    {/* Card 2 - Experimental */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            borderStyle: "dashed",
                            boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="bg-white border border-zinc-200 border-solid rounded-lg p-4 w-40 shadow-sm cursor-pointer"
                    >
                        <div className="text-[10px] text-zinc-400 font-medium mb-1">Environment</div>
                        <div className="text-zinc-800 font-medium text-lg">Experimental</div>
                    </motion.div>
                    {/* Card 3 - Staging */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            borderStyle: "dashed",
                            boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className="bg-white border border-zinc-200 border-solid rounded-lg p-4 w-40 shadow-sm relative cursor-pointer"
                    >
                        <div className="text-[10px] text-zinc-400 font-medium mb-1">Environment</div>
                        <div className="text-zinc-800 font-medium text-lg">Staging</div>
                        {/* Connection Point Marker */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-black rounded-full" />
                    </motion.div>
                </div>

                {/* Connection Line Container - positions relative to the flex center */}
                <div className="h-32 w-full relative -my-24 z-0 pointer-events-none flex justify-center">
                    <svg width="352" height="140" className="overflow-visible">
                        {/* 
                           SVG is 352px wide (3 cards * 160px + 2 gaps * 16px = 512px... but we center on middle card)
                           Cards: w-40 = 160px, gap-4 = 16px
                           Middle card center = 176 (half of 352)
                           Staging card center = 176 + 80 + 16 + 80 = 176 + 176 = 352 ... wait
                           Let's simplify: SVG center = 176. Staging center = 176 + 176 = 352
                           Actually simpler: relative to SVG leftmost point
                           - Production center: 80
                           - Experimental center: 80 + 160 + 16 = 256... no
                           
                           Simpler approach: viewBox centered, Staging at right.
                           viewBox="-176 0 352 140" means center is at 0.
                           Production center: -176
                           Experimental center: 0
                           Staging center: +176
                        */}
                        <motion.path
                            d="M 352,40 C 352,80 176,60 176,125"
                            fill="none"
                            stroke="#52525b"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        />
                        {/* Endpoint marker at "From Staging" */}
                        <rect x="164" y="125" width="24" height="2" fill="#000" rx="1" />
                    </svg>
                </div>

                {/* Bottom Row: Code */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="relative z-10 flex flex-col items-center gap-3 mt-12"
                >
                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">From Staging</div>
                    <div className="bg-zinc-50 border border-zinc-200 rounded-lg px-6 py-4 font-mono text-sm text-zinc-600 shadow-sm flex items-center">
                        <span className="text-purple-600 mr-2">import</span> {'{ prompt }'} <span className="text-purple-600 mx-2">from</span> <span className="text-green-600">"Forge"</span>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

function WorkflowVisual() {
    const [activeBranch, setActiveBranch] = useState<'left' | 'right' | null>(null);

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

            {/* Workflow Nodes - Shifted Right */}
            <div className="absolute inset-0 flex flex-col items-center justify-center translate-x-[60px]">

                {/* Top Row: Trigger */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="relative z-10 bg-white border border-dashed border-zinc-300 rounded-lg px-4 py-3 shadow-sm flex items-center gap-3 w-48 cursor-pointer"
                >
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div>
                        <div className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">Trigger</div>
                        <div className="text-xs font-medium text-zinc-800">New Order Recieved</div>
                    </div>
                </motion.div>

                {/* Connecting Line 1 - In Flex Flow */}
                <div className="h-12 w-px relative overflow-visible">
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                        <motion.path
                            d="M0.5,0 v48"
                            fill="none"
                            stroke="#a1a1aa"
                            strokeWidth="2.5"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 0.2 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                        />
                    </svg>
                </div>

                {/* Middle Row: Logic */}
                <div className="flex gap-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="bg-white border border-zinc-200 rounded-lg px-4 py-3 shadow-md flex items-center gap-3 w-48 cursor-pointer"
                    >
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div>
                            <div className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">Condition</div>
                            <div className="text-xs font-medium text-zinc-800">Order &gt; $500</div>
                        </div>
                    </motion.div>
                </div>

                {/* Connecting Line 2 (Branching Logic) - In Flex Flow */}
                <div className="h-12 w-[146px] relative overflow-visible">
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                        {/* Static/Base Lines (Faint) */}
                        <path
                            d="M73,0 v20 H1 v28"
                            fill="none"
                            stroke="#e4e4e7"
                            strokeWidth="2.5"
                            strokeDasharray="4 4"
                        />
                        <path
                            d="M73,0 v20 H145 v28"
                            fill="none"
                            stroke="#e4e4e7"
                            strokeWidth="2.5"
                            strokeDasharray="4 4"
                        />

                        {/* Dynamic Lines based on selection */}
                        <AnimatePresence>
                            {/* Left Active */}
                            {activeBranch === 'left' && (
                                <motion.path
                                    key="left-active"
                                    d="M73,0 v20 H1 v28"
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="2.5"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {/* Right Active */}
                            {activeBranch === 'right' && (
                                <motion.path
                                    key="right-active"
                                    d="M73,0 v20 H145 v28"
                                    fill="none"
                                    stroke="#f97316"
                                    strokeWidth="2.5"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Intersection Dot */}
                        <circle cx="73" cy="20" r="3" fill="#d4d4d8" />
                    </svg>
                </div>


                {/* Bottom Row: Actions */}
                <div className="flex gap-4">
                    <motion.div
                        onMouseEnter={() => setActiveBranch('left')}
                        onMouseLeave={() => setActiveBranch(null)}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: activeBranch === 'left' ? 1.05 : 1,
                            borderColor: activeBranch === 'left' ? '#3b82f6' : '#e4e4e7'
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="relative z-10 bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2 flex items-center gap-2 w-32 cursor-pointer transition-colors"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                        <span className="text-xs text-zinc-600">Auto-Approve</span>
                    </motion.div>

                    <motion.div
                        onMouseEnter={() => setActiveBranch('right')}
                        onMouseLeave={() => setActiveBranch(null)}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: activeBranch === 'right' ? 1.05 : 1,
                            borderColor: activeBranch === 'right' ? '#f97316' : '#e4e4e7'
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="relative z-10 bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2 flex items-center gap-2 w-32 cursor-pointer transition-colors"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        <span className="text-xs text-zinc-600">Manual Review</span>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}

function Feature3DCard({ activeTab, activeIndex, indexToEmoji }: { activeTab: any, activeIndex: number, indexToEmoji: (i: number) => string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateXFinal = useTransform(mouseY, [-0.5, 0.5], [12.5, -12.5]);
    const rotateYFinal = useTransform(mouseX, [-0.5, 0.5], [-12.5, 12.5]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = event.clientX - rect.left;
        const mouseYVal = event.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{
                rotateX: rotateXFinal,
                rotateY: rotateYFinal,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full h-full relative cursor-crosshair"
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            {/* Back Layer (Shadow/Depth) */}
            <div
                className="absolute inset-0 bg-zinc-900/5 rounded-2xl transform translate-z-[-20px] blur-sm transition-opacity duration-500"
                style={{ transform: "translateZ(-40px)" }}
            />

            {/* Main Card */}
            <div
                className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-zinc-200/50 p-6 flex flex-col"
                style={{ transform: "translateZ(0px)" }}
            >
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-zinc-100 pb-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-sm">
                        📝
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Active Module</div>
                        <div className="font-bold text-zinc-800 text-sm">{activeTab.label}</div>
                    </div>
                    <div className="text-[9px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full font-medium">Step 2 of 3</div>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center font-bold">✓</div>
                        <div className="text-[9px] text-emerald-600 font-medium">Info</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-emerald-500 rounded" />
                    <div className="flex items-center gap-1">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center font-bold">2</div>
                        <div className="text-[9px] text-emerald-600 font-medium">Details</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-zinc-200 rounded" />
                    <div className="flex items-center gap-1">
                        <div className="w-5 h-5 rounded-full bg-zinc-200 text-zinc-400 text-[9px] flex items-center justify-center font-bold">3</div>
                        <div className="text-[9px] text-zinc-400 font-medium">Review</div>
                    </div>
                </div>

                {/* Form Content */}
                <div className="flex-1 rounded-xl bg-zinc-50/80 border border-zinc-100 p-3 flex flex-col gap-2.5 overflow-hidden">
                    {/* Name Field with Validation */}
                    <div className="space-y-1">
                        <div className="flex items-center justify-between">
                            <label className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Full Name</label>
                            <span className="text-[8px] text-emerald-500 flex items-center gap-0.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[6px]">✓</span>
                                Valid
                            </span>
                        </div>
                        <div className="h-8 bg-white border border-emerald-300 rounded-md px-2.5 flex items-center text-[11px] text-zinc-700 shadow-sm ring-2 ring-emerald-100">
                            John Smith
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1">
                        <label className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Email Address</label>
                        <div className="h-8 bg-white border border-zinc-200 rounded-md px-2.5 flex items-center text-[11px] text-zinc-700 shadow-sm">
                            john.smith@company.com
                        </div>
                    </div>

                    {/* Department Dropdown */}
                    <div className="space-y-1">
                        <label className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Department</label>
                        <div className="h-8 bg-white border border-zinc-200 rounded-md px-2.5 flex items-center justify-between text-[11px] text-zinc-700 shadow-sm">
                            <span>Engineering</span>
                            <span className="text-zinc-300 text-[8px]">▼</span>
                        </div>
                    </div>

                    {/* Date & Priority Row */}
                    <div className="flex gap-2">
                        <div className="flex-1 space-y-1">
                            <label className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Start Date</label>
                            <div className="h-8 bg-white border border-zinc-200 rounded-md px-2.5 flex items-center justify-between text-[11px] text-zinc-600 shadow-sm">
                                <span>Dec 15, 2024</span>
                                <span className="text-zinc-400">📅</span>
                            </div>
                        </div>
                        <div className="flex-1 space-y-1">
                            <label className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Priority</label>
                            <div className="h-8 bg-white border border-zinc-200 rounded-md px-2.5 flex items-center gap-1.5 text-[11px] shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-orange-400" />
                                <span className="text-zinc-700">Medium</span>
                            </div>
                        </div>
                    </div>

                    {/* File Upload */}
                    <div className="space-y-1">
                        <label className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Attachments</label>
                        <div className="h-10 bg-white border border-dashed border-zinc-300 rounded-md px-2.5 flex items-center justify-between text-[10px] text-zinc-500">
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-400">📎</span>
                                <span>proposal.pdf</span>
                                <span className="text-[8px] text-zinc-400">(2.4 MB)</span>
                            </div>
                            <span className="text-emerald-500">✓</span>
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 mt-1">
                        <div className="w-4 h-4 rounded bg-emerald-500 flex items-center justify-center text-white text-[8px]">✓</div>
                        <span className="text-[10px] text-zinc-600">Send notification to team members</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-3">
                    <button className="flex-1 h-9 border border-zinc-200 rounded-lg text-[11px] font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
                        Back
                    </button>
                    <button className="flex-1 h-9 bg-zinc-900 rounded-lg text-[11px] font-medium text-white shadow-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1.5">
                        Continue
                        <span className="text-[10px]">→</span>
                    </button>
                </div>

                {/* Floating Badge */}
                <div
                    className="absolute -right-4 top-16 bg-emerald-500 text-white text-[10px] px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5"
                    style={{ transform: "translateZ(60px)" }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Live Preview
                </div>
            </div>
        </motion.div>
    );
}

// Scroll to specific section
const scrollToTab = (tabId: string) => {
    const element = document.getElementById(`feature-card-${tabId}`);
    if (element) {
        const offset = window.innerHeight * 0.25;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};

export function Features({ className = "" }: { className?: string }) {
    const [activeTabId, setActiveTabId] = useState("workflows");
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Scroll to specific section
    const scrollToTab = (tabId: string) => {
        const element = document.getElementById(`feature-card-${tabId}`);
        if (element) {
            const offset = window.innerHeight * 0.25;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Enhanced Intersection Observer for accurate scroll tracking
    useEffect(() => {
        const observerOptions = {
            root: null,
            // Trigger when section is in the middle 40% of viewport
            rootMargin: "-30% 0px -30% 0px",
            threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
        };

        let currentIntersecting: string | null = null;

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // Sort entries by intersection ratio to find the most visible section
            const sortedEntries = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (sortedEntries.length > 0) {
                const mostVisible = sortedEntries[0];
                const id = mostVisible.target.getAttribute("data-tab-id");

                // Only update if this is a different section and it's sufficiently visible
                if (id && id !== currentIntersecting && mostVisible.intersectionRatio > 0.2) {
                    currentIntersecting = id;
                    setActiveTabId(id);
                }
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        // Initial detection on mount
        setTimeout(() => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            cardRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const elementMiddle = rect.top + window.scrollY + rect.height / 2;
                    if (Math.abs(scrollPosition - elementMiddle) < window.innerHeight / 2) {
                        setActiveTabId(tabs[index].id);
                    }
                }
            });
        }, 100);

        // Check for bottom of page to ensure last item activates
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
                setActiveTabId(tabs[tabs.length - 1].id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];
    const activeIndex = tabs.findIndex(t => t.id === activeTabId);
    const progressPercentage = activeIndex === 0 ? 0 : (activeIndex / (tabs.length - 1)) * 100;

    return (
        <section className={`bg-white relative pb-32 ${className}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start relative lg:-ml-[60px]">

                    {/* Left: Scrollable Content (Restricted to < 45% width) */}
                    <div className="lg:col-span-5 flex flex-col gap-24 pb-32">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.id}
                                id={`feature-card-${tab.id}`}
                                data-tab-id={tab.id}
                                ref={(el: HTMLDivElement | null) => { cardRefs.current[index] = el; }}
                                className="scroll-mt-[25vh] min-h-[500px] flex items-center"
                            >
                                <motion.div
                                    className="bg-white rounded-none p-0 w-full"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2 className="text-2xl font-medium text-zinc-900 mb-4 leading-tight whitespace-pre-line">
                                        {tab.title}
                                    </h2>
                                    <p className="text-lg text-zinc-500 mb-76 leading-relaxed max-w-lg">
                                        {tab.description}
                                    </p>

                                    <div className="border-t border-zinc-200">
                                        {tab.checklist.slice(0, 3).map((item, i) => (
                                            <div key={i} className="py-3 border-b border-zinc-200 flex items-start gap-6">
                                                <span className="text-zinc-400 font-mono text-sm pt-1">
                                                    {i + 1}
                                                </span>
                                                <div className="flex flex-col gap-1">
                                                    <h4 className={`text-base font-medium transition-colors duration-300 ${i === 1 ? "text-zinc-500" : "text-zinc-500"
                                                        }`}>
                                                        {item.text}
                                                    </h4>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Middle: 3D Visual Element */}
                    <div className="hidden lg:flex lg:col-span-4 sticky top-[10vh] h-[80vh] items-center justify-center perspective-[2000px] z-10 px-4">
                        <AnimatePresence mode="wait">
                            {activeTabId === 'forms' && (
                                <motion.div
                                    key="forms-card"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full relative flex items-center justify-center isolate"
                                >
                                    {/* Grid Background */}
                                    <div className="absolute inset-y-0 -left-64 -right-64 -z-10 mask-[radial-gradient(closest-side,black_40%,transparent_100%)]">
                                        <div className="absolute inset-0 opacity-[0.08]"
                                            style={{
                                                backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                                                backgroundSize: "24px 24px"
                                            }}
                                        />
                                    </div>

                                    {/* Alignment Guides */}
                                    <div
                                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 translate-x-[60px]"
                                        style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
                                    >
                                        <div className="w-full max-w-[400px] aspect-4/5 relative">
                                            {/* Horizontal Lines */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-px border-t border-dashed border-zinc-300" />
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw] h-px border-t border-dashed border-zinc-300" />

                                            {/* Vertical Lines */}
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[200vh] w-px border-l border-dashed border-zinc-300" />
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[200vh] w-px border-l border-dashed border-zinc-300" />

                                            {/* Corner Intersections (Plus signs) */}
                                            <div className="absolute -top-1.5 -left-1.5 text-zinc-400">+</div>
                                            <div className="absolute -top-1.5 -right-1.5 text-zinc-400">+</div>
                                            <div className="absolute -bottom-1.5 -left-1.5 text-zinc-400">+</div>
                                            <div className="absolute -bottom-1.5 -right-1.5 text-zinc-400">+</div>
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        className="w-full max-w-[400px] aspect-4/5 perspective-[2000px] translate-x-[60px]"
                                    >
                                        <Feature3DCard
                                            activeTab={activeTab}
                                            activeIndex={activeIndex}
                                            indexToEmoji={indexToEmoji}
                                        />
                                    </motion.div>
                                </motion.div>
                            )}

                            {activeTabId === 'integrations' && (
                                <motion.div
                                    key="integrations-visual"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center"
                                >
                                    <IntegrationsVisual />
                                </motion.div>
                            )}

                            {activeTabId === 'apps' && (
                                <motion.div
                                    key="apps-visual"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center"
                                >
                                    <AppsVisual />
                                </motion.div>
                            )}

                            {activeTabId === 'reports' && (
                                <motion.div
                                    key="reports-visual"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center"
                                >
                                    <ReportsVisual />
                                </motion.div>
                            )}

                            {activeTabId === 'workflows' && (
                                <motion.div
                                    key="workflow-visual"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center"
                                >
                                    <WorkflowVisual />
                                </motion.div>
                            )}

                            {activeTabId === 'portals' && (
                                <motion.div
                                    key="portals-visual"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center"
                                >
                                    <PortalsVisual />
                                </motion.div>
                            )}

                            {activeTabId === 'boards' && (
                                <motion.div
                                    key="boards-visual"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center"
                                >
                                    <BoardsVisual />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right: Sticky Sidebar Navigation */}
                    <div className="hidden lg:flex lg:col-span-3 sticky top-[120px] h-fit flex-col items-end translate-x-[50px]">
                        {tabs.map((tab, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <motion.div
                                    key={tab.id}
                                    className="relative flex items-end w-fit origin-right mb-6"
                                    animate={{
                                        scale: isActive ? 1.15 : 1,
                                        marginRight: isActive ? 0 : 0,
                                        zIndex: isActive ? 50 : 0,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <button
                                        onClick={() => scrollToTab(tab.id)}
                                        className={`group flex items-start gap-3 transition-all duration-300 text-right
                                            ${isActive ? "opacity-100" : "opacity-40 hover:opacity-70"}
                                        `}
                                    >
                                        {/* Bullet Point - Zoomed effect */}
                                        <div className={`rounded-full shrink-0 transition-all duration-300 shadow-sm mt-3
                                            ${isActive ? "w-3 h-3 bg-black ring-4 ring-black/10" : "w-2 h-2 bg-zinc-400"}
                                        `} />

                                        {/* Label Container with Dotted Line */}
                                        <div className="flex flex-col items-end">
                                            <span className={`font-bold transition-all duration-300
                                                ${isActive ? "text-2xl text-black" : "text-xl text-zinc-400"}
                                            `}>
                                                {tab.label}
                                            </span>

                                            {/* Dotted Line matching label width */}
                                            <div className={`w-full border-b-2 border-dotted mt-1
                                                ${isActive ? "border-black border-b-[3px]" : "border-zinc-300"}
                                            `} />
                                        </div>
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
