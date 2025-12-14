import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
    {
        id: "languages",
        title: "Programming Languages",
        icon: "languages",
        skills: ["Java", "TypeScript", "JavaScript", "SQL"],
    },
    {
        id: "frontend",
        title: "Frontend",
        icon: "frontend",
        skills: ["Next.js", "React", "HTML", "CSS", "Tailwind", "JWT", "OAuth"],
    },
    {
        id: "backend",
        title: "Backend",
        icon: "backend",
        skills: [
            "Spring Boot",
            "NestJS",
            "Express",
            "Node.js",
            "Cloudflare Workers",
            "Hono",
            "Redis",
            "RabbitMQ",
        ],
    },
    {
        id: "database",
        title: "Databases",
        icon: "database",
        skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
        id: "devops",
        title: "DevOps & Tools",
        icon: "devops",
        skills: ["Docker", "Git", "Maven", "AWS", "CI/CD", "Prisma ORM"],
    },
    {
        id: "concepts",
        title: "Concepts",
        icon: "concepts",
        skills: [
            "DSA (LeetCode 1700+)",
            "Object-Oriented Programming",
            "Microservices",
            "System Design",
        ],
    },
];
