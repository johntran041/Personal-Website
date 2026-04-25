import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "PRISM",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "Gemini"],
    description:
      "AI-powered documentation assistant with semantic search, auto-generated docs, and intelligent context retrieval for engineering teams.",
    link: "https://prism-pm.vercel.app/",
    linkLabel: "View live",
    image: "/images/projects/prism.png",
    status: null,
  },
  {
    title: "LevelUp",
    tags: ["Node.js", "MongoDB", "Socket.IO", "Stripe"],
    description:
      "Virtual learning platform with real-time collaboration, video sessions, and Stripe-powered subscription management for educators.",
    link: "https://group-project-cosc3060-2025a-bug-hunters.onrender.com/",
    linkLabel: "View live",
    image: "/images/projects/levelup.png",
    status: null,
  },
  {
    title: "CDSS (Clinical Decision Support System)",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Gemini"],
    description:
      "AI-enabled Clinical Decision Support System for hypertension management, built in collaboration with AstraZeneca.",
    link: null,
    linkLabel: null,
    image: "/images/projects/cdss.png",
    status: "In Progress",
  },
];

export default projects;
