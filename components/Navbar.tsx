"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface NavbarProps {
    className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={cn("fixed top-0 left-0 right-0 z-[100] flex justify-center pt-3 px-4", className)}>
                <div className="w-full max-w-7xl relative flex items-center justify-between h-14">

                    {/* --- PILL BACKGROUND (Desktop Only) --- */}
                    <motion.div
                        layout
                        className="hidden md:block absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-black shadow-sm z-0"
                        initial={{ width: "480px", height: "40px", borderRadius: "9999px", left: "50%" }}
                        animate={{
                            width: isScrolled ? "100%" : "480px",
                            height: isScrolled ? "100%" : "40px",
                            borderRadius: "9999px",
                            left: "50%"
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "easeInOut"
                        }}
                    />

                    {/* --- MOBILE BACKGROUND (Simple white bar) --- */}
                    <div className={cn(
                        "md:hidden absolute inset-0 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300",
                        isScrolled ? "shadow-sm" : ""
                    )} style={{ top: -12, left: -16, right: -16, height: "64px" }} />

                    {/* --- LOGO SECTION --- */}
                    <motion.div
                        className="flex items-center gap-2 z-10 relative"
                        animate={{ x: isScrolled ? 8 : 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        <LogoIcon />
                        <span className="text-xl font-bold tracking-tight text-gray-900 overflow-hidden whitespace-nowrap block md:hidden">
                            Enterprise Forge
                        </span>
                        <AnimatePresence>
                            {!isScrolled && (
                                <motion.span
                                    className="text-xl font-bold tracking-tight text-gray-900 overflow-hidden whitespace-nowrap hidden md:block"
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

                    {/* --- NAV LINKS (Desktop) --- */}
                    <motion.div
                        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"
                        initial={{ left: "50%" }}
                        animate={{
                            left: "50%",
                            x: isScrolled ? -140 : 0
                        }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        <NavLinks />
                    </motion.div>

                    {/* --- ACTION BUTTONS (Desktop) --- */}
                    <motion.div
                        className="hidden md:flex items-center gap-6 z-10 relative"
                        animate={{ x: isScrolled ? -8 : 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        <ActionButtons />
                    </motion.div>

                    {/* --- MOBILE MENU TOGGLE --- */}
                    <div className="flex md:hidden items-center z-50">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>
            </nav>

            {/* --- MOBILE MENU OVERLAY --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[99] bg-white pt-20 px-6 pb-6 overflow-y-auto md:hidden flex flex-col"
                    >
                        {/* Navigation Links List */}
                        <div className="flex flex-col border-t border-gray-100 mt-2">
                            {["Solutions", "Products", "Company", "Pricing", "Docs", "Enterprise"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="flex items-center justify-between py-4 border-b border-gray-100 text-lg font-medium text-gray-900 hover:text-blue-500 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Action Buttons Stacked at Bottom */}
                        <div className="mt-auto pt-8 flex flex-col gap-3">
                            <Link
                                href="#"
                                className="w-full py-3 rounded-full border border-gray-300 text-center font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book demo
                            </Link>
                            <Link
                                href="#"
                                className="w-full py-3 rounded-full border border-gray-300 text-center font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                            <Link
                                href="#"
                                className="w-full py-3 rounded-full bg-black text-white text-center font-semibold hover:bg-gray-800 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// --- Subcomponents ---

function LogoIcon() {
    return (
        <svg
            className="h-8 w-8 sm:h-10 sm:w-10 shrink-0"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="20" cy="20" r="19" stroke="black" strokeWidth="1.5" opacity="0.1" />
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
            <circle cx="20" cy="20" r="4" fill="#2dd4bf" />
        </svg>
    );
}

function NavLinks() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className="flex items-center gap-1"
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {["Solutions", "Products", "Company", "Pricing"].map((item, index) => (
                <Link
                    key={item}
                    href="#"
                    className="relative px-4 py-2 rounded-full transition-colors"
                    onMouseEnter={() => setHoveredIndex(index)}
                >
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
                    <span className="text-sm font-medium text-gray-900">
                        {item}
                    </span>
                </Link>
            ))}
        </div>
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
                <span className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    Sign In
                </span>
            </Link>
            <Link
                href="#"
                className="hidden md:block bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
                onMouseEnter={() => setHoveredButton("demo")}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <span className="text-sm font-medium text-gray-900">
                    Book demo
                </span>
            </Link>
            <Link
                href="#"
                className="rounded-full bg-[#5ccee5] px-5 py-2 shadow-md transition-all hover:bg-teal-500 hover:scale-105 whitespace-nowrap"
                onMouseEnter={() => setHoveredButton("start")}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <span className="text-sm font-semibold text-white">
                    Get Started
                </span>
            </Link>
        </>
    );
}
