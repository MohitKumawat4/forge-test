"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "motion/react";
import React from "react";

export const GoogleGeminiEffect = ({
    pathLengths,
    className,
}: {
    pathLengths: MotionValue[];
    className?: string;
}) => {
    return (
        <div className={cn("sticky top-40", className)}>
            <svg
                width="1440"
                height="890"
                viewBox="0 0 1440 890"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-60 md:-top-80 w-1/3 scale-x-[-1] right-0"
            >
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                    </filter>
                </defs>

                {/* Gaussian blur duplicates (Background Glow) - Rendered FIRST */}
                <path d="M0 500 C 400 500, 800 800, 1440 800" stroke="#FFB7C5" strokeWidth="8" fill="none" filter="url(#blurMe)" opacity="0.7" />
                <path d="M0 500 C 400 500, 800 650, 1440 650" stroke="#FFDDB7" strokeWidth="8" fill="none" filter="url(#blurMe)" opacity="0.7" />
                <path d="M0 500 C 400 500, 800 500, 1440 500" stroke="#B1C5FF" strokeWidth="8" fill="none" filter="url(#blurMe)" opacity="0.8" />
                <path d="M0 500 C 400 500, 800 350, 1440 350" stroke="#4FABFF" strokeWidth="8" fill="none" filter="url(#blurMe)" opacity="0.7" />
                <path d="M0 500 C 400 500, 800 200, 1440 200" stroke="#076EFF" strokeWidth="8" fill="none" filter="url(#blurMe)" opacity="0.7" />

                {/* Main Animated Paths - Rendered SECOND (On Top) */}
                {/* Path 1: Bottom Most */}
                <motion.path
                    d="M0 500 C 400 500, 800 800, 1440 800"
                    stroke="#FFB7C5"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: pathLengths[0] }}
                />
                {/* Path 2: Bottom Mid */}
                <motion.path
                    d="M0 500 C 400 500, 800 650, 1440 650"
                    stroke="#FFDDB7"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: pathLengths[1] }}
                />
                {/* Path 3: Center */}
                <motion.path
                    d="M0 500 C 400 500, 800 500, 1440 500"
                    stroke="#B1C5FF"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: pathLengths[2] }}
                />
                {/* Path 4: Top Mid */}
                <motion.path
                    d="M0 500 C 400 500, 800 350, 1440 350"
                    stroke="#4FABFF"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: pathLengths[3] }}
                />
                {/* Path 5: Top Most */}
                <motion.path
                    d="M0 500 C 400 500, 800 200, 1440 200"
                    stroke="#076EFF"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: pathLengths[4] }}
                />
            </svg>
        </div>
    );
};
