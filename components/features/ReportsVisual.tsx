"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ReportsVisual - 3D Floating Report Analysis Cards with Animated Input
export function ReportsVisual() {
    // State for interactive feedback voting
    const [feedbackVote, setFeedbackVote] = useState<'up' | 'down' | null>(null);
    // State for save button animation
    const [isSaved, setIsSaved] = useState(false);
    // State for typewriter effect in input box
    const [typedText, setTypedText] = useState('');
    // State to control when input box appears and expands
    const [showInput, setShowInput] = useState(false);
    const [inputExpanded, setInputExpanded] = useState(false);
    // State to control typing animation
    const [isTyping, setIsTyping] = useState(false);

    // State for Test Cases summary feature
    const [showTestCasesSummary, setShowTestCasesSummary] = useState(false);
    const [testCasesSummaryText, setTestCasesSummaryText] = useState('');
    const [isTypingSummary, setIsTypingSummary] = useState(false);

    // The text that will be typed in the input box
    const inputPromptText = "Generate a comprehensive Q4 sales analysis with regional breakdown...";

    // The summary text for test cases (related to the input)
    const testCasesSummaryFullText = "✓ Test Case Generated: Validating Q4 regional sales data aggregation, checking data accuracy across 5 regions, and verifying trend calculations for executive dashboard export.";

    // Handle save button click with animation
    const handleSave = () => {
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2000);
    };

    // Handle Test Cases button click
    const handleTestCases = () => {
        if (!showTestCasesSummary) {
            setShowTestCasesSummary(true);
            setTestCasesSummaryText('');
            // Start typing after a short delay
            setTimeout(() => setIsTypingSummary(true), 300);
        }
    };

    // Effect to trigger input box appearance after other elements animate in
    useEffect(() => {
        // Show input box after 1.2s (after other cards animate in)
        const showTimer = setTimeout(() => {
            setShowInput(true);
        }, 1200);

        // Expand input box after it appears
        const expandTimer = setTimeout(() => {
            setInputExpanded(true);
        }, 1600);

        // Start typing effect after expansion
        const typingTimer = setTimeout(() => {
            setIsTyping(true);
        }, 2200);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(expandTimer);
            clearTimeout(typingTimer);
        };
    }, []);

    // Typewriter effect - types one character at a time for input
    useEffect(() => {
        if (!isTyping) return;

        if (typedText.length < inputPromptText.length) {
            const timer = setTimeout(() => {
                setTypedText(inputPromptText.slice(0, typedText.length + 1));
            }, 50 + Math.random() * 30); // Variable speed for realistic typing
            return () => clearTimeout(timer);
        }
    }, [isTyping, typedText, inputPromptText]);

    // Typewriter effect for Test Cases summary
    useEffect(() => {
        if (!isTypingSummary) return;

        if (testCasesSummaryText.length < testCasesSummaryFullText.length) {
            const timer = setTimeout(() => {
                setTestCasesSummaryText(testCasesSummaryFullText.slice(0, testCasesSummaryText.length + 1));
            }, 30 + Math.random() * 20); // Slightly faster typing for summary
            return () => clearTimeout(timer);
        }
    }, [isTypingSummary, testCasesSummaryText, testCasesSummaryFullText]);

    return (
        <div className="w-full h-full relative p-4 isolate overflow-visible">
            {/* Grid Background - Extended with radial fade */}
            <div className="absolute inset-y-0 -left-64 -right-64 -z-10 mask-[radial-gradient(closest-side,black_40%,transparent_100%)]">
                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                        backgroundSize: "24px 24px"
                    }}
                />
            </div>

            {/* Content Container - Spread elements on grid */}
            <div className="absolute inset-0 flex flex-col items-center justify-center translate-x-[60px] gap-4 overflow-visible">

                {/* Main Report Card - 3D Floating Effect with subtle breathing animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30, rotateX: -10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                    }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    whileHover={{
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                        transition: { duration: 0.3 }
                    }}
                    className="w-[420px] bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-visible relative z-10"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Subtle glow effect on card */}
                    <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-br from-emerald-200/20 via-transparent to-zinc-200/20 rounded-2xl -z-10 blur-sm"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Header Row - Report Title & Actions */}
                    <div className="px-5 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {/* Report Icon with pulse animation */}
                            <motion.div
                                className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200/50 flex items-center justify-center relative"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {/* Ping indicator */}
                                <motion.div
                                    className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full"
                                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </motion.div>
                            <div>
                                <motion.div
                                    className="text-sm font-semibold text-zinc-800"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    Sales Performance Report
                                </motion.div>
                                <motion.div
                                    className="text-[11px] text-zinc-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Generated 4 mins ago
                                </motion.div>
                            </div>
                        </div>
                        {/* Action Icons */}
                        <div className="flex items-center gap-2">
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-1.5 text-zinc-400 hover:text-zinc-600 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-1.5 text-zinc-400 hover:text-zinc-600 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>

                    {/* Stats Row - Matching Reference Design with count-up animation feel */}
                    <div className="px-5 pb-4 flex items-center gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col"
                        >
                            <motion.span
                                className="text-lg font-bold text-zinc-800"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                1200ms
                            </motion.span>
                            <span className="text-[10px] text-zinc-400 uppercase tracking-wide">Time to complete</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col"
                        >
                            <motion.span
                                className="text-lg font-bold text-zinc-800"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                $0.43
                            </motion.span>
                            <span className="text-[10px] text-zinc-400 uppercase tracking-wide">Est. Cost</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col"
                        >
                            <motion.span
                                className="text-lg font-bold text-emerald-600 flex items-center gap-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                84
                                <motion.svg
                                    className="w-3 h-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    initial={{ y: 5, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </motion.svg>
                            </motion.span>
                            <span className="text-[10px] text-zinc-400 uppercase tracking-wide">Score</span>
                        </motion.div>
                    </div>

                    {/* Animated Input Section - Direct display with animations and reference design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: inputExpanded ? 1.02 : 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5,
                            type: "spring",
                            stiffness: 150,
                            damping: 15
                        }}
                        className="mx-5 mb-4 relative"
                    >
                        {/* Outer glow effect when expanded - exceeds card boundaries */}
                        <motion.div
                            className="absolute -inset-3 bg-gradient-to-r from-emerald-400/30 via-teal-400/20 to-emerald-400/30 rounded-2xl blur-xl -z-10"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: inputExpanded ? [0.4, 0.7, 0.4] : 0,
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Input container - matching reference design */}
                        <motion.div
                            className="bg-zinc-50/80 backdrop-blur-md border border-zinc-200/60 rounded-xl overflow-hidden"
                            animate={{
                                boxShadow: inputExpanded
                                    ? "0 20px 40px -10px rgba(16, 185, 129, 0.25)"
                                    : "0 4px 12px -2px rgba(0, 0, 0, 0.05)"
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Main Content - Thumbs + Text with Typewriter */}
                            <div className="p-4">
                                <div className="flex items-start gap-3">
                                    {/* Thumbs Up/Down Buttons */}
                                    <div className="flex gap-1 pt-0.5">
                                        <motion.button
                                            whileHover={{ scale: 1.15, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setFeedbackVote(feedbackVote === 'up' ? null : 'up')}
                                            className={`p-1.5 rounded-md transition-all ${feedbackVote === 'up'
                                                ? 'bg-emerald-100 text-emerald-600 shadow-sm'
                                                : 'bg-white border border-zinc-200 text-zinc-400 hover:text-emerald-500'
                                                }`}
                                        >
                                            <svg className="w-4 h-4" fill={feedbackVote === 'up' ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.15, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setFeedbackVote(feedbackVote === 'down' ? null : 'down')}
                                            className={`p-1.5 rounded-md transition-all ${feedbackVote === 'down'
                                                ? 'bg-red-100 text-red-600 shadow-sm'
                                                : 'bg-white border border-zinc-200 text-zinc-400 hover:text-red-500'
                                                }`}
                                        >
                                            <svg className="w-4 h-4" fill={feedbackVote === 'down' ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                            </svg>
                                        </motion.button>
                                    </div>

                                    {/* Typewriter Text */}
                                    <div className="flex-1 min-h-[24px]">
                                        <p className="text-sm text-zinc-700 leading-relaxed">
                                            {typedText}
                                            {/* Blinking cursor */}
                                            <motion.span
                                                className="inline-block w-0.5 h-4 bg-zinc-400 ml-0.5 align-middle rounded-sm"
                                                animate={{
                                                    opacity: [1, 0, 1],
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer - Press esc + Test Cases + Save */}
                            <motion.div
                                className="px-4 py-3 border-t border-zinc-200/60 flex items-center justify-between"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="text-[11px] text-zinc-400">Press &quot;esc&quot; to dismiss</span>
                                <div className="flex items-center gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.02, x: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleTestCases}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${showTestCasesSummary
                                            ? 'bg-emerald-100 border border-emerald-300 text-emerald-700'
                                            : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                                            }`}
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        {showTestCasesSummary ? 'Generated!' : 'Test Cases'}
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02, x: 2 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleSave}
                                        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${isSaved
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-emerald-700 text-white hover:bg-emerald-600'
                                            }`}
                                    >
                                        {isSaved ? (
                                            <>
                                                <motion.svg
                                                    className="w-3.5 h-3.5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 500 }}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </motion.svg>
                                                Saved!
                                            </>
                                        ) : (
                                            <>
                                                Save
                                                <span className="text-emerald-300">↵</span>
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* System Prompt Preview Card - Floating Below with breathing */}
                <motion.div
                    initial={{ opacity: 0, y: 40, rotateX: -5 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                    }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
                    whileHover={{
                        y: -3,
                        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.12)",
                        transition: { duration: 0.3 }
                    }}
                    className="w-[420px] bg-white/90 backdrop-blur-sm border border-zinc-200/70 rounded-xl shadow-[0_15px_35px_-15px_rgba(0,0,0,0.08)] p-5 relative z-10"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Section Label */}
                    <div className="flex items-center gap-2 mb-3">
                        <motion.div
                            className="w-1 h-4 bg-emerald-500 rounded-full"
                            animate={{ scaleY: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">System</span>
                    </div>

                    {/* System Prompt Content */}
                    <div className="space-y-3 text-sm text-zinc-500 leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            You are analyzing sales performance data for a growing enterprise, tasked with generating insights and actionable recommendations.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Your job is to identify key trends, segment performance by region, and highlight areas needing attention. Be precise, data-driven, and clear.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-zinc-600 font-medium"
                        >
                            Be concise, actionable, and insight-focused.
                        </motion.p>

                        {/* Test Cases Summary - Appears when Test Cases is clicked */}
                        <AnimatePresence>
                            {showTestCasesSummary && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                    exit={{ opacity: 0, y: -10, height: 0 }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                                    className="mt-4 pt-4 border-t border-zinc-200/60"
                                >
                                    {/* Summary Header */}
                                    <div className="flex items-center gap-2 mb-2">
                                        <motion.div
                                            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                                            animate={{ scale: [1, 1.3, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                        <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">
                                            Test Summary
                                        </span>
                                    </div>
                                    {/* Typewriter Summary Text */}
                                    <p className="text-sm text-emerald-700 leading-relaxed font-medium">
                                        {testCasesSummaryText}
                                        {/* Blinking cursor while typing */}
                                        {isTypingSummary && testCasesSummaryText.length < testCasesSummaryFullText.length && (
                                            <motion.span
                                                className="inline-block w-0.5 h-4 bg-emerald-500 ml-0.5 align-middle rounded-sm"
                                                animate={{ opacity: [1, 0, 1] }}
                                                transition={{ duration: 0.6, repeat: Infinity }}
                                            />
                                        )}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

            </div>
        </div >
    );
}
