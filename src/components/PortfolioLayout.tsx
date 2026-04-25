"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";

const NAV_ITEMS = [
  { id: "hero",       num: "01", label: "About",      short: "About" },
  { id: "experience", num: "02", label: "Experience",  short: "Exp"   },
  { id: "projects",   num: "03", label: "Projects",    short: "Work"  },
  { id: "skills",     num: "04", label: "Skills",      short: "Skills"},
  { id: "awards",     num: "05", label: "Awards",      short: "Awards"},
  { id: "contact",    num: "06", label: "Contact",     short: "Hi"    },
];

const SUN_SVG = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MOON_SVG = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export default function PortfolioLayout() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("jphuc-dark");
    setDark(stored !== "false");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try { localStorage.setItem("jphuc-dark", String(dark)); } catch {}
  }, [dark, mounted]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: content, rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            animObserver.unobserve(entry.target);
          }
        });
      },
      { root: content, rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });
    content.querySelectorAll(".anim").forEach((el) => animObserver.observe(el));

    return () => { navObserver.disconnect(); animObserver.disconnect(); };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const content = contentRef.current;
    const el = document.getElementById(id);
    if (content && el) content.scrollTop = el.offsetTop;
    setMobileMenuOpen(false);
  }, []);

  const Sidebar = () => (
    <>
      <div className="sidebar-logo">
        John<br />Tran
        <span>Full-Stack Developer</span>
      </div>
      <div className="sidebar-accent-line" />
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(({ id, num, label }) => (
          <button
            key={id}
            className={`nav-item${activeSection === id ? " active" : ""}`}
            onClick={() => scrollToSection(id)}
          >
            <span className="nav-num">{num}</span>
            {label}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-socials">
          <a className="icon-link" href="https://github.com/JohnTranQUT" target="_blank" rel="noopener" title="GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a className="icon-link" href="https://linkedin.com/in/" target="_blank" rel="noopener" title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a className="icon-link" href="mailto:tranhoangphuc0401@gmail.com" title="Email">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
        <button className="theme-btn" onClick={() => setDark((d) => !d)}>
          {mounted ? (dark ? SUN_SVG : MOON_SVG) : SUN_SVG}
          <span>{mounted ? (dark ? "Light mode" : "Dark mode") : "Dark mode"}</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="layout">
      {/* ── Desktop sidebar ── */}
      <aside className="sidebar">
        <Sidebar />
      </aside>

      {/* ── Mobile top bar ── */}
      <header className="mobile-topbar">
        <div className="sidebar-logo" style={{ marginBottom: 0 }}>
          Tran Phan Hoang Phuc
          <span style={{ display: "inline", marginLeft: 6, fontSize: 9 }}>· Full-Stack Dev</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button className="mobile-icon-btn" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
            {mounted ? (dark ? SUN_SVG : MOON_SVG) : SUN_SVG}
          </button>
          <button
            className="mobile-icon-btn"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <aside className="sidebar mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
            <Sidebar />
          </aside>
        </div>
      )}

      {/* ── Scrollable content ── */}
      <main className="content" ref={contentRef} id="mainContent">
        <Hero onViewProjects={() => scrollToSection("projects")} />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </main>

      {/* ── Mobile bottom nav ── */}
      <nav className="mobile-bottomnav">
        {NAV_ITEMS.map(({ id, num, short }) => (
          <button
            key={id}
            className={`mobile-nav-item${activeSection === id ? " active" : ""}`}
            onClick={() => scrollToSection(id)}
          >
            <span className="mobile-nav-num">{num}</span>
            <span className="mobile-nav-label">{short}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
