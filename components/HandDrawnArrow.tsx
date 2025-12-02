import { motion } from "framer-motion";
import Image from "next/image";

// Left arrow component - accepts className prop for custom positioning
export function LeftArrow({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute hidden lg:block ${className}`}>
            <div className="relative flex items-center gap-2">
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center whitespace-nowrap"
                    style={{
                        fontFamily: '"Kalam", sans-serif',
                        fontSize: '18px',
                        fontWeight: 700,
                        letterSpacing: '0px',
                        lineHeight: '1.1em',
                        color: 'rgb(255, 255, 255)'
                    }}
                >
                    Try our AI Agents!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="relative w-[120px] h-[100px]"
                    style={{ filter: 'brightness(0) invert(1)' }}
                >
                    <Image
                        src="/left_arrow.avif"
                        alt="Left arrow"
                        width={120}
                        height={100}
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
            <div className="relative flex items-center gap-2">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="relative w-[120px] h-[100px]"
                    style={{ filter: 'brightness(0) invert(1)' }}
                >
                    <Image
                        src="/right_arrow.avif"
                        alt="Right arrow"
                        width={120}
                        height={100}
                        className="object-contain"
                    />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center whitespace-nowrap"
                    style={{
                        fontFamily: '"Kalam", sans-serif',
                        fontSize: '18px',
                        fontWeight: 700,
                        letterSpacing: '0px',
                        lineHeight: '1.1em',
                        color: 'rgb(255, 255, 255)'
                    }}
                >
                    Try our AI Agents!
                </motion.p>
            </div>
        </div>
    );
}
