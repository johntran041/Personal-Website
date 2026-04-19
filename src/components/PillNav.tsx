"use client";

import { useRef, useState, useEffect } from "react";

interface PillNavProps {
  items: { label: string; href: string }[];
  dark?: boolean;
}

export default function PillNav({ items, dark = false }: PillNavProps) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [mounted, setMounted] = useState(false);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMounted(true);
      });
    });
  }, []);

  // Pill tracks hovered item, falls back to active
  const pillTarget = hovered !== null ? hovered : active;

  useEffect(() => {
    if (!mounted) return;
    requestAnimationFrame(() => {
      const el = itemRefs.current[pillTarget];
      if (el) {
        setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
      }
    });
  }, [pillTarget, mounted]);

  const handleClick = (href: string, idx: number) => {
    setActive(idx);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const base = dark ? "#0f0f0f" : "#ffffff";
  const pill = dark ? "#ffffff" : "#000000";
  const textDefault = dark ? "#ffffff" : "#000000";
  const textActive = dark ? "#000000" : "#ffffff";

  return (
    <nav
      className="relative inline-flex items-center rounded-full p-1 gap-0.5"
      style={{
        backgroundColor: base,
        border: `1px solid ${dark ? "#2a2a2a" : "#e0e0de"}`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
      onMouseLeave={() => setHovered(null)}
    >
      {mounted && (
        <span
          className="absolute top-1 bottom-1 rounded-full transition-all duration-200 ease-out"
          style={{
            left: pillStyle.left,
            width: pillStyle.width,
            backgroundColor: pill,
          }}
        />
      )}

      {items.map((item, idx) => (
        <button
          key={item.href}
          ref={(el) => { itemRefs.current[idx] = el; }}
          onClick={() => handleClick(item.href, idx)}
          onMouseEnter={() => setHovered(idx)}
          className="relative z-10 px-4 py-1.5 text-xs font-medium rounded-full font-inter transition-colors duration-200"
          style={{ color: pillTarget === idx ? textActive : textDefault }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
