"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    Cpu,
    Globe,
    Database,
    BrainCircuit,
    Terminal,
    Layout,
} from "lucide-react";
import { SkillCardProps } from "@/types";
import { skillCategories } from "@/data/skills";

const iconMap = {
    languages: Cpu,
    frontend: Layout,
    backend: Globe,
    database: Database,
    devops: Terminal,
    concepts: BrainCircuit,
} as const;

/* ---------------------------------- */
/* Skill Card                          */
/* ---------------------------------- */

function SkillCard({ category, index }: SkillCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const Icon = iconMap[category.icon];


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
        >
            <div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setOpacity(1)}
                onMouseLeave={() => setOpacity(0)}
                className="group relative h-full overflow-hidden rounded-xl bg-zinc-900/50"
            >
                {/* Spotlight Border */}
                <div
                    className="absolute -inset-[1px] rounded-xl transition duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(
              600px circle at ${position.x}px ${position.y}px,
              rgba(255,255,255,0.25),
              transparent 40%
            )`,
                    }}
                />

                {/* Content */}
                <div className="relative h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[11px] bg-black m-[1px] p-6 backdrop-blur-sm">
                    <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-8 flex items-center justify-between text-zinc-400 transition-colors group-hover:text-white">
                            <div className="rounded-lg border border-white/5 bg-zinc-900 p-2">
                                <Icon className="h-4 w-4" />
                            </div>
                            <span className="font-mono text-[10px] uppercase opacity-50">
                                0{index + 1}
                            </span>
                        </div>

                        <h3 className="mb-6 text-lg font-bold tracking-tight text-white">
                            {category.title}
                        </h3>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="cursor-default rounded-sm border border-white/5 bg-zinc-900/50 px-3 py-1.5 font-mono text-xs text-zinc-500 transition-all hover:border-white/20 hover:text-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ---------------------------------- */
/* Skills Section                      */
/* ---------------------------------- */

export default function Skills() {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-32">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zinc-400">
                            <Cpu size={14} />
                            <span>System Capabilities</span>
                        </div>
                        <h2 className="text-4xl font-black tracking-tighter text-white md:text-6xl">
                            TECHNICAL
                            <br />
                            MATRIX
                        </h2>
                    </div>

                    <p className="max-w-sm font-mono text-sm leading-relaxed text-zinc-500">
                        Optimized for scalability and performance.
                        <br />
                        Current operational status:{" "}
                        <span className="text-emerald-500">PEAK EFFICIENCY</span>.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, idx) => (
                        <SkillCard
                            key={category.id}
                            category={category}
                            index={idx}
                        />
                    ))}
                </div>

                {/* CLI Strip */}
                <div className="mt-4 flex items-center gap-4 rounded-sm border border-white/10 bg-black/80 px-4 py-3 font-mono text-xs text-zinc-600">
                    <Terminal size={12} />
                    <span className="flex-1">
                        root@server:~/skills# <span className="animate-pulse">_</span>
                    </span>
                    <span>RAM: 64GB</span>
                </div>
            </div>
        </section>
    );
}
