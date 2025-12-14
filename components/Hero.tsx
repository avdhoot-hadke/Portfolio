"use client";

import { useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    animate,
    useMotionValue,
    useMotionTemplate,
} from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";
import { Section } from "@/types";

interface HeroProps {
    scrollToSection: (section: Section) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            animate(mouseX, e.clientX, { duration: 0 });
            animate(mouseY, e.clientY, { duration: 0 });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const maskImage = useMotionTemplate`
    radial-gradient(400px at ${mouseX}px ${mouseY}px, black, transparent)
  `;

    return (
        <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-black">
            {/* Static Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            {/* Animated Glow */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle 800px at 50% 50%, rgba(255,255,255,0.15), transparent 40%)",
                    }}
                />

                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"
                    style={{ maskImage, WebkitMaskImage: maskImage }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div style={{ y: y1, opacity }} className="mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm text-zinc-400 text-[10px] font-mono uppercase tracking-[0.2em]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Portfolio ’25
                        </div>
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            AVDHOOT
                            {/* <span className="hidden md:block h-4 w-16 lg:w-32 bg-white/20 -skew-x-12" /> */}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-700"
                        >
                            HADKE
                        </motion.div>
                    </h1>

                    <div className="flex flex-col md:flex-row justify-between gap-8 border-t border-white/10 pt-8 mt-12">
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="max-w-md text-zinc-400 text-sm lg:text-lg"
                        >
                            Software Engineer focused on building reliable, scalable products using modern full-stack technologies.
                            Experienced with microservices, system design, and performance optimization; strong DSA foundation (1700+ LeetCode).
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <button
                                onClick={() => scrollToSection(Section.WORK)}
                                className="group w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
                            >
                                <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer Strip */}
            <div className="absolute bottom-0 w-full border-t border-white/5 py-4 bg-black/80 backdrop-blur z-20">
                <div className="container mx-auto px-6 flex justify-between items-center text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <Code2 size={14} />
                        System: Online
                    </div>
                    <div className="hidden md:flex gap-8">
                        <span>Latency: 24ms</span>
                        <span>Encryption: 256-bit</span>
                        <span>Region: Global</span>
                    </div>
                    <div>v2.5.0-beta</div>
                </div>
            </div>
        </section>
    );
}
