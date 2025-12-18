"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, CheckCircle2, Circle } from "lucide-react";
import Image from "next/image";

// Import visual components from features folder
import {
    AppsVisual,
    BoardsVisual,
    FormsVisual,
    IntegrationsVisual,
    PortalsVisual,
    ReportsVisual,
    WorkflowVisual
} from "./features/index";

// Tab configuration data containing all feature information
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

// Helper function to get emoji for each feature index
const indexToEmoji = (index: number) => {
    const emojis = ["⚡", "🔗", "📱", "📝", "📊", "🛡️", "📋"];
    return emojis[index % emojis.length];
};

// Feature3DCard - Interactive 3D form card component with mouse tracking
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
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center text-white text-sm">
                        📝
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Active Module</div>
                        <div className="font-bold text-zinc-800 text-sm">{activeTab.label}</div>
                    </div>
                    <div className="text-[9px] text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full font-medium">Step 2 of 3</div>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                        <div className="w-5 h-5 rounded-full bg-cyan-500 text-white text-[9px] flex items-center justify-center font-bold">✓</div>
                        <div className="text-[9px] text-cyan-600 font-medium">Info</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-cyan-500 rounded" />
                    <div className="flex items-center gap-1">
                        <div className="w-5 h-5 rounded-full bg-cyan-500 text-white text-[9px] flex items-center justify-center font-bold">2</div>
                        <div className="text-[9px] text-cyan-600 font-medium">Details</div>
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
                            <span className="text-[8px] text-cyan-500 flex items-center gap-0.5">
                                <span className="w-2 h-2 rounded-full bg-cyan-500 flex items-center justify-center text-white text-[6px]">✓</span>
                                Valid
                            </span>
                        </div>
                        <div className="h-8 bg-white border border-cyan-300 rounded-md px-2.5 flex items-center text-[11px] text-zinc-700 shadow-sm ring-2 ring-cyan-100">
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

// Scroll to specific section helper (module level)
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

