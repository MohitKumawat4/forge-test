import { Check } from "lucide-react";
import Link from "next/link";

const benefits = [
    {
        title: "Improve time to value",
        description: "Enterprise Forge works out of the box. Solve business challenges right away, rather than configuring complex software for months."
    },
    {
        title: "Reduce operational effort",
        description: "Self-service and AI automation deflect up to 40% of routine inquiries. Resolve remaining tasks faster with rich intelligent insights."
    },
    {
        title: "Keep costs down",
        description: "You don't need an army of developers to start using Enterprise Forge or an influx of agents to keep using it. Efficiency and automation are baked in."
    }
];

export function ROISection() {
    return (
        <section className="py-24 bg-linear-to-b from-white to-emerald-50 text-black">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* CTA Banner */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#78ccdd] px-6 py-16 shadow-2xl sm:px-16 md:pt-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 mb-24">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Exceed every customer expectation
                        </h2>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link
                                href="#"
                                className="rounded-md bg-[#d4f673] px-6 py-3 text-base font-semibold text-[#1a2e28] shadow-sm hover:bg-[#c2e562] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4f673] transition-colors"
                            >
                                Try it for free
                            </Link>
                            <Link
                                href="#"
                                className="rounded-md border border-white/30 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                            >
                                Get a demo
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ROI Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">
                            RETURN ON INVESTMENT
                        </p>
                        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl mb-6">
                            Maximise your ROI
                        </h2>
                        <p className="text-lg leading-8 text-zinc-600 mb-8">
                            You'll save time and money with Enterprise Forge. But don't take it from us – take it from our customers. Our AI-driven solutions consistently deliver 301% return on investment over three years by automating workflows and optimizing resource allocation.
                        </p>
                        <Link
                            href="#"
                            className="text-lg font-semibold leading-6 text-zinc-900 underline decoration-2 underline-offset-4 hover:text-emerald-700 transition-colors"
                        >
                            Read the full study
                        </Link>
                    </div>

                    <div className="space-y-10">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-none">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                                        <Check className="h-4 w-4" strokeWidth={3} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold leading-6 text-zinc-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-base leading-7 text-zinc-600">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
