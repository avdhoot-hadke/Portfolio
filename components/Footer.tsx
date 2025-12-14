"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-black py-24">
            {/* Background Graphic */}
            <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-blue-900/20 to-transparent blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Top Section */}
                <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2">
                    {/* Left */}
                    <div>
                        <h3 className="mb-8 text-6xl font-black leading-[0.9] tracking-tighter text-white md:text-8xl">
                            LET&apos;S <br />
                            BUILD.
                        </h3>
                        <p className="max-w-md text-lg text-zinc-500">
                            Available for freelance opportunities and full-time roles.
                            Specialized in high-performance web applications.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-start justify-end gap-6 md:items-end">
                        <a
                            href="#"
                            className="group flex items-center gap-4 text-2xl text-white transition-colors hover:text-zinc-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>GitHub</span>
                            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>

                        <a
                            href="#"
                            className="group flex items-center gap-4 text-2xl text-white transition-colors hover:text-zinc-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>LinkedIn</span>
                            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>

                        <a
                            href="mailto:hello@example.com"
                            className="group flex items-center gap-4 text-2xl text-white transition-colors hover:text-zinc-400"
                        >
                            <span>Email</span>
                            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col items-end justify-between border-t border-white/10 pt-8 md:flex-row">
                    <div className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-600 md:mb-0">
                        © 2025 Dev Editions. All rights reserved.
                    </div>

                    <div className="pointer-events-none select-none text-[10rem] font-black leading-[0.8] tracking-tighter text-zinc-800 opacity-20">
                        DEV
                    </div>
                </div>
            </div>
        </footer>
    );
}
