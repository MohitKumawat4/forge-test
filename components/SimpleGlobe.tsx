"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Simple CSS-based globe without WebGL - no errors!
export function SimpleGlobe() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 0.2) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Rotating globe container */}
            <div
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                    background: "radial-gradient(circle at 30% 30%, #1e40af, #0c1e47)",
                    boxShadow: "0 0 60px rgba(59, 130, 246, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.5)",
                }}
            >
                {/* Atmosphere glow */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: "radial-gradient(circle at 30% 30%, transparent 40%, rgba(59, 130, 246, 0.3) 70%, rgba(59, 130, 246, 0.6) 100%)",
                    }}
                />

                {/* Rotating lines to simulate globe */}
                <div
                    className="absolute inset-0"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transformOrigin: "center",
                    }}
                >
                    {/* Latitude lines */}
                    {[20, 40, 60, 80].map((y) => (
                        <div
                            key={`lat-${y}`}
                            className="absolute left-0 right-0 h-px bg-blue-300/20"
                            style={{ top: `${y}%` }}
                        />
                    ))}

                    {/* Longitude lines */}
                    {[20, 40, 60, 80].map((x) => (
                        <div
                            key={`lon-${x}`}
                            className="absolute top-0 bottom-0 w-px bg-blue-300/20"
                            style={{ left: `${x}%` }}
                        />
                    ))}

                    {/* Center vertical line */}
                    <div className="absolute top-0 bottom-0 w-px bg-blue-300/30 left-1/2" />
                    {/* Center horizontal line */}
                    <div className="absolute left-0 right-0 h-px bg-blue-300/30 top-1/2" />
                </div>

                {/* Connection points (dots) */}
                {[
                    { top: "30%", left: "40%" },
                    { top: "60%", left: "60%" },
                    { top: "45%", left: "25%" },
                    { top: "70%", left: "80%" },
                    { top: "25%", left: "70%" },
                ].map((pos, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-cyan-400"
                        style={pos}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                        }}
                    >
                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
                    </motion.div>
                ))}

                {/* Highlight shine effect */}
                <div
                    className="absolute top-[20%] left-[30%] w-32 h-32 rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                        filter: "blur(20px)",
                    }}
                />
            </div>
        </div>
    );
}
