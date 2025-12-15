"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Box, Calculator, GitMerge, Zap, TrendingUp, Smartphone, Shield, Bot, Crosshair, BarChart, Globe, Star } from "lucide-react";

const solutions = [
    {
        title: "AI-Powered Human Resources",
        tag: "AI-Powered",
        metric: "94% faster hiring",
        description: "Complete HR management with predictive analytics, automated workflows, and intelligent insights",
        features: ["Predictive Analytics", "Automated Workflows", "Performance Insights", "Smart Recruiting"],
        icon: Users,
        color: "text-purple-600",
        bg: "bg-purple-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Customer Relationship AI",
        tag: "Smart CRM",
        metric: "3x conversion rate",
        description: "CRM that learns from your customers and suggests the next best action to close deals",
        features: ["Lead Scoring", "Deal Intelligence", "Automated Follow-ups", "Customer Insights"],
        icon: Heart,
        color: "text-orange-600",
        bg: "bg-orange-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Smart Inventory Management",
        tag: "Auto-Optimize",
        metric: "45% cost reduction",
        description: "Automated stock optimization with AI-powered demand forecasting and supplier integration",
        features: ["Demand Forecasting", "Supplier Integration", "Auto-Reordering", "Cost Optimization"],
        icon: Box,
        color: "text-green-600",
        bg: "bg-green-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Automated Accounting",
        tag: "AI Bookkeeper",
        metric: "99.9% accuracy",
        description: "AI bookkeeper that handles invoicing, expenses, and provides real-time financial insights",
        features: ["Auto-Invoicing", "Expense Tracking", "Financial Reports", "Tax Compliance"],
        icon: Calculator,
        color: "text-blue-600",
        bg: "bg-blue-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Visual Process Builder",
        tag: "No-Code",
        metric: "10x faster setup",
        description: "Create complex business workflows with drag-and-drop simplicity using React Flow",
        features: ["Drag & Drop", "Visual Designer", "Auto-Triggers", "API Integrations"],
        icon: GitMerge,
        color: "text-violet-600",
        bg: "bg-violet-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Connect Everything",
        tag: "10,000+ Apps",
        metric: "One-click setup",
        description: "10,000+ pre-built integrations with all your favorite business tools",
        features: ["Pre-built Connectors", "Real-time Sync", "Custom APIs", "Enterprise SSO"],
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Predictive Business Intelligence",
        tag: "Predictive AI",
        metric: "87% accuracy",
        description: "AI that analyzes your data and provides actionable insights for growth",
        features: ["Predictive Models", "Custom Dashboards", "Automated Reports", "Growth Insights"],
        icon: TrendingUp,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Access Anywhere",
        tag: "Mobile-First",
        metric: "99.9% uptime",
        description: "Native mobile apps and cloud infrastructure that scales with your business",
        features: ["Native Apps", "Offline Mode", "Auto-Scaling", "Global CDN"],
        icon: Smartphone,
        color: "text-purple-600",
        bg: "bg-purple-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Bank-Level Security",
        tag: "SOC2 Certified",
        metric: "Zero breaches",
        description: "SOC2 certified with end-to-end encryption and compliance built-in",
        features: ["End-to-End Encryption", "SOC2 Compliance", "GDPR Ready", "24/7 Monitoring"],
        icon: Shield,
        color: "text-rose-600",
        bg: "bg-rose-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700",
        highlight: true // Special highlight for this card
    },
    {
        title: "AI Business Assistant",
        tag: "AI Consultant",
        metric: "24/7 support",
        description: "Your personal AI consultant that understands your business and provides strategic recommendations",
        features: ["Strategic Planning", "Decision Support", "Market Analysis", "Performance Optimization"],
        icon: Bot,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Smart Automation Hub",
        tag: "Auto-Pilot",
        metric: "80% time saved",
        description: "Automate repetitive tasks across all departments with intelligent workflow orchestration",
        features: ["Task Automation", "Smart Triggers", "Cross-Platform", "ROI Tracking"],
        icon: Zap,
        color: "text-orange-600",
        bg: "bg-orange-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Sales Acceleration Engine",
        tag: "Sales AI",
        metric: "2.5x revenue growth",
        description: "AI-powered sales platform that identifies opportunities and optimizes your sales funnel",
        features: ["Opportunity Scoring", "Pipeline Optimization", "Sales Coaching", "Revenue Forecasting"],
        icon: Crosshair,
        color: "text-teal-600",
        bg: "bg-teal-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Advanced Analytics Suite",
        tag: "ML Insights",
        metric: "95% prediction accuracy",
        description: "Deep business intelligence with machine learning insights and predictive modeling",
        features: ["Machine Learning", "Predictive Models", "Custom KPIs", "Real-time Analytics"],
        icon: BarChart,
        color: "text-blue-600",
        bg: "bg-blue-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Global Business Platform",
        tag: "Global Scale",
        metric: "50+ countries",
        description: "Multi-currency, multi-language platform that scales across international markets",
        features: ["Multi-Currency", "Localization", "Global Compliance", "Regional Support"],
        icon: Globe,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700"
    },
    {
        title: "Business App Marketplace",
        tag: "App Store",
        metric: "5000+ templates",
        description: "Thousands of pre-built business applications and templates ready to deploy instantly",
        features: ["Pre-built Apps", "Custom Templates", "One-click Deploy", "Community Driven"],
        icon: Star,
        color: "text-pink-600",
        bg: "bg-pink-50",
        tagBg: "bg-blue-100",
        tagColor: "text-blue-700",
        metricBg: "bg-green-100",
        metricColor: "text-green-700",
        highlight: true
    }
];

export default function Solutions() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 md:px-8 w-full md:w-[90%] max-w-screen-2xl mx-auto">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
                    >
                        Solutions for the <span className="text-blue-600">Modern Enterprise</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        Scale your operations with our suite of AI-powered tools designed for reliability, security, and performance.
                    </motion.p>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="px-6 md:px-8 pb-32 w-full md:w-[90%] max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full"
                        >
                            {/* Card Header: Icon + Tag */}
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-14 h-14 rounded-2xl ${solution.bg} ${solution.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                                    <solution.icon size={28} />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${solution.tagBg} ${solution.tagColor}`}>
                                    {solution.tag}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>

                            {/* Metric Banner */}
                            <div className={`w-full py-2 px-3 rounded-lg ${solution.metricBg} ${solution.metricColor} font-bold text-sm mb-4 flex items-center gap-2`}>
                                <TrendingUp size={16} />
                                {solution.metric}
                            </div>

                            {/* Description */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-8">
                                {solution.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8 grow">
                                {solution.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Footer Link */}
                            <div className="pt-4 border-t border-slate-50 mt-auto">
                                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-900 py-24 px-6 md:px-8">
                <div className="w-full md:w-[90%] max-w-screen-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        Join over 500+ forward-thinking companies building on Enterprise Forge today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                            Contact Sales
                        </button>
                        <button className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
                            View Documentation
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
