"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface NavbarProps {
    className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={cn("fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4", className)}>
            <div className="w-full max-w-7xl relative flex items-center justify-between h-14">

                {/* --- PILL BACKGROUND --- */}
                {/* 
                    Expands from covering just the nav links (approx 480px) to full width.
                    Z-index is low so content sits on top.
                */}
                <motion.div
                    layout
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-black shadow-sm z-0"
                    initial={{ width: "480px", height: "40px", borderRadius: "9999px", left: "calc(50% - 70px)" }}
                    animate={{
                        width: isScrolled ? "100%" : "480px",
                        height: isScrolled ? "100%" : "40px",
                        borderRadius: "9999px",
                        left: isScrolled ? "50%" : "calc(50% - 70px)"
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeInOut"
                    }}
                />

                {/* --- LOGO SECTION --- */}
                <motion.div
                    className="flex items-center gap-2 z-10 relative"
                    animate={{ x: isScrolled ? 8 : 0 }} // Move 8px inward
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    <LogoIcon />
                    <AnimatePresence>
                        {!isScrolled && (
                            <motion.span
                                className="text-xl font-bold tracking-tight text-gray-900 overflow-hidden whitespace-nowrap"
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                Enterprise Forge
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* --- NAV LINKS (Centered) --- */}
                <motion.div
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    initial={{ left: "calc(50% - 70px)" }}
                    animate={{
                        left: isScrolled ? "50%" : "calc(50% - 70px)",
                        x: isScrolled ? -180 : 0
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    <NavLinks isScrolled={isScrolled} />
                </motion.div>

                {/* --- ACTION BUTTONS --- */}
                <motion.div
                    className="flex items-center gap-6 z-10 relative"
                    animate={{ x: isScrolled ? -8 : 0 }} // Move 8px inward
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    <ActionButtons />
                </motion.div>

            </div>
        </nav>
    );
}

// --- Subcomponents ---

function LogoIcon() {
    return (
        <svg
            className="h-10 w-10 shrink-0"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer Ring */}
            <circle cx="20" cy="20" r="19" stroke="black" strokeWidth="1.5" opacity="0.1" />

            {/* Abstract Tech Symbol */}
            <path
                d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20"
                stroke="#2dd4bf"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path
                d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
            />

            {/* Central Node */}
            <circle cx="20" cy="20" r="4" fill="#2dd4bf" />
        </svg>
    );
}

function NavLinks({ isScrolled }: { isScrolled: boolean }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            className="flex items-center"
            animate={{ gap: isScrolled ? "14px" : "4px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {["Solutions", "Products", "Company", "Resources"].map((item, index) => (
                <Link
                    key={item}
                    href="#"
                    className="relative px-4 py-2 rounded-full transition-colors"
                    onMouseEnter={() => setHoveredIndex(index)}
                >
                    {/* Sliding Hover Background */}
                    <AnimatePresence>
                        {hoveredIndex === index && (
                            <motion.span
                                className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                                layoutId="nav-item-hover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    layout: { duration: 0.2, ease: "easeOut" },
                                    opacity: { duration: 0.2 }
                                }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Slot Machine Text Animation */}
                    <div className="relative overflow-hidden h-5 w-full">
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: hoveredIndex === index ? "-50%" : "0%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex flex-col items-center w-full"
                        >
                            <span className={cn("flex items-center justify-center h-5 w-full text-sm text-gray-600", isScrolled ? "font-bold" : "font-medium")}>
                                {item}
                            </span>
                            <span className={cn("flex items-center justify-center h-5 w-full text-sm text-gray-900 font-bold")}>
                                {item}
                            </span>
                        </motion.div>
                    </div>
                </Link>
            ))}
        </motion.div>
    );
}

function ActionButtons() {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    return (
        <>
            <Link
                href="#"
                className="hidden md:block px-4 py-2"
                onMouseEnter={() => setHoveredButton("signin")}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <SpinningText
                    text="Sign In"
                    isHovered={hoveredButton === "signin"}
                    className="text-sm font-medium text-gray-600"
                    activeClassName="text-sm font-bold text-gray-900"
                />
            </Link>
            <Link
                href="#"
                className="hidden md:block bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
                onMouseEnter={() => setHoveredButton("demo")}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <SpinningText
                    text="Book demo"
                    isHovered={hoveredButton === "demo"}
                    className="text-sm font-medium text-gray-900"
                    activeClassName="text-sm font-bold text-gray-900"
                />
            </Link>
            <Link
                href="#"
                className="rounded-full bg-[#5ccee5] px-5 py-2 shadow-md transition-all hover:bg-teal-500 hover:scale-105 whitespace-nowrap"
                onMouseEnter={() => setHoveredButton("start")}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <SpinningText
                    text="Get Started"
                    isHovered={hoveredButton === "start"}
                    className="text-sm font-semibold text-white"
                    activeClassName="text-sm font-bold text-white"
                />
            </Link>
        </>
    );
}

function SpinningText({ text, isHovered, className, activeClassName }: { text: string, isHovered: boolean, className?: string, activeClassName?: string }) {
    return (
        <div className="relative overflow-hidden h-5 w-full">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: isHovered ? "-50%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center w-full"
            >
                <span className={cn("flex items-center justify-center h-5 w-full", className)}>
                    {text}
                </span>
                <span className={cn("flex items-center justify-center h-5 w-full", activeClassName || className)}>
                    {text}
                </span>
            </motion.div>
        </div>
    );
}
