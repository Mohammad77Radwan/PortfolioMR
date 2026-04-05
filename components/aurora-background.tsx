"use client";

import { motion } from "framer-motion";

/**
 * AuroraBackground Component
 * Crée un effet "Aurora Glow" animé avec des orbes qui se déplacent lentement
 * Inspiration : Aurora Borealis (Aurores Boréales)
 * Effet très moderne et impressionnant visuellement
 */
export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orbe 1 - Bleu */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbe 2 - Purple */}
      <motion.div
        className="absolute top-40 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbe 3 - Pink */}
      <motion.div
        className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbe 4 - Cyan (plus subtil) */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -60, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Overlay gradient pour plus de contrôle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 dark:via-slate-950/50 to-slate-50 dark:to-slate-950" />
    </div>
  );
}
