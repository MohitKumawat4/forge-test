"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Users, Activity, CheckCircle, Server } from 'lucide-react';
import { Carousel } from '@/components/ui/apple-cards-carousel';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const badgeVariants = {
    initial: { y: 0 },
    hover: { y: -5, transition: { duration: 0.3 } }
};

const lockVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }
};

const terminalVariants = {
    hidden: { opacity: 0, x: -10 },
    show: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.1, duration: 0.3 }
    })
};

// Card Components extracted for reuse
function ComplianceCard() {
    return (
        <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full min-w-[280px]"
        >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <FileCheck size={120} className="text-blue-500" />
            </div>
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div>
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <div className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle size={12} /> Certified
                        </div>
                        <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                            SOC 2 Type II
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Global Compliance Standards</h3>
                    <p className="text-slate-500 max-w-md leading-[25px] lg:leading-7">
                        We adhere to the strictest industry standards to ensure your data is handled with the utmost care and legal compliance globally.
                    </p>
                </div>
                {/* Mock UI: Badges */}
                <motion.div className="flex gap-4 mt-8">
                    {[Shield, Lock, Server].map((Icon, idx) => (
                        <motion.div
                            key={idx}
                            variants={badgeVariants}
                            whileHover="hover"
                            className="h-16 w-12 bg-slate-50 border border-slate-100 rounded flex flex-col items-center justify-center gap-1 shadow-sm hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer"
                        >
                            <Icon size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                            <div className="w-8 h-1 bg-slate-200 rounded-full group-hover:bg-blue-200 transition-colors"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

function EncryptionCard() {
    return (
        <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col h-full min-w-[280px]"
        >
            <div className="mb-auto">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6">
                    <Lock size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">End-to-End Encryption</h3>
                <p className="text-slate-500 text-sm leading-[25px] lg:leading-7">AES-256 encryption for data at rest and TLS 1.3 for data in transit.</p>
            </div>
            {/* Visual: Lock Morph */}
            <div className="mt-6 flex justify-center">
                <motion.div
                    variants={lockVariants}
                    whileHover="hover"
                    className="relative w-32 h-32 bg-violet-50/50 rounded-full flex items-center justify-center cursor-pointer"
                >
                    <div className="absolute inset-0 border border-violet-100 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute inset-0 border border-violet-200 rounded-full opacity-50"></div>
                    <Lock size={40} className="text-violet-500 relative z-10" />
                </motion.div>
            </div>
        </motion.div>
    );
}

function RBACCard() {
    return (
        <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-8 h-full min-w-[280px]"
        >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Role-Based Access</h3>
            <p className="text-slate-500 text-sm mb-6 leading-[25px] lg:leading-7">Granular permission controls for every team member.</p>

            {/* Mock UI: User List */}
            <div className="space-y-3">
                <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: "rgb(241 245 249)" }}
                    className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100 cursor-pointer transition-colors"
                >
                    <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center text-[10px] text-indigo-700 font-bold">JD</div>
                    <div className="flex-1">
                        <div className="w-16 h-2 bg-slate-200 rounded mb-1"></div>
                        <div className="w-10 h-1.5 bg-slate-100 rounded"></div>
                    </div>
                    <div className="px-2 py-0.5 bg-indigo-100 text-indigo-600 text-[10px] font-bold rounded">ADMIN</div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: "rgb(241 245 249)" }}
                    className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100 opacity-60 hover:opacity-100 transition-all cursor-pointer"
                >
                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                    <div className="flex-1">
                        <div className="w-16 h-2 bg-slate-200 rounded mb-1"></div>
                        <div className="w-10 h-1.5 bg-slate-100 rounded"></div>
                    </div>
                    <div className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded">VIEWER</div>
                </motion.div>
            </div>
        </motion.div>
    );
}

function AuditLogsCard() {
    return (
        <motion.div
            variants={itemVariants}
            className="group relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col gap-6 h-full min-w-[280px]"
        >
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                    <Activity className="text-blue-400" size={24} />
                    <h3 className="text-xl font-bold text-white">Real-time Audit Logs</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 max-w-sm leading-[25px] lg:leading-7">Every action is logged, indexed, and searchable. Monitor access patterns and potential threats in real-time.</p>
            </div>
            {/* Mock UI: Terminal */}
            <div className="w-full bg-slate-950 rounded-lg border border-slate-800 p-4 font-mono text-xs shadow-inner">
                <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                    <motion.div custom={0} variants={terminalVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex gap-2 text-cyan-500">
                        <span>✓</span>
                        <span className="text-slate-300">User_auth_success</span>
                        <span className="text-slate-500 ml-auto">10:42 AM</span>
                    </motion.div>
                    <motion.div custom={1} variants={terminalVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex gap-2 text-cyan-500">
                        <span>✓</span>
                        <span className="text-slate-300">Data_export_start</span>
                        <span className="text-slate-500 ml-auto">10:43 AM</span>
                    </motion.div>
                    <motion.div custom={2} variants={terminalVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex gap-2 text-blue-500">
                        <span>i</span>
                        <span className="text-slate-300">API_key_rotated</span>
                        <span className="text-slate-500 ml-auto">10:45 AM</span>
                    </motion.div>
                    <motion.div custom={3} variants={terminalVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex gap-2 text-slate-500 animate-pulse">
                        <span>_</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export function SecuritySection() {
    // Create carousel items using the same card components
    const carouselItems = [
        <ComplianceCard key="compliance" />,
        <EncryptionCard key="encryption" />,
        <RBACCard key="rbac" />,
        <AuditLogsCard key="audit" />
    ];

    return (
        <section className="pt-10 pb-15 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[20px_20px] opacity-70"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-left lg:text-center mb-8 lg:mb-20">
                    {/* Category Label - Mobile only -M */}
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-5 mb-0.5 md:hidden">
                        Security & Compliance
                    </p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 lg:mb-6"
                    >
                        Enterprise-Grade <span className="text-blue-600 md:inline">Trust Center</span>
                    </motion.h2>
                    <p className="text-black text-base lg:text-lg max-w-2xl lg:mx-auto mb-3 lg:mb-0 leading-[25px] lg:leading-7">
                        Security isn't an afterthought. It's the foundation of our platform, verifiable at every layer.
                    </p>

                    {/* CTA Link - Mobile only */}
                    {/* <div className="md:hidden  border-t border-slate-900 flex items-center justify-between border-1.5  ">
                     
                    </div> */}
                </div>

                {/* Mobile Carousel - Hidden on md and up -M */}
                <div className="md:hidden -mx-4">
                    <Carousel items={carouselItems} />
                </div>

                {/* Desktop Grid - Hidden on mobile -W */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
                >
                    {/* Card 1: Compliance - Large Span */}
                    <div className="md:col-span-2">
                        <ComplianceCard />
                    </div>

                    {/* Card 2: Encryption */}
                    <EncryptionCard />

                    {/* Card 3: RBAC */}
                    <RBACCard />

                    {/* Card 4: Audit Logs - Large Span */}
                    <div className="md:col-span-2">
                        <AuditLogsCard />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
