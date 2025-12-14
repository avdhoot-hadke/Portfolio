"use client";

import { useRef, useState } from "react";

export default function GlowingSeparator() {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="relative my-0 h-[1px] w-full overflow-visible bg-zinc-900"
        >
            {/* Primary Glow */}
            <div
                className="pointer-events-none absolute -top-[1px] left-0 h-[3px] w-[500px] blur-[1px] transition-opacity duration-300"
                style={{
                    opacity,
                    transform: `translateX(${position.x - 250}px)`,
                    background:
                        "radial-gradient(closest-side, rgba(255,255,255,1), transparent)",
                }}
            />

            {/* Secondary Soft Highlight */}
            <div
                className="pointer-events-none absolute top-0 left-0 h-full w-[300px] transition-opacity duration-300"
                style={{
                    opacity,
                    transform: `translateX(${position.x - 150}px)`,
                    background:
                        "linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",
                }}
            />
        </div>
    );
}
