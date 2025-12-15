"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Heart, Lightbulb, Users } from "lucide-react";
import { CompanyMetrics } from "@/components/CompanyMetrics";

export default function Company() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 px-6 md:px-8 w-full md:w-[90%] max-w-screen-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                        We're building the <span className="text-blue-600">brain</span> for the autonomous enterprise.
                    </h1>
                    <p className="text-2xl text-slate-600 leading-relaxed font-light">
                        Our mission is to liberate humans from robotic work by creating intelligent agents that can think, plan, and execute.
                    </p>
                </motion.div>
            </section>

            {/* Stats / Impact */}
            <section className="border-y border-slate-100 bg-slate-50/50">
                <div className="w-full md:w-[90%] max-w-screen-2xl mx-auto px-6 md:px-8 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { label: "Founded", value: "2023" },
                            { label: "Team Members", value: "45+" },
                            { label: "Enterprise Users", value: "10k+" },
                            { label: "Tasks Automted", value: "50M+" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left">
                                <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story / Values */}
            <section className="py-24 px-6 md:px-8 w-full md:w-[90%] max-w-screen-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="prose prose-lg text-slate-600">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Story So Far</h2>
                        <p>
                            Enterprise Forge started with a simple observation: developers were spending too much time wiring APIs together and not enough time solving actual business problems.
                        </p>
                        <p>
                            We realized that the future of software isn't just about faster coding, but about software that can code itself. We set out to build a platform where business logic could be expressed in plain English and executed by reliable, autonomous agents.
                        </p>
                        <p>
                            Today, we are trusted by Fortune 500 companies to handle their most critical operations, from financial audits to customer support.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {[
                            { icon: Lightbulb, title: "Innovation First", text: "We don't just follow trends, we set them." },
                            { icon: Heart, title: "Customer Obsession", text: "Your success is our only metric that matters." },
                            { icon: Users, title: "Radical Transparency", text: "We build in public and trust by default." },
                            { icon: Globe2, title: "Global Mindset", text: "Building for a borderless world." }
                        ].map((value, i) => (
                            <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                    <value.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-1">{value.title}</h3>
                                    <p className="text-slate-500">{value.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CompanyMetrics />

            {/* Leadership Placeholder */}
            <section className="py-24 bg-slate-900 text-white px-6 md:px-8">
                <div className="w-full md:w-[90%] max-w-screen-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Backed by world-class investors and led by industry veterans from Google, Microsoft, and Tesla.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center group hover:bg-white/10 transition-colors">
                            <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4 border-2 border-slate-600 group-hover:border-blue-500 transition-colors" />
                            <h3 className="text-lg font-bold">Leadership Name</h3>
                            <p className="text-slate-400 text-sm mb-4">Co-Founder & Role</p>
                            <div className="flex justify-center gap-3 opacity-50">
                                <div className="w-5 h-5 bg-white/20 rounded-full" />
                                <div className="w-5 h-5 bg-white/20 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Offices */}
            <section className="py-24 px-6 md:px-8 w-full md:w-[90%] max-w-screen-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Offices</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                    {["San Francisco", "New York", "London", "Singapore", "Remote"].map((city) => (
                        <div key={city} className="px-6 py-3 rounded-full border border-slate-200 text-slate-600 font-medium hover:border-slate-800 hover:text-slate-900 transition-colors cursor-default">
                            {city}
                        </div>
                    ))}
                </div>
            </section>

            {/* Metrics Section */}

            <Footer />
        </main>
    );
}
