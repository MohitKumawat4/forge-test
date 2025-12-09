"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start relative lg:-ml-[30px]">

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
                                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight whitespace-pre-line">
                                        {tab.title}
                                    </h2>
                                    <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl">
                                        {tab.description}
                                    </p>

                                    <div className="mb-8 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                                        <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
                                            WHAT ACTUALLY HAPPENS:
                                        </h4>
                                        <div className="space-y-3">
                                            {tab.checklist.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <span className="text-xs font-bold text-zinc-400 min-w-[20px] pt-1">
                                                        {item.id}
                                                    </span>
                                                    <span className="text-sm font-medium text-zinc-700">
                                                        {item.text}
                                                    </span>
                                                </div>
                                            ))}
                                            {/* Extra shiny item matching the image */}
                                            <div className="flex items-start gap-3 pt-3 mt-3 border-t border-dashed border-zinc-200">
                                                <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
                                                <span className="text-sm font-medium text-zinc-700">
                                                    Rocket adds features that you didn't know you needed!
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group">
                                        <span>Sounds unbelievable? Try it</span>
                                        <motion.span
                                            className="inline-block"
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </button>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Sticky Sidebar Navigation (Pushed to far right) */}
                    <div className="hidden lg:flex lg:col-start-9 lg:col-span-4 sticky top-[120px] h-fit flex-col pl-90">
                        {tabs.map((tab, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <motion.div
                                    key={tab.id}
                                    className="relative flex items-start w-fit origin-left mb-6"
                                    animate={{
                                        scale: isActive ? 1.15 : 1,
                                        marginLeft: isActive ? 20 : 0,
                                        zIndex: isActive ? 50 : 0,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <button
                                        onClick={() => scrollToTab(tab.id)}
                                        className={`group flex items-start gap-3 transition-all duration-300 text-left
                                            ${isActive ? "opacity-100" : "opacity-40 hover:opacity-70"}
                                        `}
                                    >
                                        {/* Bullet Point - Zoomed effect */}
                                        <div className={`rounded-full shrink-0 transition-all duration-300 shadow-sm mt-2
                                            ${isActive ? "w-3 h-3 bg-black ring-4 ring-black/10" : "w-2 h-2 bg-zinc-400"}
                                        `} />

                                        {/* Label Container with Dotted Line */}
                                        <div className="flex flex-col">
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
