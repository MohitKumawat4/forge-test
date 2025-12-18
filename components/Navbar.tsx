"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";
import { WaitlistModal } from "./WaitlistModal";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface NavbarProps {
    className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

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

    const openWaitlist = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        window.dispatchEvent(new CustomEvent("open-waitlist"));
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <WaitlistModal />
            <nav className={cn("fixed top-0 left-0 right-0 z-150 flex justify-center pt-1", className)}>
                <div className="w-full lg:w-[90%] max-w-screen-2xl mx-auto relative flex items-center justify-between h-14 px-6 lg:px-8">

                    {/* --- PILL BACKGROUND (Desktop Only) --- */}
                    <motion.div
                        layout
                        className="hidden lg:block absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-black shadow-sm z-0"
                        initial={{ width: "380px", height: "40px", borderRadius: "9999px", left: "50%" }}
                        animate={{
                            width: isScrolled ? "100%" : "380px",
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
                        "lg:hidden fixed left-0 right-0 top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300 px-6",
                        isScrolled ? "shadow-sm" : ""
                    )} style={{ height: "64px" }} />

                    {/* --- LOGO SECTION --- */}
                    <motion.div
                        className="flex items-center gap-2 z-10 relative"
                        animate={{ x: isScrolled ? 8 : 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <LogoIcon />
                            <span className="text-lg sm:text-2xl font-bold tracking-tight text-gray-900 whitespace-nowrap block lg:hidden">
                                Enterprise Forge
                            </span>
                            <AnimatePresence>
                                {!isScrolled && (
                                    <motion.span
                                        className="text-xl font-bold tracking-tight text-gray-900 overflow-hidden whitespace-nowrap hidden lg:block"
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        Enterprise Forge
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>
                    </motion.div>

                    {/* --- NAV LINKS (Desktop) --- */}
                    <motion.div
                        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block"
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
                        className="hidden lg:flex items-center gap-2 xl:gap-3 z-10 relative"
                        animate={{ x: isScrolled ? -8 : 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        <ActionButtons />
                    </motion.div>

                    {/* --- MOBILE MENU TOGGLE --- */}
                    <div className="flex lg:hidden items-center z-50">
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
                        className="fixed inset-0 z-99 bg-white pt-16 px-6 pb-6 overflow-y-auto lg:hidden flex flex-col"
                    >
                        {/* Navigation Links List */}
                        <div className="flex flex-col">
                            {["Solutions", "Products", "Company", "Pricing"].map((item) => {
                                const href = item === "Pricing" ? "/pricing" :
                                    item === "Solutions" ? "/solutions" :
                                        item === "Products" ? "/products" :
                                            item === "Company" ? "/company" : "#";
                                const isActive = pathname === href;

                                return (
                                    <Link
                                        key={item}
                                        href={href}
                                        className={cn(
                                            "flex items-center justify-between py-4 border-b border-gray-100 text-lg transition-colors",
                                            isActive ? "text-blue-600 font-bold" : "font-medium text-gray-900 hover:text-blue-500"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="flex items-center gap-2">
                                            {item}
                                            {isActive && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                            )}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Action Buttons Stacked at Bottom */}
                        <div className="mt-auto pt-8 flex flex-col gap-3">
                            <button
                                onClick={openWaitlist}
                                className="w-full py-3 rounded-full border border-gray-300 text-center font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                                Book demo
                            </button>
                            <button
                                onClick={openWaitlist}
                                className="w-full py-3 rounded-full border border-gray-300 text-center font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={openWaitlist}
                                className="w-full py-3 rounded-full bg-black text-white text-center font-semibold hover:bg-gray-800 transition-colors"
                            >
                                Get Started
                            </button>
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

const SlideText = ({ text, isHovered }: { text: string; isHovered: boolean }) => {
    return (
        <div className="relative overflow-hidden h-[20px]">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: isHovered ? "-100%" : "0%" }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} // Smooth ease-out
                className="flex flex-col"
            >
                <span className="h-[20px] flex items-center">{text}</span>
                <span className="h-[20px] flex items-center absolute top-full">{text}</span>
            </motion.div>
        </div>
    );
};


// (Skip down to NavLinks component)

function NavLinks() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const pathname = usePathname();

    return (
        <div
            className="flex items-center gap-1"
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {["Solutions", "Products", "Company", "Pricing"].map((item, index) => {
                const href = item === "Pricing" ? "/pricing" :
                    item === "Solutions" ? "/solutions" :
                        item === "Products" ? "/products" :
                            item === "Company" ? "/company" : "#";
                const isActive = pathname === href;

                return (
                    <Link
                        key={item}
                        href={href}
                        className={cn(
                            "relative px-3 py-2 rounded-full transition-colors group",
                            isActive ? "bg-gray-100/50" : ""
                        )}
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
                        <span className={cn(
                            "text-sm font-medium block transition-colors",
                            isActive ? "text-blue-600 font-semibold" : "text-gray-900"
                        )}>
                            <SlideText text={item} isHovered={hoveredIndex === index} />
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}

function ActionButtons() {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    const openWaitlist = (e: React.MouseEvent) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("open-waitlist"));
    };

    return (
        <>
            <button
                onClick={openWaitlist}
                className="hidden lg:block px-2 xl:px-4 py-2 group"
                onMouseEnter={() => setHoveredButton("signin")}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <span className="text-xs xl:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors block">
                    <SlideText text="Sign In" isHovered={hoveredButton === "signin"} />
                </span>
            </button>
            <button
                onClick={openWaitlist}
                className="hidden lg:block bg-gray-100 hover:bg-gray-200 px-3 xl:px-4 py-2 rounded-full transition-colors group"
                onMouseEnter={() => setHoveredButton("demo")}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <span className="text-xs xl:text-sm font-medium text-gray-900 block">
                    <SlideText text="Book demo" isHovered={hoveredButton === "demo"} />
                </span>
            </button>
            <button
                onClick={openWaitlist}
                className="rounded-full bg-[#5ccee5] px-3 xl:px-5 py-2 shadow-md transition-all hover:bg-teal-500 hover:scale-105 whitespace-nowrap group"
                onMouseEnter={() => setHoveredButton("start")}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <span className="text-xs xl:text-sm font-semibold text-white block">
                    <SlideText text="Get Started" isHovered={hoveredButton === "start"} />
                </span>
            </button>
        </>
    );
}
