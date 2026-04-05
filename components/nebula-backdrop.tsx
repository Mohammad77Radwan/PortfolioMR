"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function NebulaBackdrop() {
  const stars = useMemo(
    () =>
      Array.from({ length: 56 }, (_, i) => ({
        id: i,
        left: `${(i * 11.7) % 100}%`,
        top: `${(i * 19.3) % 100}%`,
        size: (i % 3) + 1,
        delay: (i % 9) * 0.28,
      })),
    [],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <motion.div
        className="absolute -left-44 top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 28, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8rem] top-12 h-[40rem] w-[40rem] rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -26, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/15 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size * 2}px`,
            height: `${star.size * 2}px`,
            opacity: 0.4,
          }}
          animate={{ opacity: [0.15, 0.9, 0.15], scale: [1, 1.35, 1] }}
          transition={{ duration: 3, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.15),rgba(2,6,23,0.92)_70%)]" />
    </div>
  );
}
