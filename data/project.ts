import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Citadel Bank App",
        description:
            "Built a high-concurrency transaction engine with real-time fraud detection and pessimistic locking to ensure ACID compliance, eliminating race conditions and validating 120+ RPS throughput under Apache Benchmark load testing",
        tags: ["Next.js", "Spring Boot", "PostgreSql"],
        image: "/images/projects/citadel.png",
        featured: true,
    },
    {
        id: "2",
        title: "Netflix UI Clone",
        description: "Engineered a dynamic Netflix UI clone and integrated the TMDB API for real-time content fetching, which created a seamless, interactive user interface.",
        tags: ["ReactJS", "Express.js", "MongoDB"],
        image: "/images/projects/netflix.png",
    },
    {
        id: "3",
        title: "Blogify",
        description:
            "Delivered a MERN-based blogging platform scaled to 1,000+ concurrent users, integrating secure auth, seamless blog creation/editing, and customizable profiles to drive higher user engagement and interaction",
        tags: ["TypeScript", "Tailwind", "NPM"],
        image: "/images/projects/blogify.png",
    }
];

