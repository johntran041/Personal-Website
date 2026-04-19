"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactItems = [
  {
    label: "Email",
    value: "tranhoangphuc0401@gmail.com",
    href: "mailto:tranhoangphuc0401@gmail.com",
  },
  {
    label: "Phone",
    value: "+84 908 588 588",
    href: "tel:+84908588588",
  },
  {
    label: "Location",
    value: "District 10, Ho Chi Minh City, Vietnam",
    href: null,
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

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[var(--surface)]" style={{ scrollMarginTop: "72px" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-manrope font-extrabold text-[clamp(24px,4vw,36px)] text-text-primary mb-2">
            Let&apos;s build something.
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="font-inter text-sm text-text-muted mb-10">
            Open to internships, collaborations, and interesting projects.
          </p>
        </FadeIn>

        <div className="flex flex-col">
          {contactItems.map((item, i) => (
            <FadeIn key={item.label} delay={0.08 + i * 0.05}>
              <div className="grid grid-cols-[100px_1fr] gap-8 py-5 border-t border-border">
                <span className="font-inter text-xs uppercase tracking-widest text-text-muted self-center">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-inter text-sm text-text-primary hover:text-accent transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="font-inter text-sm text-text-primary">
                    {item.value}
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
