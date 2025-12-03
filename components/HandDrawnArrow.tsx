import { motion } from "framer-motion";
import Image from "next/image";

// Left arrow component - accepts className prop for custom positioning
export function LeftArrow({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute hidden lg:block ${className}`}>
            <div className="relative flex items-start gap-4">
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="border-2 border-gray-800/10 rounded-full px-5 py-2.5 bg-white/40 backdrop-blur-sm shadow-sm"
                >
                    <p
                        className="text-center whitespace-nowrap text-gray-800"
                        style={{
                            fontFamily: '"Kalam", sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            letterSpacing: '0px',
                            lineHeight: '1.1em',
                        }}
                    >
                        Try our AI Agents!
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="relative w-[100px] h-[80px] mt-4"
                    style={{
                        filter: 'invert(68%) sepia(63%) saturate(452%) hue-rotate(126deg) brightness(90%) contrast(89%)',
                        transform: 'scaleX(-1) rotate(20deg)' // Adjusting orientation to point correctly
                    }}
                >
                    <Image
                        src="/left_arrow.avif"
                        alt="Left arrow"
                        width={100}
                        height={80}
                        className="object-contain"
                    />
                </motion.div>
            </div>
        </div>
    );
}

// Right arrow component - accepts className prop for custom positioning
export function RightArrow({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute hidden lg:block ${className}`}>
            <div className="relative flex items-start gap-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="relative w-[100px] h-[80px] mt-4"
                    style={{
                        filter: 'invert(68%) sepia(63%) saturate(452%) hue-rotate(126deg) brightness(90%) contrast(89%)',
                        transform: 'rotate(-20deg)'
                    }}
                >
                    <Image
                        src="/right_arrow.avif"
                        alt="Right arrow"
                        width={100}
                        height={80}
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="border-2 border-gray-800/10 rounded-full px-5 py-2.5 bg-white/40 backdrop-blur-sm shadow-sm"
                >
                    <p
                        className="text-center whitespace-nowrap text-gray-800"
                        style={{
                            fontFamily: '"Kalam", sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            letterSpacing: '0px',
                            lineHeight: '1.1em',
                        }}
                    >
                        Try our AI Agents!
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
