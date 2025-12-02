import {
    Bot,
    Workflow,
    LineChart,
    Zap,
    Shield,
    Users
} from "lucide-react";

const features = [
    {
        name: "AI Agents & Automation",
        description: "Deploy intelligent AI agents that handle customer support, sales, and operations 24/7 with human-like interactions.",
        icon: Bot,
    },
    {
        name: "Workflow Automation",
        description: "Streamline complex business processes with no-code automation. Connect your tools and let AI handle repetitive tasks.",
        icon: Workflow,
    },
    {
        name: "Real-time Analytics",
        description: "Get actionable insights from your data with AI-powered analytics. Make data-driven decisions faster than ever.",
        icon: LineChart,
    },
    {
        name: "Lightning Fast Performance",
        description: "Built on cutting-edge infrastructure for instant responses. Scale from startup to enterprise without slowdowns.",
        icon: Zap,
    },
    {
        name: "Enterprise Security",
        description: "Bank-grade encryption, SOC2 compliance, and advanced security features to protect your sensitive business data.",
        icon: Shield,
    },
    {
        name: "Team Collaboration",
        description: "Seamless collaboration tools for your entire team. Share insights, assign tasks, and track progress in real-time.",
        icon: Users,
    },
];

interface FeaturesProps {
    className?: string;
}

export function Features({ className = "" }: FeaturesProps) {
    return (
        <div className={`bg-black py-24 sm:py-32 ${className}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-400">Everything you need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything Your Business Needs to Thrive
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        From AI-powered automation to advanced analytics, our platform provides all the tools you need to transform your business operations and accelerate growth.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
