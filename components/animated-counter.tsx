"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    let startTime = 0;
    let animationId = 0;

    const animateFrame = (time: number) => {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / (duration * 1000);

      if (progress < 1) {
        setDisplayValue(from + (to - from) * progress);
        animationId = requestAnimationFrame(animateFrame);
      } else {
        setDisplayValue(to);
      }
    };

    animationId = requestAnimationFrame(animateFrame);
    return () => cancelAnimationFrame(animationId);
  }, [to, from, duration]);

  return (
    <motion.span className="tabular-nums">
      {prefix}
      {Math.round(displayValue)}
      {suffix}
    </motion.span>
  );
}
