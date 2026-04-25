"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const CARDS = [
  { color: "card-violet", img: "/photo1.jpg", title: "📍 Washington, D.C." },
  { color: "card-teal", img: "/photo2.jpg", title: "📍 Hong Kong, CN" },
  {
    color: "card-rose",
    img: "/photo3.jpg",
    title: "🍽️ Fav Food",
    badge: "Bun Dau Mam Tom",
  },
  { color: "card-amber", img: "/photo4.jpg", title: "📍 HCM City, VN" },
  { color: "card-slate", img: "/photo5.jpg", title: "🧩 My small collection" },
  { color: "card-pine", img: "/photo6.jpg",  title: "🦝 My Spirit Animal" },
];

const TOTAL = CARDS.length;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [exitingIdx, setExitingIdx] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setExitingIdx(current);
      setTimeout(() => {
        setCurrent(next);
        setExitingIdx(null);
        setAnimating(false);
      }, 350);
    },
    [animating, current]
  );

  const advance = useCallback(() => {
    goTo((current + 1) % TOTAL);
  }, [goTo, current]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % TOTAL;
        setExitingIdx(c);
        setAnimating(true);
        setTimeout(() => {
          setExitingIdx(null);
          setAnimating(false);
        }, 350);
        return next;
      });
    }, 3200);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const getPos = (idx: number): string => {
    if (idx === exitingIdx) return "exit";
    const pos = (idx - current + TOTAL) % TOTAL;
    return String(Math.min(pos, TOTAL - 1));
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-stack">
        {CARDS.map((card, idx) => (
          <div
            key={idx}
            className={`c-card ${card.color}`}
            data-pos={getPos(idx)}
            onClick={() => {
              if (getPos(idx) === "0") {
                advance();
                resetTimer();
              }
            }}
          >
            <div className="c-card-inner">
              <img
                src={card.img}
                alt=""
                className="c-card-photo"
                style={{ objectFit: "cover", borderRadius: 15 }}
              />
              <div className="c-card-bubbles">
                <span className="c-card-title-bubble">{card.title}</span>
                {card.badge && (
                  <span className="c-card-badge">{card.badge}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {CARDS.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? " active" : ""}`}
            onClick={() => {
              goTo(i);
              resetTimer();
            }}
          />
        ))}
      </div>
    </div>
  );
}
