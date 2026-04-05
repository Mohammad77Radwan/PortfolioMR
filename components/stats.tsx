"use client";

import { motion } from "framer-motion";
import { Rocket, Cpu, CalendarClock, Code2 } from "lucide-react";
import { AnimatedCounter } from "./animated-counter";

const stats = [
  {
    label: "Projets Réalisés",
    value: 20,
    suffix: "+",
    icon: Rocket,
  },
  {
    label: "Technologies",
    value: 15,
    suffix: "+",
    icon: Cpu,
  },
  {
    label: "Années d'Expérience",
    value: 3,
    suffix: "+",
    icon: CalendarClock,
  },
  {
    label: "Code Commits",
    value: 500,
    suffix: "+",
    icon: Code2,
  },
];

export function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-lg border border-white/15 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-xl border border-cyan-300/30 bg-cyan-400/10 p-3 text-cyan-200">
                  <stat.icon className="h-7 w-7" />
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
