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