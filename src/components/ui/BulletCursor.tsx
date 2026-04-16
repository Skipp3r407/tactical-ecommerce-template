"use client";

import { useEffect, useRef, useState } from "react";

type SmokeParticle = {
  id: number;
  x: number;
  y: number;
  size: number;
  life: number;
  dx: number;
  dy: number;
};

const MAX_PARTICLES = 22;
const SPAWN_INTERVAL_MS = 18;

export function BulletCursor() {
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [particles, setParticles] = useState<SmokeParticle[]>([]);
  const nextId = useRef(0);
  const lastSpawnAt = useRef(0);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const applyMode = () => {
      const enabled = media.matches;
      setActive(enabled);
      document.documentElement.classList.toggle("bullet-cursor-mode", enabled);
      if (!enabled) {
        setCursor((prev) => ({ ...prev, visible: false }));
        setParticles([]);
      }
    };

    applyMode();
    media.addEventListener("change", applyMode);
    return () => {
      media.removeEventListener("change", applyMode);
      document.documentElement.classList.remove("bullet-cursor-mode");
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    const spawnParticle = (x: number, y: number) => {
      const angle = (Math.random() - 0.5) * 0.7;
      const speed = 0.2 + Math.random() * 0.45;
      const particle: SmokeParticle = {
        id: nextId.current++,
        x,
        y,
        size: 7 + Math.random() * 9,
        life: 1,
        dx: Math.sin(angle) * speed,
        dy: -(0.15 + Math.random() * 0.35),
      };
      setParticles((prev) => [...prev.slice(-(MAX_PARTICLES - 1)), particle]);
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const x = event.clientX;
      const y = event.clientY;
      setCursor({ x, y, visible: true });

      const now = performance.now();
      if (now - lastSpawnAt.current >= SPAWN_INTERVAL_MS) {
        spawnParticle(x - 8, y + 2);
        lastSpawnAt.current = now;
      }
    };

    const handleLeave = () => setCursor((prev) => ({ ...prev, visible: false }));
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });

    let animationFrame = 0;
    const animate = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.dx,
            y: particle.y + particle.dy,
            life: particle.life - 0.04,
          }))
          .filter((particle) => particle.life > 0),
      );
      animationFrame = window.requestAnimationFrame(animate);
    };
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [active]);

  if (!active || (!cursor.visible && particles.length === 0)) return null;

  return (
    <div className="bullet-cursor-layer" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="bullet-smoke-particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.life * 0.7,
            transform: `translate(-50%, -50%) scale(${0.75 + (1 - particle.life) * 0.9})`,
          }}
        />
      ))}
      {cursor.visible ? (
        <span
          className={`bullet-cursor ${pressed ? "bullet-cursor--pressed" : ""}`}
          style={{ left: cursor.x, top: cursor.y }}
        >
          <svg
            className="bullet-cursor__svg"
            width="34"
            height="14"
            viewBox="0 0 34 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bulletFill" x1="0" y1="7" x2="34" y2="7" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F7D089" />
                <stop offset="0.55" stopColor="#DBB56F" />
                <stop offset="1" stopColor="#8A5E3A" />
              </linearGradient>
              <linearGradient id="bulletTip" x1="20" y1="7" x2="34" y2="7" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D6B172" />
                <stop offset="1" stopColor="#9E744C" />
              </linearGradient>
            </defs>
            {/* casing */}
            <rect x="1" y="3" width="21" height="8" rx="4" fill="url(#bulletFill)" />
            {/* tip */}
            <path d="M22 3 L33 7 L22 11 Z" fill="url(#bulletTip)" />
            {/* outline + subtle highlight */}
            <path
              d="M5 3.5C3.067 3.5 1.5 5.067 1.5 7C1.5 8.933 3.067 10.5 5 10.5H22.1L32.1 7L22.1 3.5H5Z"
              stroke="rgba(0,0,0,0.42)"
              strokeWidth="1"
            />
            <path d="M4 5.2H20.2" stroke="rgba(255,255,255,0.22)" strokeLinecap="round" />
          </svg>
        </span>
      ) : null}
    </div>
  );
}
