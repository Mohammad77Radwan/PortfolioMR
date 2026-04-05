"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor Component
 * Remplace la souris par un cercle interactif avec effect mix-blend-mode: difference
 * S'agrandit au survol des éléments interactifs
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 850, damping: 45, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 850, damping: 45, mass: 0.2 });
  const scale = useSpring(1, { stiffness: 500, damping: 32, mass: 0.3 });
  const dotScale = useSpring(1, { stiffness: 700, damping: 34, mass: 0.25 });
  const rafRef = useRef<number | null>(null);
  const latestPointer = useRef({ x: -100, y: -100 });
  const hoverRef = useRef(false);
  const hasMovedRef = useRef(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(isFinePointer && !reduceMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const updateCursor = () => {
      rafRef.current = null;
      x.set(latestPointer.current.x - 12);
      y.set(latestPointer.current.y - 12);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        setVisible(true);
      }

      latestPointer.current = { x: e.clientX, y: e.clientY };

      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(updateCursor);
      }

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, input, textarea, select, [role='button'], .interactive");
      const nextHover = Boolean(interactive);

      if (nextHover !== hoverRef.current) {
        hoverRef.current = nextHover;
        scale.set(nextHover ? 1.6 : 1);
        dotScale.set(nextHover ? 1.15 : 1);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handlePointerDown = () => {
      scale.set(0.88);
      dotScale.set(0.85);
    };

    const handlePointerUp = () => {
      scale.set(hoverRef.current ? 1.6 : 1);
      dotScale.set(hoverRef.current ? 1.15 : 1);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [dotScale, enabled, scale, x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {/* Cercle externe */}
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ x, y, scale, willChange: "transform" }}
      >
        <div
          className="relative w-6 h-6 rounded-full border-2 border-blue-500"
          style={{
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
          }}
        />
      </motion.div>

      {/* Point central */}
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ x: dotX, y: dotY, scale: dotScale, willChange: "transform" }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-blue-500"
          style={{
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
        />
      </motion.div>

      {/* Cacher le curseur par défaut sur desktop */}
      <style>{`
        @media (min-width: 1024px) {
          html,
          body,
          a,
          button {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
