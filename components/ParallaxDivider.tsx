"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "./Footer";

// Falling Meteor component using framer-motion for reliable animation
const FallingMeteor = ({
    delay = 0,
    duration = 1.5,
    size = 1,
    top = 0,
    left = 0,
}: {
    delay?: number;
    duration?: number;
    size?: number;
    top?: number;
    left?: number;
}) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{
            top: `${top}%`,
            left: `${left}%`,
            rotate: '45deg',
        }}
        initial={{
            x: 0,
            y: 0,
            opacity: 0,
        }}
        animate={{
            x: 500,
            y: 500,
            opacity: [0, 1, 1, 0],
        }}
        transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            repeatDelay: 8 + Math.random() * 10,
            ease: 'linear',
            times: [0, 0.05, 0.7, 1],
        }}
    >
        {/* Meteor head - bright glowing point (LEADING) */}
        <div
            className="rounded-full bg-white"
            style={{
                width: `${4 * size}px`,
                height: `${4 * size}px`,
                boxShadow: `0 0 ${6 * size}px ${3 * size}px rgba(255,255,255,0.9), 0 0 ${15 * size}px ${8 * size}px rgba(180,220,255,0.6)`,
            }}
        />
        {/* Meteor tail - fading streak (TRAILING BEHIND) */}
        <div
            className="absolute"
            style={{
                top: '50%',
                right: '100%',
                transform: 'translateY(-50%)',
                width: `${120 * size}px`,
                height: `${2 * size}px`,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0.9) 100%)',
                borderRadius: '2px',
            }}
        />
    </motion.div>
);

// Floating particle component for animated moving elements
const FloatingParticle = ({
    delay = 0,
    duration = 20,
    size = 4,
    startX = 0,
    color = "white"
}: {
    delay?: number;
    duration?: number;
    size?: number;
    startX?: number;
    color?: string
}) => (
    <motion.div
        className="absolute rounded-full"
        style={{
            width: size,
            height: size,
            left: `${startX}%`,
            backgroundColor: color,
            boxShadow: `0 0 ${size * 2}px ${color}`,
        }}
        initial={{ bottom: "-5%", opacity: 0 }}
        animate={{
            bottom: "105%",
            opacity: [0, 1, 1, 0],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
        }}
    />
);

