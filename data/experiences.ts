import { Experience } from "@/types";

export const experiences: Experience[] = [
    {
        id: "1",
        role: "Full Stack Developer",
        company: "WeAssemble",
        period: "2024-2025",
        description: [
            "Implemented a caching layer using Factory Design Pattern in the hotel search microservice, cutting external API calls by 50% and reducing response latency",
            "Developed a Booking Service integrated with Stripe Webhooks, designing scalable data schemas for reservations and user management, and added support for 2 external booking provider APIs",
            "Co-engineered a Centralized Authentication and Authorization Agency Service, reusing security modules across microservices and ensuring consistent access control and secure authentication for 10+ services",
            "Built responsive Agency UI components in Next.js (ReactJS) and integrated them with backend services to enable custom API provider selection and efficient booking data management",
            "Led the migration to a new third-party hotel search API provider, ensuring 0 downtime and seamless data flow during rollout"
        ],
        tech: ["Microservices", "NestJS (Node.js)", "Next.js (React.js)", "MongoDB", "Docker", "RESTful APIs", "Git", "RabbitMQ"]
    },

];