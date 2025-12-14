"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

import Hero from "@/components/Hero";
import GlowingSeparator from "@/components/GlowingSeparator";
import { Section } from "@/types";
import Navigation from "@/components/Navbar";

/* ---------------------------------- */
/* Dynamic Imports (Code Splitting)    */
/* ---------------------------------- */

const BentoGrid = dynamic(() => import("@/components/BentoGrid"));
const Timeline = dynamic(() => import("@/components/Timeline"));
const Skills = dynamic(() => import("@/components/Skills"));
const SocialHub = dynamic(() => import("@/components/SocialHub"));
// const AIChat = dynamic(() => import("@/components/AIChat"));
const Footer = dynamic(() => import("@/components/Footer"));

/* ---------------------------------- */
/* Loading Fallback                    */
/* ---------------------------------- */

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20 text-zinc-800">
      <Loader2 className="h-6 w-6 animate-spin" />
    </div>
  );
}

/* ---------------------------------- */
/* Page                                */
/* ---------------------------------- */

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* HERO (eager for LCP) */}
      <div id={Section.HERO}>
        <Hero scrollToSection={scrollToSection} />
      </div>

      {/* EXPERIENCE */}
      <div id={Section.WORK}>
        <GlowingSeparator />
        <Suspense fallback={<SectionLoader />}>
          <Timeline />
        </Suspense>
      </div>

      {/* SKILLS */}
      <div id={Section.SKILLS}>
        <GlowingSeparator />
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
      </div>

      {/* PROJECTS */}
      <div id={Section.PROJECTS}>
        <GlowingSeparator />
        <Suspense fallback={<SectionLoader />}>
          <BentoGrid />
        </Suspense>
      </div>

      {/* AI */}
      {/* <div id={Section.AI}>
        <GlowingSeparator />
        <Suspense fallback={<SectionLoader />}>
          <AIChat />
        </Suspense>
      </div> */}

      {/* CONTACT */}
      <div id={Section.CONTACT}>
        <GlowingSeparator />
        <Suspense fallback={<SectionLoader />}>
          <SocialHub />
        </Suspense>

        <GlowingSeparator />

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
