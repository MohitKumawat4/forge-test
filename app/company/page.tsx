"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Globe2, Heart, Lightbulb, Users } from "lucide-react";
import { CompanyMetrics } from "@/components/CompanyMetrics";
import React from "react";

export default function Company() {
    return (
        <main className="min-h-screen  bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-cyan-900 relative overflow-hidden min-h-screen flex items-center pt-20 lg:pt-0">
                <div className="absolute inset-0 bg-linear-to-b from-blue-900/90 via-slate-900/90 to-slate-900/90 opacity-90" />

                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[24px_24px]"></div>

                <section className="relative w-full py-12 lg:py-0">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-center lg:text-left"
                            >
                                <h1 className="text-h1-apple text-white tracking-tight leading-tight">
                                    Collaborate remotely, with
                                    <div className="relative inline-flex mt-2">
                                        <span className="absolute inset-x-0 bottom-0 border-b-12 sm:border-b-20 border-blue-500/50 blur-sm"></span>
                                        <h1 className="relative text-h1-apple text-white">Enterprise Forge.</h1>
                                    </div>
                                </h1>

                                <p className="mt-8 text-p1-apple text-blue-100 max-w-lg mx-auto lg:mx-0 leading-[25px] lg:leading-7">
                                    Our mission is to liberate humans from robotic work by creating intelligent agents that can think, plan, and execute complex workflows autonomously.
                                </p>

                                <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                                    <a href="#" title="" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 focus:bg-blue-700 shadow-lg shadow-blue-600/30 ring-offset-2 focus:ring-2" role="button">
                                        Start exploring
                                    </a>

                                    <a href="#" title="" className="inline-flex items-center justify-center sm:justify-start w-full sm:w-auto text-base font-semibold text-blue-200 transition-all duration-200 hover:text-white hover:underline gap-3">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <svg className="w-6 h-6 ml-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        Watch video
                                    </a>
                                </div>
                            </motion.div>

                            <TiltImage />
                        </div>
                    </div>
                </section>
            </div>

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
                        <h2 className="text-h2-apple text-slate-900 mb-6">The Story So Far</h2>
                        <p className="leading-[25px] lg:leading-7">
                            Enterprise Forge started with a simple observation: developers were spending too much time wiring APIs together and not enough time solving actual business problems.
                        </p>
                        <p className="leading-[25px] lg:leading-7">
                            We realized that the future of software isn't just about faster coding, but about software that can code itself. We set out to build a platform where business logic could be expressed in plain English and executed by reliable, autonomous agents.
                        </p>
                        <p className="leading-[25px] lg:leading-7">
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
                                    <p className="text-slate-500 leading-[25px] lg:leading-7">{value.text}</p>
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
                    <h2 className="text-h2-apple font-bold mb-4">Meet the Team</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto leading-[25px] lg:leading-7">
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
            <section className="py-24 px-6 md:px-8 w-full md:w-[90%] max-w-screen-2xl mx-auto text-center relative overflow-hidden">
                <h2 className="text-h2-apple text-slate-900 mb-12">Our Offices</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-12 relative z-10">
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

function TiltImage() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
    const brightness = useTransform(mouseY, [-0.5, 0.5], [1.2, 0.8]);

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="hidden lg:flex relative w-full h-auto items-center justify-center perspective-[1000px]"
        >
            <motion.div
                style={{ filter: useTransform(brightness, (b: number) => `brightness(${b})`) }}
                className="relative rounded-3xl shadow-2xl bg-transparent"
            >
                <img
                    className="w-full h-auto object-contain rounded-3xl"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                    alt="Company Hero"
                />

                {/* Floating Elements simulated with transforms */}
                <motion.div
                    style={{ translateX: useTransform(mouseX, [-0.5, 0.5], [-20, 20]), translateY: useTransform(mouseY, [-0.5, 0.5], [-20, 20]) }}
                    className="absolute top-17 left-20 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg text-slate-900 whitespace-nowrap"
                >
                    <div className="text-sm font-bold">Innovation Hub</div>
                    <div className="text-xs text-slate-500">Active Project</div>
                </motion.div>

                <motion.div
                    style={{ translateX: useTransform(mouseX, [-0.5, 0.5], [30, -30]), translateY: useTransform(mouseY, [-0.5, 0.5], [30, -30]) }}
                    className="absolute bottom-20 right-10 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg text-slate-900 whitespace-nowrap"
                >
                    <div className="text-sm font-bold">Global Scale</div>
                    <div className="text-xs text-slate-500">Deployed</div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
