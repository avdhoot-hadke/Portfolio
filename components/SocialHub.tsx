"use client";

import { useRef, useState } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import {
    Github,
    Linkedin,
    Code,
    ExternalLink,
    Twitter,
} from "lucide-react";
import { socialLinks } from "@/data/social";
import { SocialLink, TiltCardProps } from "@/types";

/* ---------------------------------- */
/* Icon Map                            */
/* ---------------------------------- */

const iconMap: Record<SocialLink["icon"], React.ElementType> = {
    github: Github,
    leetcode: Code,
    linkedin: Linkedin,
    twitter: Twitter,
};

function TiltCard({ link, index }: TiltCardProps) {
    const ref = useRef<HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(
        ySpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
        xSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    );

    const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const Icon = iconMap[link.icon];

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);

        setSpotlight({ x: mouseX, y: mouseY });
    };

    return (
        <motion.a
            ref={ref}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
                setOpacity(0);
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative block h-64 rounded-xl bg-zinc-900"
        >
            {/* Spotlight Border */}
            <div
                className="absolute -inset-[1px] rounded-xl transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(
            600px circle at ${spotlight.x}px ${spotlight.y}px,
            rgba(255,255,255,0.3),
            transparent 40%
          )`,
                    transform: "translateZ(-1px)",
                }}
            />

            {/* Inner Wrapper */}
            <div
                className="relative h-[calc(100%-2px)] w-[calc(100%-2px)] m-[1px] rounded-[11px]"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Background */}
                <div
                    className={`absolute inset-0 rounded-[11px] bg-black overflow-hidden ${link.color}`}
                >
                    <div
                        className="pointer-events-none absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20"
                        style={{
                            backgroundImage:
                                "radial-gradient(#fff 1px, transparent 1px)",
                            backgroundSize: "16px 16px",
                        }}
                    />
                </div>

                {/* Content */}
                <div
                    className="relative flex h-full flex-col justify-between p-8"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Icon Row */}
                    <div
                        style={{ transform: "translateZ(30px)" }}
                    >
                        <div className="mb-4 flex items-start justify-between">
                            <div className="rounded-lg bg-zinc-800 p-3 text-white shadow-lg transition-colors group-hover:bg-white group-hover:text-black">
                                <Icon size={24} />
                            </div>
                            <ExternalLink
                                size={16}
                                className="text-zinc-600 transition-colors group-hover:text-white"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div
                        style={{ transform: "translateZ(20px)" }}
                    >
                        <h3 className="mb-1 text-2xl font-bold text-white">
                            {link.name}
                        </h3>
                        <p className="mb-4 font-mono text-xs text-zinc-500">
                            {link.username}
                        </p>
                        <span className="inline-block rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-zinc-300">
                            {link.stats}
                        </span>
                    </div>
                </div>
            </div>
        </motion.a>
    );
}


export default function SocialHub() {
    return (
        <section className="bg-black px-6 py-32">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 flex items-center gap-4">
                    <div className="h-px w-12 bg-zinc-700" />
                    <span className="font-mono text-sm uppercase tracking-widest text-zinc-500">
                        Neural Link / Network
                    </span>
                </div>

                {/* Grid */}
                <div
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                    style={{ perspective: "1000px" }}
                >
                    {socialLinks.map((link, idx) => (
                        <TiltCard key={link.id} link={link} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
