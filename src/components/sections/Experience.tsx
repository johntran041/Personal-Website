"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    company: "HOPEE",
    role: "Frontend Development Intern",
    period: "Oct 2025 – Jan 2026",
    bullets: [
      "Built UI components for Irohana Match, a live candidate management platform",
      "Worked within enterprise-level codebase using Agile workflows",
      "Delivered production-ready features for internal recruitment tooling",
    ],
  },
  {
    company: "Enactus RMIT Vietnam",
    role: "External Relations Coordinator",
    period: "Oct 2022 – Mar 2024",
    bullets: [
      "Led sponsorship outreach and secured full event funding",
      "Coordinated partnerships across multiple social entrepreneurship projects",
    ],
  },
  {
    company: "RMIT Vietnam FinTech Club",
    role: "HR Member",
    period: "Mar 2025 – Present",
    bullets: [
      "Co-produced the Fintechtainment podcast series",
      "Hosted internal events for club members",
    ],
  },
];

const education = {
  school: "RMIT Vietnam",
  degree: "Bachelor of Information Technology",
  period: "June 2024 – Present",
};

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

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6" style={{ scrollMarginTop: "72px" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-manrope font-extrabold text-[clamp(24px,4vw,36px)] text-text-primary mb-10">
            Experience
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {jobs.map((job, i) => (
            <FadeIn key={job.company} delay={i * 0.06}>
              <div className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-12 py-6 border-t border-border">
                <div className="flex flex-col gap-0.5">
                  <span className="font-inter text-sm font-medium text-text-primary">
                    {job.company}
                  </span>
                  <span className="font-inter text-xs text-text-muted">
                    {job.period}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-inter text-sm font-medium text-text-primary">
                    {job.role}
                  </span>
                  <ul className="flex flex-col gap-1">
                    {job.bullets.map((b) => (
                      <li key={b} className="font-inter text-sm text-text-muted flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-text-muted flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Education */}
          <FadeIn delay={0.18}>
            <div className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-12 py-6 border-t border-border">
              <div className="flex flex-col gap-0.5">
                <span className="font-inter text-xs uppercase tracking-widest text-text-muted">
                  Education
                </span>
                <span className="font-inter text-xs text-text-muted mt-1">
                  {education.period}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-inter text-sm font-medium text-text-primary">
                  {education.school}
                </span>
                <span className="font-inter text-sm text-text-muted">
                  {education.degree}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
