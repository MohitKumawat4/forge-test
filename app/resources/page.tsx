"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, BookOpen, FileText, Video, Mic, Download } from "lucide-react";

export default function Resources() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-yellow-50 overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[calc(100vh-80px)]">
                    <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div className="absolute bottom-0 right-0 hidden lg:block">
                            <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                        </div>

                        <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                            <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                                Resources to<br />
                                Scale Faster.
                            </h1>
                            <p className="mt-8 text-xl text-black">Guides, tutorials, and insights to help you build your autonomous enterprise.</p>

                            <form action="#" method="POST" className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                                <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                                    <div className="flex flex-col items-start sm:flex-row">
                                        <div className="flex-1 w-full min-w-0">
                                            <div className="relative text-gray-400 focus-within:text-gray-600">
                                                <label htmlFor="email" className="sr-only"></label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Enter email for newsletter"
                                                    className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p className="mt-5 text-base text-black">Weekly insights . No spam ever</p>
                        </div>

                        <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                            <img className="w-32 h-32 md:w-40 md:h-40" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png" alt="" />
                        </div>
                    </div>

                    <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                        <div className="absolute inset-0">
                            <img className="object-cover w-full h-full scale-150" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-0 left-0">
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="flex items-center">
                                    <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                    <h2 className="font-bold text-white text-7xl ml-2.5">150+</h2>
                                </div>
                                <p className="max-w-xs mt-1.5 text-xl text-white">Articles and guides available for free</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-24 px-6 md:px-8 w-full md:w-[90%] max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Getting Started with Agents", type: "Guide", icon: BookOpen, color: "bg-blue-100 text-blue-600" },
                        { title: "Enterprise Security Whitepaper", type: "Whitepaper", icon: FileText, color: "bg-purple-100 text-purple-600" },
                        { title: "Building Custom Workflows", type: "Tutorial", icon: Video, color: "bg-red-100 text-red-600" },
                        { title: "Podcast: Future of Work", type: "Podcast", icon: Mic, color: "bg-yellow-100 text-yellow-600" },
                        { title: "API Documentation", type: "Docs", icon: FileText, color: "bg-green-100 text-green-600" },
                        { title: "Q3 Industry Report", type: "Report", icon: Download, color: "bg-orange-100 text-orange-600" },
                    ].map((item, i) => (
                        <div key={i} className="group p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                                <item.icon size={24} />
                            </div>
                            <div className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">{item.type}</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            <p className="text-slate-600 mb-6">Learn the fundamentals and advanced techniques to maximize your productivity.</p>
                            <a href="#" className="inline-flex items-center text-slate-900 font-bold hover:gap-2 transition-all">
                                Read Now <ArrowRight size={16} className="ml-2" />
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