// Main Features section component with scroll-triggered tab navigation
export function Features({ className = "" }: { className?: string }) {
    const [activeTabId, setActiveTabId] = useState("workflows");
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Scroll to specific section (instance method)
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
        <section className={`bg-white relative pt-1 pb-1 md:pb-2 ${className}`}>
            <div className="mx-auto w-full md:w-[90%] max-w-screen-2xl px-6 md:px-8">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start relative">

                    {/* Left: Scrollable Content (gap-12 for mobile, gap-10 for desktop) -M -W */}
                    <div className="lg:col-span-5 flex flex-col  lg:gap-10 pb-32">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.id}
                                id={`feature-card-${tab.id}`}
                                data-tab-id={tab.id}
                                ref={(el: HTMLDivElement | null) => { cardRefs.current[index] = el; }}
                                className="scroll-mt-[25vh] min-h-fit lg:min-h-[85vh] flex flex-col pb-16 lg:pb-0"
                            >
                                <motion.div
                                    className="bg-white rounded-none p-0 w-full h-full flex flex-col"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {/* Top Section - Title and Description */}
                                    <div>
                                        {/* Mobile Tab Label - Visible only on mobile -M */}
                                        <div className="lg:hidden flex items-center gap-2 mb-4">
                                            <span className="w-2 h-2 rounded-full bg-zinc-900" />
                                            <span className="text-sm font-medium text-zinc-900 tracking-wide">
                                                {tab.label}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-medium text-zinc-900 mb-4 leading-tight whitespace-pre-line">
                                            {tab.title}
                                        </h2>
                                        <p className="text-xl text-zinc-500 leading-[25px] lg:leading-7 max-w-lg">
                                            {tab.description}
                                        </p>
                                    </div>


                                    {/* Mobile Visual Component Container -M */}
                                    <div className="block lg:hidden h-[400px] my-0 relative overflow-visible">
                                        {/* Background Grid - Merges with page background */}
                                        <div className="absolute inset-x-0 inset-y-0"
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
                                                backgroundSize: '24px 24px',
                                                maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                                            }}
                                        />

                                        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                                            <div className="transform scale-[0.6] origin-center w-full flex items-center justify-center -mt-8">
                                                {tab.id === 'workflows' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true, margin: "-50px" }}
                                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                                        className="w-[400px] flex items-center justify-center"
                                                    >
                                                        <WorkflowVisual />
                                                    </motion.div>
                                                )}
                                                {tab.id === 'integrations' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true, margin: "-50px" }}
                                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                                        className="w-[400px] flex items-center justify-center"
                                                    >
                                                        <IntegrationsVisual />
                                                    </motion.div>
                                                )}
                                                {tab.id === 'apps' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true, margin: "-50px" }}
                                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                                        className="w-[400px] flex items-center justify-center"
                                                    >
                                                        <AppsVisual />
                                                    </motion.div>
                                                )}
                                                {tab.id === 'forms' && (
                                                    <div className="w-[400px] h-[500px] relative">
                                                        {/* Forms animation structure (already implemented) */}
                                                        <svg
                                                            className="absolute inset-0 w-full h-full pointer-events-none"
                                                            viewBox="0 0 400 500"
                                                            fill="none"
                                                            style={{ overflow: 'visible' }}
                                                        >
                                                            <defs>
                                                                <linearGradient id="blue-gradient-forms-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                    <stop offset="0%" stopColor="#1e3a8a" />
                                                                    <stop offset="25%" stopColor="#2563eb" />
                                                                    <stop offset="50%" stopColor="#0891b2" />
                                                                    <stop offset="75%" stopColor="#22d3ee" />
                                                                    <stop offset="100%" stopColor="#67e8f9" />
                                                                </linearGradient>
                                                                <linearGradient id="blue-animated-forms-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                    <stop offset="0%" stopColor="#1e3a8a">
                                                                        <animate attributeName="stop-color" values="#1e3a8a;#2563eb;#0891b2;#22d3ee;#67e8f9;#22d3ee;#0891b2;#2563eb;#1e3a8a" dur="4s" repeatCount="indefinite" />
                                                                    </stop>
                                                                    <stop offset="50%" stopColor="#0891b2">
                                                                        <animate attributeName="stop-color" values="#0891b2;#22d3ee;#67e8f9;#22d3ee;#0891b2;#2563eb;#1e3a8a;#2563eb;#0891b2" dur="4s" repeatCount="indefinite" />
                                                                    </stop>
                                                                    <stop offset="100%" stopColor="#67e8f9">
                                                                        <animate attributeName="stop-color" values="#67e8f9;#22d3ee;#0891b2;#2563eb;#1e3a8a;#2563eb;#0891b2;#22d3ee;#67e8f9" dur="4s" repeatCount="indefinite" />
                                                                    </stop>
                                                                </linearGradient>
                                                            </defs>

                                                            <motion.rect
                                                                x="4"
                                                                y="4"
                                                                width="392"
                                                                height="492"
                                                                rx="16"
                                                                stroke="url(#blue-gradient-forms-mobile)"
                                                                strokeWidth="1.5"
                                                                fill="none"
                                                                strokeOpacity="0.2"
                                                                initial={{ pathLength: 0, opacity: 0 }}
                                                                whileInView={{ pathLength: 1, opacity: 1 }}
                                                                viewport={{ once: true, margin: "-50px" }}
                                                                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                                                            />

                                                            <motion.rect
                                                                x="4"
                                                                y="4"
                                                                width="392"
                                                                height="492"
                                                                rx="16"
                                                                stroke="url(#blue-animated-forms-mobile)"
                                                                strokeWidth="2.5"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                initial={{ pathLength: 0, opacity: 0 }}
                                                                whileInView={{ pathLength: 1, opacity: 1 }}
                                                                viewport={{ once: true, margin: "-50px" }}
                                                                transition={{
                                                                    pathLength: { duration: 2.5, ease: [0.22, 1, 0.36, 1] },
                                                                    opacity: { duration: 0.5, ease: "easeOut" }
                                                                }}
                                                            />

                                                            <motion.rect
                                                                x="4"
                                                                y="4"
                                                                width="392"
                                                                height="492"
                                                                rx="16"
                                                                stroke="url(#blue-animated-forms-mobile)"
                                                                strokeWidth="8"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                filter="blur(6px)"
                                                                initial={{ pathLength: 0, opacity: 0 }}
                                                                whileInView={{ pathLength: 1, opacity: 0.4 }}
                                                                viewport={{ once: true, margin: "-50px" }}
                                                                transition={{
                                                                    pathLength: { duration: 2.5, ease: [0.22, 1, 0.36, 1] },
                                                                    opacity: { duration: 0.8, ease: "easeOut" }
                                                                }}
                                                            />
                                                        </svg>

                                                        <motion.div
                                                            initial={{ scale: 0.96, opacity: 0 }}
                                                            whileInView={{ scale: 1, opacity: 1 }}
                                                            viewport={{ once: true, margin: "-50px" }}
                                                            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                            className="w-full h-full perspective-[2000px]"
                                                        >
                                                            <Feature3DCard
                                                                activeTab={tab}
                                                                activeIndex={index}
                                                                indexToEmoji={indexToEmoji}
                                                            />
                                                        </motion.div>
                                                    </div>
                                                )}
                                                {tab.id === 'reports' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true, margin: "-50px" }}
                                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                                        className="w-[600px] flex items-center justify-center"
                                                    >
                                                        <ReportsVisual />
                                                    </motion.div>
                                                )}
                                                {tab.id === 'portals' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true, margin: "-50px" }}
                                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                                        className="w-[700px] flex items-center justify-center"
                                                    >
                                                        <PortalsVisual />
                                                    </motion.div>
                                                )}
                                                {tab.id === 'boards' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true, margin: "-50px" }}
                                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                                        className="w-[700px] flex items-center justify-center"
                                                    >
                                                        <BoardsVisual />
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer - Desktop only spacing between header and checklist -W */}
                                    <div className="hidden lg:block grow min-h-[200px] lg:min-h-[280px]" />

                                    {/* Bottom Section - Checklist Points */}
                                    <div className="border-t border-zinc-200">
                                        {tab.checklist.slice(0, 3).map((item, i) => (
                                            <div key={i} className="py-4 border-b border-zinc-200 flex items-start gap-6">
                                                <span className="text-zinc-400 font-mono text-sm pt-0.5 min-w-[20px]">
                                                    {i + 1}
                                                </span>
                                                <h4 className="text-base font-medium text-zinc-500">
                                                    {item.text}
                                                </h4>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Middle: 3D Visual Element - Desktop/Window view only -W */}
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
                                    <div className="absolute inset-y-0 left-0 right-0 md:-left-48 md:-right-48 -z-10 mask-[radial-gradient(closest-side,black_40%,transparent_100%)]">
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

                                    {/* Green SVG Outline Animation Container */}
                                    <div className="w-full max-w-[400px] aspect-4/5 translate-x-[60px] relative">
                                        {/* Green SVG Outline - Draws first */}
                                        <svg
                                            className="absolute inset-0 w-full h-full pointer-events-none"
                                            viewBox="0 0 400 500"
                                            fill="none"
                                            style={{ overflow: 'visible' }}
                                        >
                                            {/* Green gradient definitions */}
                                            <defs>
                                                {/* Static blue gradient for background trace */}
                                                <linearGradient id="blue-gradient-forms" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#1e3a8a" />
                                                    <stop offset="25%" stopColor="#2563eb" />
                                                    <stop offset="50%" stopColor="#0891b2" />
                                                    <stop offset="75%" stopColor="#22d3ee" />
                                                    <stop offset="100%" stopColor="#67e8f9" />
                                                </linearGradient>
                                                {/* Animated gradient for smooth traveling effect */}
                                                <linearGradient id="blue-animated-forms" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#1e3a8a">
                                                        <animate attributeName="stop-color" values="#1e3a8a;#2563eb;#0891b2;#22d3ee;#67e8f9;#22d3ee;#0891b2;#2563eb;#1e3a8a" dur="4s" repeatCount="indefinite" />
                                                    </stop>
                                                    <stop offset="50%" stopColor="#0891b2">
                                                        <animate attributeName="stop-color" values="#0891b2;#22d3ee;#67e8f9;#22d3ee;#0891b2;#2563eb;#1e3a8a;#2563eb;#0891b2" dur="4s" repeatCount="indefinite" />
                                                    </stop>
                                                    <stop offset="100%" stopColor="#67e8f9">
                                                        <animate attributeName="stop-color" values="#67e8f9;#22d3ee;#0891b2;#2563eb;#1e3a8a;#2563eb;#0891b2;#22d3ee;#67e8f9" dur="4s" repeatCount="indefinite" />
                                                    </stop>
                                                </linearGradient>
                                            </defs>

                                            {/* Background trace line (subtle) */}
                                            <motion.rect
                                                x="4"
                                                y="4"
                                                width="392"
                                                height="492"
                                                rx="16"
                                                stroke="url(#blue-gradient-forms)"
                                                strokeWidth="1.5"
                                                fill="none"
                                                strokeOpacity="0.2"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 1 }}
                                                transition={{
                                                    duration: 2,
                                                    ease: [0.22, 1, 0.36, 1]
                                                }}
                                            />

                                            {/* Main animated green outline */}
                                            <motion.rect
                                                x="4"
                                                y="4"
                                                width="392"
                                                height="492"
                                                rx="16"
                                                stroke="url(#blue-animated-forms)"
                                                strokeWidth="2.5"
                                                fill="none"
                                                strokeLinecap="round"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 1 }}
                                                transition={{
                                                    pathLength: {
                                                        duration: 2.5,
                                                        ease: [0.22, 1, 0.36, 1]
                                                    },
                                                    opacity: {
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }
                                                }}
                                            />

                                            {/* Glowing effect layer */}
                                            <motion.rect
                                                x="4"
                                                y="4"
                                                width="392"
                                                height="492"
                                                rx="16"
                                                stroke="url(#green-animated-forms)"
                                                strokeWidth="8"
                                                fill="none"
                                                strokeLinecap="round"
                                                filter="blur(6px)"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.4 }}
                                                transition={{
                                                    pathLength: {
                                                        duration: 2.5,
                                                        ease: [0.22, 1, 0.36, 1]
                                                    },
                                                    opacity: {
                                                        duration: 0.8,
                                                        ease: "easeOut"
                                                    }
                                                }}
                                            />
                                        </svg>

                                        {/* Form Card - Fades in AFTER outline animation completes */}
                                        <motion.div
                                            initial={{ scale: 0.96, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 2.5,
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                            className="w-full h-full perspective-[2000px]"
                                        >
                                            <Feature3DCard
                                                activeTab={activeTab}
                                                activeIndex={activeIndex}
                                                indexToEmoji={indexToEmoji}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTabId === 'integrations' && (
                                <motion.div
                                    key="integrations-visual"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center translate-x-[60px]"
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
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center translate-x-[60px]"
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
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center translate-x-[60px]"
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
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center translate-x-[60px]"
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
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center translate-x-[60px]"
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
                                    className="w-full h-full max-h-[600px] relative flex items-center justify-center translate-x-[60px]"
                                >
                                    <BoardsVisual />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div >

                    {/* Right: Sticky Sidebar Navigation */}
                    < div className="hidden lg:flex lg:col-span-3 sticky top-[120px] h-fit flex-col items-end  translate-x-[5px]" >
                        {
                            tabs.map((tab, index) => {
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
                            })
                        }
                    </div >

                </div >
            </div >
        </section >
    );
}
