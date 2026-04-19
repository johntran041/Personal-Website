import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "PRISM",
    tags: ["AI", "Full-Stack", "Next.js"],
    description:
      "AI-powered project documentation tool. Generates structured docs from a single form — with streaming AI, a commit-style diff flow, and pgvector semantic search.",
    link: "https://prism-pm.vercel.app/",
    linkLabel: "Live Demo",
    image: "/images/projects/prism.png",
  },
  {
    title: "LevelUp",
    tags: ["Full-Stack", "Node.js", "MongoDB"],
    description:
      "Learning management system with real-time messaging, role-based access, and a dual payment system using Stripe and custom Coin logic.",
    link: "https://group-project-cosc3060-2025a-bug-hunters.onrender.com/",
    linkLabel: "Live Demo",
    image: "/images/projects/levelup.png",
  },
  {
    title: "Irohana Match",
    tags: ["Frontend", "Internship"],
    description:
      "Candidate management app built at HOPEE, a Japanese outsourcing firm. Developed production UI components for a live internal recruitment platform.",
    link: null,
    linkLabel: null,
    image: "/images/projects/irohana.png",
  },
];

export default projects;
