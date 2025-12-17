"use client";
import { useScroll } from "motion/react";
import React from "react";
import { Tree } from "@/components/ui/tree";

export default function GeminiHero() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    return (
        <div
            className="h-[400vh] bg-black w-full dark:border dark:border-white/10 rounded-md relative pt-40 overflow-clip"
            ref={ref}
        >
            <Tree scrollYProgress={scrollYProgress} />
        </div>
    );
}
