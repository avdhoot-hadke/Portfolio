"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ---------------------------------- */
/* Types                               */
/* ---------------------------------- */

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    featured?: boolean;
}

/* ---------------------------------- */
/* Data                                */
/* ---------------------------------- */

const projects: Project[] = [
    {
        id: "1",
        title: "Neon Commerce",
        description:
            "A headless e-commerce platform built with Next.js 14 and Shopify API. Features 3D product previews.",
        tags: ["Next.js", "WebGL", "Shopify"],
        image: "https://picsum.photos/800/600?random=1",
        featured: true,
    },
    {
        id: "2",
        title: "Agent Zero",
        description: "Autonomous AI agent dashboard for managing complex workflows.",
        tags: ["React", "Gemini API", "Node"],
        image: "https://picsum.photos/600/600?random=2",
    },
    {
        id: "3",
        title: "Lumina UI",
        description:
            "An open-source React component library for dark mode interfaces.",
        tags: ["TypeScript", "Tailwind", "NPM"],
        image: "https://picsum.photos/600/400?random=3",
    },
    {
        id: "4",
        title: "Crypto Pulse",
        description:
            "Real-time cryptocurrency analytics dashboard with WebSocket integration.",
        tags: ["WebSockets", "D3.js", "FinTech"],
        image: "https://picsum.photos/600/600?random=4",
    },
];

/* ---------------------------------- */
/* Spotlight Card                      */
/* ---------------------------------- */

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
}

function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative rounded-2xl bg-zinc-900 overflow-hidden ${className}`}
        >
            {/* Outer Glow Border */}
            <div
                className="absolute -inset-[1px] rounded-2xl transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(
            800px circle at ${position.x}px ${position.y}px,
            rgba(255,255,255,0.3),
            transparent 40%
          )`,
                }}
            />

            {/* Inner Container */}
            <div className="relative h-[calc(100%-2px)] w-[calc(100%-2px)] bg-black rounded-[15px] m-[1px] overflow-hidden">
                {/* Subtle Inner Glow */}
                <div
                    className="pointer-events-none absolute -inset-px transition duration-300 z-10"
                    style={{
                        opacity,
                        background: `radial-gradient(
              600px circle at ${position.x}px ${position.y}px,
              rgba(255,255,255,0.05),
              transparent 40%
            )`,
                    }}
                />
                {children}
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* Bento Grid                          */
/* ---------------------------------- */

export default function BentoGrid() {
    return (
        <section className="relative bg-black px-6 py-32">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-12 bg-zinc-700" />
                    <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
                        Builds & Deployments
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Selected Projects
                </h2>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className={
                            project.featured
                                ? "md:col-span-2 md:row-span-2"
                                : "md:col-span-1 md:row-span-1"
                        }
                    >
                        <SpotlightCard className="h-full group">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority={idx === 0}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 h-full flex flex-col justify-end p-8">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {/* Tags */}
                                    <div className="flex gap-2 mb-3 flex-wrap">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-mono px-2 py-1 border border-white/10 rounded-sm text-zinc-300 bg-black/80 uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <div className="flex items-center justify-between">
                                        <h3
                                            className={`font-bold text-white tracking-tight ${project.featured ? "text-5xl" : "text-3xl"
                                                }`}
                                        >
                                            {project.title}
                                        </h3>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-2 rounded-full">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p
                                        className={`text-zinc-400 mt-2 ${project.featured
                                            ? "max-w-md text-lg"
                                            : "text-sm line-clamp-2"
                                            }`}
                                    >
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
