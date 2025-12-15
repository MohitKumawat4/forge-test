"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, LineChart, ShieldCheck, Workflow, Zap } from "lucide-react";

const products = [
    {
        id: "agent-engine",
        name: "Agent Engine",
        tagline: "Autonomous Task Execution",
        description: "The core runtime for your AI workforce. Execute complex, multi-step workflows with determinism and reliability.",
        features: ["Self-healing workflows", "human-in-the-loop", "Audit logging"],
        icon: Bot,
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        id: "forge-studio",
        name: "Forge Studio",
        tagline: "Visual Agent Builder",
        description: "A drag-and-drop IDE for designing, testing, and deploying AI agents without writing code.",
        features: ["Visual debugger", "Version control", "Template library"],
        icon: Workflow,
        color: "text-purple-500",
        bg: "bg-purple-50"
    },
    {
        id: "neural-vault",
        name: "Neural Vault",
        tagline: "Enterprise Knowledge Base",
        description: "Turn your company's documents into a queryable knowledge base that grounds your agents in truth.",
        features: ["Vector search", "RBAC", "Automatic syncing"],
        icon: Database,
        color: "text-emerald-500",
        bg: "bg-emerald-50"
    },
    {
        id: "guard-rail",
        name: "GuardRail",
        tagline: "AI Safety & Compliance",
        description: "Middleware that intercepts and validates all AI inputs and outputs to ensure safety and policy compliance.",
        features: ["PII Redaction", "Toxicity detection", "Custom policies"],
        icon: ShieldCheck,
        color: "text-rose-500",
        bg: "bg-rose-50"
    }
];

// Helper import since I used Database above
import { Database } from "lucide-react";

export default function Products() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 md:px-8 w-full md:w-[90%] max-w-screen-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Forge Suite</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        A complete ecosystem of tools to build, deploy, and manage intelligent AI agents at enterprise scale.
                    </p>
                </motion.div>
            </section>

            {/* Main Product Showcase */}
            <section className="px-6 md:px-8 pb-32 w-full md:w-[90%] max-w-screen-2xl mx-auto space-y-32">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-10 items-start"
                    >
                        {/* Text Content */}
                        <div className="w-full max-w-3xl space-y-6">
                            <div className={`w-14 h-14 rounded-2xl ${product.bg} ${product.color} flex items-center justify-center`}>
                                <product.icon size={28} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{product.tagline}</h3>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{product.name}</h2>
                            </div>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                {product.description}
                            </p>

                            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <button className="px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 font-semibold hover:border-slate-400 transition-colors flex items-center gap-2">
                                    Explore {product.name} <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Visual / Image Placeholder - NOW FULL WIDTH */}
                        <div className="w-full bg-slate-100/50 rounded-3xl border border-slate-200 shadow-xl overflow-hidden aspect-[16/9] relative group">
                            <div className="absolute inset-0 bg-slate-50/50 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center bg-white">
                                {product.id === "agent-engine" ? (
                                    <video
                                        src="https://res.cloudinary.com/da5665lbj/video/upload/v1755678541/Screen_Recording_2025-08-20_120146_piibxb.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-slate-300 font-mono text-sm">Product UI Preview: {product.name}</span>
                                )}
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-4 left-4 flex gap-2 z-20">
                                <div className="w-3 h-3 rounded-full bg-red-400/20 md:bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400/20 md:bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400/20 md:bg-green-400" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Integrations Banner */}
            <section className="bg-slate-900 py-24 px-6 lg:px-8 overflow-hidden relative">
                <div className="w-full md:w-[90%] max-w-screen-2xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-12">Works with your stack</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos */}
                        {["Slack", "HubSpot", "Salesforce", "Jira", "Notion", "Linear"].map((brand) => (
                            <span key={brand} className="text-2xl font-bold text-white max-w-[120px]">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
