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
        <section className="relative py-24 bg-white text-black">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* CTA Banner */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#78ccdd] px-6 py-16 shadow-2xl sm:px-16 md:pt-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 mb-24">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
                        <h2 className="text-h2-apple text-white">
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

                </div>

            </div>

        </section>
    );
}
