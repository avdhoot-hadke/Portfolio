"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Section } from "@/types";

interface NavigationProps {
    activeSection: Section;
    scrollToSection: (section: Section) => void;
}

const navItems = [
    { id: Section.WORK, label: "Work" },
    { id: Section.SKILLS, label: "Skills" },
    { id: Section.PROJECTS, label: "Projects" },
    // { id: Section.AI, label: "AI" },
];

export default function Navigation({
    activeSection,
    scrollToSection,
}: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setIsScrolled((prev) => (y > 50 ? true : y < 30 ? false : prev));
        };

        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* OUTER WRAPPER (never animates width) */}
            <div className="fixed inset-x-0 top-0 z-[100] flex justify-center pointer-events-none">
                {/* INNER NAV (animates smoothly) */}
                <nav
                    className={`
            pointer-events-auto
            flex items-center
            backdrop-blur-xl
            shadow-2xl shadow-black/50
            border border-white/10
            w-full
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            
            ${isScrolled
                            ? "mt-6 max-w-md rounded-4xl bg-zinc-900/80 px-3 py-2"
                            : "mt-0 max-w-full rounded-none bg-transparent px-8 py-6 border-b"
                        }
          `}
                >
                    {/* LOGO */}
                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={() => scrollToSection(Section.HERO)}
                            className="h-8 w-8 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center hover:scale-105 transition"
                        >
                            AH
                        </button>

                        <div
                            className={`
                h-4 bg-white/10 transition-all duration-500
                ${isScrolled ? "w-px mx-2 opacity-100" : "w-0 opacity-0"}
              `}
                        />
                    </div>

                    {/* LEFT FLEX */}
                    <div className="flex-1" />

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`
                  px-4 py-1.5 rounded-full text-xs transition-colors duration-200
                  ${activeSection === item.id
                                        ? "bg-zinc-800 text-white"
                                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                                    }
                `}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT FLEX */}
                    <div className="flex-1" />

                    {/* ACTIONS */}
                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={() => scrollToSection(Section.CONTACT)}
                            className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full text-xs bg-white/5 hover:bg-white/10 border border-white/5 transition"
                        >
                            Connect <ArrowRight size={12} />
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="md:hidden p-2 text-zinc-400 hover:text-white transition"
                        >
                            <Menu size={18} />
                        </button>
                    </div>
                </nav>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[110] bg-zinc-950/95 backdrop-blur-xl flex flex-col p-6 animate-fade-in">
                    <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                        <span className="font-mono text-sm uppercase tracking-widest text-zinc-400">
                            Navigation
                        </span>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        {[...navItems, { id: Section.CONTACT, label: "Contact" }].map(
                            (item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    className="text-5xl font-bold text-left text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 hover:to-white transition"
                                >
                                    {item.label}
                                </button>
                            )
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
