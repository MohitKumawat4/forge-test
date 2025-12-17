"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// VideoCard Component - Displays video showcase below Hero section -M -W
export function ParallaxPromo() {
    const videoUrl = "https://res.cloudinary.com/da5665lbj/video/upload/v1755678541/Screen_Recording_2025-08-20_120146_piibxb.mp4";

    // State for mobile fullscreen mode -M
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Toggle fullscreen on mobile -M
    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <section className="py-8 md:py-29 pb-27 pt-16 bg-white">
            {/* Container with responsive width -M -W */}
            <div className="mx-auto w-full md:w-[80%] max-w-screen-2xl px-4 md:px-8">
                {/* Video Card Container - Clickable on mobile only -M */}
                <div
                    className={`relative w-full overflow-hidden shadow-2xl bg-slate-100 cursor-pointer md:cursor-default ${isFullscreen ? '' : 'rounded-2xl md:rounded-3xl'
                        }`}
                    onClick={() => {
                        // Only toggle on mobile (screens < 768px)
                        if (window.innerWidth < 768) {
                            toggleFullscreen();
                        }
                    }}
                >
                    {/* Decorative gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#5ccee5]/20 via-transparent to-purple-200/20 pointer-events-none z-10 ${isFullscreen ? '' : 'rounded-2xl md:rounded-3xl'
                        }`} />

                    {/* Video Container - Responsive aspect ratio -M -W */}
                    <div className="relative w-full aspect-video">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        >
                            <source src={videoUrl} type="video/mp4" />
                            {/* Fallback for browsers that don't support video */}
                            Your browser does not support the video tag.
                        </video>

                        {/* Optional overlay gradient for better blending */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom fade for smooth transition */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 " />
                </div>

                {/* Caption below video - Mobile only -M */}
                <div className="mt-4 text-center md:hidden">
                    <p className="text-sm text-slate-500">
                        See Enterprise Forge in action
                    </p>
                </div>
            </div>

            {/* Fullscreen Video Modal - Mobile only, works in portrait and landscape -M */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl md:hidden overflow-hidden"
                        style={{
                            // Ensures it covers the entire viewport including safe areas
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: '100vw',
                            height: '100vh',
                            position: 'fixed'
                        }}
                        onClick={toggleFullscreen}
                    >
                        {/* Blurred background overlay - works in both orientations -M */}
                        <div className="absolute inset-0 backdrop-blur-2xl bg-black/60" />

                        {/* Fullscreen Video Container - adapts to portrait and landscape -M */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }}
                            className="relative w-full h-full flex items-center justify-center z-10 px-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Video container - no rounded corners, fills available space -M */}
                            <div className="relative w-full h-full bg-black flex items-center justify-center">
                                <video
                                    className="w-full h-full object-contain max-w-full max-h-full"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    controls
                                    style={{
                                        // Ensures video is always centered and fits the screen
                                        objectFit: 'contain',
                                        maxWidth: '100%',
                                        maxHeight: '100%'
                                    }}
                                >
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Close indicator - adapts to orientation -M */}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute top-4 right-4 z-20 p-3 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 transition-colors"
                                onClick={toggleFullscreen}
                                aria-label="Close fullscreen video"
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </motion.button>

                            {/* Bottom tap hint - visible in portrait mode -M */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="absolute bottom-8 left-1/2 -translate-x-1/2 portrait:block landscape:hidden"
                                onClick={toggleFullscreen}
                            >
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                    <span className="text-white text-sm font-medium">
                                        Tap to close
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
