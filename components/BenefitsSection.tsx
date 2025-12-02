"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, BarChart } from "lucide-react";

const benefits = [
    {
        icon: Sparkles,
        title: "AI-Powered Intelligence",
        description: "Leverage cutting-edge AI to automate complex workflows and make smarter decisions faster.",
    },
    {
        icon: Zap,
        title: "Instant Deployment",
        description: "Get started in minutes, not months. Deploy AI agents across your organization with zero setup time.",
    },
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description: "SOC2 compliant infrastructure with end-to-end encryption. Your data stays secure and private.",
    },
    {
        icon: BarChart,
        title: "Actionable Insights",
        description: "Transform raw data into strategic insights with AI-powered analytics and reporting.",
    },
];

interface BenefitsSectionProps {
    className?: string;
}

export function BenefitsSection({ className = "" }: BenefitsSectionProps) {
    return (
        <div className={`bg-black py-24 sm:py-32 ${className}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Why Choose Our Platform?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Built for modern businesses that demand speed, security, and scalability.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col"
                            >
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <div className="rounded-lg bg-blue-600/10 p-2 ring-1 ring-blue-600/20">
                                        <benefit.icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                                    </div>
                                    {benefit.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                                    <p className="flex-auto">{benefit.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
