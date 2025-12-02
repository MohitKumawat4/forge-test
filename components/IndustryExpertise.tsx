import Image from "next/image";
import { CheckCircle2, MessageSquare, ShoppingCart, Users, FileText, Headphones } from "lucide-react";

const useCases = [
    {
        name: "Customer Support",
        description: "AI agents that handle customer inquiries 24/7 with instant, accurate responses",
        icon: Headphones,
    },
    {
        name: "Sales Automation",
        description: "Qualify leads, schedule meetings, and close deals faster with AI assistance",
        icon: ShoppingCart,
    },
    {
        name: "HR & Recruiting",
        description: "Streamline hiring, onboarding, and employee management processes",
        icon: Users,
    },
    {
        name: "Content Generation",
        description: "Create marketing content, reports, and documentation at scale",
        icon: FileText,
    },
    {
        name: "Internal Communication",
        description: "Improve team collaboration with AI-powered chat and knowledge bases",
        icon: MessageSquare,
    },
];

interface UseCasesProps {
    className?: string;
}

export function UseCases({ className = "" }: UseCasesProps) {
    return (
        <div className={`bg-zinc-900 py-24 sm:py-32 ${className}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-blue-400">Use Cases</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Transform Every Department
                            </p>
                            <p className="mt-6 text-lg leading-8 text-zinc-300">
                                Our AI platform adapts to your business needs, whether you're in e-commerce, SaaS, finance, or any other industry. Deploy intelligent agents that work across all your departments.
                            </p>
                            <dl className="mt-10 space-y-6 text-base leading-7 text-zinc-300">
                                {useCases.map((useCase) => (
                                    <div key={useCase.name} className="flex gap-x-3">
                                        <useCase.icon className="h-6 w-6 flex-none text-blue-400" aria-hidden="true" />
                                        <div>
                                            <dt className="inline font-semibold text-white">{useCase.name}</dt>
                                            <dd className="inline"> — {useCase.description}</dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a href="#" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors">
                                    Explore all use cases <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl" />
                        <div className="relative rounded-xl bg-zinc-800/50 p-2 ring-1 ring-white/10 backdrop-blur-sm">
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-900">
                                {/* Placeholder for dashboard/interface preview */}
                                <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8">
                                    <div className="h-3 w-3/4 rounded bg-zinc-700 animate-pulse" />
                                    <div className="h-3 w-2/3 rounded bg-zinc-700 animate-pulse" />
                                    <div className="h-3 w-5/6 rounded bg-zinc-700 animate-pulse" />
                                    <div className="mt-4 grid grid-cols-2 gap-4 w-full">
                                        <div className="h-24 rounded bg-zinc-800 border border-zinc-700" />
                                        <div className="h-24 rounded bg-zinc-800 border border-zinc-700" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
