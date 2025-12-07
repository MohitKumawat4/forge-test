"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();
        const progress = { value: 0 };

        // Animate counter and progress bar
        tl.to(progressBarRef.current, {
            width: "100%",
            duration: 2.5,
            ease: "power2.inOut",
        })
            .to(progress, {
                value: 100,
                duration: 2.5,
                ease: "power2.inOut",
                onUpdate: () => {
                    if (textRef.current) {
                        textRef.current.textContent = `${Math.round(progress.value)}%`;
                    }
                },
            }, "<") // Start at the same time as the previous animation
            .to(containerRef.current, {
                y: "-100%",
                duration: 0.8,
                ease: "power4.inOut",
                delay: 0.2,
            });

        // Cleanup function
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#111111] text-white"
        >
            <div className="flex flex-col items-center">
                <span
                    ref={textRef}
                    className="text-8xl font-bold font-mono mb-4 text-white"
                >
                    0%
                </span>
                <div className="w-32 h-px bg-zinc-800 relative overflow-hidden">
                    <div
                        ref={progressBarRef}
                        className="absolute top-0 left-0 h-full bg-[#EB3A14] w-0"
                    />
                </div>
            </div>
        </div>
    );
}
