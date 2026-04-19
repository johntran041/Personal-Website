"use client";

import { useEffect, useState } from "react";
import PillNav from "@/components/PillNav";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function FixedNav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const check = () =>
      setDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[200]">
      <PillNav items={navItems} dark={dark} />
    </div>
  );
}
