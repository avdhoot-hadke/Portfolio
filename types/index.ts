import { ReactNode } from "react";

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
    featured?: boolean;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string[];
    tech: string[]
}
export interface SkillCategory {
    id: string;
    title: string;
    icon: "languages" | "frontend" | "backend" | "database" | "devops" | "concepts";
    skills: string[];
}

export interface SkillCardProps {
    category: SkillCategory;
    index: number;
}
export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    featured?: boolean;
}
export interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
}

export enum Section {
    HERO = 'hero',
    WORK = 'work',
    SKILLS = 'skills',
    PROJECTS = 'projects',
    AI = 'ai',
    CONTACT = 'contact'
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
    timestamp: Date;
}