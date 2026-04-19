"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "PostgreSQL", "AWS", "Docker", "Figma", "Google Gemini AI",
];

const achievements = [
  "RMIT Neo League 2025 — Top 16 Finalist",
  "RMIT Game Jam 2025 — Best of Theme",
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

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[var(--surface)]" style={{ scrollMarginTop: "72px" }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_320px] gap-12 md:gap-16">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <FadeIn>
            <h2 className="font-manrope font-extrabold text-[clamp(24px,4vw,36px)] text-text-primary">
              About
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="font-inter text-sm leading-relaxed text-text-muted max-w-lg">
              Final-year Bachelor of IT student at RMIT Vietnam. Project Manager
              and frontend developer with a focus on building clean, purposeful
              digital products. Experienced in full-stack systems, AI tooling,
              and collaborative product delivery.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <p className="font-inter text-xs uppercase tracking-widest text-text-muted mb-3">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="font-inter text-xs px-2.5 py-1 rounded-full border border-border text-text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8">
          <FadeIn delay={0.08}>
            <div>
              <p className="font-inter text-xs uppercase tracking-widest text-text-muted mb-3">
                Achievements
              </p>
              <ul className="flex flex-col gap-2">
                {achievements.map((a) => (
                  <li key={a} className="font-inter text-sm text-text-primary flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div>
              <p className="font-inter text-xs uppercase tracking-widest text-text-muted mb-3">
                Languages
              </p>
              <ul className="flex flex-col gap-1.5">
                <li className="font-inter text-sm text-text-primary flex justify-between">
                  <span>Vietnamese</span>
                  <span className="text-text-muted">Native</span>
                </li>
                <li className="font-inter text-sm text-text-primary flex justify-between">
                  <span>English</span>
                  <span className="text-text-muted">Proficient · IELTS 7.5</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