// Moving orbital element
const OrbitalElement = ({
    size,
    orbitSize,
    duration,
    delay = 0,
    color
}: {
    size: number;
    orbitSize: number;
    duration: number;
    delay?: number;
    color: string
}) => (
    <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: orbitSize, height: orbitSize }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
        <div
            className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 3}px ${color}`
            }}
        />
    </motion.div>
);

export function ParallaxDivider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Generate stars only on client side to prevent hydration mismatch
    const [stars, setStars] = useState<Array<{
        id: number;
        width: number;
        height: number;
        left: string;
        top: string;
        opacity: number;
        duration: number;
        delay: number;
    }>>([]);

    const [techShapes, setTechShapes] = useState<Array<{
        id: number;
        type: 'cross' | 'circle' | 'square';
        size: number;
        left: string;
        top: string;
        duration: number;
        delay: number;
        rotationDir: number;
        color: string;
    }>>([]);

    useEffect(() => {
        // Generate stars after component mounts (client-side only)
        const generatedStars = [...Array(100)].map((_, i) => ({
            id: i,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
        }));
        setStars(generatedStars);

        // Generate tech shapes
        const generatedShapes = [...Array(15)].map((_, i) => ({
            id: i,
            type: ['cross', 'circle', 'square'][Math.floor(Math.random() * 3)] as 'cross' | 'circle' | 'square',
            size: Math.random() * 20 + 10,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
            rotationDir: Math.random() > 0.5 ? 1 : -1,
            color: ['#0ea5e9', '#d946ef', '#f59e0b', '#8b5cf6'][Math.floor(Math.random() * 4)], // Cyan, Fuchsia, Amber, Violet
        }));
        setTechShapes(generatedShapes);
    }, []);

    // Different parallax speeds for each layer
    const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const layerTechY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]); // New layer speed
    const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const layer4Y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    // Opacity fades for depth
    const fadeIn = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const fadeOut = useTransform(scrollYProgress, [0.7, 1], [1, 0.8]);

    // Scale effect for immersion
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

    // Horizontal movement for some elements
    const moveLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const moveRight = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <div
            ref={containerRef}
            className="relative w-full bg-slate-950 overflow-hidden"
        >
            {/* Layer 0 - Static Background Gradient (No Parallax) to ensure seamless blend */}
            <div className="absolute inset-0 w-full h-full z-0">
                {/* Gradient: White → Soft Blue → Ocean → Deep Blue → Navy → Deep Navy → Space */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff_0%,#f0f9ff_5%,#e0f2fe_10%,#bae6fd_16%,#7dd3fc_22%,#38bdf8_28%,#0ea5e9_35%,#0284c7_42%,#0369a1_50%,#075985_58%,#0c4a6e_66%,#1e3a5f_74%,#172554_82%,#0f172a_90%,#020617_100%)]" />
            </div>

            {/* Layer 1 - Stars (Parallax enabled) */}
            <motion.div
                style={{ y: layer1Y, scale }}
                className="absolute inset-0 w-full h-full"
            >
                {/* Star field */}
                <div className="absolute inset-0">
                    {stars.map((star) => (
                        <motion.div
                            key={star.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                width: star.width,
                                height: star.height,
                                left: star.left,
                                top: star.top,
                                opacity: star.opacity,
                            }}
                            animate={{
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: star.duration,
                                repeat: Infinity,
                                delay: star.delay,
                            }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Layer 2 - Nebula clouds (moves medium speed) */}
            <motion.div
                style={{ y: layer2Y, opacity: fadeIn }}
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
                {/* Large glowing orbs */}
                <motion.div
                    style={{ x: moveLeft }}
                    className="absolute left-[10%] top-[20%] w-[500px] h-[500px] bg-fuchsia-500/15 rounded-full blur-[150px]"
                />
                <motion.div
                    style={{ x: moveRight }}
                    className="absolute right-[10%] top-[40%] w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px]"
                />
                <motion.div
                    style={{ x: moveLeft }}
                    className="absolute left-[30%] bottom-[40%] w-[600px] h-[600px] bg-violet-500/15 rounded-full blur-[180px]"
                />
                {/* Additional glow for footer area */}
                <motion.div
                    style={{ x: moveRight }}
                    className="absolute right-[20%] bottom-[10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px]"
                />
            </motion.div>

            {/* NEW Layer 2.5 - Geometric Tech Shapes (moves slower/different speed) */}
            <motion.div
                style={{ y: layerTechY }}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            >
                {techShapes.map((shape) => (
                    <motion.div
                        key={shape.id}
                        className="absolute flex items-center justify-center font-mono text-xs"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            left: shape.left,
                            top: shape.top,
                            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '2px' : '0px',
                            borderWidth: shape.type === 'cross' ? '0px' : '1px',
                            borderColor: `${shape.color}40`, // 40 is hex opacity
                            color: `${shape.color}40`,
                        }}
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{
                            opacity: [0.1, 0.4, 0.1],
                            rotate: shape.rotationDir * 360,
                            y: [0, -20, 0]
                        }}
                        transition={{
                            opacity: { duration: Math.random() * 5 + 3, repeat: Infinity, delay: shape.delay },
                            rotate: { duration: shape.duration * 2, repeat: Infinity, ease: "linear" },
                            y: { duration: shape.duration, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        {shape.type === 'cross' && '+'}
                    </motion.div>
                ))}
            </motion.div>

            {/* Layer 3 - Grid and geometric elements (moves faster) */}
            <motion.div
                style={{ y: layer3Y }}
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
                {/* 3D Grid - receding into distance */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
                        transform: 'perspective(500px) rotateX(60deg) scale(2.5)',
                        transformOrigin: 'center bottom',
                        maskImage: 'linear-gradient(to top, black, transparent 80%)',
                    }}
                />

                {/* Horizontal scan line effect */}
                <motion.div
                    className="absolute left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-fuchsia-400/50 to-transparent"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>

            {/* Layer 4 - Foreground elements (moves fastest / opposite direction) */}
            <motion.div
                style={{ y: layer4Y }}
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
                {/* Floating particles rising up - Multicolor mix */}
                <FloatingParticle delay={0} duration={15} size={3} startX={10} color="#0ea5e9" />    {/* Cyan */}
                <FloatingParticle delay={2} duration={18} size={4} startX={25} color="#d946ef" />    {/* Fuchsia */}
                <FloatingParticle delay={4} duration={20} size={2} startX={40} color="#8b5cf6" />    {/* Violet */}
                <FloatingParticle delay={1} duration={16} size={5} startX={55} color="#0ea5e9" />    {/* Cyan */}
                <FloatingParticle delay={3} duration={22} size={3} startX={70} color="#f59e0b" />    {/* Amber */}
                <FloatingParticle delay={5} duration={19} size={4} startX={85} color="#d946ef" />    {/* Fuchsia */}
                <FloatingParticle delay={6} duration={17} size={2} startX={15} color="#8b5cf6" />    {/* Violet */}
                <FloatingParticle delay={7} duration={21} size={3} startX={60} color="#f472b6" />    {/* Pink */}
                <FloatingParticle delay={8} duration={14} size={4} startX={90} color="#22d3ee" />    {/* Light Blue */}
                <FloatingParticle delay={9} duration={25} size={2} startX={35} color="#c084fc" />    {/* Light Violet */}
            </motion.div>

            {/* Layer 5 - Meteor Shower (Realistic Falling Shooting Stars) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                {/* Multiple meteors falling diagonally - positioned in dark sky area (35-65%) */}
                <FallingMeteor delay={0} duration={2.0} size={1.2} top={35} left={5} />
                <FallingMeteor delay={4} duration={1.8} size={0.9} top={40} left={20} />
                <FallingMeteor delay={8} duration={2.2} size={1.0} top={32} left={40} />
                <FallingMeteor delay={12} duration={1.6} size={1.4} top={45} left={55} />
                <FallingMeteor delay={16} duration={2.0} size={0.8} top={38} left={70} />
                <FallingMeteor delay={20} duration={1.9} size={1.1} top={50} left={10} />
                <FallingMeteor delay={24} duration={2.1} size={0.7} top={42} left={30} />
                <FallingMeteor delay={28} duration={1.7} size={1.3} top={48} left={50} />
                <FallingMeteor delay={32} duration={2.3} size={0.6} top={36} left={75} />
                <FallingMeteor delay={36} duration={1.8} size={1.0} top={55} left={15} />
            </div>

            {/* Extra Empty Spacer Section - Extends the gradient background */}
            <div className="relative z-10 min-h-screen">
                {/* Additional empty space requested by user to extend the gradient view */}
            </div>

            {/* Second Extra Spacer Section */}
            <div className="relative z-10 min-h-screen">
                {/* Third page of gradient background */}
            </div>

            {/* Empty Spacer Section - Provides breathing room before the final content */}
            <div className="relative z-10 min-h-screen">
                {/* This section is intentionally empty to create space showing off the parallax background */}
            </div>

            {/* Main content section - Parallax hero area */}
            <div className="relative z-10 min-h-[800px] flex flex-col">
                {/* Central content with orbital elements */}
                <div className="flex-1 flex items-center justify-center">
                    {/* Orbital rings around content */}
                    <div className="relative w-[400px] h-[400px]">
                        {/* Outer ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-fuchsia-500/20"
                            style={{ scale: 1.5 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Middle ring with orbital dots */}
                        <OrbitalElement size={8} orbitSize={350} duration={30} color="#0ea5e9" />
                        <OrbitalElement size={6} orbitSize={350} duration={30} delay={15} color="#d946ef" />

                        {/* Inner ring */}
                        <OrbitalElement size={10} orbitSize={250} duration={20} color="#8b5cf6" />
                        <OrbitalElement size={5} orbitSize={250} duration={20} delay={10} color="#f59e0b" />

                        {/* Center glow */}
                        <motion.div
                            className="absolute inset-0 m-auto w-32 h-32"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="w-full h-full rounded-full bg-linear-to-br from-fuchsia-500/20 to-cyan-500/20 blur-xl" />
                        </motion.div>
                    </div>
                </div>

                {/* Main content overlay */}
                <motion.div
                    style={{ opacity: fadeOut }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-32"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Decorative line */}
                        <motion.div
                            className="w-px h-20 bg-linear-to-b from-transparent via-fuchsia-500 to-transparent mx-auto"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        />

                        {/* Heading - Solid white text for better readability */}
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
                            Forge the Future
                        </h2>

                        {/* Subtitle */}
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Experience the next generation of enterprise intelligence.
                            Build, automate, and scale with unprecedented power.
                        </p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="pt-4"
                        >
                            <button className="group relative bg-white text-black px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,70,239,0.4)]">
                                {/* Button glow effect */}
                                <span className="absolute inset-0 bg-linear-to-r from-fuchsia-200 via-cyan-200 to-violet-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Building
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Additional moving elements */}
                <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
                    {/* Horizontal moving lines */}
                    <motion.div
                        className="absolute bottom-8 left-0 w-full h-px"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, #d946ef 50%, transparent 100%)',
                        }}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute bottom-16 left-0 w-full h-px opacity-50"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, #0ea5e9 50%, transparent 100%)',
                        }}
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>

            {/* Footer Section - Seamlessly integrated with the green background */}
            <div className="relative z-10">
                <Footer className="bg-transparent" />
            </div>
        </div>
    );
}

