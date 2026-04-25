import type { Experience } from "@/types";

const experience: Experience[] = [
  {
    company: "HOPEE",
    period: "Oct 2025 – Jan 2026",
    role: "Frontend Development Intern",
    summary:
      "Developed UI components for Irohana Match, a live candidate management platform, within an enterprise-level codebase.",
    bullets: [
      "Built and maintained enterprise-scale React component library for Irohana Match product line",
      "Led frontend architecture decisions; established shared design tokens and component standards",
      "Participated in Agile sprints, daily standups, and cross-functional design reviews",
      "Reduced component duplication by ~40% through systematic refactoring and documentation",
    ],
    tags: ["React", "TypeScript", "Design Systems", "Agile", "Storybook"],
  },
  {
    company: "AstraZeneca Vietnam (Capstone)",
    period: "2026",
    role: "Project Manager & Frontend Lead",
    summary:
      "Leading a five-person team building an AI-enabled Clinical Decision Support System for hypertension management.",
    bullets: [
      "Leading a cross-functional five-person team through full-stack development lifecycle",
      "Architecting the frontend with Next.js and integrating Gemini AI for clinical recommendations",
      "Coordinating directly with AstraZeneca stakeholders on requirements and delivery milestones",
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Gemini", "Team Leadership"],
  },
  {
    company: "Enactus RMIT Vietnam",
    period: "Oct 2022 – Mar 2024",
    role: "External Relations Coordinator",
    summary:
      "Led sponsorship outreach and secured full event funding across multiple social entrepreneurship projects.",
    bullets: [
      "Led sponsorship outreach and secured full event funding across multiple social entrepreneurship projects",
      "Built and maintained relationships with corporate partners and NGOs",
    ],
    tags: ["Stakeholder Management", "Partnerships"],
  },
  {
    company: "RMIT FinTech Club",
    period: "Mar 2025 – Present",
    role: "HR Member",
    summary:
      "Co-produced the Fintechtainment podcast series and hosted internal events for club members.",
    bullets: [
      "Co-produced the Fintechtainment podcast series on financial technology trends",
      "Organised and hosted internal events for 100+ club members",
    ],
    tags: ["Content Creation", "Community"],
  },
];

export default experience;
