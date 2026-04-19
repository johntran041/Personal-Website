"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AstraZeneca CDSS",
    subtitle: "Clinical Decision Support System",
    description:
      "Leading frontend development and project management for an AI-enabled Clinical Decision Support System for hypertension management, built in collaboration with AstraZeneca Vietnam. The system uses a rule-based engine, FHIR R4 normalization, CDS Hooks interface, and Google Gemini for plain-text clinical explanations.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Gemini", "FHIR R4"],
    link: null,
  },
  {
    title: "PRISM",
    subtitle: "AI-Powered Project Documentation Assistant",
    description:
      "Led frontend development and PM for a full-stack AI tool that generates structured project documentation from a single form input. Built with Next.js, TypeScript, PostgreSQL, Prisma, and Google Gemini.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini"],
    link: "https://prism-pm.vercel.app/",
  },
  {
    title: "LevelUp",
    subtitle: "Virtual Learning Platform",
    description:
      "Full-stack LMS with role-based access, real-time messaging via Socket.IO, dual payment system (Stripe + Coin logic), and admin dashboard. Built with Node.js, Express.js, MongoDB Atlas, and EJS.",
    tags: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "Stripe"],
    link: "https://group-project-cosc3060-2025a-bug-hunters.onrender.com/",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[var(--surface)]"
      style={{ scrollMarginTop: "72px" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-manrope font-extrabold text-[clamp(24px,4vw,36px)] text-text-primary mb-10">
            Projects
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.07}>
              <div className="rounded-xl border border-border p-6 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="font-manrope font-bold text-lg text-text-primary">
                      {project.title}
                      <span className="font-inter font-normal text-sm text-text-muted ml-2">
                        — {project.subtitle}
                      </span>
                    </h3>
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 font-inter text-xs font-medium text-white px-4 py-2 rounded-full transition-opacity duration-200 hover:opacity-80"
                      style={{ background: "var(--accent)" }}
                    >
                      Live Demo
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    <span className="shrink-0 font-inter text-xs font-medium px-4 py-2 rounded-full border border-border text-text-muted">
                      In Development
                    </span>
                  )}
                </div>

                <p className="font-inter text-sm text-text-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-inter text-[11px] px-2.5 py-1 rounded-full border border-border text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
