"use strict";
import React from "react";
import { ArrowRight } from "lucide-react";

export function ParallaxPromo() {
    return (
        <section className="py-12 md:py-2">
            <div
                className="relative mx-auto flex h-[500px]  w-full md:w-[90%] max-w-screen-2xl px-6 md:px-8 items-center justify-center rounded-3xl bg-cover bg-fixed bg-center shadow-2xl overflow-hidden"
                style={{
                    backgroundImage: "url(/USE_BG.png)",
                    backgroundColor: "#000",
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                {/* Content Card - "See through window like card" effect */}
                <div className="relative z-10 p-8 md:p-12 max-w-4xl text-center">

                    {/* Glassmorphism Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl shadow-xl">
                        <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-white mb-6">
                            Building the Future of <span className="text-blue-400">Autonomous Enterprise</span>
                        </h2>
                        <p className="text-xl font-light text-slate-200 md:text-2xl mb-10 max-w-2xl mx-auto">
                            Deploy AI agents that think, plan, and execute complex workflows with unprecedented efficiency.
                        </p>
                        <div className="flex justify-center">
                            <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-2 group shadow-lg shadow-white/10">
                                Explore Platform
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
