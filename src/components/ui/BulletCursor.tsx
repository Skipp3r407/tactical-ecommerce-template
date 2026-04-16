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
          <span className="bullet-cursor__body" />
          <span className="bullet-cursor__tip" />
        </span>
      ) : null}
    </div>
  );
}
