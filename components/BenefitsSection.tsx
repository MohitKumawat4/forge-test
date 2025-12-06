"use client";

import { motion } from "framer-motion";

const benefits = [
    {
        title: "AI-Powered Intelligence",
        description: "Leverage cutting-edge AI to automate complex workflows and make smarter decisions faster.",
    },
    {
        title: "Instant Deployment",
        description: "Get started in minutes, not months. Deploy AI agents across your organization with zero setup time.",
    },
    {
        title: "Enterprise-Grade Security",
        description: "SOC2 compliant infrastructure with end-to-end encryption. Your data stays secure and private.",
    },
    {
        title: "Actionable Insights",
        description: "Transform raw data into strategic insights with AI-powered analytics and reporting.",
    },
];

interface BenefitsSectionProps {
    className?: string;
}

export function BenefitsSection({ className = "" }: BenefitsSectionProps) {
    return (
        <div className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-20 ${className}`}>
            {/* Background Image */}
            {/* <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/WHY_BG.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            /> */}

            {/* Moving Spotlights to simulate light tracing */}
            <motion.div
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-overlay"
                animate={{
                    x: ["-20%", "120%", "-20%"],
                    y: ["0%", "50%", "0%"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-overlay"
                animate={{
                    x: ["20%", "-120%", "20%"],
                    y: ["0%", "-50%", "0%"],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2,
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full h-full flex flex-col justify-center">
                <div className="mx-auto max-w-2xl text-center mb-20">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        Why Choose Our Platform?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-zinc-600">
                        Built for modern businesses that demand speed, security, and scalability.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl w-full">
                    <dl className="grid grid-cols-1 gap-y-16 gap-x-24 lg:grid-cols-2 lg:gap-x-128 lg:gap-y-32">
                        {benefits.map((benefit, index) => {
                            const isLeftColumn = index % 2 === 0;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, x: isLeftColumn ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex flex-col ${isLeftColumn ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start"} text-center items-center`}
                                >
                                    <dt className="text-xl font-bold leading-7 text-black">
                                        {benefit.title}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600 max-w-sm">
                                        <p className="flex-auto">{benefit.description}</p>
                                    </dd>
                                </motion.div>
                            );
                        })}
                    </dl>
                </div>

                <div className="flex justify-end w-full mt-16 px-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-emerald-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 font-medium">Know More</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="relative z-10 transition-transform group-hover:translate-x-1"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
