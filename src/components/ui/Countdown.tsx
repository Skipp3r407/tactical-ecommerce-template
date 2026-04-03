"use client";

import { useEffect, useState } from "react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown({ targetIso }: { targetIso: string }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(targetIso).getTime();
    const tick = () => {
      const now = Date.now();
      setLeft(Math.max(0, target - now));
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetIso]);

  if (left === null) {
    return <span className="text-xs text-zinc-500">Loading timer…</span>;
  }

  if (left === 0) {
    return <span className="text-xs font-semibold text-red-300">Ended</span>;
  }

  const s = Math.floor(left / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  return (
    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium tabular-nums text-zinc-300 ring-1 ring-white/10">
      {d > 0 ? `${d}d ` : ""}
      {pad(h)}:{pad(m)}:{pad(sec)} left
    </span>
  );
}

export { Countdown as CountdownTimer };
