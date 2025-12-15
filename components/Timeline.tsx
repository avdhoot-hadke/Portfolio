"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import GlowingSeparator from "./GlowingSeparator";
import { Experience } from "@/types";
import { experiences } from "@/data/experiences";

interface TimelineItemProps {
    data: Experience;
    index: number;
}

function TimelineItem({ data, index }: TimelineItemProps) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!rowRef.current) return;
        const rect = rowRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={rowRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
        >
            {/* Spotlight Overlay */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(
                        600px circle at ${position.x}px ${position.y}px,
                        rgba(255,255,255,0.03),
                        transparent 40%
                    )`,
                }}
            />

            <div className="relative z-10 grid grid-cols-1 gap-8 py-12 pl-6 md:grid-cols-[200px_1fr] md:pl-0">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-zinc-800 md:block">
                    <div className="absolute top-16 -left-[4px] h-[9px] w-[9px] rounded-full border border-zinc-700 bg-zinc-950 transition-all group-hover:border-white group-hover:bg-white group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]" />
                </div>

                {/* Left Column */}
                <div className="pt-2 font-mono text-sm md:pl-8">
                    <div className="mb-2 text-zinc-500 group-hover:text-zinc-200">
                        {data.period}
                    </div>
                    <div className="inline-block rounded-sm border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover:border-zinc-700 group-hover:text-zinc-400">
                        v{3.0 - index}.0
                    </div>
                </div>

                {/* Right Column */}
                <div className="pr-4">
                    <h3 className="mb-2 text-3xl font-bold text-white">
                        <span className="group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 group-hover:bg-clip-text group-hover:text-transparent">
                            {data.company}
                        </span>
                    </h3>

                    <h4 className="mb-4 text-lg font-medium text-zinc-400">
                        {data.role}
                    </h4>

                    {/* Bullet Points */}
                    <ul className="max-w-2xl list-disc space-y-2 pl-5 font-light leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
                        {data.description.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>

                    {/* Tech Chips */}
                    <div className="mt-6 flex flex-wrap gap-2 cursor-default">
                        {
                            data.tech.map((t, i) => (
                                <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-zinc-400 hover:text-white">
                                    {t}
                                </span>
                            )
                            )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ---------------------------------- */
/* Timeline Section                    */
/* ---------------------------------- */

export default function Timeline() {
    return (
        <section className="bg-black px-6 py-32">
            <div className="mx-auto max-w-5xl">
                <div className="mb-16 flex items-center gap-4">
                    <div className="h-px w-12 bg-zinc-700" />
                    <span className="font-mono text-sm uppercase tracking-widest text-zinc-500">
                        Changelog / Experience
                    </span>
                </div>

                <div className="relative">
                    <GlowingSeparator />
                    {experiences.map((exp, index) => (
                        <div key={exp.id}>
                            <TimelineItem data={exp} index={index} />
                            <GlowingSeparator />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
