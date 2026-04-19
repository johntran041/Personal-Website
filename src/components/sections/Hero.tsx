"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center text-center px-6"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.p
          className="font-inter text-xs uppercase tracking-widest text-text-muted"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Full-Stack Developer · Ho Chi Minh City
        </motion.p>

        <motion.h1
          className="font-manrope font-extrabold leading-[1.05] text-text-primary"
          style={{ fontSize: "clamp(40px, 8vw, 80px)" }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          Tran Phan Hoang Phuc
          <br />
          <em className="not-italic" style={{ color: "var(--accent)" }}>
            (John)
          </em>
        </motion.h1>

        <motion.p
          className="font-inter text-sm text-text-muted max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          Building full-stack systems and interfaces with a focus on clarity and
          performance.
        </motion.p>

        <motion.a
          href="#about"
          className="mt-2 font-inter text-sm font-medium text-white px-5 py-2.5 rounded-full"
          style={{ background: "var(--accent)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore
        </motion.a>
      </div>
    </section>
  );
}
